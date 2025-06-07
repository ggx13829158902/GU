"use client"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-300 mb-6">404</h1>
        <h2 className="text-3xl font-semibold text-blue-200 mb-4">页面未找到</h2>
        <p className="text-blue-300/80 mb-8 max-w-md mx-auto">
          您访问的页面不存在或已被移动。请返回首页或尝试其他链接。
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium"
        >
          返回首页
        </Link>
      </div>
    </div>
  )
}
