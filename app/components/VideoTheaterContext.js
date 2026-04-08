"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { projects, videos } from "@/data/content";

const VideoTheaterContext = createContext(null);

// 合并所有视频源：projects(featured) + videos，去重
function buildPlaylist() {
  const all = [];
  const seen = new Set();

  // 先加入 featured projects
  projects
    .filter((p) => p.featured && p.videoUrl)
    .forEach((p) => {
      if (!seen.has(p.videoUrl)) {
        seen.add(p.videoUrl);
        all.push({
          id: p.videoUrl,
          title: p.title,
          description: p.description,
          videoUrl: p.videoUrl,
          tags: p.tags,
          source: "project",
        });
      }
    });

  // 再加入 videos
  videos.forEach((v) => {
    if (v.videoUrl && !seen.has(v.videoUrl)) {
      seen.add(v.videoUrl);
      all.push({
        id: v.id,
        title: v.title,
        description: v.description,
        videoUrl: v.videoUrl,
        tags: v.tags,
        year: v.year,
        source: "video",
      });
    }
  });

  return all;
}

export function VideoTheaterProvider({ children }) {
  const [playlist] = useState(buildPlaylist);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const isOpen = currentIndex >= 0;

  const open = useCallback(
    (videoUrl) => {
      const idx = playlist.findIndex((v) => v.videoUrl === videoUrl);
      setCurrentIndex(idx >= 0 ? idx : 0);
      document.body.style.overflow = "hidden";
    },
    [playlist]
  );

  const close = useCallback(() => {
    setCurrentIndex(-1);
    document.body.style.overflow = "";
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i > 0 ? i - 1 : playlist.length - 1));
  }, [playlist.length]);

  const next = useCallback(() => {
    setCurrentIndex((i) => (i < playlist.length - 1 ? i + 1 : 0));
  }, [playlist.length]);

  const current = isOpen ? playlist[currentIndex] : null;

  return (
    <VideoTheaterContext.Provider
      value={{ isOpen, current, currentIndex, playlist, open, close, prev, next }}
    >
      {children}
    </VideoTheaterContext.Provider>
  );
}

export function useVideoTheater() {
  const ctx = useContext(VideoTheaterContext);
  if (!ctx) throw new Error("useVideoTheater must be inside VideoTheaterProvider");
  return ctx;
}
