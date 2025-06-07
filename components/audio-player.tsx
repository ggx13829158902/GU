"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Volume2, VolumeX, Play, Pause } from "lucide-react"

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(0.3)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // 设置音频属性
    audio.volume = volume
    audio.loop = true

    // 尝试自动播放
    const playAudio = async () => {
      try {
        await audio.play()
        setIsPlaying(true)
      } catch (error) {
        console.log("自动播放被阻止，需要用户交互")
        setIsPlaying(false)
      }
    }

    // 延迟一点时间再播放，确保页面加载完成
    const timer = setTimeout(playAudio, 1000)

    return () => clearTimeout(timer)
  }, [volume])

  const togglePlay = async () => {
    const audio = audioRef.current
    if (!audio) return

    try {
      if (isPlaying) {
        audio.pause()
        setIsPlaying(false)
      } else {
        await audio.play()
        setIsPlaying(true)
      }
    } catch (error) {
      console.log("播放失败:", error)
    }
  }

  const toggleMute = () => {
    const audio = audioRef.current
    if (!audio) return

    audio.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number.parseFloat(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-6 right-6 z-40 bg-slate-800/90 backdrop-blur-md rounded-lg p-4 border border-blue-500/30 shadow-xl"
    >
      <audio ref={audioRef} preload="auto">
        <source src="/music/shining.mp3" type="audio/mpeg" />
        您的浏览器不支持音频播放。
      </audio>

      <div className="flex items-center space-x-3">
        {/* 播放/暂停按钮 */}
        <motion.button
          onClick={togglePlay}
          className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
        </motion.button>

        {/* 音量控制 */}
        <div className="flex items-center space-x-2">
          <motion.button
            onClick={toggleMute}
            className="text-blue-300 hover:text-blue-100 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </motion.button>

          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="w-16 h-1 bg-slate-600 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>

        {/* 歌曲信息 */}
        <div className="text-xs text-blue-200">
          <div className="font-medium">闪耀</div>
          <div className="text-blue-300/80">汪苏泷</div>
        </div>

        {/* 音波可视化 */}
        <div className="flex items-center space-x-0.5">
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-0.5 bg-gradient-to-t from-blue-400 to-purple-400 rounded-full"
              animate={
                isPlaying
                  ? {
                      height: [4, Math.random() * 12 + 4, 4],
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
    </motion.div>
  )
}
