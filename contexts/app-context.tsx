"use client"

import type React from "react"
import { createContext, useContext, useReducer, useCallback } from "react"

// 定义应用状态类型
interface AppState {
  isLoading: boolean
  currentPage: string
  particlesEnabled: boolean
  socialCardVisible: boolean
  userPreferences: {
    theme: "dark" | "light"
    animationsEnabled: boolean
  }
}

// 定义动作类型
type AppAction =
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_CURRENT_PAGE"; payload: string }
  | { type: "TOGGLE_PARTICLES"; payload: boolean }
  | { type: "TOGGLE_SOCIAL_CARD"; payload: boolean }
  | { type: "UPDATE_PREFERENCES"; payload: Partial<AppState["userPreferences"]> }

// 初始状态
const initialState: AppState = {
  isLoading: false,
  currentPage: "/",
  particlesEnabled: true,
  socialCardVisible: false, // 默认隐藏社交卡片
  userPreferences: {
    theme: "dark",
    animationsEnabled: true,
  },
}

// Reducer函数
function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: action.payload }
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload }
    case "TOGGLE_PARTICLES":
      return { ...state, particlesEnabled: action.payload }
    case "TOGGLE_SOCIAL_CARD":
      return { ...state, socialCardVisible: action.payload }
    case "UPDATE_PREFERENCES":
      return {
        ...state,
        userPreferences: { ...state.userPreferences, ...action.payload },
      }
    default:
      return state
  }
}

// Context类型定义
interface AppContextType {
  state: AppState
  setLoading: (loading: boolean) => void
  setCurrentPage: (page: string) => void
  toggleParticles: (enabled: boolean) => void
  toggleSocialCard: (visible: boolean) => void
  updatePreferences: (preferences: Partial<AppState["userPreferences"]>) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

// Provider组件
export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState)

  const setLoading = useCallback((loading: boolean) => {
    dispatch({ type: "SET_LOADING", payload: loading })
  }, [])

  const setCurrentPage = useCallback((page: string) => {
    dispatch({ type: "SET_CURRENT_PAGE", payload: page })
  }, [])

  const toggleParticles = useCallback((enabled: boolean) => {
    dispatch({ type: "TOGGLE_PARTICLES", payload: enabled })
  }, [])

  const toggleSocialCard = useCallback((visible: boolean) => {
    dispatch({ type: "TOGGLE_SOCIAL_CARD", payload: visible })
  }, [])

  const updatePreferences = useCallback((preferences: Partial<AppState["userPreferences"]>) => {
    dispatch({ type: "UPDATE_PREFERENCES", payload: preferences })
  }, [])

  const value: AppContextType = {
    state,
    setLoading,
    setCurrentPage,
    toggleParticles,
    toggleSocialCard,
    updatePreferences,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

// Hook for using context
export function useAppContext() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider")
  }
  return context
}
