"use client"

import { useEffect, useState, type ReactNode } from "react"

interface DOMSafeWrapperProps {
  children: ReactNode
  fallback?: ReactNode
}

/**
 * DOM安全包装器组件
 * 确保只在客户端渲染时显示内容，避免SSR/CSR不匹配问题
 */
export function DOMSafeWrapper({ children, fallback = null }: DOMSafeWrapperProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <>{fallback}</>
  }

  return <>{children}</>
}
