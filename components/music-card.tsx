"use client"

export function MusicCard() {
  return (
    <div className="card relative w-[250px] h-[120px] bg-[#191414] rounded-[10px] p-2.5">
      <div className="top relative w-full flex gap-2.5">
        <div className="pfp relative top-1.5 left-1.5 h-10 w-10 bg-[#d2d2d2] rounded-[5px] flex justify-center items-center">
          <div className="playing flex relative justify-center gap-px w-[30px] h-5">
            <div className="greenline bg-[#1db954] h-5 w-0.5 relative origin-bottom animate-[playing_1s_ease-in-out_infinite] delay-[0.2s]"></div>
            <div className="greenline bg-[#1db954] h-5 w-0.5 relative origin-bottom animate-[playing_1s_ease-in-out_infinite] delay-[0.5s]"></div>
            <div className="greenline bg-[#1db954] h-5 w-0.5 relative origin-bottom animate-[playing_1s_ease-in-out_infinite] delay-[0.6s]"></div>
            <div className="greenline bg-[#1db954] h-5 w-0.5 relative origin-bottom animate-[playing_1s_ease-in-out_infinite] delay-[0s]"></div>
            <div className="greenline bg-[#1db954] h-5 w-0.5 relative origin-bottom animate-[playing_1s_ease-in-out_infinite] delay-[0.4s]"></div>
          </div>
        </div>
        <div className="texts">
          <p className="title-1 text-white text-[25px] font-bold">她的睫毛</p>
          <p className="title-2 text-white text-xs font-bold">周杰伦</p>
        </div>
      </div>

      <div className="controls text-white flex absolute bottom-[30px] left-0 w-full justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          height="20"
          width="24"
          className="volume_button cursor-pointer transition-all duration-100 hover:text-[#1db954]"
        >
          <path
            clipRule="evenodd"
            d="M11.26 3.691A1.2 1.2 0 0 1 12 4.8v14.4a1.199 1.199 0 0 1-2.048.848L5.503 15.6H2.4a1.2 1.2 0 0 1-1.2-1.2V9.6a1.2 1.2 0 0 1 1.2-1.2h3.103l4.449-4.448a1.2 1.2 0 0 1 1.308-.26Zm6.328-.176a1.2 1.2 0 0 1 1.697 0A11.967 11.967 0 0 1 22.8 12a11.966 11.966 0 0 1-3.515 8.485 1.2 1.2 0 0 1-1.697-1.697A9.563 9.563 0 0 0 20.4 12a9.565 9.565 0 0 0-2.812-6.788 1.2 1.2 0 0 1 0-1.697Zm-3.394 3.393a1.2 1.2 0 0 1 1.698 0A7.178 7.178 0 0 1 18 12a7.18 7.18 0 0 1-2.108 5.092 1.2 1.2 0 1 1-1.698-1.698A4.782 4.782 0 0 0 15.6 12a4.78 4.78 0 0 0-1.406-3.394 1.2 1.2 0 0 1 0-1.698Z"
            fillRule="evenodd"
          ></path>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          height="24"
          width="24"
          className="cursor-pointer transition-all duration-100 hover:text-[#1db954]"
        >
          <path
            clipRule="evenodd"
            d="M12 21.6a9.6 9.6 0 1 0 0-19.2 9.6 9.6 0 0 0 0 19.2Zm.848-12.352a1.2 1.2 0 0 0-1.696-1.696l-3.6 3.6a1.2 1.2 0 0 0 0 1.696l3.6 3.6a1.2 1.2 0 0 0 1.696-1.696L11.297 13.2H15.6a1.2 1.2 0 1 0 0-2.4h-4.303l1.551-1.552Z"
            fillRule="evenodd"
          ></path>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          height="24"
          width="24"
          className="cursor-pointer transition-all duration-100 hover:text-[#1db954]"
        >
          <path
            clipRule="evenodd"
            d="M21.6 12a9.6 9.6 0 1 1-19.2 0 9.6 9.6 0 0 1 19.2 0ZM8.4 9.6a1.2 1.2 0 1 1 2.4 0v4.8a1.2 1.2 0 1 1-2.4 0V9.6Zm6-1.2a1.2 1.2 0 0 0-1.2 1.2v4.8a1.2 1.2 0 1 0 2.4 0V9.6a1.2 1.2 0 0 0-1.2-1.2Z"
            fillRule="evenodd"
          ></path>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          height="24"
          width="24"
          className="cursor-pointer transition-all duration-100 hover:text-[#1db954]"
        >
          <path
            clipRule="evenodd"
            d="M12 21.6a9.6 9.6 0 1 0 0-19.2 9.6 9.6 0 0 0 0 19.2Zm4.448-10.448-3.6-3.6a1.2 1.2 0 0 0-1.696 1.696l1.551 1.552H8.4a1.2 1.2 0 1 0 0 2.4h4.303l-1.551 1.552a1.2 1.2 0 1 0 1.696 1.696l3.6-3.6a1.2 1.2 0 0 0 0-1.696Z"
            fillRule="evenodd"
          ></path>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke="currentColor"
          fill="none"
          height="20"
          width="24"
          className="cursor-pointer transition-all duration-100 hover:text-[#1db954]"
        >
          <path d="M3.343 7.778a4.5 4.5 0 0 1 7.339-1.46L12 7.636l1.318-1.318a4.5 4.5 0 1 1 6.364 6.364L12 20.364l-7.682-7.682a4.501 4.501 0 0 1-.975-4.904Z"></path>
        </svg>
      </div>

      <div className="time w-[90%] bg-[#5e5e5e] h-1.5 rounded-[3px] absolute left-[5%] bottom-[22px]">
        <div className="elapsed w-[42%] bg-[#1db954] h-full rounded-[3px]"></div>
      </div>

      <p className="timetext time_now text-white text-[8px] absolute bottom-[11px] left-2.5">1:31</p>
      <p className="timetext time_full text-white text-[8px] absolute bottom-[11px] right-2.5">3:46</p>
    </div>
  )
}
