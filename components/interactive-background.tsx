"use client"

import { useEffect, useRef, useState, useCallback } from "react"

interface Constellation {
  id: number
  x: number
  y: number
  connections: number[]
}

export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [constellations, setConstellations] = useState<Constellation[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const animationFrameRef = useRef<number>()
  const dimensionsRef = useRef({ width: 0, height: 0 })

  // 使用 useCallback 缓存鼠标移动处理函数
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }, [])

  // 使用 useCallback 缓存画布尺寸调整函数
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    dimensionsRef.current = { width: canvas.width, height: canvas.height }
  }, [])

  // 使用 useCallback 缓存星座生成函数
  const generateConstellations = useCallback(() => {
    const { width, height } = dimensionsRef.current
    if (width === 0 || height === 0) return

    const points: Constellation[] = []
    const numPoints = 30

    for (let i = 0; i < numPoints; i++) {
      points.push({
        id: i,
        x: Math.random() * width,
        y: Math.random() * height,
        connections: [],
      })
    }

    // 创建连接
    points.forEach((point, index) => {
      const nearbyPoints = points.filter((other, otherIndex) => {
        if (otherIndex === index) return false
        const distance = Math.sqrt(Math.pow(point.x - other.x, 2) + Math.pow(point.y - other.y, 2))
        return distance < 150
      })

      point.connections = nearbyPoints.slice(0, 3).map((p) => p.id)
    })

    setConstellations(points)
  }, [])

  // 使用 useCallback 缓存动画函数
  const animate = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // 绘制连接线
    constellations.forEach((point) => {
      point.connections.forEach((connectionId) => {
        const connectedPoint = constellations[connectionId]
        if (!connectedPoint) return

        const distance = Math.sqrt(Math.pow(mousePosition.x - point.x, 2) + Math.pow(mousePosition.y - point.y, 2))
        const opacity = Math.max(0, 1 - distance / 200)

        ctx.beginPath()
        ctx.moveTo(point.x, point.y)
        ctx.lineTo(connectedPoint.x, connectedPoint.y)
        ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.3})`
        ctx.lineWidth = 1
        ctx.stroke()
      })
    })

    // 绘制星座点
    constellations.forEach((point) => {
      const distance = Math.sqrt(Math.pow(mousePosition.x - point.x, 2) + Math.pow(mousePosition.y - point.y, 2))
      const size = Math.max(1, 3 - distance / 100)
      const opacity = Math.max(0.3, 1 - distance / 300)

      ctx.beginPath()
      ctx.arc(point.x, point.y, size, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(147, 51, 234, ${opacity})`
      ctx.fill()
    })

    animationFrameRef.current = requestAnimationFrame(animate)
  }, [constellations, mousePosition])

  // 初始化画布和事件监听
  useEffect(() => {
    resizeCanvas()
    generateConstellations()

    window.addEventListener("resize", resizeCanvas)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [resizeCanvas, generateConstellations, handleMouseMove])

  // 启动动画循环
  useEffect(() => {
    if (constellations.length > 0) {
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [animate, constellations.length])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
  )
}
