"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

interface CodeParticle {
  id: number
  x: number
  y: number
  character: string
  color: string
  size: number
  speed: number
  opacity: number
  rotation: number
}

interface CodeParticlesProps {
  count?: number
  className?: string
}

export function CodeParticles({ count = 50, className = "" }: CodeParticlesProps) {
  const [particles, setParticles] = useState<CodeParticle[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // Generate random code character
  const getRandomCharacter = () => {
    const codeChars = "01{}[];:=><+-*/&|!?.$#@()".split("")
    return codeChars[Math.floor(Math.random() * codeChars.length)]
  }

  // Generate random color from code theme
  const getRandomColor = () => {
    const colors = [
      "rgba(74, 222, 128, 0.9)", // green
      "rgba(59, 130, 246, 0.9)", // blue
      "rgba(236, 72, 153, 0.9)", // pink
      "rgba(250, 204, 21, 0.9)", // yellow
      "rgba(129, 140, 248, 0.9)", // indigo
      "rgba(168, 85, 247, 0.9)", // purple
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

    const newParticles: CodeParticle[] = []
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        character: getRandomCharacter(),
        color: getRandomColor(),
        size: Math.random() * 10 + 10,
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
          className="absolute font-mono font-bold"
          style={{
            fontSize: particle.size,
            color: particle.color,
            left: particle.x,
            top: particle.y,
            opacity: particle.opacity,
            transformStyle: "preserve-3d",
          }}
          animate={{
            y: [particle.y, particle.y + 200 * particle.speed, particle.y],
            x: [particle.x, particle.x + (Math.random() > 0.5 ? 1 : -1) * 100 * particle.speed, particle.x],
            opacity: [particle.opacity, particle.opacity * 0.5, particle.opacity],
            scale: [1, 1.2, 1],
            rotateZ: [0, particle.rotation, 0],
            rotateY: [0, 180, 0],
          }}
          transition={{
            duration: 15,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
          }}
        >
          {particle.character}
        </motion.div>
      ))}
    </div>
  )
}
