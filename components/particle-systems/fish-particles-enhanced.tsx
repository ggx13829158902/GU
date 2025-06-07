"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { DOMSafeWrapper } from "@/components/dom-safe-wrapper"

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
  schoolId: number
}

interface Bubble {
  id: number
  x: number
  y: number
  size: number
  speed: number
  opacity: number
}

interface FishParticlesEnhancedProps {
  count?: number
  className?: string
  enabled?: boolean
}

export function FishParticlesEnhanced({ count = 15, className = "", enabled = true }: FishParticlesEnhancedProps) {
  const [fish, setFish] = useState<Fish[]>([])
  const [bubbles, setBubbles] = useState<Bubble[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const animationFrameRef = useRef<number>()
  const dimensionsRef = useRef({ width: 0, height: 0 })

  // 使用 useCallback 缓存颜色生成函数
  const getRandomFishColor = useCallback(() => {
    const colors = [
      "rgba(59, 130, 246, 0.8)",
      "rgba(147, 51, 234, 0.7)",
      "rgba(6, 182, 212, 0.8)",
      "rgba(34, 197, 94, 0.7)",
      "rgba(236, 72, 153, 0.6)",
      "rgba(251, 191, 36, 0.8)",
    ]
    return colors[Math.floor(Math.random() * colors.length)]
  }, [])

  // 使用 useCallback 缓存类型生成函数
  const getRandomFishType = useCallback((): "fish1" | "fish2" | "fish3" => {
    const types: ("fish1" | "fish2" | "fish3")[] = ["fish1", "fish2", "fish3"]
    return types[Math.floor(Math.random() * types.length)]
  }, [])

  // 使用 useCallback 缓存尺寸更新函数
  const updateDimensions = useCallback(() => {
    if (!containerRef.current) return

    const { offsetWidth, offsetHeight } = containerRef.current
    const newDimensions = { width: offsetWidth, height: offsetHeight }

    // 只有当尺寸真正改变时才更新状态
    if (dimensionsRef.current.width !== newDimensions.width || dimensionsRef.current.height !== newDimensions.height) {
      dimensionsRef.current = newDimensions
      setDimensions(newDimensions)
    }
  }, [])

  // 使用 useCallback 缓存鱼群创建函数
  const createFishSchool = useCallback(
    (schoolId: number, centerX: number, centerY: number, fishCount: number) => {
      const schoolFish: Fish[] = []
      for (let i = 0; i < fishCount; i++) {
        const angle = (i / fishCount) * Math.PI * 2
        const radius = 50 + Math.random() * 30
        schoolFish.push({
          id: schoolId * 100 + i,
          x: centerX + Math.cos(angle) * radius,
          y: centerY + Math.sin(angle) * radius,
          size: Math.random() * 25 + 15,
          color: getRandomFishColor(),
          speed: Math.random() * 1.5 + 0.5,
          direction: Math.random() * Math.PI * 2,
          opacity: Math.random() * 0.6 + 0.4,
          type: getRandomFishType(),
          tailOffset: Math.random() * Math.PI,
          schoolId,
        })
      }
      return schoolFish
    },
    [getRandomFishColor, getRandomFishType],
  )

  // 使用 useCallback 缓存气泡创建函数
  const createBubbles = useCallback((bubbleCount: number, width: number, height: number) => {
    const newBubbles: Bubble[] = []
    for (let i = 0; i < bubbleCount; i++) {
      newBubbles.push({
        id: i,
        x: Math.random() * width,
        y: height + Math.random() * 100,
        size: Math.random() * 8 + 2,
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.6 + 0.2,
      })
    }
    return newBubbles
  }, [])

  // 使用 useCallback 缓存动画函数
  const animate = useCallback(() => {
    if (!enabled) return

    const { width, height } = dimensionsRef.current
    if (width === 0 || height === 0) return

    setFish((prevFish) =>
      prevFish.map((fishItem) => {
        let newX = fishItem.x + Math.cos(fishItem.direction) * fishItem.speed
        let newY = fishItem.y + Math.sin(fishItem.direction) * fishItem.speed

        // 边界检测和转向
        if (newX < 0 || newX > width) {
          fishItem.direction = Math.PI - fishItem.direction
        }
        if (newY < 0 || newY > height) {
          fishItem.direction = -fishItem.direction
        }

        // 保持在边界内
        newX = Math.max(0, Math.min(width, newX))
        newY = Math.max(0, Math.min(height, newY))

        return {
          ...fishItem,
          x: newX,
          y: newY,
        }
      }),
    )

    setBubbles((prevBubbles) =>
      prevBubbles.map((bubble) => {
        const newY = bubble.y - bubble.speed
        if (newY < -bubble.size) {
          return {
            ...bubble,
            x: Math.random() * width,
            y: height + bubble.size,
          }
        }
        return { ...bubble, y: newY }
      }),
    )

    animationFrameRef.current = requestAnimationFrame(animate)
  }, [enabled])

  // 使用 useCallback 缓存鱼类渲染函数
  const renderFish = useCallback((fishData: Fish) => {
    const { size, color, type } = fishData

    const fishSvgs = {
      fish1: (
        <svg width={size} height={size * 0.6} viewBox="0 0 100 60" className="drop-shadow-lg">
          <ellipse cx="40" cy="30" rx="25" ry="15" fill={color} />
          <circle cx="25" cy="30" r="12" fill={color} />
          <circle cx="20" cy="26" r="3" fill="white" />
          <circle cx="19" cy="25" r="1.5" fill="black" />
          <path d="M 65 30 L 85 20 L 90 30 L 85 40 Z" fill={color} opacity="0.8" />
          <ellipse cx="35" cy="45" rx="8" ry="4" fill={color} opacity="0.7" />
          <ellipse cx="35" cy="15" rx="8" ry="4" fill={color} opacity="0.7" />
        </svg>
      ),
      fish2: (
        <svg width={size} height={size * 0.7} viewBox="0 0 100 70" className="drop-shadow-lg">
          <path d="M 20 35 Q 50 20 70 35 Q 50 50 20 35" fill={color} />
          <circle cx="30" cy="32" r="4" fill="white" />
          <circle cx="28" cy="30" r="2" fill="black" />
          <path d="M 70 35 L 90 25 L 95 35 L 90 45 Z" fill={color} opacity="0.9" />
          <path d="M 40 20 Q 45 10 50 20" fill={color} opacity="0.8" />
          <path d="M 35 50 Q 40 60 45 50" fill={color} opacity="0.8" />
        </svg>
      ),
      fish3: (
        <svg width={size} height={size * 0.5} viewBox="0 0 100 50" className="drop-shadow-lg">
          <ellipse cx="35" cy="25" rx="20" ry="10" fill={color} />
          <circle cx="20" cy="25" r="8" fill={color} />
          <circle cx="16" cy="22" r="2.5" fill="white" />
          <circle cx="15" cy="21" r="1" fill="black" />
          <path d="M 55 25 L 75 15 L 80 25 L 75 35 Z" fill={color} opacity="0.85" />
          <ellipse cx="30" cy="35" rx="6" ry="3" fill={color} opacity="0.7" />
        </svg>
      ),
    }

    return fishSvgs[type]
  }, [])

  // 初始化尺寸监听
  useEffect(() => {
    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [updateDimensions])

  // 初始化鱼群和气泡
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0 || !enabled) return

    const allFish: Fish[] = []
    const schoolCount = Math.ceil(count / 5)

    for (let i = 0; i < schoolCount; i++) {
      const centerX = Math.random() * dimensions.width
      const centerY = Math.random() * dimensions.height
      const fishInSchool = Math.min(5, count - allFish.length)
      allFish.push(...createFishSchool(i, centerX, centerY, fishInSchool))
    }

    setFish(allFish)
    setBubbles(createBubbles(8, dimensions.width, dimensions.height))
  }, [count, dimensions.width, dimensions.height, enabled, createFishSchool, createBubbles])

  // 启动动画循环
  useEffect(() => {
    if (!enabled || dimensions.width === 0 || dimensions.height === 0) return

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [animate, enabled, dimensions.width, dimensions.height])

  if (!enabled) return null

  return (
    <DOMSafeWrapper>
      <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        <AnimatePresence mode="wait">
          {/* 渲染鱼群 */}
          {fish.map((fishData) => (
            <motion.div
              key={fishData.id}
              className="absolute"
              style={{
                left: fishData.x,
                top: fishData.y,
                opacity: fishData.opacity,
                transform: `rotate(${fishData.direction}rad)`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: fishData.opacity, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.5 }}
            >
              {renderFish(fishData)}
            </motion.div>
          ))}

          {/* 渲染气泡 */}
          {bubbles.map((bubble) => (
            <motion.div
              key={bubble.id}
              className="absolute rounded-full bg-blue-300/30"
              style={{
                left: bubble.x,
                top: bubble.y,
                width: bubble.size,
                height: bubble.size,
                opacity: bubble.opacity,
              }}
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}
        </AnimatePresence>

        {/* 水波纹效果 */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 border border-blue-400/10 rounded-full"
              animate={{
                scale: [0, 2],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 1.5,
              }}
            />
          ))}
        </div>
      </div>
    </DOMSafeWrapper>
  )
}
