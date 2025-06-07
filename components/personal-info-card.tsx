"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Github, Mail, ExternalLink, MapPin, Calendar, Heart } from "lucide-react"

interface PersonalInfoCardProps {
  className?: string
}

export function PersonalInfoCard({ className = "" }: PersonalInfoCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    // 预加载图片
    const img = new Image()
    img.onload = () => setImageLoaded(true)
    img.onerror = () => setImageError(true)
    img.src = "/images/ggx.jpg"
  }, [])

  const personalInfo = {
    name: "古贵炫",
    title: "内向星云中的理性代码与诗意光谱",
    description: "一个在数字宇宙中寻找真理的INFP，用代码构建理想，用逻辑表达情感",
    location: "中国",
    joinDate: "2024",
    personality: "INFP",
    interests: ["编程", "足球", "音乐", "投资"],
  }

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com",
      color: "hover:text-gray-300",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:contact@example.com",
      color: "hover:text-blue-300",
    },
    {
      name: "Portfolio",
      icon: ExternalLink,
      href: "/portfolio",
      color: "hover:text-purple-300",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className={`text-center lg:text-left ${className}`}
    >
      {/* 个人头像 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mb-8 flex justify-center lg:justify-start"
      >
        <div className="relative w-32 h-32 lg:w-40 lg:h-40 group">
          {/* 背景光效 */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-lg opacity-50 animate-pulse group-hover:opacity-70 transition-opacity duration-300"></div>

          {/* 头像容器 */}
          <div className="relative w-full h-full rounded-full border-4 border-blue-400/30 group-hover:border-blue-400/60 transition-colors duration-300 overflow-hidden shadow-2xl">
            {!imageError ? (
              <motion.img
                src="/images/ggx.jpg"
                alt={personalInfo.name}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: imageLoaded ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
              />
            ) : (
              // 备用头像
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">{personalInfo.name.charAt(0)}</span>
              </div>
            )}

            {/* 悬浮状态指示器 */}
            <motion.div
              className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-lg"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
              }}
            />
          </div>
        </div>
      </motion.div>

      {/* 个人信息 */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-4xl lg:text-6xl font-bold mb-6"
      >
        <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-blue-400 bg-clip-text text-transparent animate-gradient">
          {personalInfo.name}
        </span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="space-y-4 mb-8"
      >
        <p className="text-xl lg:text-2xl text-blue-200 font-light">{personalInfo.title}</p>
        <p className="text-blue-300/80 text-lg max-w-xl mx-auto lg:mx-0">{personalInfo.description}</p>
      </motion.div>

      {/* 个人标签 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
      >
        <div className="flex items-center space-x-2 px-3 py-1 bg-slate-800/60 backdrop-blur-sm border border-blue-500/30 rounded-full">
          <MapPin className="w-4 h-4 text-blue-400" />
          <span className="text-blue-300 text-sm">{personalInfo.location}</span>
        </div>
        <div className="flex items-center space-x-2 px-3 py-1 bg-slate-800/60 backdrop-blur-sm border border-purple-500/30 rounded-full">
          <Calendar className="w-4 h-4 text-purple-400" />
          <span className="text-purple-300 text-sm">加入于 {personalInfo.joinDate}</span>
        </div>
        <div className="flex items-center space-x-2 px-3 py-1 bg-slate-800/60 backdrop-blur-sm border border-pink-500/30 rounded-full">
          <Heart className="w-4 h-4 text-pink-400" />
          <span className="text-pink-300 text-sm">{personalInfo.personality}</span>
        </div>
      </motion.div>

      {/* 兴趣标签 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8"
      >
        {personalInfo.interests.map((interest, index) => (
          <motion.span
            key={interest}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 + index * 0.1 }}
            className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200 text-sm rounded-full border border-blue-400/30 hover:border-blue-400/60 transition-colors"
          >
            {interest}
          </motion.span>
        ))}
      </motion.div>

      {/* 社交链接 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="flex justify-center lg:justify-start space-x-6"
      >
        {socialLinks.map((link, index) => {
          const Icon = link.icon
          return (
            <motion.a
              key={link.name}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : "_self"}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`p-3 bg-slate-800/60 backdrop-blur-sm border border-blue-500/30 rounded-lg hover:border-blue-400/60 hover:bg-slate-800/80 transition-all text-blue-300 hover:text-blue-200 ${link.color}`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              aria-label={link.name}
            >
              <Icon className="w-6 h-6" />
            </motion.a>
          )
        })}
      </motion.div>
    </motion.div>
  )
}
