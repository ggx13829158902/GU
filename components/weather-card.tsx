"use client"

import { useState } from "react"

export function WeatherCard() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative flex items-center justify-center">
      <div
        className={`relative w-[250px] h-[130px] rounded-[25px] bg-gray-100 text-black z-10 transition-all duration-400 cursor-pointer ${
          isHovered ? "bg-yellow-300" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Weather Icon */}
        <div className="absolute top-4 left-4">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
            <span className="text-2xl">☀️</span>
          </div>
        </div>

        {/* Main Temperature */}
        <div className="absolute top-2 right-16 text-2xl font-bold">23°C</div>

        {/* Location */}
        <div className="absolute top-8 right-4 text-xs text-gray-600">Dunmore, Ireland</div>
      </div>

      {/* Expanded Card */}
      <div
        className={`absolute top-0 left-1 w-[240px] rounded-[35px] bg-white z-0 transition-all duration-400 ${
          isHovered ? "h-[300px] rounded-b-none" : "h-[130px]"
        }`}
      >
        {/* Upper Section */}
        <div className="flex justify-around pt-4 px-6">
          <div className="text-center">
            <div className="w-8 h-8 mx-auto mb-2 bg-blue-400 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">💧</span>
            </div>
            <div className="text-xs text-gray-600">
              Humidity
              <br />
              30%
            </div>
          </div>
          <div className="text-center">
            <div className="w-8 h-8 mx-auto mb-2 bg-green-400 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">💨</span>
            </div>
            <div className="text-xs text-gray-600">
              Wind
              <br />8 Km/h
            </div>
          </div>
        </div>

        {/* Lower Section */}
        <div
          className={`absolute left-12 flex space-x-8 text-xs text-center transition-all duration-400 ${
            isHovered ? "top-32" : "top-16"
          }`}
        >
          <div className="flex flex-col items-center">
            <div className="w-5 h-5 bg-blue-500 rounded-full mb-1 flex items-center justify-center">
              <span className="text-white text-xs">🌡️</span>
            </div>
            <div>
              AQI
              <br />
              30
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-5 h-5 bg-red-500 rounded-full mb-1 flex items-center justify-center">
              <span className="text-white text-xs">🌡️</span>
            </div>
            <div>
              Real Feel
              <br />
              21°C
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-5 h-5 bg-purple-500 rounded-full mb-1 flex items-center justify-center">
              <span className="text-white text-xs">📊</span>
            </div>
            <div>
              Pressure
              <br />
              1012 mbar
            </div>
          </div>
        </div>

        {/* Health Status */}
        <div
          className={`absolute left-0 right-0 mx-auto w-[240px] h-8 bg-green-500 text-white text-center leading-8 rounded-b-[35px] transition-all duration-400 ${
            isHovered ? "top-72" : "top-24"
          }`}
        >
          Healthy
        </div>
      </div>
    </div>
  )
}
