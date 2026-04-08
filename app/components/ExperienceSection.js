import { experiences } from "@/data/content";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <h2 className="section__label">工作经历</h2>
      <div className="experience__list">
        {experiences.map((exp, i) => (
          <a
            key={i}
            className="experience__item"
            href={exp.companyUrl || "#"}
            target={exp.companyUrl && exp.companyUrl !== "#" ? "_blank" : undefined}
            rel="noopener noreferrer"
          >
            <span className="experience__period">{exp.period}</span>
            <div className="experience__content">
              <h3 className="experience__title">
                {exp.title} · <span className="experience__company">{exp.company}</span>
                <span className="arrow">↗</span>
              </h3>
              {exp.description.split("\n\n").map((para, j) => (
                <p key={j} className="experience__description">{para}</p>
              ))}
              {exp.links && exp.links.length > 0 && (
                <div className="experience__links">
                  {exp.links.map((link, j) => (
                    <span key={j} className="experience__ext-link">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                      </svg>
                      {link.label}
                    </span>
                  ))}
                </div>
              )}
              <div className="tags">
                {exp.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

    </section>
  );
}
