"use client";
import { useState } from "react";
import "../styles/works.css";

const WORKS = [
  {
    id: 1,
    category: "AI 工具",
    title: "AI 创图平台",
    desc: "集成多家 AI 引擎（Gemini、豆包 Seedream、通义万相）的一站式图片生成与编辑平台。",
    tags: ["Next.js", "Supabase", "Gemini API", "Vercel"],
    image: null,
    link: "#",
  },
  {
    id: 2,
    category: "AI 创作",
    title: "AI 视频广告制作",
    desc: "使用 Seedance 2.0 打造的高端 TVC 级 AI 视频广告，覆盖亚洲与欧美市场。",
    tags: ["Seedance", "AI Video", "Prompt Engineering"],
    image: null,
    link: "#",
  },
  {
    id: 3,
    category: "自动化",
    title: "Antigravity 工作流系统",
    desc: "个人知识管理与技能发展的自动化工作流系统，用 AI 驱动持续成长。",
    tags: ["Automation", "AI Agent", "Knowledge Base"],
    image: null,
    link: "#",
  },
  {
    id: 4,
    category: "全栈开发",
    title: "内容管理平台",
    desc: "支持 SEO、多媒体管理、用户权限的全栈内容管理系统。",
    tags: ["React", "Node.js", "PostgreSQL"],
    image: null,
    link: "#",
  },
];

const CATEGORIES = ["全部", ...new Set(WORKS.map((w) => w.category))];

// SVG placeholder for works without images
function PlaceholderImage({ title }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg, hsl(222,20%,12%), hsl(222,25%,18%))",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--color-text-muted)",
        fontSize: "14px",
        fontFamily: "var(--font-mono)",
      }}
    >
      {title}
    </div>
  );
}

export default function Works() {
  const [filter, setFilter] = useState("全部");

  const filtered =
    filter === "全部" ? WORKS : WORKS.filter((w) => w.category === filter);

  return (
    <section className="section" id="works">
      <div className="container">
        <span className="section-label">作品集</span>
        <h2 className="section-title">精选项目</h2>

        <div className="works-filter">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="works-grid">
          {filtered.map((work) => (
            <a
              key={work.id}
              href={work.link}
              className="work-card glass-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="work-card-image">
                {work.image ? (
                  <img src={work.image} alt={work.title} loading="lazy" />
                ) : (
                  <PlaceholderImage title={work.title} />
                )}
                <div className="work-card-overlay">
                  <span>查看项目 →</span>
                </div>
              </div>
              <div className="work-card-body">
                <span className="work-card-category">{work.category}</span>
                <h3>{work.title}</h3>
                <p>{work.desc}</p>
                <div className="work-card-tags">
                  {work.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
