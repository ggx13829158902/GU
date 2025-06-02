"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Code2, Brain, Waves, Moon, Star } from "lucide-react"
import Image from "next/image"
import { PlantButton } from "@/components/plant-button"
import { SpaceBackground } from "@/components/space-background"
import { TruckLoader } from "@/components/truck-loader"
import { SocialCard } from "@/components/social-card"
import { MusicCard } from "@/components/music-card"
import { PhoneCard } from "@/components/phone-card"
import { WeatherCard } from "@/components/weather-card"
import { EmojiSlider } from "@/components/emoji-slider"

export default function HomePage() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])
  const [codeLines, setCodeLines] = useState(0)
  const [showLogin, setShowLogin] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // 生成粒子
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }))
    setParticles(newParticles)

    // 代码动态加载效果
    const interval = setInterval(() => {
      setCodeLines((prev) => (prev + 1) % 8)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // 模拟登录过程
    setTimeout(() => {
      setIsLoading(false)
      setShowLogin(false)
    }, 2000)
  }

  const codeSnippets = [
    "import numpy as np",
    "from tensorflow import keras",
    "def train_yolo_model():",
    "    model = YOLO('yolov8n.pt')",
    "    results = model.train()",
    "    return model",
    "# 在0与1的弦隙间捕捞月光",
    "print('Hello, DeepHue Universe')",
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 登录界面 */}
      <AnimatePresence>
        {showLogin && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/18.jpg-CghO3K0Y2SuQurSRVyq8ZzZ2q64xmT.jpeg')",
              }}
            >
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
            </div>

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-slate-800/90 backdrop-blur-md p-8 rounded-xl border border-blue-500/30 w-full max-w-md z-10 relative"
            >
              <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 flex items-center justify-center group">
                <div className="relative transform-gpu hover:rotateY-[15deg] transition-transform duration-500 mr-4">
                  <div className="absolute -inset-2 bg-gradient-to-r from-red-500/30 to-yellow-500/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Image
                    src="/images/emblem.png"
                    alt="团徽"
                    width={90}
                    height={90}
                    className="relative z-10 drop-shadow-2xl hover:drop-shadow-[0_0_25px_rgba(255,215,0,0.7)] transition-all duration-300"
                    style={{ transformStyle: "preserve-3d" }}
                  />
                </div>
                <div className="relative transform-gpu hover:rotateY-[-10deg] transition-transform duration-500">
                  <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Image
                    src="/images/college-logo.png"
                    alt="校名"
                    width={240}
                    height={70}
                    className="relative z-10 drop-shadow-xl hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300"
                    style={{ transformStyle: "preserve-3d" }}
                  />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-center text-blue-300 mb-6 mt-4">DeepHue 登录</h2>

              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-blue-200 text-sm">用户名</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-blue-500/30 text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    placeholder="请输入用户名"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-blue-200 text-sm">密码</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-blue-500/30 text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    placeholder="请输入密码"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    ) : null}
                    {isLoading ? "登录中..." : "登录"}
                  </button>
                </div>
              </form>

              <button
                onClick={() => setShowLogin(false)}
                className="absolute top-2 right-2 text-blue-300 hover:text-blue-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* 星空背景粒子 */}
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 bg-blue-300 rounded-full opacity-60"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: particle.delay,
              }}
            />
          ))}
        </div>

        {/* 地球背景 */}
        <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96">
          <SpaceBackground />
        </div>

        {/* 主要内容区域 */}
        <div className="relative z-10 container mx-auto px-6 py-20">
          {/* 顶部区域：学校标识和登录 */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col lg:flex-row items-center justify-between mb-12"
          >
            {/* 左侧：团徽和校名 */}
            <div className="flex items-center mb-8 lg:mb-0 group">
              <div className="relative transform-gpu transition-all duration-500 hover:scale-110 hover:rotateY-[20deg] mr-6">
                <div className="absolute -inset-2 bg-gradient-to-r from-red-400/20 to-yellow-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image
                  src="/images/emblem.png"
                  alt="团徽"
                  width={100}
                  height={100}
                  className="relative z-10 drop-shadow-2xl hover:drop-shadow-[0_0_30px_rgba(255,215,0,0.8)] transition-all duration-500 transform-gpu hover:translateZ-[20px]"
                  style={{ transformStyle: "preserve-3d" }}
                />
              </div>
              <div className="relative transform-gpu transition-all duration-500 hover:scale-105 hover:rotateY-[-15deg]">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image
                  src="/images/college-logo.png"
                  alt="校名"
                  width={300}
                  height={80}
                  className="relative z-10 drop-shadow-xl hover:drop-shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-all duration-500 transform-gpu hover:translateZ-[15px]"
                  style={{ transformStyle: "preserve-3d" }}
                />
              </div>
            </div>

            {/* 右侧：登录按钮 */}
            <div>
              <PlantButton onClick={() => setShowLogin(true)}>登录系统</PlantButton>
            </div>
          </motion.div>

          {/* 主内容区域 */}
          <div className="grid lg:grid-cols-2 gap-12 items-start min-h-[70vh]">
            {/* 左侧：个人信息和代码展示 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              {/* 个人信息卡片 */}
              <div className="text-center space-y-6">
                <motion.h1
                  className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-blue-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  古贵炫
                </motion.h1>
                <motion.p
                  className="text-lg text-blue-200 font-light"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  人工智能技术应用专业 | INFP | 双鱼座
                </motion.p>
                <motion.p
                  className="text-base text-purple-300 italic font-light"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  "在0与1的弦隙间捕捞月光"
                </motion.p>

                {/* 双鱼游动轨迹 */}
                <div className="relative h-32 mx-auto max-w-sm">
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <motion.div
                      className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full absolute"
                      style={{
                        left: "50%",
                        top: "20%",
                        transformOrigin: "0 60px",
                      }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full absolute"
                      style={{
                        left: "50%",
                        top: "80%",
                        transformOrigin: "0 -60px",
                      }}
                      animate={{
                        rotate: [0, -360],
                      }}
                      transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    />
                  </motion.div>
                  <div className="absolute inset-0 border-2 border-dashed border-blue-400/30 rounded-full"></div>
                </div>
              </div>

              {/* 代码展示区 */}
              <div className="relative">
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl"
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-lg p-6 border border-blue-500/30">
                  <div className="flex items-center gap-2 mb-4">
                    <Code2 className="w-5 h-5 text-blue-400" />
                    <span className="text-blue-300 text-sm font-mono">neural_network.py</span>
                  </div>
                  <div className="font-mono text-sm space-y-1">
                    {codeSnippets.slice(0, codeLines + 1).map((line, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`${
                          line.startsWith("#")
                            ? "text-green-400"
                            : line.includes("def") || line.includes("import")
                              ? "text-purple-400"
                              : "text-blue-200"
                        }`}
                      >
                        {line}
                      </motion.div>
                    ))}
                    <motion.span
                      className="inline-block w-2 h-4 bg-blue-400 ml-1"
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                    />
                  </div>
                </div>
              </div>

              {/* 技能标签云 */}
              <div className="flex flex-wrap gap-3 justify-center">
                {["Python", "C/C++", "YOLO", "Linux", "Web前端", "数据库"].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5 + index * 0.1 }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-blue-200 text-sm border border-blue-400/30 hover:border-blue-400/60 transition-colors cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* 右侧：交互式组件展示 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="space-y-8"
            >
              {/* 第一行：手机和天气卡片 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 }}
                  className="flex justify-center"
                >
                  <PhoneCard />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 }}
                  className="flex justify-center"
                >
                  <WeatherCard />
                </motion.div>
              </div>

              {/* 第二行：表情滑块 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="flex justify-center"
              >
                <EmojiSlider />
              </motion.div>

              {/* 第三行：社交和音乐卡片 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.6 }}
                  className="flex justify-center"
                >
                  <SocialCard />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.8 }}
                  className="flex justify-center"
                >
                  <MusicCard />
                </motion.div>
              </div>

              {/* 第四行：卡车加载动画 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
                className="flex justify-center"
              >
                <TruckLoader />
              </motion.div>
            </motion.div>
          </div>

          {/* 快速导航区域 */}
          <motion.div
            className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2 }}
          >
            <Link href="/lab" className="group">
              <div className="p-6 bg-slate-800/60 backdrop-blur-sm rounded-lg border border-blue-500/30 hover:border-blue-400/60 transition-all hover:bg-slate-800/80 text-center">
                <Brain className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-blue-200 font-medium">熵减实验室</p>
                <p className="text-blue-300/60 text-xs mt-1">技能展示</p>
              </div>
            </Link>
            <Link href="/achievements" className="group">
              <div className="p-6 bg-slate-800/60 backdrop-blur-sm rounded-lg border border-purple-500/30 hover:border-purple-400/60 transition-all hover:bg-slate-800/80 text-center">
                <Star className="w-8 h-8 text-purple-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-purple-200 font-medium">思维暗物质</p>
                <p className="text-purple-300/60 text-xs mt-1">成就荣誉</p>
              </div>
            </Link>
            <Link href="/interests" className="group">
              <div className="p-6 bg-slate-800/60 backdrop-blur-sm rounded-lg border border-green-500/30 hover:border-green-400/60 transition-all hover:bg-slate-800/80 text-center">
                <Waves className="w-8 h-8 text-green-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-green-200 font-medium">共振频率</p>
                <p className="text-green-300/60 text-xs mt-1">兴趣爱好</p>
              </div>
            </Link>
            <Link href="/infp-space" className="group">
              <div className="p-6 bg-slate-800/60 backdrop-blur-sm rounded-lg border border-indigo-500/30 hover:border-indigo-400/60 transition-all hover:bg-slate-800/80 text-center">
                <Moon className="w-8 h-8 text-indigo-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-indigo-200 font-medium">INFP暗室</p>
                <p className="text-indigo-300/60 text-xs mt-1">内心世界</p>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* 页脚 */}
        <motion.footer
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-blue-300/60 text-sm font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          本星系自转速度：0.78光年/认知迭代周期
        </motion.footer>
      </div>
    </div>
  )
}
