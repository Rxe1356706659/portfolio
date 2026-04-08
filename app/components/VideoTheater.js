"use client";

import { useEffect, useCallback, useRef } from "react";
import { useVideoTheater } from "./VideoTheaterContext";

export default function VideoTheater() {
  const { isOpen, current, currentIndex, playlist, close, prev, next } =
    useVideoTheater();
  const videoRef = useRef(null);
  const overlayRef = useRef(null);

  // 键盘控制
  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    },
    [isOpen, close, prev, next]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // 切换视频时重新播放
  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [isOpen, currentIndex]);

  // 点击 overlay 外部关闭
  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      close();
    }
  };

  if (!isOpen || !current) return null;

  return (
    <div
      className="theater-overlay"
      ref={overlayRef}
      onClick={handleOverlayClick}
    >
      {/* 关闭按钮 */}
      <button className="theater-close" onClick={close} aria-label="关闭">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* 左导航箭头 */}
      <button className="theater-nav theater-nav--prev" onClick={prev} aria-label="上一个">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* 主内容区 — 不可穿透点击 */}
      <div className="theater-content" onClick={(e) => e.stopPropagation()}>
        {/* 视频播放器 */}
        <div className="theater-player">
          <video
            ref={videoRef}
            key={current.videoUrl}
            controls
            autoPlay
            playsInline
          >
            <source src={current.videoUrl} type="video/mp4" />
          </video>
        </div>

        {/* 项目信息 */}
        <div className="theater-info">
          <div className="theater-info__header">
            <h3 className="theater-info__title">{current.title}</h3>
            <span className="theater-info__counter">
              {currentIndex + 1} / {playlist.length}
            </span>
          </div>
          <p className="theater-info__description">{current.description}</p>
          <div className="tags">
            {current.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 右导航箭头 */}
      <button className="theater-nav theater-nav--next" onClick={next} aria-label="下一个">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}
