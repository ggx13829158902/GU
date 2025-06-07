"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export function useLoading() {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // 只在路由切换时显示加载动画，排除首页直接访问
    const shouldShowLoading = pathname !== "/" && typeof window !== "undefined"

    if (shouldShowLoading) {
      setIsLoading(true)
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 1500)

      return () => clearTimeout(timer)
    } else {
      setIsLoading(false)
    }
  }, [pathname])

  const setLoading = (loading: boolean) => {
    setIsLoading(loading)
  }

  return { isLoading, setLoading }
}
