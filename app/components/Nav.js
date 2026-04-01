"use client";
import { useState, useEffect } from "react";
import "../styles/nav.css";

const NAV_ITEMS = [
  { label: "关于", href: "#about" },
  { label: "简历", href: "#resume" },
  { label: "作品", href: "#works" },
  { label: "视频", href: "#videos" },
  { label: "联系", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            <span className="nav-logo-dot" />
            Rxe-晓
          </a>

          <ul className="nav-links">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href="mailto:your@email.com" className="nav-cta">
                Say Hello
              </a>
            </li>
          </ul>

          <button
            className="nav-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`nav-mobile-menu ${mobileOpen ? "open" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}
