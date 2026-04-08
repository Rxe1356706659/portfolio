"use client";

import { useRef } from "react";
import { projects } from "@/data/content";
import { useVideoTheater } from "./VideoTheaterContext";

export default function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <h2 className="section__label">项目作品</h2>
      <div className="projects__list">
        {projects
          .filter((p) => p.featured)
          .map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const videoRef = useRef(null);
  const { open } = useVideoTheater();

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleClick = () => {
    if (project.videoUrl) {
      open(project.videoUrl);
    }
  };

  return (
    <div
      className="project__card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* Hover 光效 */}
      <div className="project__card-shine" />

      {/* 左侧 — 视频预览 */}
      <div className="project__media">
        <div className="project__media-inner">
          {project.videoUrl ? (
            <video
              ref={videoRef}
              src={project.videoUrl}
              muted
              loop
              playsInline
              preload="metadata"
              poster={project.image || undefined}
            />
          ) : project.image ? (
            <img src={project.image} alt={project.title} loading="lazy" />
          ) : (
            <span className="project__media-placeholder">🖼</span>
          )}
          {/* 播放提示 */}
          {project.videoUrl && (
            <div className="project__play-hint">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          )}
        </div>
      </div>

      {/* 右侧 — 项目详情 */}
      <div className="project__detail">
        <div className="project__detail-header">
          <span className="project__index">0{index + 1}</span>
          <h3 className="project__title">
            {project.title}
            <span className="arrow">↗</span>
          </h3>
        </div>
        <p className="project__description">{project.description}</p>
        <div className="project__footer">
          <div className="tags">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
