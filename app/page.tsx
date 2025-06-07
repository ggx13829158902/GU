"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { User, Lock, Eye, EyeOff, Home, Users } from "lucide-react"
import { PlantButton } from "@/components/plant-button"
import { DormitoryContent } from "@/components/dormitory-content"

export default function LoginInterface() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  useEffect(() => {
    // Create background music element
    const backgroundMusic = document.createElement("audio")
    backgroundMusic.src = "/music/shining.mp3"
    backgroundMusic.loop = true
    backgroundMusic.autoplay = true
    backgroundMusic.volume = 0.3
    backgroundMusic.style.display = "none"
    document.body.appendChild(backgroundMusic)

    // Attempt to play (browsers may block autoplay)
    const playPromise = backgroundMusic.play()
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.log("Autoplay prevented:", error)
      })
    }

    return () => {
      document.body.removeChild(backgroundMusic)
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate login process
    if (formData.username && formData.password) {
      setIsLoggedIn(true)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (isLoggedIn) {
    return <DormitoryContent />
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/640.jpg')`,
          filter: "brightness(0.7)",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* College Logo in Top-Left */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-6 left-6 z-20"
      >
        <img src="/images/2.jpg" alt="Guangzhou City Construction College" className="h-16 w-auto drop-shadow-lg" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-md"
        >
          {/* Login Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
            {/* Header */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex justify-center mb-4"
              >
                <img src="/images/1.jpg" alt="Youth League Emblem" className="h-20 w-20" />
              </motion.div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">共创和谐宿舍</h1>
              <p className="text-gray-600 text-sm">广州城建职业学院清远校区</p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Username Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="用户名"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="密码"
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>

              {/* Plant-based Login Button */}
              <div className="flex justify-center">
                <PlantButton onClick={handleLogin} />
              </div>
            </form>

            {/* Additional Options */}
            <div className="mt-6 text-center">
              <a href="#" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                忘记密码？
              </a>
            </div>
          </div>

          {/* Feature Preview Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 grid grid-cols-2 gap-4"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
              <Home className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <p className="text-sm text-gray-700">宿舍管理</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
              <Users className="h-6 w-6 text-green-600 mx-auto mb-2" />
              <p className="text-sm text-gray-700">团员示范</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute bottom-10 right-10 opacity-20">
        <img src="/images/10.jpg" alt="Clean Dormitory" className="w-32 h-24 object-cover rounded-lg" />
      </div>
    </div>
  )
}
