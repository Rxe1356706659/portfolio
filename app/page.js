import { siteConfig } from "@/data/content";
import SpotlightEffect from "./components/SpotlightEffect";
import Navigation from "./components/Navigation";
import SocialLinks from "./components/SocialLinks";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import VideosSection from "./components/VideosSection";

export default function Home() {
  return (
    <>
      <SpotlightEffect />
      <div className="main-container">
        {/* ===== 左侧面板 (固定) ===== */}
        <header className="left-panel">
          <div className="left-panel__header">
            <h1 className="left-panel__name">
              <a href="/">{siteConfig.name}</a>
            </h1>
            <h2 className="left-panel__title">{siteConfig.title}</h2>
            <p className="left-panel__tagline">{siteConfig.tagline}</p>
            <Navigation />
          </div>
          <SocialLinks />
        </header>

        {/* ===== 右侧面板 (可滚动) ===== */}
        <main className="right-panel">
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <VideosSection />

          {/* 页脚 */}
          <footer className="footer">
            <p>
              使用 <a href="https://figma.com" target="_blank" rel="noopener noreferrer">Figma</a> 设计，
              在 <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">VS Code</a> 中编码。
              基于 <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</a> 构建，
              部署于 <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">Vercel</a>。
              字体使用 <a href="https://rsms.me/inter/" target="_blank" rel="noopener noreferrer">Inter</a> 与{" "}
              <a href="https://fonts.google.com/noto/specimen/Noto+Sans+SC" target="_blank" rel="noopener noreferrer">Noto Sans SC</a>。
            </p>
          </footer>
        </main>
      </div>
    </>
  );
}
