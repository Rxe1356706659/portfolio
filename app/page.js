import { siteConfig } from "@/data/content";
import SpotlightEffect from "./components/SpotlightEffect";
import ParticleBackground from "./components/ParticleBackground";
import Navigation from "./components/Navigation";
import MainContent from "./components/MainContent";

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
          <div className="top-header__bottom">
            <Navigation />
          </div>
        </div>
      </header>

      {/* ===== 主内容区（Client Component with Theater） ===== */}
      <MainContent />
    </>
  );
}
