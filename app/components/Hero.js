import "../styles/hero.css";

export default function Hero() {
  // Decorative grid dots
  const dots = Array.from({ length: 25 });

  return (
    <section className="hero" id="hero">
      <div className="container hero-content">
        <p className="hero-greeting">你好，我是</p>
        <h1 className="hero-name">Rxe-晓</h1>
        <h2 className="hero-tagline">AI 技术专家 & 创意开发者</h2>
        <p className="hero-description">
          专注于 AI Agent 开发、全栈工程与创意内容创作。
          我用技术创造产品，用 AI 赋能创意，致力于把想法变成现实。
        </p>

        <div className="hero-actions">
          <a href="#works" className="hero-btn hero-btn-primary">
            查看作品 →
          </a>
          <a href="#contact" className="hero-btn hero-btn-ghost">
            联系我
          </a>
        </div>

        <div className="hero-status">
          <span className="status-dot" />
          <span>Available for freelance &amp; collaboration</span>
        </div>
      </div>

      <div className="hero-grid-dots" aria-hidden="true">
        {dots.map((_, i) => (
          <span key={i} />
        ))}
      </div>

      <div className="scroll-indicator" aria-hidden="true">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
