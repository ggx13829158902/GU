"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
  speed: number
  opacity: number
  depth: number
  rotation: number
}

interface SpaceParticlesProps {
  count?: number
  className?: string
}

export function SpaceParticles({ count = 100, className = "" }: SpaceParticlesProps) {
  const [particles, setParticles] = useState<Particle[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // Generate random color from space theme
  const getRandomColor = () => {
    const colors = [
      "rgba(59, 130, 246, 0.8)", // blue
      "rgba(147, 51, 234, 0.8)", // purple
      "rgba(236, 72, 153, 0.8)", // pink
      "rgba(6, 182, 212, 0.8)", // cyan
      "rgba(255, 255, 255, 0.8)", // white
      "rgba(250, 204, 21, 0.8)", // yellow
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

    const newParticles: Particle[] = []
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: Math.random() * 3 + 1,
        color: getRandomColor(),
        speed: Math.random() * 1 + 0.5,
        opacity: Math.random() * 0.7 + 0.3,
        depth: Math.random() * 10,
        rotation: Math.random() * 360,
      })
    }
    setParticles(newParticles)
  }, [count, dimensions])

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            left: particle.x,
            top: particle.y,
            opacity: particle.opacity,
            zIndex: Math.floor(particle.depth),
            transformStyle: "preserve-3d",
          }}
          animate={{
            y: [particle.y, particle.y - 100 * particle.speed, particle.y],
            x: [particle.x, particle.x + (Math.random() > 0.5 ? 1 : -1) * 50 * particle.speed, particle.x],
            opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
            scale: [1, 1.2, 1],
            rotateZ: [0, particle.rotation, 0],
          }}
          transition={{
            duration: 10 + particle.depth * 2,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  )
}
