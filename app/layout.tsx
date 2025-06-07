import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import { FooterEnhanced } from "@/components/footer-enhanced"
import { AppProvider } from "@/contexts/app-context"
import { LoadingScreen } from "@/components/loading-screen"
import { ErrorBoundary } from "@/components/error-boundary"
import { FontManager } from "@/components/font-manager"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    "PingFang SC",
    "Hiragino Sans GB",
    "Microsoft YaHei",
    "微软雅黑",
    "SimSun",
    "宋体",
    "sans-serif",
  ],
})

export const metadata: Metadata = {
  title: "DeepHue - 古贵炫的个人宇宙",
  description: "内向星云中的理性代码与诗意光谱 - 古贵炫的个人作品集与技术博客",
  charset: "utf-8",
  viewport: "width=device-width, initial-scale=1.0, viewport-fit=cover",
  authors: [{ name: "古贵炫", url: "mailto:3306574730@qq.com" }],
  keywords: [
    "古贵炫",
    "程序员",
    "INFP",
    "个人网站",
    "作品集",
    "广州城建职业学院",
    "未来技术应用学院",
    "前端开发",
    "React",
    "Next.js",
    "TypeScript",
  ],
  creator: "古贵炫",
  publisher: "古贵炫",
  robots: "index, follow",
  openGraph: {
    title: "DeepHue - 古贵炫的个人宇宙",
    description: "内向星云中的理性代码与诗意光谱",
    type: "website",
    locale: "zh_CN",
    siteName: "DeepHue",
  },
  twitter: {
    card: "summary_large_image",
    title: "DeepHue - 古贵炫的个人宇宙",
    description: "内向星云中的理性代码与诗意光谱",
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className={inter.variable}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#1e293b" />
        <meta name="color-scheme" content="dark" />

        {/* DNS预解析 */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />

        {/* 预连接 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* 备用字体预加载 */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          />
        </noscript>
      </head>
      <body className={`${inter.className} text-rendering-optimized chinese-text antialiased`}>
        <ErrorBoundary>
          <FontManager>
            <AppProvider>
              <div className="relative min-h-screen flex flex-col">
                <Navigation />
                <LoadingScreen />
                <main className="flex-grow">{children}</main>
                <FooterEnhanced />
              </div>

              {/* Background music */}
              <audio autoPlay loop className="hidden">
                <source src="/music/shining-background.mp3" type="audio/mpeg" />
              </audio>
            </AppProvider>
          </FontManager>
        </ErrorBoundary>
      </body>
    </html>
  )
}
