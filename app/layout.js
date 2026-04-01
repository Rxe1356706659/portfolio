import "./globals.css";

export const metadata = {
  title: "Your Name — AI 创意总监",
  description:
    "AI 创意总监，专注于 AI 驱动的视频制作、数字品牌体验与全栈 Web 开发。",
  openGraph: {
    title: "Your Name — AI 创意总监",
    description:
      "AI 创意总监，专注于 AI 驱动的视频制作与数字品牌体验设计。",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+SC:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
