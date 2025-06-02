"use client"

export function SocialCard() {
  return (
    <div className="main flex flex-wrap w-56 items-center justify-center z-[-1] group">
      <div className="main_back absolute border-radius-[10px] transform rotate-90 w-44 h-44 bg-gradient-to-r from-[#03a9f4] via-[#cc39a4] to-[#ffb5d2] z-[-2] shadow-[inset_0px_0px_180px_5px_#ffffff] group-hover:opacity-0"></div>

      {/* Card 1 - Instagram */}
      <div className="card flex items-center justify-center w-[60px] h-[60px] rounded-tl-[10px] bg-white/60 backdrop-blur-[5px] border border-transparent transition-all duration-400 group-hover:m-0.5 group-hover:rounded-[10px] group-hover:shadow-[0_4px_30px_rgba(0,0,0,0.1)] group-hover:border-white/30 group-hover:bg-white/20 hover:bg-[#cc39a4]">
        <svg
          fillRule="nonzero"
          height="30px"
          width="30px"
          viewBox="0,0,256,256"
          className="instagram opacity-0 transition-all duration-200 fill-[#cc39a4] group-hover:opacity-100 hover:fill-white"
        >
          <g>
            <g transform="scale(8,8)">
              <path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"></path>
            </g>
          </g>
        </svg>
      </div>

      {/* Card 2 - Twitter */}
      <div className="card flex items-center justify-center w-[60px] h-[60px] bg-white/60 backdrop-blur-[5px] border border-transparent transition-all duration-400 group-hover:m-0.5 group-hover:rounded-[10px] group-hover:shadow-[0_4px_30px_rgba(0,0,0,0.1)] group-hover:border-white/30 group-hover:bg-white/20 hover:bg-[#03a9f4]">
        <svg
          height="30px"
          width="30px"
          viewBox="0 0 48 48"
          className="twitter opacity-0 transition-all duration-200 fill-[#03a9f4] group-hover:opacity-100 hover:fill-white"
        >
          <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
        </svg>
      </div>

      {/* Card 3 - Dribbble */}
      <div className="card flex items-center justify-center w-[60px] h-[60px] rounded-tr-[10px] bg-white/60 backdrop-blur-[5px] border border-transparent transition-all duration-400 group-hover:m-0.5 group-hover:rounded-[10px] group-hover:shadow-[0_4px_30px_rgba(0,0,0,0.1)] group-hover:border-white/30 group-hover:bg-white/20 hover:bg-[#ffb5d2]">
        <svg
          height="30px"
          width="30px"
          viewBox="0 0 40 40"
          className="dribble opacity-0 transition-all duration-200 fill-[#ffb5d2] group-hover:opacity-100 hover:fill-white"
        >
          <path d="M20,38.5C9.799,38.5,1.5,30.201,1.5,20S9.799,1.5,20,1.5S38.5,9.799,38.5,20S30.201,38.5,20,38.5z"></path>
          <path
            d="M20,2c9.925,0,18,8.075,18,18s-8.075,18-18,18S2,29.925,2,20S10.075,2,20,2 M20,1 C9.507,1,1,9.507,1,20s8.507,19,19,19s19-8.507,19-19S30.493,1,20,1L20,1z"
            fill="#ea4c89"
          ></path>
        </svg>
      </div>

      {/* Text overlay */}
      <p className="text absolute text-xs transition-all duration-400 text-black text-center font-bold tracking-[0.33em] z-[3] group-hover:opacity-0 group-hover:z-[-3]">
        HOVER
        <br />
        <br />
        FOR
        <br />
        <br />
        SOCIAL
      </p>
    </div>
  )
}
