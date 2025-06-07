"use client"

import { useEffect, useState, useCallback } from "react"

/**
 * 安全DOM操作Hook
 * 提供安全的DOM操作方法，避免"节点不是父节点的子节点"错误
 */
export function useSafeDOM() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  /**
   * 安全地移除DOM节点
   */
  const safeRemoveNode = useCallback(
    (node: Node | null) => {
      if (!isMounted || !node) return false

      try {
        // 检查节点是否存在于DOM中
        if (!document.contains(node)) {
          console.warn("节点不在DOM中，无法移除")
          return false
        }

        // 检查节点是否有父节点
        if (!node.parentNode) {
          console.warn("节点没有父节点，无法移除")
          return false
        }

        // 检查节点是否确实是父节点的子节点
        if (!node.parentNode.contains(node)) {
          console.warn("节点不是父节点的子节点")
          return false
        }

        // 安全移除节点
        node.parentNode.removeChild(node)
        return true
      } catch (error) {
        console.error("移除节点时发生错误:", error)
        return false
      }
    },
    [isMounted],
  )

  /**
   * 安全地查询DOM元素
   */
  const safeQuerySelector = useCallback(
    (selector: string): Element | null => {
      if (!isMounted) return null

      try {
        return document.querySelector(selector)
      } catch (error) {
        console.error("查询选择器错误:", error)
        return null
      }
    },
    [isMounted],
  )

  /**
   * 安全地查询多个DOM元素
   */
  const safeQuerySelectorAll = useCallback(
    (selector: string): NodeListOf<Element> | null => {
      if (!isMounted) return null

      try {
        return document.querySelectorAll(selector)
      } catch (error) {
        console.error("查询选择器错误:", error)
        return null
      }
    },
    [isMounted],
  )

  /**
   * 等待DOM元素出现
   */
  const waitForElement = useCallback(
    (selector: string, timeout = 5000): Promise<Element | null> => {
      return new Promise((resolve) => {
        if (!isMounted) {
          resolve(null)
          return
        }

        const element = safeQuerySelector(selector)
        if (element) {
          resolve(element)
          return
        }

        const observer = new MutationObserver(() => {
          const element = safeQuerySelector(selector)
          if (element) {
            observer.disconnect()
            resolve(element)
          }
        })

        observer.observe(document.body, {
          childList: true,
          subtree: true,
        })

        // 超时处理
        setTimeout(() => {
          observer.disconnect()
          resolve(null)
        }, timeout)
      })
    },
    [isMounted, safeQuerySelector],
  )

  return {
    isMounted,
    safeRemoveNode,
    safeQuerySelector,
    safeQuerySelectorAll,
    waitForElement,
  }
}
