"use client"

import type React from "react"

import { useEffect, useState, useCallback } from "react"

interface FontManagerProps {
  children?: React.ReactNode
}

/**
 * 字体管理器组件
 * 处理字体加载、错误恢复和乱码问题
 */
export function FontManager({ children }: FontManagerProps) {
  const [fontStatus, setFontStatus] = useState<{
    loaded: boolean
    error: boolean
    fallback: boolean
  }>({
    loaded: false,
    error: false,
    fallback: false,
  })

  // 字体配置
  const fontConfig = {
    primary: {
      name: "Inter",
      urls: [
        "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
        "https://fonts.gstatic.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
        "https://cdn.jsdelivr.net/npm/@fontsource/inter@4.5.15/index.css",
      ],
      fallback: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        '"Fira Sans"',
        '"Droid Sans"',
        '"Helvetica Neue"',
        '"PingFang SC"',
        '"Hiragino Sans GB"',
        '"Microsoft YaHei"',
        '"微软雅黑"',
        "SimSun",
        '"宋体"',
        "sans-serif",
      ],
    },
  }

  // 检查字体是否可用
  const checkFontAvailability = useCallback((fontFamily: string): Promise<boolean> => {
    return new Promise((resolve) => {
      if (typeof window === "undefined") {
        resolve(false)
        return
      }

      try {
        // 创建测试元素
        const testElement = document.createElement("div")
        testElement.style.fontFamily = fontFamily
        testElement.style.fontSize = "72px"
        testElement.style.position = "absolute"
        testElement.style.left = "-9999px"
        testElement.style.top = "-9999px"
        testElement.style.visibility = "hidden"
        testElement.textContent = "mmmmmmmmmmlli"

        document.body.appendChild(testElement)

        // 测量默认字体宽度
        testElement.style.fontFamily = "monospace"
        const defaultWidth = testElement.offsetWidth

        // 测量目标字体宽度
        testElement.style.fontFamily = `${fontFamily}, monospace`
        const targetWidth = testElement.offsetWidth

        // 清理测试元素
        document.body.removeChild(testElement)

        // 如果宽度不同，说明字体已加载
        resolve(defaultWidth !== targetWidth)
      } catch (error) {
        console.warn("字体检测失败:", error)
        resolve(false)
      }
    })
  }, [])

  // 加载字体CSS
  const loadFontCSS = useCallback(async (urls: string[]): Promise<boolean> => {
    for (const url of urls) {
      try {
        // 检查是否已经加载过
        const existingLink = document.querySelector(`link[href="${url}"]`)
        if (existingLink) {
          console.log("字体CSS已存在:", url)
          return true
        }

        // 创建link元素
        const link = document.createElement("link")
        link.rel = "stylesheet"
        link.href = url
        link.crossOrigin = "anonymous"

        // 等待加载完成
        const loaded = await new Promise<boolean>((resolve) => {
          const timeout = setTimeout(() => {
            console.warn("字体加载超时:", url)
            resolve(false)
          }, 5000)

          link.onload = () => {
            clearTimeout(timeout)
            console.log("字体CSS加载成功:", url)
            resolve(true)
          }

          link.onerror = () => {
            clearTimeout(timeout)
            console.warn("字体CSS加载失败:", url)
            resolve(false)
          }

          document.head.appendChild(link)
        })

        if (loaded) {
          return true
        } else {
          // 移除失败的link
          if (document.head.contains(link)) {
            document.head.removeChild(link)
          }
        }
      } catch (error) {
        console.warn("加载字体CSS时出错:", url, error)
      }
    }

    return false
  }, [])

  // 应用字体样式
  const applyFontStyles = useCallback(
    (useFallback = false) => {
      if (typeof window === "undefined") return

      const fontFamily = useFallback
        ? fontConfig.primary.fallback.join(", ")
        : `"${fontConfig.primary.name}", ${fontConfig.primary.fallback.join(", ")}`

      // 创建或更新样式
      let styleElement = document.getElementById("font-manager-styles") as HTMLStyleElement
      if (!styleElement) {
        styleElement = document.createElement("style")
        styleElement.id = "font-manager-styles"
        document.head.appendChild(styleElement)
      }

      styleElement.textContent = `
        :root {
          --font-primary: ${fontFamily};
        }
        
        body {
          font-family: var(--font-primary) !important;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
          font-feature-settings: "cv02", "cv03", "cv04", "cv11";
          font-variant-numeric: oldstyle-nums;
        }
        
        .chinese-text {
          font-family: ${
            useFallback
              ? '"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", "SimSun", "宋体", sans-serif'
              : `"${fontConfig.primary.name}", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", "SimSun", "宋体", sans-serif`
          } !important;
        }
        
        /* 确保所有文本元素使用正确字体 */
        h1, h2, h3, h4, h5, h6, p, span, div, a, button, input, textarea, select {
          font-family: inherit;
        }
        
        /* 防止字体闪烁 */
        * {
          font-display: swap;
        }
      `

      console.log(`字体样式已应用 (${useFallback ? "备用字体" : "主字体"}):`, fontFamily)
    },
    [fontConfig.primary.fallback, fontConfig.primary.name],
  )

  // 主字体加载流程
  const loadPrimaryFont = useCallback(async () => {
    try {
      console.log("开始加载主字体...")

      // 1. 先应用备用字体，避免乱码
      applyFontStyles(true)
      setFontStatus((prev) => ({ ...prev, fallback: true }))

      // 2. 尝试加载字体CSS
      const cssLoaded = await loadFontCSS(fontConfig.primary.urls)
      if (!cssLoaded) {
        throw new Error("所有字体CSS链接都加载失败")
      }

      // 3. 等待字体实际可用
      let fontAvailable = false
      let attempts = 0
      const maxAttempts = 20

      while (!fontAvailable && attempts < maxAttempts) {
        await new Promise((resolve) => setTimeout(resolve, 100))
        fontAvailable = await checkFontAvailability(fontConfig.primary.name)
        attempts++
      }

      if (fontAvailable) {
        // 4. 应用主字体
        applyFontStyles(false)
        setFontStatus({
          loaded: true,
          error: false,
          fallback: false,
        })
        console.log("主字体加载成功")
      } else {
        throw new Error("字体加载超时")
      }
    } catch (error) {
      console.warn("主字体加载失败，使用备用字体:", error)
      applyFontStyles(true)
      setFontStatus({
        loaded: false,
        error: true,
        fallback: true,
      })
    }
  }, [applyFontStyles, checkFontAvailability, fontConfig.primary.name, fontConfig.primary.urls, loadFontCSS])

  // 初始化字体加载
  useEffect(() => {
    if (typeof window === "undefined") return

    // 检查是否已经加载过
    if (fontStatus.loaded || fontStatus.error) return

    loadPrimaryFont()
  }, [fontStatus.error, fontStatus.loaded, loadPrimaryFont])

  // 网络状态监听
  useEffect(() => {
    if (typeof window === "undefined") return

    const handleOnline = () => {
      console.log("网络连接恢复，重新尝试加载字体")
      if (fontStatus.error || fontStatus.fallback) {
        setFontStatus({
          loaded: false,
          error: false,
          fallback: false,
        })
      }
    }

    const handleOffline = () => {
      console.log("网络连接断开，使用备用字体")
      applyFontStyles(true)
    }

    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [applyFontStyles, fontStatus.error, fontStatus.fallback])

  // 字体状态指示器（仅在开发环境显示）
  const FontStatusIndicator = () => {
    if (process.env.NODE_ENV !== "development") return null

    return (
      <div className="fixed bottom-4 left-4 z-50 bg-black/80 text-white text-xs p-2 rounded font-mono">
        字体状态:{" "}
        {fontStatus.loaded ? (
          <span className="text-green-400">✓ 主字体</span>
        ) : fontStatus.fallback ? (
          <span className="text-yellow-400">⚠ 备用字体</span>
        ) : fontStatus.error ? (
          <span className="text-red-400">✗ 加载失败</span>
        ) : (
          <span className="text-blue-400">⏳ 加载中</span>
        )}
      </div>
    )
  }

  return (
    <>
      {children}
      <FontStatusIndicator />
    </>
  )
}
