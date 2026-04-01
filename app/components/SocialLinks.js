import { socialLinks } from "@/data/content";

export default function SocialLinks() {
  return (
    <div className="social-links" aria-label="Social media links">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          title={link.name}
          dangerouslySetInnerHTML={{ __html: link.icon }}
        />
      ))}
    </div>
  );
}
