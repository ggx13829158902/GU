"use client"

import { useState } from "react"

import { useEffect, useRef, useCallback, type DependencyList } from "react"

/**
 * 优化的useEffect Hook
 * 提供更好的依赖管理和性能优化
 */
export function useOptimizedEffect(
  effect: () => void | (() => void),
  deps: DependencyList,
  options?: {
    skipFirstRender?: boolean
    debounceMs?: number
  },
) {
  const { skipFirstRender = false, debounceMs = 0 } = options || {}
  const isFirstRender = useRef(true)
  const timeoutRef = useRef<NodeJS.Timeout>()
  const cleanupRef = useRef<(() => void) | void>()

  const debouncedEffect = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      // 清理之前的副作用
      if (cleanupRef.current) {
        cleanupRef.current()
      }

      // 执行新的副作用
      cleanupRef.current = effect()
    }, debounceMs)
  }, [effect, debounceMs])

  useEffect(() => {
    if (skipFirstRender && isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    if (debounceMs > 0) {
      debouncedEffect()
    } else {
      // 清理之前的副作用
      if (cleanupRef.current) {
        cleanupRef.current()
      }
      // 执行新的副作用
      cleanupRef.current = effect()
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      if (cleanupRef.current) {
        cleanupRef.current()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  // 组件卸载时清理
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      if (cleanupRef.current) {
        cleanupRef.current()
      }
    }
  }, [])
}

/**
 * 优化的useCallback Hook
 * 提供更稳定的依赖管理
 */
export function useStableCallback<T extends (...args: any[]) => any>(callback: T, deps: DependencyList): T {
  const callbackRef = useRef<T>(callback)
  const depsRef = useRef<DependencyList>(deps)

  // 检查依赖是否真正改变
  const depsChanged = deps.some((dep, index) => {
    return !Object.is(dep, depsRef.current[index])
  })

  if (depsChanged) {
    callbackRef.current = callback
    depsRef.current = deps
  }

  return useCallback(callbackRef.current, deps)
}

/**
 * 防抖Hook
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

/**
 * 节流Hook
 */
export function useThrottle<T>(value: T, delay: number): T {
  const [throttledValue, setThrottledValue] = useState<T>(value)
  const lastExecuted = useRef<number>(Date.now())

  useEffect(() => {
    const now = Date.now()
    const timeSinceLastExecution = now - lastExecuted.current

    if (timeSinceLastExecution >= delay) {
      setThrottledValue(value)
      lastExecuted.current = now
    } else {
      const timer = setTimeout(() => {
        setThrottledValue(value)
        lastExecuted.current = Date.now()
      }, delay - timeSinceLastExecution)

      return () => clearTimeout(timer)
    }
  }, [value, delay])

  return throttledValue
}
