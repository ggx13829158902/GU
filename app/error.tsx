"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-300 mb-6">出错了</h1>
        <h2 className="text-3xl font-semibold text-blue-200 mb-4">发生了一些问题</h2>
        <p className="text-blue-300/80 mb-8 max-w-md mx-auto">
          很抱歉，在处理您的请求时发生了错误。请尝试刷新页面或返回首页。
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium"
          >
            重试
          </button>
          <Link
            href="/"
            className="px-6 py-3 bg-slate-700/60 border border-blue-400/30 text-blue-300 rounded-lg hover:bg-slate-700/80 hover:border-blue-400/60 transition-all font-medium"
          >
            返回首页
          </Link>
        </div>
      </div>
    </div>
  )
}
