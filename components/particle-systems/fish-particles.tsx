"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

interface Fish {
  id: number
  x: number
  y: number
  size: number
  color: string
  speed: number
  direction: number
  opacity: number
  type: "fish1" | "fish2" | "fish3"
  tailOffset: number
}

interface FishParticlesProps {
  count?: number
  className?: string
}

export function FishParticles({ count = 12, className = "" }: FishParticlesProps) {
  const [fish, setFish] = useState<Fish[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // 生成随机鱼类颜色
  const getRandomFishColor = () => {
    const colors = [
      "rgba(59, 130, 246, 0.8)", // 蓝色
      "rgba(147, 51, 234, 0.7)", // 紫色
      "rgba(6, 182, 212, 0.8)", // 青色
      "rgba(34, 197, 94, 0.7)", // 绿色
      "rgba(236, 72, 153, 0.6)", // 粉色
      "rgba(251, 191, 36, 0.8)", // 黄色
    ]
    return colors[Math.floor(Math.random() * colors.length)]
  }

  // 生成随机鱼类型
  const getRandomFishType = (): "fish1" | "fish2" | "fish3" => {
    const types: ("fish1" | "fish2" | "fish3")[] = ["fish1", "fish2", "fish3"]
    return types[Math.floor(Math.random() * types.length)]
  }

  // 初始化尺寸
  useEffect(() => {
    if (!containerRef.current) return

    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  // 创建鱼群
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return

    const newFish: Fish[] = []
    for (let i = 0; i < count; i++) {
      newFish.push({
        id: i,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: Math.random() * 30 + 20,
        color: getRandomFishColor(),
        speed: Math.random() * 1.5 + 0.5,
        direction: Math.random() * Math.PI * 2,
        opacity: Math.random() * 0.6 + 0.4,
        type: getRandomFishType(),
        tailOffset: Math.random() * Math.PI,
      })
    }
    setFish(newFish)
  }, [count, dimensions])

  // 渲染不同类型的鱼
  const renderFish = (fishData: Fish) => {
    const { size, color, type } = fishData

    switch (type) {
      case "fish1":
        return (
          <svg width={size} height={size * 0.6} viewBox="0 0 100 60" className="drop-shadow-lg">
            {/* 鱼身 */}
            <ellipse cx="40" cy="30" rx="25" ry="15" fill={color} />
            {/* 鱼头 */}
            <circle cx="25" cy="30" r="12" fill={color} />
            {/* 鱼眼 */}
            <circle cx="20" cy="26" r="3" fill="white" />
            <circle cx="19" cy="25" r="1.5" fill="black" />
            {/* 鱼尾 */}
            <path d="M 65 30 L 85 20 L 90 30 L 85 40 Z" fill={color} opacity="0.8" />
            {/* 鱼鳍 */}
            <ellipse cx="35" cy="45" rx="8" ry="4" fill={color} opacity="0.7" />
            <ellipse cx="35" cy="15" rx="8" ry="4" fill={color} opacity="0.7" />
          </svg>
        )
      case "fish2":
        return (
          <svg width={size} height={size * 0.7} viewBox="0 0 100 70" className="drop-shadow-lg">
            {/* 鱼身 */}
            <path d="M 20 35 Q 50 20 70 35 Q 50 50 20 35" fill={color} />
            {/* 鱼眼 */}
            <circle cx="30" cy="32" r="4" fill="white" />
            <circle cx="28" cy="30" r="2" fill="black" />
            {/* 鱼尾 */}
            <path d="M 70 35 L 90 25 L 95 35 L 90 45 Z" fill={color} opacity="0.9" />
            {/* 背鳍 */}
            <path d="M 40 20 Q 45 10 50 20" fill={color} opacity="0.8" />
            {/* 腹鳍 */}
            <path d="M 35 50 Q 40 60 45 50" fill={color} opacity="0.8" />
          </svg>
        )
      case "fish3":
        return (
          <svg width={size} height={size * 0.5} viewBox="0 0 100 50" className="drop-shadow-lg">
            {/* 鱼身 */}
            <ellipse cx="35" cy="25" rx="20" ry="10" fill={color} />
            {/* 鱼头 */}
            <circle cx="20" cy="25" r="8" fill={color} />
            {/* 鱼眼 */}
            <circle cx="16" cy="22" r="2.5" fill="white" />
            <circle cx="15" cy="21" r="1" fill="black" />
            {/* 鱼尾 */}
            <path d="M 55 25 L 75 15 L 80 25 L 75 35 Z" fill={color} opacity="0.85" />
            {/* 鱼鳍 */}
            <ellipse cx="30" cy="35" rx="6" ry="3" fill={color} opacity="0.7" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {fish.map((fishData) => (
        <motion.div
          key={fishData.id}
          className="absolute"
          style={{
            opacity: fishData.opacity,
            transform: `rotate(${fishData.direction}rad)`,
          }}
          animate={{
            x: [
              fishData.x,
              fishData.x + Math.cos(fishData.direction) * 200,
              fishData.x + Math.cos(fishData.direction) * 400,
              fishData.x + Math.cos(fishData.direction) * 600,
              fishData.x,
            ],
            y: [
              fishData.y,
              fishData.y + Math.sin(fishData.direction) * 100 + Math.sin(fishData.tailOffset) * 20,
              fishData.y + Math.sin(fishData.direction) * 200 + Math.sin(fishData.tailOffset + Math.PI) * 20,
              fishData.y + Math.sin(fishData.direction) * 300 + Math.sin(fishData.tailOffset) * 20,
              fishData.y,
            ],
            rotate: [
              fishData.direction * (180 / Math.PI),
              fishData.direction * (180 / Math.PI) + 15,
              fishData.direction * (180 / Math.PI) - 15,
              fishData.direction * (180 / Math.PI) + 10,
              fishData.direction * (180 / Math.PI),
            ],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
          }}
        >
          {renderFish(fishData)}
        </motion.div>
      ))}

      {/* 水泡效果 */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`bubble-${i}`}
          className="absolute w-2 h-2 bg-blue-300/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${100 + Math.random() * 50}%`,
          }}
          animate={{
            y: [-50, -dimensions.height - 100],
            opacity: [0, 0.7, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            ease: "easeOut",
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 2,
          }}
        />
      ))}
    </div>
  )
}
