"use client";

import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;
    let mouse = { x: -1000, y: -1000 };

    // 粒子配置
    const PARTICLE_COUNT = 120;
    const particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        // 大小分档：少量大粒子 + 大量小粒子
        const sizeRoll = Math.random();
        if (sizeRoll < 0.05) {
          this.size = Math.random() * 3 + 3.5; // 极少数大粒子 (3.5~6.5)
        } else if (sizeRoll < 0.2) {
          this.size = Math.random() * 2 + 1.8; // 中等粒子 (1.8~3.8)
        } else {
          this.size = Math.random() * 1.2 + 0.3; // 大量小粒子 (0.3~1.5)
        }
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.baseOpacity = this.opacity;
        // 颜色：青/白/淡蓝随机
        const colors = [
          [94, 234, 212],   // teal
          [200, 220, 240],  // white-blue
          [56, 189, 248],   // sky blue
          [167, 139, 250],  // purple
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.pulseSpeed = Math.random() * 0.02 + 0.005;
        this.pulsePhase = Math.random() * Math.PI * 2;
      }

      update(time) {
        this.x += this.speedX;
        this.y += this.speedY;

        // 边界循环
        if (this.x < -10) this.x = canvas.width + 10;
        if (this.x > canvas.width + 10) this.x = -10;
        if (this.y < -10) this.y = canvas.height + 10;
        if (this.y > canvas.height + 10) this.y = -10;

        // 呼吸脉动
        const pulse = Math.sin(time * this.pulseSpeed + this.pulsePhase);
        this.opacity = this.baseOpacity + pulse * 0.15;

        // 鼠标靠近时增亮
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          const boost = 1 - dist / 200;
          this.opacity += boost * 0.4;
          this.currentSize = this.size + boost * 2;
        } else {
          this.currentSize = this.size;
        }
      }

      draw(ctx) {
        const [r, g, b] = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.currentSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${Math.min(this.opacity, 0.8)})`;
        ctx.fill();

        // 大粒子加光晕
        if (this.size > 1.2) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.currentSize * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.opacity * 0.12})`;
          ctx.fill();
        }
      }
    }

    const init = () => {
      resize();
      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle());
      }
    };

    const animate = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.update(time);
        p.draw(ctx);
      }

      // 近距离粒子间连线
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const lineOpacity = (1 - dist / 120) * 0.08;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(94, 234, 212, ${lineOpacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleResize = () => {
      resize();
    };

    init();
    animationId = requestAnimationFrame(animate);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="particle-canvas"
      aria-hidden="true"
    />
  );
}
