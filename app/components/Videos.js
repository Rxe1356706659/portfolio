"use client";
import { useState } from "react";
import "../styles/videos.css";

const VIDEOS = [
  {
    id: 1,
    title: "AI 燃脂裤 — 蜂巢热激活技术 TVC",
    meta: "Seedance 2.0 · AI 视频",
    duration: "0:30",
    thumbnail: null,
    src: null,
  },
  {
    id: 2,
    title: "微粒渗透 & 淋巴引流 — 科技可视化",
    meta: "AI 创作 · 产品广告",
    duration: "0:25",
    thumbnail: null,
    src: null,
  },
  {
    id: 3,
    title: "3D 提臀塑形 — 品牌故事",
    meta: "Seedance 2.0 · 品牌片",
    duration: "0:35",
    thumbnail: null,
    src: null,
  },
];

function VideoPlaceholder({ title }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg, hsl(260,20%,12%), hsl(222,25%,15%))",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--color-text-muted)",
        fontSize: "13px",
        fontFamily: "var(--font-mono)",
        textAlign: "center",
        padding: "16px",
      }}
    >
      🎬 {title}
    </div>
  );
}

export default function Videos() {
  const [modal, setModal] = useState(null);

  return (
    <section className="section" id="videos">
      <div className="container">
        <span className="section-label">AI 视频</span>
        <h2 className="section-title">视频作品</h2>

        <div className="videos-grid">
          {VIDEOS.map((video) => (
            <div
              key={video.id}
              className="video-card glass-card"
              onClick={() => video.src && setModal(video)}
            >
              <div className="video-thumb">
                {video.thumbnail ? (
                  <img src={video.thumbnail} alt={video.title} loading="lazy" />
                ) : (
                  <VideoPlaceholder title={video.title} />
                )}
                <div className="video-play-btn">
                  <div className="play-icon" />
                </div>
                <span className="video-duration">{video.duration}</span>
              </div>
              <div className="video-card-body">
                <h3>{video.title}</h3>
                <span className="video-card-meta">{video.meta}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {modal && (
        <div
          className="video-modal-overlay"
          onClick={() => setModal(null)}
        >
          <div className="video-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="video-modal-close"
              onClick={() => setModal(null)}
            >
              ✕
            </button>
            <video
              src={modal.src}
              controls
              autoPlay
              style={{ width: "100%", borderRadius: "12px" }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
