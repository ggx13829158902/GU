"use client"

import { motion } from "framer-motion"

interface PlantButtonProps {
  onClick?: () => void
}

export function PlantButton({ onClick }: PlantButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className="relative px-8 py-3 bg-gradient-to-r from-amber-100 to-amber-200 text-gray-800 font-bold text-lg border-none rounded-lg shadow-lg transition-all duration-300 hover:px-6 hover:rounded-t-lg hover:rounded-b-3xl group overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">登录系统</span>

      {/* Leaf Icons */}
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 transition-all duration-500 z-0 group-hover:w-12 group-hover:h-auto group-hover:-top-32"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 208.52 511.88" className="w-full h-auto">
          <path
            className="fill-green-600"
            d="M121.86 141.25c16.73,2.91 65.77,9.16 77.74,-14.94 14.49,-29.19 12.6,-56.91 -15.12,-69.09 -11.3,-4.96 -22.28,-7.7 -32.28,-9.66 -24.58,24.72 -41.22,75.51 -43.83,83.82 4.31,3.56 8.81,6.86 13.49,9.87z"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-0 right-0 w-0 h-0 transition-all duration-500 z-0 group-hover:w-16 group-hover:h-auto group-hover:-top-24 group-hover:right-2"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420.62 554.38" className="w-full h-auto">
          <path
            className="fill-green-700"
            d="M1.57 554.38c-0.01,-0.44 -2.46,-153.75 -1.23,-217.01 0.74,-38.16 6.99,-96.57 32.48,-148.36 17.72,-36 44.66,-68.8 85.37,-89.54l32.28 -4.39c21.9,-6.8 39.46,-7.7 45.04,-7.81 4.32,4.98 10.37,12.18 17.72,21.54"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-0 left-0 w-0 h-0 transition-all duration-500 z-0 group-hover:w-14 group-hover:h-auto group-hover:-top-16 group-hover:left-4"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 313.64 405.79" className="w-full h-auto">
          <path
            className="fill-green-700"
            d="M268.76 135.61c0,0 -22.17,11.9 -50.23,28.92 -21.12,-5.52 -82.36,-27.74 -81.95,-100.04l-0.14 -0.02c3.32,-12.49 5.48,-21.39 6.11,-24.05"
          />
        </svg>
      </motion.div>
    </motion.button>
  )
}
