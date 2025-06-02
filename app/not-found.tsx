"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Home, Search, AlertCircle } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center">
      <div className="text-center px-6">
        {/* YOLO识别失败动画 */}
        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-32 h-32 mx-auto relative">
            {/* 检测框动画 */}
            <motion.div
              className="absolute inset-0 border-2 border-red-400 border-dashed"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="absolute inset-4 border-2 border-yellow-400 border-dashed"
              animate={{
                scale: [1, 0.9, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
            />

            {/* 中心图标 */}
            <div className="absolute inset-0 flex items-center justify-center">
              <AlertCircle className="w-12 h-12 text-red-400" />
            </div>

            {/* 置信度标签 */}
            <motion.div
              className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-red-500/20 px-3 py-1 rounded text-red-300 text-sm font-mono"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              404: 0.00%
            </motion.div>
          </div>
        </motion.div>

        {/* 错误信息 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-300 to-orange-300 bg-clip-text text-transparent mb-4">
            语义丢失...
          </h1>
          <p className="text-blue-200 text-lg mb-2">正在重标注训练样本</p>
          <p className="text-blue-300/80 text-sm max-w-md mx-auto">
            YOLO模型无法识别此页面，可能是数据集中缺少相关标注
          </p>
        </motion.div>

        {/* 加载动画 */}
        <motion.div
          className="flex justify-center space-x-2 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-8 bg-gradient-to-t from-blue-400 to-purple-400 rounded-full"
              animate={{
                height: [8, 24, 8],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.1,
              }}
            />
          ))}
        </motion.div>

        {/* 导航按钮 */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <Link href="/">
            <motion.button
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Home className="w-5 h-5" />
              <span>返回星系中心</span>
            </motion.button>
          </Link>

          <Link href="/lab">
            <motion.button
              className="flex items-center space-x-2 px-6 py-3 bg-slate-800/60 backdrop-blur-sm border border-blue-500/30 text-blue-200 rounded-lg hover:border-blue-400/60 hover:bg-slate-800/80 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search className="w-5 h-5" />
              <span>探索实验室</span>
            </motion.button>
          </Link>
        </motion.div>

        {/* 技术彩蛋 */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <p className="text-blue-300/60 text-sm font-mono mb-2">$ grep "页面" ./universe</p>
          <p className="text-purple-300/80 text-sm italic">"在无限的可能性中，这个页面选择了不存在"</p>
        </motion.div>
      </div>
    </div>
  )
}
