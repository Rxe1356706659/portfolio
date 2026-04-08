"use client";

import { useRef, useState, useEffect } from "react";

export default function VideoThumbnail({ src, alt, useLastFrame = false }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [posterUrl, setPosterUrl] = useState(null);

  useEffect(() => {
    if (!useLastFrame) return;

    const video = document.createElement("video");
    video.src = src;
    video.preload = "auto";
    video.muted = true;
    video.playsInline = true;

    video.addEventListener("loadedmetadata", () => {
      // 跳到最后一帧（倒退0.1秒确保有画面）
      video.currentTime = Math.max(0, video.duration - 0.1);
    });

    video.addEventListener("seeked", () => {
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      setPosterUrl(canvas.toDataURL("image/jpeg", 0.9));
      video.remove();
    });

    video.load();
  }, [src, useLastFrame]);

  // 使用最后一帧截图
  if (useLastFrame && posterUrl) {
    return <img src={posterUrl} alt={alt} loading="lazy" />;
  }

  // 默认：显示视频第一帧
  return (
    <video
      ref={videoRef}
      src={src}
      preload="metadata"
      muted
      playsInline
      aria-label={alt}
    />
  );
}
