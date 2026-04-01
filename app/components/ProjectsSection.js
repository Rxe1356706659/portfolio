import { projects } from "@/data/content";

export default function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <h2 className="section__label">项目作品</h2>
      <div className="projects__list">
        {projects
          .filter((p) => p.featured)
          .map((project, i) => (
            <a
              key={i}
              className="project__card"
              href={project.url || "#"}
              target={project.url && project.url !== "#" ? "_blank" : undefined}
              rel="noopener noreferrer"
            >
              <div className="project__thumbnail">
                {project.image ? (
                  <img src={project.image} alt={project.title} loading="lazy" />
                ) : (
                  <span className="project__thumbnail-placeholder">🖼</span>
                )}
              </div>
              <div className="project__content">
                <h3 className="project__title">
                  {project.title}
                  <span className="arrow">↗</span>
                </h3>
                <p className="project__description">{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => (
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
