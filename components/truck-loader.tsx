"use client"

export function TruckLoader() {
  return (
    <div className="loader w-fit h-fit flex items-center justify-center perspective-[1500px]">
      <div className="truckWrapper w-[300px] h-[140px] flex flex-col relative items-center justify-end overflow-x-hidden transform-gpu">
        {/* Enhanced truck upper body with advanced 3D effects */}
        <div
          className="truckBody w-[180px] h-fit mb-3 animate-[motion_1s_linear_infinite] transform-gpu hover:scale-125 transition-transform duration-500 group"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="relative transform-gpu hover:rotateY-[20deg] hover:rotateX-[5deg] transition-transform duration-700 interactive-3d">
            {/* Enhanced glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-red-400/30 via-orange-400/30 to-yellow-400/30 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 198 93"
              className="trucksvg drop-shadow-2xl hover:drop-shadow-[0_0_30px_rgba(248,61,61,0.8)] transition-all duration-500 transform-gpu"
              style={{ filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.3))" }}
            >
              <defs>
                <linearGradient id="truckGradientEnhanced" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F83D3D" />
                  <stop offset="30%" stopColor="#FF6B6B" />
                  <stop offset="70%" stopColor="#FF8E53" />
                  <stop offset="100%" stopColor="#D63031" />
                </linearGradient>
                <filter id="shadowEnhanced" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="3" dy="6" stdDeviation="4" floodColor="#000" floodOpacity="0.4" />
                  <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="#FF6B6B" floodOpacity="0.3" />
                </filter>
                <filter id="innerGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path
                strokeWidth="3"
                stroke="#282828"
                fill="url(#truckGradientEnhanced)"
                filter="url(#shadowEnhanced)"
                d="M135 22.5H177.264C178.295 22.5 179.22 23.133 179.594 24.0939L192.33 56.8443C192.442 57.1332 192.5 57.4404 192.5 57.7504V89C192.5 90.3807 191.381 91.5 190 91.5H135C133.619 91.5 132.5 90.3807 132.5 89V25C132.5 23.6193 133.619 22.5 135 22.5Z"
              />
              <path
                strokeWidth="3"
                stroke="#282828"
                fill="#BDBDBD"
                filter="url(#innerGlow)"
                d="M146 33.5H181.741C182.779 33.5 183.709 34.1415 184.078 35.112L190.538 52.112C191.16 53.748 189.951 55.5 188.201 55.5H146C144.619 55.5 143.5 54.3807 143.5 53V36C143.5 34.6193 144.619 33.5 146 33.5Z"
              />
              <path
                strokeWidth="2"
                stroke="#282828"
                fill="#282828"
                d="M150 65C150 65.39 149.763 65.8656 149.127 66.2893C148.499 66.7083 147.573 67 146.5 67C145.427 67 144.501 66.7083 143.873 66.2893C143.237 65.8656 143 65.39 143 65C143 64.61 143.237 64.1344 143.873 63.7107C144.501 63.2917 145.427 63 146.5 63C147.573 63 148.499 63.2917 149.127 63.7107C149.763 64.1344 150 64.61 150 65Z"
              />
              <rect strokeWidth="2" stroke="#282828" fill="#FFFCAB" rx="1" height="8" width="6" y="63" x="186" />
              <rect strokeWidth="2" stroke="#282828" fill="#282828" rx="1" height="12" width="5" y="80" x="192" />
              <rect
                strokeWidth="3"
                stroke="#282828"
                fill="#E8E8E8"
                filter="url(#shadowEnhanced)"
                rx="3"
                height="92"
                width="125"
                y="1"
                x="6"
              />
              <rect strokeWidth="2" stroke="#282828" fill="#DFDFDF" rx="2" height="5" width="7" y="83" x="0" />
            </svg>
          </div>
        </div>

        {/* Enhanced truck's tires with advanced rotation and 3D effects */}
        <div className="truckTires w-[180px] h-fit flex items-center justify-between px-[20px_25px] absolute bottom-0">
          <div className="animate-[spin_0.4s_linear_infinite] transform-gpu hover:scale-125 transition-transform duration-300 group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 30 30"
              className="tiresvg w-8 drop-shadow-xl hover:drop-shadow-[0_0_20px_rgba(0,0,0,0.8)] transition-all duration-300"
              style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.4))" }}
            >
              <defs>
                <radialGradient id="tireGradientEnhanced" cx="30%" cy="20%" r="80%">
                  <stop offset="0%" stopColor="#505050" />
                  <stop offset="40%" stopColor="#404040" />
                  <stop offset="100%" stopColor="#202020" />
                </radialGradient>
                <filter id="tireGlow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <circle
                strokeWidth="3"
                stroke="#1a1a1a"
                fill="url(#tireGradientEnhanced)"
                r="13.5"
                cy="15"
                cx="15"
                filter="url(#tireGlow)"
              />
              <circle fill="#E0E0E0" r="7" cy="15" cx="15" />
              <circle fill="#999" r="3" cy="15" cx="15" />
            </svg>
          </div>
          <div className="animate-[spin_0.4s_linear_infinite] transform-gpu hover:scale-125 transition-transform duration-300 group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 30 30"
              className="tiresvg w-8 drop-shadow-xl hover:drop-shadow-[0_0_20px_rgba(0,0,0,0.8)] transition-all duration-300"
              style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.4))" }}
            >
              <circle
                strokeWidth="3"
                stroke="#1a1a1a"
                fill="url(#tireGradientEnhanced)"
                r="13.5"
                cy="15"
                cx="15"
                filter="url(#tireGlow)"
              />
              <circle fill="#E0E0E0" r="7" cy="15" cx="15" />
              <circle fill="#999" r="3" cy="15" cx="15" />
            </svg>
          </div>
        </div>

        {/* Enhanced road with advanced 3D perspective and textures */}
        <div className="road w-full h-1.5 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 relative bottom-0 self-end rounded-md shadow-xl transform-gpu hover:shadow-2xl transition-shadow duration-300 before:content-[''] before:absolute before:w-8 before:h-full before:bg-gradient-to-r before:from-gray-700 before:to-gray-900 before:right-[-50%] before:rounded-md before:animate-[roadAnimation_1.2s_linear_infinite] before:border-l-[16px] before:border-yellow-400 before:shadow-xl before:hover:border-yellow-300 after:content-[''] after:absolute after:w-4 after:h-full after:bg-gradient-to-r after:from-gray-600 after:to-gray-800 after:right-[-65%] after:rounded-md after:animate-[roadAnimation_1.2s_linear_infinite] after:border-l-[8px] after:border-yellow-300 after:shadow-lg after:opacity-80"></div>

        {/* Enhanced lamp post with advanced 3D glow and animations */}
        <div className="absolute bottom-0 right-[-90%] animate-[roadAnimation_1.2s_linear_infinite] transform-gpu hover:scale-110 transition-transform duration-300 group">
          <div className="relative">
            {/* Enhanced multi-layer glow effect */}
            <div className="absolute inset-0 bg-yellow-400 rounded-full blur-2xl opacity-40 animate-pulse group-hover:opacity-60 transition-opacity duration-300"></div>
            <div
              className="absolute inset-2 bg-orange-400 rounded-full blur-xl opacity-30 animate-pulse group-hover:opacity-50 transition-opacity duration-300"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute inset-4 bg-yellow-300 rounded-full blur-lg opacity-20 animate-pulse group-hover:opacity-40 transition-opacity duration-300"
              style={{ animationDelay: "1s" }}
            ></div>

            <svg
              xmlSpace="preserve"
              viewBox="0 0 453.459 453.459"
              xmlns="http://www.w3.org/2000/svg"
              className="lampPost h-[120px] relative z-10 drop-shadow-2xl hover:drop-shadow-[0_0_30px_rgba(255,215,0,0.8)] transition-all duration-500 transform-gpu group-hover:scale-105"
              style={{ filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.3))" }}
            >
              <defs>
                <linearGradient id="lampGradientEnhanced" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFD700" />
                  <stop offset="25%" stopColor="#FFC107" />
                  <stop offset="50%" stopColor="#FF9800" />
                  <stop offset="75%" stopColor="#FF8C00" />
                  <stop offset="100%" stopColor="#FF6F00" />
                </linearGradient>
                <filter id="lampGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path
                fill="url(#lampGradientEnhanced)"
                filter="url(#lampGlow)"
                d="M252.882,0c-37.781,0-68.686,29.953-70.245,67.358h-6.917v8.954c-26.109,2.163-45.463,10.011-45.463,19.366h9.993c-1.65,5.146-2.507,10.54-2.507,16.017c0,28.956,23.558,52.514,52.514,52.514c28.956,0,52.514-23.558,52.514-52.514c0-5.478-0.856-10.872-2.506-16.017h9.992c0-9.354-19.352-17.204-45.463-19.366v-8.954h-6.149C200.189,38.779,223.924,16,252.882,16c29.952,0,54.32,24.368,54.32,54.32c0,28.774-11.078,37.009-25.105,47.437c-17.444,12.968-37.216,27.667-37.216,78.884v113.914h-0.797c-5.068,0-9.174,4.108-9.174,9.177c0,2.844,1.293,5.383,3.321,7.066c-3.432,27.933-26.851,95.744-8.226,115.459v11.202h45.75v-11.202c18.625-19.715-4.794-87.527-8.227-115.459c2.029-1.683,3.322-4.223,3.322-7.066c0-5.068-4.107-9.177-9.176-9.177h-0.795V196.641c0-43.174,14.942-54.283,30.762-66.043c14.793-10.997,31.559-23.461,31.559-60.277C323.202,31.545,291.656,0,252.882,0z M232.77,111.694c0,23.442-19.071,42.514-42.514,42.514c-23.442,0-42.514-19.072-42.514-42.514c0-5.531,1.078-10.957,3.141-16.017h78.747C231.693,100.736,232.77,106.162,232.77,111.694z"
              />
            </svg>
          </div>
        </div>

        {/* Enhanced exhaust smoke effect with 3D particles */}
        <div className="absolute top-2 right-6 animate-[fadeInOut_2s_ease-in-out_infinite] transform-gpu">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="w-2.5 h-2.5 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full opacity-60 animate-[smokeRise_1.8s_ease-out_infinite] hover:opacity-80 transition-opacity duration-300 transform-gpu"
              style={{
                animationDelay: `${i * 0.25}s`,
                left: `${Math.random() * 20}px`,
                transformStyle: "preserve-3d",
              }}
            />
          ))}
        </div>

        {/* Additional 3D spark effects */}
        <div className="absolute top-8 right-12 transform-gpu">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 bg-yellow-400 rounded-full animate-[particleFloatEnhanced_2s_ease-out_infinite] opacity-80 transform-gpu"
              style={{
                animationDelay: `${i * 0.4}s`,
                left: `${Math.random() * 15}px`,
                transformStyle: "preserve-3d",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
