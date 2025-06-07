"use client"

import type React from "react"

import { useAppContext } from "@/contexts/app-context"
import { useEffect } from "react"

interface ClientPageWrapperProps {
  children: React.ReactNode
  pagePath: string
}

export function ClientPageWrapper({ children, pagePath }: ClientPageWrapperProps) {
  const { setCurrentPage } = useAppContext()

  useEffect(() => {
    setCurrentPage(pagePath)
  }, [pagePath, setCurrentPage])

  return <>{children}</>
}
