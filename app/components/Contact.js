import "../styles/contact.css";

export default function Contact() {
  return (
    <>
      <section className="section contact" id="contact">
        <div className="container contact-inner">
          <span className="section-label">联系方式</span>
          <h2 className="contact-title">一起创造点什么？</h2>
          <p className="contact-desc">
            无论你有项目合作的想法、技术咨询的需求，
            还是只想聊聊 AI 和技术趋势，都欢迎找我。
          </p>

          <a href="mailto:your@email.com" className="contact-email">
            📩 发送邮件
          </a>

          <div className="contact-links">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              Twitter / X
            </a>
            <a
              href="#"
              className="contact-link"
            >
              微信公众号
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>
            Designed &amp; Built by{" "}
            <a href="#hero">Rxe-晓</a> · {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </>
  );
}
