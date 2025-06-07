"use client"

import { useEffect, useState } from "react"

/**
 * 字体加载器组件
 * 确保字体正确加载，避免乱码问题
 */
export function FontLoader() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  useEffect(() => {
    const loadFonts = async () => {
      try {
        // 检查字体是否可用
        if (typeof window !== "undefined" && "fonts" in document) {
          // 等待字体加载完成
          await document.fonts.ready

          // 检查Inter字体是否加载
          const interFont = new FontFace(
            "Inter",
            "url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap)",
          )

          // 如果字体加载失败，使用系统字体
          document.fonts.add(interFont)

          setFontsLoaded(true)
        } else {
          // 如果不支持Font Loading API，直接设置为已加载
          setFontsLoaded(true)
        }
      } catch (error) {
        console.warn("字体加载失败，使用系统字体:", error)
        setFontsLoaded(true)
      }
    }

    loadFonts()
  }, [])

  // 在字体加载完成前应用系统字体
  useEffect(() => {
    if (typeof window !== "undefined") {
      const style = document.createElement("style")
      style.textContent = `
        body {
          font-family: ${
            fontsLoaded
              ? '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", "SimSun", "宋体", sans-serif'
              : '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", "SimSun", "宋体", sans-serif'
          };
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }
        
        .chinese-text {
          font-family: ${
            fontsLoaded
              ? '"Inter", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", "SimSun", "宋体", sans-serif'
              : '"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", "SimSun", "宋体", sans-serif'
          };
        }
      `

      document.head.appendChild(style)

      return () => {
        if (document.head.contains(style)) {
          document.head.removeChild(style)
        }
      }
    }
  }, [fontsLoaded])

  return null
}
