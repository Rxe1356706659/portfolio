"use client";

import { VideoTheaterProvider } from "./VideoTheaterContext";
import VideoTheater from "./VideoTheater";
import ScrollReveal from "./ScrollReveal";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";
import VideosSection from "./VideosSection";

export default function MainContent() {
  return (
    <VideoTheaterProvider>
      <main className="main-content">
        <ScrollReveal><AboutSection /></ScrollReveal>
        <ScrollReveal delay={100}><ExperienceSection /></ScrollReveal>
        <ScrollReveal delay={200}><ProjectsSection /></ScrollReveal>
        <ScrollReveal delay={300}><VideosSection /></ScrollReveal>
      </main>
      <VideoTheater />
    </VideoTheaterProvider>
  );
}
