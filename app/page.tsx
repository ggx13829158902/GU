"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { User, Code, Trophy, Heart, ExternalLink } from "lucide-react"
import { SpaceBackground } from "@/components/space-background"
import { AudioPlayer } from "@/components/audio-player"
import { InteractiveBackground } from "@/components/interactive-background"
import { FishParticlesEnhanced } from "@/components/particle-systems/fish-particles-enhanced"
import { EnhancedParticles } from "@/components/particle-systems/enhanced-particles"
import { PersonalInfoCard } from "@/components/personal-info-card"
import { useAppContext } from "@/contexts/app-context"

export default function HomePage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const { state, setCurrentPage } = useAppContext()

  useEffect(() => {
    setCurrentPage("/")

    // Add background music
    const backgroundMusic = document.createElement("audio")
    backgroundMusic.src = "/music/shining-background.mp3"
    backgroundMusic.loop = true
    backgroundMusic.autoplay = true
    backgroundMusic.volume = 0.2
    backgroundMusic.style.display = "none"
    document.body.appendChild(backgroundMusic)

    const playPromise = backgroundMusic.play()
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.log("Autoplay prevented:", error)
      })
    }

    return () => {
      if (document.body.contains(backgroundMusic)) {
        document.body.removeChild(backgroundMusic)
      }
    }
  }, [setCurrentPage])

  const navigationCards = [
    {
      id: "lab",
      title: "实验室",
      subtitle: "熵减空间",
      description: "探索技术的边界，在代码中寻找诗意",
      icon: Code,
      href: "/lab",
      color: "from-blue-400 to-cyan-500",
      particles: 15,
    },
    {
      id: "achievements",
      title: "成就",
      subtitle: "星光轨迹",
      description: "记录成长路上的每一个里程碑",
      icon: Trophy,
      href: "/achievements",
      color: "from-yellow-400 to-orange-500",
      particles: 12,
    },
    {
      id: "interests",
      title: "兴趣",
      subtitle: "共振频率",
      description: "在多元化的爱好中找到内心的平衡",
      icon: Heart,
      href: "/interests",
      color: "from-purple-400 to-pink-500",
      particles: 18,
    },
    {
      id: "blog",
      title: "博客",
      subtitle: "混沌日志",
      description: "用文字记录思维的轨迹和成长的感悟",
      icon: User,
      href: "/blog",
      color: "from-green-400 to-teal-500",
      particles: 20,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* 背景效果层 */}
      <InteractiveBackground />
      <EnhancedParticles count={50} interactive={true} />
      <FishParticlesEnhanced count={12} enabled={state.particlesEnabled} />

      {/* 音频播放器 */}
      <AudioPlayer />

      {/* 主要内容 */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Hero Section */}
        <div className="flex-1 flex items-center justify-center px-6 py-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* 左侧：个人信息和介绍 */}
            <PersonalInfoCard />

            {/* 右侧：3D太空背景 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <SpaceBackground />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="px-6 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              探索数字宇宙
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {navigationCards.map((card, index) => {
                const Icon = card.icon
                return (
                  <motion.a
                    key={card.id}
                    href={card.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                    className="group relative block"
                    onMouseEnter={() => setHoveredCard(card.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="relative overflow-hidden rounded-xl bg-slate-800/60 backdrop-blur-sm border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 p-6 h-48 hover:bg-slate-800/80 transform hover:scale-105">
                      {/* 背景渐变 */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      />

                      {/* 粒子效果 */}
                      {hoveredCard === card.id && (
                        <div className="absolute inset-0 pointer-events-none">
                          {Array.from({ length: card.particles }).map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-1 bg-blue-400 rounded-full"
                              style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                              }}
                              animate={{
                                opacity: [0, 1, 0],
                                scale: [0, 1.5, 0],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                delay: Math.random() * 2,
                              }}
                            />
                          ))}
                        </div>
                      )}

                      {/* 图标 */}
                      <motion.div
                        className="mb-4"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Icon className={`w-8 h-8 bg-gradient-to-r ${card.color} bg-clip-text text-transparent`} />
                      </motion.div>

                      {/* 标题 */}
                      <h3 className="text-xl font-bold text-blue-200 mb-2 group-hover:text-blue-100 transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-sm text-blue-400/80 font-medium mb-2">{card.subtitle}</p>
                      <p className="text-sm text-blue-300/70">{card.description}</p>

                      {/* 悬浮指示器 */}
                      <motion.div
                        className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={{ x: 20 }}
                        whileHover={{ x: 0 }}
                      >
                        <ExternalLink className="w-4 h-4 text-blue-400" />
                      </motion.div>
                    </div>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="text-center pb-12 px-6"
        >
          <blockquote className="text-lg text-blue-300/80 italic max-w-2xl mx-auto">
            "在无限的可能性中，寻找属于自己的那一道光。
            <br />
           心中无顶底，操作自随心
          </blockquote>
          <cite className="text-blue-400/60 text-sm mt-4 block">— 来自内心深处的声音</cite>
        </motion.div>
      </div>
    </div>
  )
}
