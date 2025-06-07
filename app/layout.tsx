import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {/* 背景音乐 */}
        <audio autoPlay loop className="hidden">
          <source src="/music/shining-background.mp3" type="audio/mpeg" />
        </audio>
        {children}
      </body>
    </html>
  )
}
