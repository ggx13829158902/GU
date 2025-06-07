"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Home, User, Trophy, Heart, FileText, Beaker, LogIn } from "lucide-react"
import Link from "next/link"
import { useAppContext } from "@/contexts/app-context"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { state } = useAppContext()

  const navItems = [
    { href: "/", label: "首页", icon: Home },
    { href: "/lab", label: "实验室", icon: Beaker },
    { href: "/achievements", label: "成就", icon: Trophy },
    { href: "/interests", label: "兴趣", icon: Heart },
    { href: "/blog", label: "博客", icon: FileText },
    { href: "/portfolio", label: "作品集", icon: User },
    { href: "/infp-space", label: "INFP空间", icon: Heart },
    { href: "/login", label: "登录系统", icon: LogIn },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-blue-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              DeepHue
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-1 text-blue-200 hover:text-blue-100 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-blue-200 hover:text-blue-100 transition-colors">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 border-t border-blue-500/30"
          >
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-2 text-blue-200 hover:text-blue-100 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </motion.div>
        )}
      </div>
    </nav>
  )
}
