"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TruckLoader } from "@/components/truck-loader"
import { useLoading } from "@/hooks/use-loading"

export function LoadingScreen() {
  const { isLoading } = useLoading()
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    if (isLoading) {
      setShouldRender(true)
    } else {
      // 延迟隐藏以完成退出动画
      const timer = setTimeout(() => setShouldRender(false), 500)
      return () => clearTimeout(timer)
    }
  }, [isLoading])

  if (!shouldRender) return null

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center"
        >
          <div className="text-center">
            <TruckLoader />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-blue-300 font-mono text-sm animate-pulse"
            >
              正在穿越数字宇宙...
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
