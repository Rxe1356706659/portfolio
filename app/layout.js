import "./globals.css";

export const metadata = {
  title: "Your Name — AI Creative Director",
  description:
    "AI Creative Director specializing in AI-powered video production, digital brand experiences, and full-stack web development.",
  openGraph: {
    title: "Your Name — AI Creative Director",
    description:
      "AI Creative Director specializing in AI-powered video production and digital brand experiences.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
