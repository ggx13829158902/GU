"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, X, Home, FlaskRoundIcon as Flask, Trophy, Heart, BookOpen, Briefcase, User } from "lucide-react"
import { useAppContext } from "@/contexts/app-context"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { state } = useAppContext()

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const navItems = [
    { name: "首页", href: "/", icon: Home },
    { name: "实验室", href: "/lab", icon: Flask },
    { name: "成就", href: "/achievements", icon: Trophy },
    { name: "兴趣", href: "/interests", icon: Heart },
    { name: "博客", href: "/blog", icon: BookOpen },
    { name: "作品集", href: "/portfolio", icon: Briefcase },
    { name: "INFP空间", href: "/infp-space", icon: User },
    { name: "登录系统", href: "/login", icon: User },
  ]

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-blue-500/20">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            DeepHue
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.href)
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-1 ${
                  active ? "bg-blue-500/20 text-blue-300" : "text-blue-300/70 hover:bg-blue-500/10 hover:text-blue-200"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            )
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-300 hover:text-blue-100 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-slate-800/95 backdrop-blur-md border-b border-blue-500/20"
        >
          <nav className="container mx-auto px-4 py-3 flex flex-col space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const active = isActive(item.href)
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-colors flex items-center space-x-3 ${
                    active
                      ? "bg-blue-500/20 text-blue-300"
                      : "text-blue-300/70 hover:bg-blue-500/10 hover:text-blue-200"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>
        </motion.div>
      )}
    </header>
  )
}
