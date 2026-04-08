import "./globals.css";

export const metadata = {
  title: "钟志霞 — AI视频创作",
  description:
    "专注于 AI 驱动的视频制作、短视频运营与视觉内容生成。",
  openGraph: {
    title: "钟志霞 — AI视频创作",
    description:
      "专注于 AI 驱动的视频制作、短视频运营与视觉内容生成。",
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
