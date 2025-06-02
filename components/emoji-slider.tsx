"use client"

export function EmojiSlider() {
  const emojis = ["😄", "😁", "😆", "😂"]

  return (
    <div className="w-[354px] bg-black/10 rounded-[50px] overflow-hidden shadow-lg backdrop-blur-sm">
      <div className="flex animate-[sliding_5s_linear_infinite] whitespace-nowrap">
        <div className="flex">
          {emojis.map((emoji, index) => (
            <button
              key={`first-${index}`}
              className="text-[70px] mx-1 border-none bg-transparent cursor-grab hover:scale-110 transition-transform duration-500"
            >
              {emoji}
            </button>
          ))}
        </div>
        <div className="flex">
          {emojis.map((emoji, index) => (
            <button
              key={`second-${index}`}
              className="text-[70px] mx-1 border-none bg-transparent cursor-grab hover:scale-110 transition-transform duration-500"
            >
              {emoji}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
