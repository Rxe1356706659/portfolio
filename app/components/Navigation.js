"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/data/content";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id);
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="nav" aria-label="In-page navigation">
      <ul className="nav__list">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`nav__link ${activeSection === item.id ? "active" : ""}`}
              onClick={(e) => handleClick(e, item.id)}
            >
              <span className="nav__indicator" />
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
