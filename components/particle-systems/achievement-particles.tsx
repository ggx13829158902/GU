"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { Trophy, Award, Star, Medal, Crown } from "lucide-react"

interface AchievementParticle {
  id: number
  x: number
  y: number
  icon: string
  color: string
  size: number
  speed: number
  opacity: number
  rotation: number
  scale: number
}

interface AchievementParticlesProps {
  count?: number
  className?: string
}

export function AchievementParticles({ count = 30, className = "" }: AchievementParticlesProps) {
  const [particles, setParticles] = useState<AchievementParticle[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // Generate random icon
  const getRandomIcon = () => {
    const icons = ["trophy", "award", "star", "medal", "crown"]
    return icons[Math.floor(Math.random() * icons.length)]
  }

  // Generate random color from achievement theme
  const getRandomColor = () => {
    const colors = [
      "rgba(250, 204, 21, 0.9)", // yellow
      "rgba(234, 179, 8, 0.9)", // amber
      "rgba(249, 115, 22, 0.9)", // orange
      "rgba(168, 85, 247, 0.9)", // purple
      "rgba(236, 72, 153, 0.9)", // pink
    ]
    return colors[Math.floor(Math.random() * colors.length)]
  }

  // Initialize particles
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

    // Initial measurement
    updateDimensions()

    // Set up resize listener
    window.addEventListener("resize", updateDimensions)

    return () => {
      window.removeEventListener("resize", updateDimensions)
    }
  }, [])

  // Create particles when dimensions are available
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return

    const newParticles: AchievementParticle[] = []
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        icon: getRandomIcon(),
        color: getRandomColor(),
        size: Math.random() * 16 + 12,
        speed: Math.random() * 1 + 0.5,
        opacity: Math.random() * 0.7 + 0.3,
        rotation: Math.random() * 360 - 180,
        scale: Math.random() * 0.5 + 0.5,
      })
    }
    setParticles(newParticles)
  }, [count, dimensions])

  const renderIcon = (icon: string, color: string, size: number) => {
    switch (icon) {
      case "trophy":
        return <Trophy size={size} color={color} />
      case "award":
        return <Award size={size} color={color} />
      case "star":
        return <Star size={size} color={color} />
      case "medal":
        return <Medal size={size} color={color} />
      case "crown":
        return <Crown size={size} color={color} />
      default:
        return <Star size={size} color={color} />
    }
  }

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: particle.x,
            top: particle.y,
            opacity: particle.opacity,
            transformStyle: "preserve-3d",
          }}
          animate={{
            y: [particle.y, particle.y - 150 * particle.speed, particle.y],
            x: [particle.x, particle.x + (Math.random() > 0.5 ? 1 : -1) * 80 * particle.speed, particle.x],
            opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
            scale: [particle.scale, particle.scale * 1.3, particle.scale],
            rotateZ: [0, particle.rotation, 0],
            rotateY: [0, 360, 0],
          }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 10,
          }}
        >
          <div className="filter drop-shadow-lg">{renderIcon(particle.icon, particle.color, particle.size)}</div>
        </motion.div>
      ))}
    </div>
  )
}
