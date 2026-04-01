import "../styles/about.css";
import "../styles/contact.css";

const SKILLS = [
  {
    category: "AI & ML",
    items: ["AI Agent", "Prompt Engineering", "Gemini API", "ComfyUI", "Seedream", "通义万相"],
  },
  {
    category: "前端 & 全栈",
    items: ["Next.js", "React", "JavaScript", "CSS", "Vercel", "Supabase"],
  },
  {
    category: "工具 & 工作流",
    items: ["Git", "Sentry", "Figma", "自动化工作流", "项目管理"],
  },
];

const EXPERIENCE = [
  {
    date: "2024 — 至今",
    title: "AI 技术专家",
    company: "聚焦 AI Agent & 创意应用",
    desc: "主导 AI Agent 系统设计与开发，构建基于大模型的自动化工具与创意工作流。",
  },
  {
    date: "2022 — 2024",
    title: "全栈开发工程师",
    company: "多个独立项目",
    desc: "从零搭建多个 Web 应用产品，涵盖 SaaS 工具、AI 创图平台和内容管理系统。",
  },
  {
    date: "2020 — 2022",
    title: "前端开发工程师",
    company: "互联网公司",
    desc: "负责核心业务前端架构，性能优化与组件库建设，服务百万级用户。",
  },
];

const STATS = [
  { number: "5+", label: "年技术经验" },
  { number: "10+", label: "项目交付" },
  { number: "3+", label: "AI 产品" },
];

export default function About() {
  return (
    <>
      {/* About Section */}
      <section className="section" id="about">
        <div className="container">
          <span className="section-label">关于我</span>
          <h2 className="section-title">构建 AI 驱动的数字产品</h2>

          <div className="about-grid">
            <div className="about-text">
              <p>
                我是一名 <strong>AI 技术专家</strong>和<strong>全栈开发者</strong>，
                热衷于将前沿 AI 技术与产品工程相结合。从
                <span className="about-highlight"> AI Agent 系统</span>到
                <span className="about-highlight"> 创意内容生成</span>，
                我专注于创造有真实价值的技术产品。
              </p>
              <p>
                我相信技术的力量在于解决真实问题。无论是构建高性能 Web 应用，
                还是设计复杂的 AI 工作流程，我都追求简洁、高效、用户导向的设计哲学。
              </p>
              <p>
                目前正在探索 <span className="about-highlight">一人公司</span> 模式，
                用 AI 赋能个体，实现从技术专家到独立商业体的转型。
              </p>
            </div>

            <div className="about-skills">
              {SKILLS.map((group) => (
                <div key={group.category} className="skill-category glass-card">
                  <h4>{group.category}</h4>
                  <div className="skill-tags">
                    {group.items.map((skill) => (
                      <span key={skill} className="tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-stats">
            {STATS.map((stat) => (
              <div key={stat.label} className="stat-item glass-card">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume / Timeline Section */}
      <section className="section resume-section" id="resume">
        <div className="container">
          <span className="section-label">职业经历</span>
          <h2 className="section-title">成长轨迹</h2>

          <div className="timeline">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="timeline-item glass-card">
                <span className="timeline-date">{exp.date}</span>
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
