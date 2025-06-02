"use client"

export function SpaceBackground() {
  return (
    <div className="relative transform-gpu">
      {/* Enhanced Earth with advanced 3D ring effects */}
      <div
        className="section-banner h-64 w-64 relative transition-all duration-700 ease-out bg-cover bg-left rounded-full shadow-[0px_0_40px_rgba(255,255,255,0.4),_-10px_0px_15px_#c3f4ff_inset,_25px_5px_40px_#000_inset,_-35px_-5px_50px_#c3f4ff99_inset,_350px_0px_70px_#00000066_inset,_200px_0px_60px_#000000aa_inset] animate-earthRotate transform-gpu hover:scale-125 hover:shadow-[0px_0_60px_rgba(59,130,246,0.7)] hover:rotateY-[10deg] cursor-pointer group"
        style={{
          backgroundImage:
            "url('data:image/jpeg;base64,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')",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Enhanced orbital rings with improved 3D effects */}
        <div
          className="absolute -inset-8 border-2 border-dashed border-blue-400/40 rounded-full animate-[spin_30s_linear_infinite] transform-gpu hover:border-blue-300/60 transition-colors duration-300"
          style={{ transformStyle: "preserve-3d" }}
        ></div>
        <div
          className="absolute -inset-16 border border-dashed border-purple-400/30 rounded-full animate-[spin_45s_linear_infinite_reverse] transform-gpu hover:border-purple-300/50 transition-colors duration-300"
          style={{ transformStyle: "preserve-3d" }}
        ></div>
        <div
          className="absolute -inset-24 border border-dotted border-cyan-400/20 rounded-full animate-[spin_60s_linear_infinite] transform-gpu group-hover:border-cyan-300/40 transition-colors duration-500"
          style={{ transformStyle: "preserve-3d" }}
        ></div>

        {/* Enhanced satellite dots with improved animations */}
        <div
          className="absolute w-3 h-3 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full animate-[orbit_20s_linear_infinite] transform-gpu shadow-[0_0_15px_rgba(59,130,246,0.9)] hover:shadow-[0_0_25px_rgba(59,130,246,1)] transition-shadow duration-300"
          style={{ top: "-12px", left: "50%", transformOrigin: "0 140px", transformStyle: "preserve-3d" }}
        ></div>
        <div
          className="absolute w-2 h-2 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full animate-[orbit_35s_linear_infinite_reverse] transform-gpu shadow-[0_0_12px_rgba(147,51,234,0.9)] hover:shadow-[0_0_20px_rgba(147,51,234,1)] transition-shadow duration-300"
          style={{ top: "-24px", left: "50%", transformOrigin: "0 152px", transformStyle: "preserve-3d" }}
        ></div>
        <div
          className="absolute w-1.5 h-1.5 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full animate-[orbit_50s_linear_infinite] transform-gpu shadow-[0_0_10px_rgba(34,211,238,0.8)]"
          style={{ top: "-36px", left: "50%", transformOrigin: "0 164px", transformStyle: "preserve-3d" }}
        ></div>
      </div>

      {/* Enhanced stars with advanced 3D effects */}
      <div
        id="star-1"
        className="absolute left-[-20px] animate-[twinkling_3s_infinite] transform-gpu hover:scale-[2] transition-transform duration-500 cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="curved-corner-star flex relative group">
          <div className="w-2 h-2.5 overflow-hidden relative before:content-[''] before:block before:w-[200%] before:h-[200%] before:absolute before:bottom-0 before:right-0 before:shadow-[8px_8px_0_0_white] before:rounded-full before:animate-pulse group-hover:before:shadow-[10px_10px_0_0_gold] transition-all duration-300"></div>
          <div className="w-2 h-2.5 overflow-hidden relative before:content-[''] before:block before:w-[200%] before:h-[200%] before:absolute before:bottom-0 before:left-0 before:shadow-[-8px_8px_0_0_white] before:rounded-full before:animate-pulse group-hover:before:shadow-[-10px_10px_0_0_gold] transition-all duration-300"></div>
        </div>
        <div className="curved-corner-star flex relative group">
          <div className="w-2 h-2.5 overflow-hidden relative before:content-[''] before:block before:w-[200%] before:h-[200%] before:absolute before:top-0 before:right-0 before:shadow-[8px_-8px_0_0_white] before:rounded-full before:animate-pulse group-hover:before:shadow-[10px_-10px_0_0_gold] transition-all duration-300"></div>
          <div className="w-2 h-2.5 overflow-hidden relative before:content-[''] before:block before:w-[200%] before:h-[200%] before:absolute before:top-0 before:left-0 before:shadow-[-8px_-8px_0_0_white] before:rounded-full before:animate-pulse group-hover:before:shadow-[-10px_-10px_0_0_gold] transition-all duration-300"></div>
        </div>
      </div>

      <div
        id="star-2"
        className="absolute left-[-40px] top-[30px] animate-[twinkling_2s_infinite] transform-gpu hover:scale-[1.8] transition-transform duration-400 cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="curved-corner-star flex relative group">
          <div className="w-1.5 h-2 overflow-hidden relative before:content-[''] before:block before:w-[200%] before:h-[200%] before:absolute before:bottom-0 before:right-0 before:shadow-[6px_6px_0_0_#60A5FA] before:rounded-full group-hover:before:shadow-[8px_8px_0_0_#3B82F6] transition-all duration-300"></div>
          <div className="w-1.5 h-2 overflow-hidden relative before:content-[''] before:block before:w-[200%] before:h-[200%] before:absolute before:bottom-0 before:left-0 before:shadow-[-6px_6px_0_0_#60A5FA] before:rounded-full group-hover:before:shadow-[-8px_8px_0_0_#3B82F6] transition-all duration-300"></div>
        </div>
        <div className="curved-corner-star flex relative group">
          <div className="w-1.5 h-2 overflow-hidden relative before:content-[''] before:block before:w-[200%] before:h-[200%] before:absolute before:top-0 before:right-0 before:shadow-[6px_-6px_0_0_#60A5FA] before:rounded-full group-hover:before:shadow-[8px_-8px_0_0_#3B82F6] transition-all duration-300"></div>
          <div className="w-1.5 h-2 overflow-hidden relative before:content-[''] before:block before:w-[200%] before:h-[200%] before:absolute before:top-0 before:left-0 before:shadow-[-6px_-6px_0_0_#60A5FA] before:rounded-full group-hover:before:shadow-[-8px_-8px_0_0_#3B82F6] transition-all duration-300"></div>
        </div>
      </div>

      <div
        id="star-3"
        className="absolute left-[350px] top-[90px] animate-[twinkling_4s_infinite] transform-gpu hover:scale-[2.2] transition-transform duration-600 cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="curved-corner-star flex relative group">
          <div className="w-2 h-2.5 overflow-hidden relative before:content-[''] before:block before:w-[200%] before:h-[200%] before:absolute before:bottom-0 before:right-0 before:shadow-[8px_8px_0_0_#A855F7] before:rounded-full before:animate-pulse group-hover:before:shadow-[10px_10px_0_0_#9333EA] transition-all duration-300"></div>
          <div className="w-2 h-2.5 overflow-hidden relative before:content-[''] before:block before:w-[200%] before:h-[200%] before:absolute before:bottom-0 before:left-0 before:shadow-[-8px_8px_0_0_#A855F7] before:rounded-full before:animate-pulse group-hover:before:shadow-[-10px_10px_0_0_#9333EA] transition-all duration-300"></div>
        </div>
        <div className="curved-corner-star flex relative group">
          <div className="w-2 h-2.5 overflow-hidden relative before:content-[''] before:block before:w-[200%] before:h-[200%] before:absolute before:top-0 before:right-0 before:shadow-[8px_-8px_0_0_#A855F7] before:rounded-full before:animate-pulse group-hover:before:shadow-[10px_-10px_0_0_#9333EA] transition-all duration-300"></div>
          <div className="w-2 h-2.5 overflow-hidden relative before:content-[''] before:block before:w-[200%] before:h-[200%] before:absolute before:top-0 before:left-0 before:shadow-[-8px_-8px_0_0_#A855F7] before:rounded-full before:animate-pulse group-hover:before:shadow-[-10px_-10px_0_0_#9333EA] transition-all duration-300"></div>
        </div>
      </div>

      {/* Enhanced floating asteroids with 3D transforms */}
      <div
        className="absolute top-10 right-20 w-4 h-4 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full animate-[float_6s_ease-in-out_infinite] opacity-70 transform-gpu hover:opacity-100 hover:scale-150 transition-all duration-500 cursor-pointer shadow-[0_0_10px_rgba(156,163,175,0.5)]"
        style={{ transformStyle: "preserve-3d" }}
      ></div>
      <div
        className="absolute bottom-20 left-10 w-3 h-3 bg-gradient-to-br from-gray-500 to-gray-700 rounded-full animate-[float_8s_ease-in-out_infinite] opacity-50 transform-gpu hover:opacity-90 hover:scale-125 transition-all duration-400 cursor-pointer shadow-[0_0_8px_rgba(107,114,128,0.4)]"
        style={{ animationDelay: "2s", transformStyle: "preserve-3d" }}
      ></div>
      <div
        className="absolute top-32 left-32 w-2 h-2 bg-gradient-to-br from-slate-400 to-slate-600 rounded-full animate-[float_10s_ease-in-out_infinite] opacity-40 transform-gpu hover:opacity-80 hover:scale-110 transition-all duration-300 cursor-pointer"
        style={{ animationDelay: "4s", transformStyle: "preserve-3d" }}
      ></div>

      {/* New cosmic dust particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white/30 rounded-full animate-[particleFloat_6s_ease-in-out_infinite] transform-gpu"
          style={{
            left: `${Math.random() * 400}px`,
            top: `${Math.random() * 300}px`,
            animationDelay: `${Math.random() * 6}s`,
            transformStyle: "preserve-3d",
          }}
        />
      ))}
    </div>
  )
}
