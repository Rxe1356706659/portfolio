"use client";

import { videos } from "@/data/content";
import { useState } from "react";
import { useVideoTheater } from "./VideoTheaterContext";
import VideoThumbnail from "./VideoThumbnail";

function VideoPoster({ video }) {
  const [imageFailed, setImageFailed] = useState(false);

  if (video.thumbnail && !imageFailed) {
    return (
      <img
        src={video.thumbnail}
        alt={video.title}
        loading="lazy"
        onError={() => setImageFailed(true)}
      />
    );
  }

  if (video.videoUrl) {
    return (
      <VideoThumbnail
        src={video.videoUrl}
        alt={video.title}
        useLastFrame={video.useLastFrame}
      />
    );
  }

  return <span className="video__thumbnail-placeholder">🎬</span>;
}

export default function VideosSection() {
  const { open } = useVideoTheater();

  return (
    <section id="videos" className="section">
      <h2 className="section__label">视频作品</h2>
      <div className="videos__grid">
        {videos.map((video) => (
          <div
            key={video.id}
            className="video__card"
            onClick={() => video.videoUrl && open(video.videoUrl)}
          >
            <div className="video__thumbnail">
              <VideoPoster video={video} />
              <div className="video__play-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className="video__content">
              <span className="video__year">{video.year}</span>
              <h3 className="video__title">{video.title}</h3>
              <p className="video__description">{video.description}</p>
              <div className="tags">
                {video.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
