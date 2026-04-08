import { aboutContent } from "@/data/content";

/**
 * 将文本中的 **粗体** 标记解析为 <strong> 元素
 */
function renderBoldText(text) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="about__highlight">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <h2 className="section__label">关于我</h2>
      <div className="about__text">
        {aboutContent.map((paragraph, i) => (
          <p key={i} className="about__paragraph">
            {renderBoldText(paragraph)}
          </p>
        ))}
      </div>
    </section>
  );
}
