"use client"

import { memo, useCallback } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, School, MapPin, Heart, Code, ExternalLink, Github } from "lucide-react"

/**
 * 增强版Footer组件
 * 包含完整的版权信息和联系方式，优化性能避免不必要的重渲染
 */
const FooterEnhanced = memo(function FooterEnhanced() {
  const currentYear = new Date().getFullYear()

  // 使用常量避免每次渲染时创建新对象
  const contactInfo = {
    name: "古贵炫",
    school: "广州城建职业学院清远校区",
    college: "未来技术应用学院",
    email: "3306574730@qq.com",
    phone: "19065303353",
    github: "https://github.com",
    location: "广东省清远市",
  } as const

  const quickLinks = [
    { name: "首页", href: "/" },
    { name: "实验室", href: "/lab" },
    { name: "成就", href: "/achievements" },
    { name: "兴趣", href: "/interests" },
    { name: "博客", href: "/blog" },
    { name: "作品集", href: "/portfolio" },
    { name: "INFP空间", href: "/infp-space" },
  ] as const

  const socialLinks = [
    {
      name: "GitHub",
      href: contactInfo.github,
      icon: Github,
      color: "hover:text-gray-300",
    },
    {
      name: "邮箱",
      href: `mailto:${contactInfo.email}`,
      icon: Mail,
      color: "hover:text-blue-300",
    },
  ] as const

  // 使用useCallback缓存事件处理函数
  const handleEmailClick = useCallback(() => {
    window.open(`mailto:${contactInfo.email}`, "_blank")
  }, [contactInfo.email])

  const handlePhoneClick = useCallback(() => {
    window.open(`tel:${contactInfo.phone}`, "_blank")
  }, [contactInfo.phone])

  return (
    <footer className="relative z-10 bg-slate-900/95 backdrop-blur-md border-t border-blue-500/20">
      <div className="container mx-auto px-6 py-12">
        {/* 主要内容区域 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* 个人信息卡片 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-blue-200 mb-4 flex items-center">
              <Heart className="w-5 h-5 mr-2 text-pink-400" />
              关于我
            </h3>
            <div className="space-y-3">
              <div className="p-4 bg-slate-800/60 rounded-lg border border-blue-500/20">
                <p className="text-blue-300/90 font-medium text-lg mb-1">{contactInfo.name}</p>
                <p className="text-blue-300/70 text-sm mb-2">INFP程序员 · 代码诗人</p>
                <p className="text-blue-300/60 text-xs">在数字宇宙中寻找真理与美</p>
              </div>
            </div>
          </motion.div>

          {/* 教育背景卡片 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-blue-200 mb-4 flex items-center">
              <School className="w-5 h-5 mr-2 text-green-400" />
              教育背景
            </h3>
            <div className="p-4 bg-slate-800/60 rounded-lg border border-green-500/20">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-green-300/90 font-medium text-sm mb-1">{contactInfo.school}</p>
                  <p className="text-green-300/70 text-xs mb-1">{contactInfo.college}</p>
                  <p className="text-green-300/60 text-xs">{contactInfo.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 联系方式卡片 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-blue-200 mb-4 flex items-center">
              <Mail className="w-5 h-5 mr-2 text-purple-400" />
              联系方式
            </h3>
            <div className="space-y-3">
              <motion.button
                onClick={handleEmailClick}
                className="w-full p-3 bg-slate-800/60 rounded-lg border border-purple-500/20 hover:border-purple-400/40 transition-all text-left group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <div>
                    <p className="text-purple-300/90 text-sm font-medium">邮箱</p>
                    <p className="text-purple-300/70 text-xs break-all">{contactInfo.email}</p>
                  </div>
                  <ExternalLink className="w-3 h-3 text-purple-400/60 group-hover:text-purple-400 transition-colors" />
                </div>
              </motion.button>

              <motion.button
                onClick={handlePhoneClick}
                className="w-full p-3 bg-slate-800/60 rounded-lg border border-blue-500/20 hover:border-blue-400/40 transition-all text-left group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <div>
                    <p className="text-blue-300/90 text-sm font-medium">手机</p>
                    <p className="text-blue-300/70 text-xs">{contactInfo.phone}</p>
                  </div>
                  <ExternalLink className="w-3 h-3 text-blue-400/60 group-hover:text-blue-400 transition-colors" />
                </div>
              </motion.button>
            </div>
          </motion.div>

          {/* 快速导航卡片 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-blue-200 mb-4 flex items-center">
              <Code className="w-5 h-5 mr-2 text-yellow-400" />
              快速导航
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="p-2 bg-slate-800/40 rounded border border-yellow-500/20 hover:border-yellow-400/40 text-yellow-300/80 hover:text-yellow-200 transition-all text-sm text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 分割线 */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="border-t border-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 mb-8"
        />

        {/* 版权信息区域 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="space-y-6"
        >
          {/* 主要版权声明 */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-slate-800/60 rounded-full border border-blue-500/20">
              <Heart className="w-4 h-4 text-pink-400" />
              <span className="text-blue-300/90 font-medium">
                &copy; {currentYear} {contactInfo.name} - 保留所有权利
              </span>
            </div>
          </div>

          {/* 详细信息 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-3 bg-slate-800/40 rounded-lg border border-blue-500/10">
              <School className="w-5 h-5 text-blue-400 mx-auto mb-2" />
              <p className="text-blue-300/80 text-sm font-medium">{contactInfo.school}</p>
              <p className="text-blue-300/60 text-xs">{contactInfo.college}</p>
            </div>

            <div className="p-3 bg-slate-800/40 rounded-lg border border-purple-500/10">
              <Mail className="w-5 h-5 text-purple-400 mx-auto mb-2" />
              <p className="text-purple-300/80 text-sm font-medium">联系邮箱</p>
              <p className="text-purple-300/60 text-xs break-all">{contactInfo.email}</p>
            </div>

            <div className="p-3 bg-slate-800/40 rounded-lg border border-green-500/10">
              <Phone className="w-5 h-5 text-green-400 mx-auto mb-2" />
              <p className="text-green-300/80 text-sm font-medium">联系电话</p>
              <p className="text-green-300/60 text-xs">{contactInfo.phone}</p>
            </div>
          </div>

          {/* 社交链接 */}
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-slate-800/60 rounded-lg border border-gray-500/20 hover:border-gray-400/40 transition-all ${social.color}`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              )
            })}
          </div>

          {/* 技术信息 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-center"
          >
            <p className="text-blue-300/50 text-xs mb-2">
              Built with ❤️ using Next.js 14, TypeScript, Tailwind CSS & Framer Motion
            </p>
            <p className="text-blue-300/40 text-xs">"在无限的可能性中，寻找属于自己的那一道光"</p>
          </motion.div>
        </motion.div>
      </div>

      {/* 装饰性背景元素 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-green-500/5 rounded-full blur-3xl" />
      </div>
    </footer>
  )
})

export { FooterEnhanced }
