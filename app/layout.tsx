import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import { LoadingProvider } from "@/contexts/loading-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DeepHue - 古贵炫的个人宇宙",
  description: "内向星云中的理性代码与诗意光谱",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <LoadingProvider>
          <Navigation />
          {children}
        </LoadingProvider>
      </body>
    </html>
  )
}
