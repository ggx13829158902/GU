"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Moon, Lock, Heart, Star, Music, Gamepad2, BookOpen, Eye } from "lucide-react"

export default function INFPSpacePage() {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [holdProgress, setHoldProgress] = useState(0)
  const [selectedArea, setSelectedArea] = useState<string | null>(null)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (holdProgress > 0 && holdProgress < 100) {
      interval = setInterval(() => {
        setHoldProgress((prev) => {
          if (prev >= 100) {
            setIsUnlocked(true)
            return 100
          }
          return prev + 2
        })
      }, 50)
    }
    return () => clearInterval(interval)
  }, [holdProgress])

  const handleMouseDown = () => {
    if (!isUnlocked) {
      setHoldProgress(1)
    }
  }

  const handleMouseUp = () => {
    if (holdProgress < 100) {
      setHoldProgress(0)
    }
  }

  const personalSpaces = [
    {
      id: "football",
      title: "月光足球场",
      icon: Gamepad2,
      description: "在虚拟的绿茵场上，感受团队协作的美妙",
      color: "from-green-400 to-blue-500",
      content:
        "这里是我的足球梦想空间，22个人的默契配合，就像代码中的函数调用一样精准。每一次传球都是信任的传递，每一个进球都是团队智慧的结晶。",
    },
    {
      id: "music",
      title: "音乐时光机",
      icon: Music,
      description: "周杰伦的旋律在这里永远回响",
      color: "from-purple-400 to-pink-500",
      content:
        "《她的睫毛》的旋律在这个空间里循环播放，每一个音符都触动着内心最柔软的地方。音乐是情感的载体，就像代码是逻辑的载体一样。",
    },
    {
      id: "growth",
      title: "数字苔藓花园",
      icon: BookOpen,
      description: "知识在这里慢慢生长，如苔藓般坚韧",
      color: "from-emerald-400 to-teal-500",
      content:
        "这里记录着我的学习轨迹，从C语言到Python，从数据库到人工智能。每一行代码都是成长的痕迹，每一个项目都是思维的跃迁。",
    },
    {
      id: "dreams",
      title: "理想主义星图",
      icon: Star,
      description: "INFP的理想在星空中闪烁",
      color: "from-indigo-400 to-purple-500",
      content:
        "作为INFP，我相信技术可以让世界变得更美好。在这个星图中，每一颗星都代表一个理想，每一条连线都是实现梦想的路径。",
    },
  ]

  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 pt-20 flex items-center justify-center">
        <div className="text-center">
          <motion.div
            className="relative mb-8"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <Moon className="w-24 h-24 text-indigo-300 mx-auto" />
            <div className="absolute inset-0 border-2 border-dashed border-indigo-400/30 rounded-full"></div>
          </motion.div>

          <h1 className="text-3xl font-bold text-indigo-200 mb-4">∷ INFP暗室</h1>
          <p className="text-indigo-300/80 mb-8 max-w-md">
            这是一个需要耐心才能进入的私密空间
            <br />
            长按下方按钮3秒以解锁
          </p>

          <div className="relative">
            <motion.button
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              className="relative w-32 h-32 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Lock className="w-8 h-8" />

              {/* 进度环 */}
              <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                <circle cx="50%" cy="50%" r="60" stroke="rgba(255,255,255,0.2)" strokeWidth="4" fill="none" />
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="60"
                  stroke="white"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={377}
                  strokeDashoffset={377 - (377 * holdProgress) / 100}
                  transition={{ duration: 0.1 }}
                />
              </svg>
            </motion.button>

            <motion.p
              className="text-indigo-400/60 text-sm mt-4"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              {holdProgress > 0 ? `${Math.round(holdProgress)}%` : "长按解锁"}
            </motion.p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 pt-20">
      <div className="container mx-auto px-6 py-12">
        {/* 欢迎信息 */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent mb-4">
            欢迎来到我的内心宇宙
          </h1>
          <p className="text-indigo-200 text-lg max-w-2xl mx-auto">
            这里是INFP的私密空间，记录着最真实的思考和最纯粹的梦想
          </p>
        </motion.div>

        {/* 个人空间区域 */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {personalSpaces.map((space, index) => {
            const Icon = space.icon
            const isSelected = selectedArea === space.id

            return (
              <motion.div
                key={space.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedArea(isSelected ? null : space.id)}
              >
                {/* 发光效果 */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${space.color} rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000`}
                  animate={isSelected ? { opacity: 0.75 } : {}}
                />

                <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-lg p-8 border border-indigo-500/30 hover:border-indigo-400/60 transition-all min-h-[300px]">
                  {/* 图标和标题 */}
                  <div className="text-center mb-6">
                    <motion.div
                      className="w-16 h-16 mx-auto mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      animate={isSelected ? { scale: 1.1 } : {}}
                    >
                      <div
                        className={`w-full h-full bg-gradient-to-r ${space.color} rounded-full flex items-center justify-center`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </motion.div>

                    <h3 className="text-xl font-bold text-indigo-200 mb-2">{space.title}</h3>
                    <p className="text-indigo-300/80 text-sm">{space.description}</p>
                  </div>

                  {/* 展开的内容 */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-indigo-500/20 pt-6"
                      >
                        <p className="text-indigo-200/90 text-sm leading-relaxed italic">{space.content}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* 装饰性粒子 */}
                  <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-1 h-1 bg-gradient-to-r ${space.color} rounded-full opacity-60`}
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                        }}
                        animate={{
                          opacity: [0.3, 1, 0.3],
                          scale: [0.5, 1.2, 0.5],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.5,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* INFP特质展示 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-slate-800/60 backdrop-blur-sm rounded-lg p-8 border border-indigo-500/30 mb-16"
        >
          <h2 className="text-2xl font-bold text-indigo-200 mb-6 text-center flex items-center justify-center">
            <Heart className="w-6 h-6 mr-3 text-pink-400" />
            INFP的内心世界
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { trait: "理想主义", desc: "相信技术可以改变世界", icon: Star },
              { trait: "内向思考", desc: "在安静中寻找灵感", icon: Moon },
              { trait: "价值驱动", desc: "追求有意义的工作", icon: Heart },
              { trait: "创造性", desc: "在代码中表达艺术", icon: Eye },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.trait}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="text-center p-4 bg-indigo-500/10 rounded-lg border border-indigo-400/20"
                >
                  <Icon className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
                  <h3 className="font-semibold text-indigo-200 mb-2">{item.trait}</h3>
                  <p className="text-indigo-300/80 text-sm">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* 内心独白 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center"
        >
          <blockquote className="text-xl text-indigo-300/80 italic max-w-3xl mx-auto leading-relaxed">
            "作为一个INFP，我在代码的世界里找到了表达自我的方式。
            <br />
            每一行代码都承载着理想，每一个项目都是内心世界的投射。
            <br />
            在这个看似冰冷的技术领域，我用温暖的心去创造有温度的产品。"
          </blockquote>
          <div className="mt-6">
            <span className="text-indigo-400/60 text-sm">— 来自内心深处的声音</span>
          </div>
        </motion.div>

        {/* 退出提示 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-center mt-12"
        >
          <p className="text-indigo-300/60 text-sm font-mono">感谢你耐心地走进我的内心世界 ✨</p>
        </motion.div>
      </div>
    </div>
  )
}
