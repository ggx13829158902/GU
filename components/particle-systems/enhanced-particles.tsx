"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { motion } from "framer-motion"

interface EnhancedParticle {
  id: number
  x: number
  y: number
  size: number
  color: string
  speed: number
  opacity: number
  depth: number
  rotation: number
  type: "star" | "dot" | "triangle" | "diamond"
  trail: { x: number; y: number }[]
}

interface EnhancedParticlesProps {
  count?: number
  className?: string
  interactive?: boolean
}

export function EnhancedParticles({ count = 80, className = "", interactive = true }: EnhancedParticlesProps) {
  const [particles, setParticles] = useState<EnhancedParticle[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // 使用 useCallback 缓存颜色生成函数
  const getRandomColor = useCallback(() => {
    const colors = [
      "rgba(59, 130, 246, 0.8)",
      "rgba(147, 51, 234, 0.8)",
      "rgba(236, 72, 153, 0.8)",
      "rgba(6, 182, 212, 0.8)",
      "rgba(255, 255, 255, 0.9)",
      "rgba(250, 204, 21, 0.8)",
      "rgba(34, 197, 94, 0.8)",
    ]
    return colors[Math.floor(Math.random() * colors.length)]
  }, [])

  // 使用 useCallback 缓存类型生成函数
  const getRandomType = useCallback((): "star" | "dot" | "triangle" | "diamond" => {
    const types: ("star" | "dot" | "triangle" | "diamond")[] = ["star", "dot", "triangle", "diamond"]
    return types[Math.floor(Math.random() * types.length)]
  }, [])

  // 使用 useCallback 缓存鼠标移动处理函数
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }, [])

  // 使用 useCallback 缓存尺寸更新函数
  const updateDimensions = useCallback(() => {
    if (containerRef.current) {
      const { offsetWidth, offsetHeight } = containerRef.current
      setDimensions({ width: offsetWidth, height: offsetHeight })
    }
  }, [])

  // 使用 useCallback 缓存粒子渲染函数
  const renderParticle = useCallback((particle: EnhancedParticle) => {
    const baseStyle = {
      width: particle.size,
      height: particle.size,
      left: particle.x,
      top: particle.y,
      opacity: particle.opacity,
      zIndex: Math.floor(particle.depth),
      transformStyle: "preserve-3d" as const,
    }

    switch (particle.type) {
      case "star":
        return (
          <div className="absolute" style={baseStyle}>
            <svg viewBox="0 0 24 24" fill={particle.color} className="w-full h-full">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        )
      case "triangle":
        return (
          <div
            className="absolute"
            style={{
              ...baseStyle,
              width: 0,
              height: 0,
              borderLeft: `${particle.size / 2}px solid transparent`,
              borderRight: `${particle.size / 2}px solid transparent`,
              borderBottom: `${particle.size}px solid ${particle.color}`,
            }}
          />
        )
      case "diamond":
        return (
          <div
            className="absolute rotate-45"
            style={{
              ...baseStyle,
              backgroundColor: particle.color,
            }}
          />
        )
      default:
        return (
          <div
            className="absolute rounded-full"
            style={{
              ...baseStyle,
              backgroundColor: particle.color,
            }}
          />
        )
    }
  }, [])

  // 鼠标移动事件监听
  useEffect(() => {
    if (!interactive) return

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [interactive, handleMouseMove])

  // 尺寸监听
  useEffect(() => {
    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [updateDimensions])

  // 创建粒子
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return

    const newParticles: EnhancedParticle[] = []
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: Math.random() * 4 + 1,
        color: getRandomColor(),
        speed: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        depth: Math.random() * 10,
        rotation: Math.random() * 360,
        type: getRandomType(),
        trail: [],
      })
    }
    setParticles(newParticles)
  }, [count, dimensions.width, dimensions.height, getRandomColor, getRandomType])

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden ${className}`}>
      {particles.map((particle) => {
        // 计算鼠标影响
        const distanceToMouse = interactive
          ? Math.sqrt(Math.pow(mousePosition.x - particle.x, 2) + Math.pow(mousePosition.y - particle.y, 2))
          : 1000
        const mouseInfluence = interactive && distanceToMouse < 100 ? (100 - distanceToMouse) / 100 : 0

        return (
          <motion.div
            key={particle.id}
            animate={{
              y: [particle.y, particle.y - 100 * particle.speed - mouseInfluence * 50, particle.y],
              x: [
                particle.x,
                particle.x + (Math.random() > 0.5 ? 1 : -1) * 50 * particle.speed + mouseInfluence * 30,
                particle.x,
              ],
              opacity: [particle.opacity, particle.opacity * (1.5 + mouseInfluence), particle.opacity],
              scale: [1, 1.2 + mouseInfluence * 0.5, 1],
              rotateZ: [0, particle.rotation + mouseInfluence * 180, 0],
            }}
            transition={{
              duration: 8 + particle.depth * 2 - mouseInfluence * 2,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          >
            {renderParticle(particle)}
          </motion.div>
        )
      })}
    </div>
  )
}
