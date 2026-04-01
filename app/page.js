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
        {/* ===== Left Panel (Sticky) ===== */}
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

        {/* ===== Right Panel (Scrollable) ===== */}
        <main className="right-panel">
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <VideosSection />

          {/* Footer */}
          <footer className="footer">
            <p>
              Loosely designed in <a href="https://figma.com" target="_blank" rel="noopener noreferrer">Figma</a> and
              coded in <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Visual Studio Code</a>.
              Built with <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</a> and
              deployed with <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">Vercel</a>.
              All text is set in the <a href="https://rsms.me/inter/" target="_blank" rel="noopener noreferrer">Inter</a> typeface.
            </p>
          </footer>
        </main>
      </div>
    </>
  );
}
