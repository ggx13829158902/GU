"use client"

import { useState } from "react"

export function PhoneCard() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative flex items-center justify-center">
      <div
        className={`relative w-[150px] h-[254px] transition-all duration-1000 transform-gpu preserve-3d ${
          isHovered ? "rotate-x-0 rotate-y-0 rotate-z-0 scale-150" : "rotate-x-[80deg] rotate-y-0 rotate-z-[30deg]"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
      >
        {/* Phone Front Face */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-300 via-purple-900 to-blue-400 border-4 border-black rounded-lg border-t-[15px] border-b-[15px] p-2 text-center transform translate-y-5">
          {/* Status Bar */}
          <div className="flex justify-between items-center text-white text-xs mb-2">
            <span className="font-bold">moov</span>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3">
                <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
                  <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.86 9.14 5 13z" />
                </svg>
              </div>
              <div className="w-3 h-3">
                <svg viewBox="0 0 16 16" fill="white" className="w-full h-full">
                  <path d="M13 1c-.554688 0-1 .445312-1 1v12c0 .554688.445312 1 1 1h1c.554688 0 1-.445312 1-1V2c0-.554688-.445312-1-1-1zm-4 3c-.554688 0-1 .445312-1 1v9c0 .554688.445312 1 1 1h1c.554688 0 1-.445312 1-1V5c0-.554688-.445312-1-1-1zm-4 3c-.554688 0-1 .445312-1 1v6c0 .554688.445312 1 1 1h1c.554688 0 1-.445312 1-1V8c0-.554688-.445312-1-1-1zm-4 3c-.554688 0-1 .445312-1 1v3c0 .554688.445312 1 1 1h1c.554688 0 1-.445312 1-1v-3c0-.554688-.445312-1-1-1z" />
                </svg>
              </div>
              <div className="w-3 h-3">
                <svg viewBox="1 10 20 5" fill="white" className="w-full h-full">
                  <path d="M3.33,17H8V7H3.34A1.34,1.34,0,0,0,2,8.33v7.33A1.34,1.34,0,0,0,3.33,17Z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative mb-3">
            <input
              placeholder="Search..."
              className="w-full px-2 py-1 text-xs rounded bg-white/20 text-white placeholder-white/70 border-none outline-none"
            />
          </div>

          {/* Time Display */}
          <div className="text-center mb-4">
            <div className="text-white text-lg font-bold">
              10:50 <span className="text-sm">PM</span>
            </div>
            <div className="text-white/80 text-xs">Sat, 04 Nov</div>
          </div>

          {/* App Grid */}
          <div className="grid grid-cols-5 gap-2 mb-3">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="w-4 h-4 bg-white/80 rounded-md flex items-center justify-center">
                {i === 2 && (
                  <div className="w-full h-full bg-green-500 rounded-md flex items-center justify-center text-white text-xs">
                    W
                  </div>
                )}
                {i === 3 && (
                  <div className="w-full h-full bg-blue-600 rounded-md flex items-center justify-center text-white text-xs">
                    f
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-5 gap-2 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="w-4 h-4 bg-white/80 rounded-md flex items-center justify-center">
                {i === 1 && (
                  <div className="w-full h-full bg-green-500 rounded-md flex items-center justify-center text-white text-xs">
                    📞
                  </div>
                )}
                {i === 2 && (
                  <div className="w-full h-full bg-gray-700 rounded-md flex items-center justify-center text-white text-xs">
                    ⋮⋮⋮
                  </div>
                )}
                {i === 3 && (
                  <div className="w-full h-full bg-blue-500 rounded-md flex items-center justify-center text-white text-xs">
                    💬
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4">
            <div className="w-2 h-2 bg-white/60 rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white/60 rounded-full"></div>
          </div>

          {/* Front Camera */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black rounded-full"></div>
        </div>
      </div>
    </div>
  )
}
