import { aboutContent } from "@/data/content";

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <h2 className="section__label">关于我</h2>
      <div className="about__text">
        {aboutContent.map((paragraph, i) => (
          <p key={i} className="about__paragraph">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
