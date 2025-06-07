"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

interface MusicParticle {
  id: number
  x: number
  y: number
  symbol: string
  color: string
  size: number
  speed: number
  opacity: number
  rotation: number
}

interface MusicParticlesProps {
  count?: number
  className?: string
}

export function MusicParticles({ count = 40, className = "" }: MusicParticlesProps) {
  const [particles, setParticles] = useState<MusicParticle[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // Generate random music symbol
  const getRandomSymbol = () => {
    const symbols = ["♩", "♪", "♫", "♬", "𝄞", "𝄢", "𝅘𝅥𝅮", "𝅘𝅥𝅯", "𝅘𝅥𝅰"]
    return symbols[Math.floor(Math.random() * symbols.length)]
  }

  // Generate random color from music theme
  const getRandomColor = () => {
    const colors = [
      "rgba(74, 222, 128, 0.9)", // green
      "rgba(59, 130, 246, 0.9)", // blue
      "rgba(236, 72, 153, 0.9)", // pink
      "rgba(168, 85, 247, 0.9)", // purple
      "rgba(6, 182, 212, 0.9)", // cyan
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

    const newParticles: MusicParticle[] = []
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        symbol: getRandomSymbol(),
        color: getRandomColor(),
        size: Math.random() * 16 + 14,
        speed: Math.random() * 1 + 0.5,
        opacity: Math.random() * 0.7 + 0.3,
        rotation: Math.random() * 360 - 180,
      })
    }
    setParticles(newParticles)
  }, [count, dimensions])

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute font-serif"
          style={{
            fontSize: particle.size,
            color: particle.color,
            left: particle.x,
            top: particle.y,
            opacity: particle.opacity,
            transformStyle: "preserve-3d",
            filter: "drop-shadow(0 2px 5px rgba(0,0,0,0.3))",
          }}
          animate={{
            y: [particle.y, particle.y - 200 * particle.speed, particle.y],
            x: [particle.x, particle.x + (Math.random() > 0.5 ? 1 : -1) * 50 * particle.speed, particle.x],
            opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
            scale: [1, 1.3, 1],
            rotateZ: [0, particle.rotation, 0],
            rotateY: [0, 180, 0],
          }}
          transition={{
            duration: 12,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
          }}
        >
          {particle.symbol}
        </motion.div>
      ))}
    </div>
  )
}
