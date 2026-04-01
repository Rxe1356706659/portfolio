"use client";

import { useEffect, useCallback } from "react";

export default function VideoModal({ video, onClose }) {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <button className="modal-close" onClick={onClose} aria-label="Close">
        ✕
      </button>
      <div className="modal-content">
        <div className="modal-video">
          {video.videoUrl ? (
            <video controls autoPlay>
              <source src={video.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <span>视频即将上线 — 请通过管理后台上传</span>
          )}
        </div>
        <div className="modal-info">
          <h3 className="modal-title">{video.title}</h3>
          <p className="modal-description">{video.description}</p>
          <div className="tags">
            {video.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
