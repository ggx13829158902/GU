"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Gamepad2, Music, Zap, Play, Pause, Volume2, Heart } from "lucide-react"

export default function InterestsPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [selectedInterest, setSelectedInterest] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement>(null)

  const interests = [
    {
      id: "gaming",
      title: "游戏世界",
      icon: Gamepad2,
      color: "from-green-400 to-blue-500",
      description: "在虚拟世界中探索无限可能，体验不同的人生",
      details: [
        "策略类游戏：享受思维的博弈",
        "RPG游戏：沉浸在故事的海洋",
        "竞技游戏：挑战自我极限",
        "独立游戏：发现创意的火花",
      ],
      quote: '"游戏是另一种形式的艺术，代码是另一种形式的诗歌"',
    },
    {
      id: "football",
      title: "足球激情",
      icon: Zap,
      color: "from-orange-400 to-red-500",
      description: "绿茵场上的22个人，演绎着最纯粹的团队协作",
      details: [
        "团队协作：11个人的默契配合",
        "战术理解：阅读比赛的艺术",
        "身体素质：保持健康的体魄",
        "精神品质：永不放弃的信念",
      ],
      quote: '"足球教会我的不仅是技巧，更是面对挫折的勇气"',
    },
    {
      id: "music",
      title: "音乐共鸣",
      icon: Music,
      color: "from-purple-400 to-pink-500",
      description: "周杰伦的旋律，《她的睫毛》的温柔，音乐是心灵的语言",
      details: [
        "最爱歌手：周杰伦",
        "最喜欢的歌：《她的睫毛》",
        "音乐类型：华语流行、R&B",
        "音乐感悟：旋律是情感的载体",
      ],
      quote: '"她的睫毛弯弯的，像月牙一样美丽"',
    },
  ]

  const handlePlayMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-blue-900 pt-20">
      <div className="container mx-auto px-6 py-12">
        {/* 页面标题 */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent mb-4">
            ∷ 共振频率
          </h1>
          <p className="text-green-200 text-lg max-w-2xl mx-auto">在兴趣的海洋中寻找共鸣，在爱好的世界里释放真我</p>
        </motion.div>

        {/* 兴趣展示区域 */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {interests.map((interest, index) => {
            const Icon = interest.icon
            const isSelected = selectedInterest === interest.id

            return (
              <motion.div
                key={interest.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedInterest(isSelected ? null : interest.id)}
              >
                {/* 发光效果 */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${interest.color} rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000`}
                  animate={isSelected ? { opacity: 0.75 } : {}}
                />

                <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-lg p-8 border border-green-500/30 hover:border-green-400/60 transition-all h-full">
                  {/* 图标 */}
                  <motion.div
                    className="flex items-center justify-center w-20 h-20 mx-auto mb-6"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    animate={isSelected ? { scale: 1.1 } : {}}
                  >
                    <div
                      className={`w-full h-full bg-gradient-to-r ${interest.color} rounded-full flex items-center justify-center`}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </motion.div>

                  {/* 标题 */}
                  <h3 className="text-2xl font-bold text-green-200 text-center mb-4">{interest.title}</h3>

                  {/* 描述 */}
                  <p className="text-green-300/80 text-center mb-6">{interest.description}</p>

                  {/* 展开的详细信息 */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-green-500/20 pt-6 space-y-4"
                      >
                        <div className="space-y-3">
                          {interest.details.map((detail, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-start space-x-3"
                            >
                              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-green-200/90 text-sm">{detail}</span>
                            </motion.div>
                          ))}
                        </div>

                        <motion.blockquote
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                          className="border-l-4 border-green-400 pl-4 italic text-green-300/80 text-sm mt-6"
                        >
                          {interest.quote}
                        </motion.blockquote>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* 音乐播放器 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-slate-800/60 backdrop-blur-sm rounded-lg p-8 border border-purple-500/30 mb-16"
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-purple-200 mb-2 flex items-center justify-center">
              <Music className="w-6 h-6 mr-3 text-purple-400" />
              音乐时光
            </h2>
            <p className="text-purple-300/80">让周杰伦的旋律带你进入音乐的世界</p>
          </div>

          {/* 虚拟音乐播放器 */}
          <div className="max-w-md mx-auto">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-6 border border-purple-400/30">
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-purple-200">她的睫毛</h3>
                <p className="text-purple-300/80 text-sm">周杰伦</p>
              </div>

              {/* 播放控制 */}
              <div className="flex items-center justify-center space-x-4 mb-4">
                <motion.button
                  onClick={handlePlayMusic}
                  className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                </motion.button>
                <Volume2 className="w-5 h-5 text-purple-400" />
              </div>

              {/* 音波可视化 */}
              <div className="flex items-center justify-center space-x-1 h-8">
                {Array.from({ length: 20 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 bg-gradient-to-t from-purple-400 to-pink-400 rounded-full"
                    animate={
                      isPlaying
                        ? {
                            height: [4, Math.random() * 24 + 4, 4],
                          }
                        : { height: 4 }
                    }
                    transition={{
                      duration: 0.5,
                      repeat: isPlaying ? Number.POSITIVE_INFINITY : 0,
                      delay: i * 0.1,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* 隐藏的音频元素（实际项目中可以替换为真实音频） */}
          <audio ref={audioRef} loop>
            <source src="/placeholder-audio.mp3" type="audio/mpeg" />
          </audio>
        </motion.div>

        {/* 足球场微缩模型 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-slate-800/60 backdrop-blur-sm rounded-lg p-8 border border-green-500/30"
        >
          <h2 className="text-2xl font-bold text-green-200 mb-6 text-center flex items-center justify-center">
            <Zap className="w-6 h-6 mr-3 text-green-400" />
            绿茵梦想
          </h2>

          {/* 足球场 */}
          <div className="relative bg-green-600/20 rounded-lg p-8 border-2 border-green-400/30 max-w-2xl mx-auto">
            {/* 中圈 */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-green-300/50 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-green-300 rounded-full"></div>

            {/* 中线 */}
            <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-green-300/50"></div>

            {/* 球门区域 */}
            <div className="absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-16 border-2 border-green-300/50 border-l-0"></div>
            <div className="absolute top-1/2 right-2 transform -translate-y-1/2 w-8 h-16 border-2 border-green-300/50 border-r-0"></div>

            {/* 动态足球 */}
            <motion.div
              className="absolute w-3 h-3 bg-white rounded-full shadow-lg"
              animate={{
                x: [50, 200, 150, 100, 50],
                y: [50, 30, 80, 60, 50],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            {/* 球员位置点 */}
            {[
              { x: "20%", y: "30%" },
              { x: "20%", y: "70%" },
              { x: "40%", y: "20%" },
              { x: "40%", y: "50%" },
              { x: "40%", y: "80%" },
              { x: "60%", y: "25%" },
              { x: "60%", y: "75%" },
              { x: "80%", y: "40%" },
              { x: "80%", y: "60%" },
            ].map((pos, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-400 rounded-full"
                style={{ left: pos.x, top: pos.y }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>

          <div className="text-center mt-6">
            <p className="text-green-300/80 italic">"足球不只是一项运动，它是团队精神和个人意志的完美结合"</p>
          </div>
        </motion.div>

        {/* 兴趣统计 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center mt-12"
        >
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold text-green-300 mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                ∞
              </motion.div>
              <p className="text-green-200/80 text-sm">游戏时光</p>
            </div>
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold text-orange-300 mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
              >
                22
              </motion.div>
              <p className="text-orange-200/80 text-sm">足球精神</p>
            </div>
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold text-purple-300 mb-2 flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              >
                <Heart className="w-8 h-8" />
              </motion.div>
              <p className="text-purple-200/80 text-sm">音乐共鸣</p>
            </div>
          </div>
        </motion.div>

        {/* 底部彩蛋提示 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-center mt-12"
        >
          <p className="text-green-300/60 text-sm font-mono">彩蛋提示：点击足球可触发隐藏音效 🎵</p>
        </motion.div>
      </div>
    </div>
  )
}
