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

      {/* ===== 顶部固定栏 ===== */}
      <header className="top-header">
        <div className="top-header__inner">
          <div className="top-header__brand">
            <h1 className="top-header__name">
              <a href="/">{siteConfig.name}</a>
            </h1>
            <p className="top-header__title">{siteConfig.title}</p>
          </div>
          <p className="top-header__tagline">{siteConfig.tagline}</p>
          <div className="top-header__bottom">
            <Navigation />
            <SocialLinks />
          </div>
        </div>
      </header>

      {/* ===== 主内容区 ===== */}
      <main className="main-content">
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
          </p>
        </footer>
      </main>
    </>
  );
}
