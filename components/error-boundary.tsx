"use client"

import { Component, type ReactNode, type ErrorInfo } from "react"
import { motion } from "framer-motion"
import { AlertTriangle, RefreshCw } from "lucide-react"

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo
}

/**
 * 错误边界组件
 * 捕获并处理React组件树中的JavaScript错误
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo)
    this.setState({ error, errorInfo })
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-indigo-900 flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-8 border border-red-500/30 max-w-md w-full text-center"
          >
            <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-red-200 mb-4">出现了一些问题</h2>
            <p className="text-red-300/80 mb-6">页面遇到了意外错误，请尝试刷新页面。</p>

            {process.env.NODE_ENV === "development" && this.state.error && (
              <details className="text-left mb-4 p-4 bg-slate-900/50 rounded border border-red-500/20">
                <summary className="text-red-300 cursor-pointer mb-2">错误详情</summary>
                <pre className="text-xs text-red-200/80 overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}

            <motion.button
              onClick={this.handleReset}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:from-red-700 hover:to-red-800 transition-all mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RefreshCw className="w-4 h-4" />
              <span>重试</span>
            </motion.button>
          </motion.div>
        </div>
      )
    }

    return this.props.children
  }
}
