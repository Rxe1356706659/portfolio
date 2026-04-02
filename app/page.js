import { siteConfig } from "@/data/content";
import SpotlightEffect from "./components/SpotlightEffect";
import ParticleBackground from "./components/ParticleBackground";
import Navigation from "./components/Navigation";
import ScrollReveal from "./components/ScrollReveal";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import VideosSection from "./components/VideosSection";

export default function Home() {
  return (
    <>
      <SpotlightEffect />
      <ParticleBackground />

      {/* ===== 背景装饰光晕 ===== */}
      <div className="bg-glow bg-glow--teal" />
      <div className="bg-glow bg-glow--purple" />
      <div className="bg-glow bg-glow--blue" />
      <header className="top-header">
        <div className="top-header__inner">
          <div className="top-header__brand">
            <h1 className="top-header__name">
              <a href="/" className="gradient-name">{siteConfig.name}</a>
            </h1>
            <p className="top-header__title">{siteConfig.title}</p>
          </div>
          <div className="top-header__contact">
            <span>{siteConfig.tagline}</span>
            <span className="top-header__contact-divider">|</span>
            <span>邮箱：{siteConfig.email}</span>
          </div>
          <div className="top-header__bottom">
            <Navigation />
          </div>
        </div>
      </header>

      {/* ===== 主内容区 ===== */}
      <main className="main-content">
        <ScrollReveal><AboutSection /></ScrollReveal>
        <ScrollReveal delay={100}><ExperienceSection /></ScrollReveal>
        <ScrollReveal delay={200}><ProjectsSection /></ScrollReveal>
        <ScrollReveal delay={300}><VideosSection /></ScrollReveal>
      </main>
    </>
  );
}
