"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

interface ThoughtParticle {
  id: number
  x: number
  y: number
  size: number
  color: string
  speed: number
  opacity: number
  depth: number
  isCloud: boolean
}

interface ThoughtParticlesProps {
  count?: number
  className?: string
}

export function ThoughtParticles({ count = 30, className = "" }: ThoughtParticlesProps) {
  const [particles, setParticles] = useState<ThoughtParticle[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // Generate random color from thought theme
  const getRandomColor = () => {
    const colors = [
      "rgba(129, 140, 248, 0.8)", // indigo
      "rgba(168, 85, 247, 0.8)", // purple
      "rgba(236, 72, 153, 0.8)", // pink
      "rgba(255, 255, 255, 0.8)", // white
      "rgba(192, 132, 252, 0.8)", // violet
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

    const newParticles: ThoughtParticle[] = []
    for (let i = 0; i < count; i++) {
      // Determine if this particle is a thought cloud or a bubble
      const isCloud = Math.random() > 0.7

      newParticles.push({
        id: i,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: isCloud ? Math.random() * 30 + 20 : Math.random() * 10 + 5,
        color: getRandomColor(),
        speed: Math.random() * 1 + 0.5,
        opacity: Math.random() * 0.7 + 0.3,
        depth: Math.random() * 10,
        isCloud,
      })
    }
    setParticles(newParticles)
  }, [count, dimensions])

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full ${particle.isCloud ? "rounded-[40%] shadow-lg" : ""}`}
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            left: particle.x,
            top: particle.y,
            opacity: particle.opacity,
            zIndex: Math.floor(particle.depth),
            transformStyle: "preserve-3d",
            filter: particle.isCloud ? "blur(2px)" : "blur(0px)",
          }}
          animate={{
            y: [particle.y, particle.y - 150 * particle.speed, particle.y],
            x: [particle.x, particle.x + (Math.random() > 0.5 ? 1 : -1) * 50 * particle.speed, particle.x],
            opacity: [particle.opacity, particle.opacity * 1.2, particle.opacity],
            scale: [1, particle.isCloud ? 1.3 : 1.1, 1],
            borderRadius: particle.isCloud ? ["40%", "60%", "40%"] : ["50%", "50%", "50%"],
          }}
          transition={{
            duration: particle.isCloud ? 15 : 10,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  )
}
