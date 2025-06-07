"use client"

import { memo } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, School, MapPin, Heart, Code } from "lucide-react"

const Footer = memo(function Footer() {
  const currentYear = new Date().getFullYear()

  const contactInfo = {
    name: "古贵炫",
    school: "广州城建职业学院清远校区",
    college: "未来技术应用学院",
    email: "3306574730@qq.com",
    phone: "19065303353",
  }

  const quickLinks = [
    { name: "首页", href: "/" },
    { name: "实验室", href: "/lab" },
    { name: "成就", href: "/achievements" },
    { name: "兴趣", href: "/interests" },
    { name: "博客", href: "/blog" },
    { name: "作品集", href: "/portfolio" },
  ]

  return (
    <footer className="relative z-10 bg-slate-900/90 backdrop-blur-md border-t border-blue-500/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* 个人信息 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-blue-200 mb-4 flex items-center">
              <Heart className="w-5 h-5 mr-2 text-pink-400" />
              关于我
            </h3>
            <div className="space-y-2">
              <p className="text-blue-300/80 font-medium">{contactInfo.name}</p>
              <p className="text-blue-300/70 text-sm">INFP程序员</p>
              <p className="text-blue-300/70 text-sm">热爱编程与创造</p>
            </div>
          </motion.div>

          {/* 学校信息 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-blue-200 mb-4 flex items-center">
              <School className="w-5 h-5 mr-2 text-green-400" />
              教育背景
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-blue-300/80 text-sm font-medium">{contactInfo.school}</p>
                  <p className="text-blue-300/70 text-xs">{contactInfo.college}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 联系方式 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-blue-200 mb-4 flex items-center">
              <Mail className="w-5 h-5 mr-2 text-purple-400" />
              联系方式
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-blue-300/80 text-sm hover:text-blue-200 transition-colors break-all"
                  aria-label="发送邮件"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-blue-300/80 text-sm hover:text-blue-200 transition-colors"
                  aria-label="拨打电话"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>
          </motion.div>

          {/* 快速链接 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold text-blue-200 mb-4 flex items-center">
              <Code className="w-5 h-5 mr-2 text-yellow-400" />
              快速导航
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-blue-300/70 text-sm hover:text-blue-200 transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* 分割线 */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="border-t border-blue-500/20 mb-8"
        />

        {/* 版权信息 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center space-y-4"
        >
          {/* 主要版权信息 */}
          <div className="text-blue-300/80 text-sm">
            <p className="mb-2">
              &copy; {currentYear} {contactInfo.name} - 保留所有权利
            </p>
            <p className="text-blue-300/60 text-xs">
              {contactInfo.school} · {contactInfo.college}
            </p>
          </div>

          {/* 联系信息摘要 */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-blue-300/60 text-xs">
            <span className="flex items-center space-x-1">
              <Mail className="w-3 h-3" />
              <span>{contactInfo.email}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Phone className="w-3 h-3" />
              <span>{contactInfo.phone}</span>
            </span>
          </div>

          {/* 技术信息 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-blue-300/50 text-xs"
          >
            <p>Built with ❤️ using Next.js, TypeScript & Tailwind CSS</p>
          </motion.div>
        
      </div>

      {/* 装饰性背景元素 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl" />
      </div>
    </footer>
  )
})

export { Footer }
