import { leaderboard } from "@/data";
import Image from "next/image";
import React from "react";
import AVATAR1 from "/public/assets/images/leaderboard_avatar1.png";

function LeaderBoard_Positions() {
  return (
    <>
      <ul className="w-[99%] md:w-[88%] xl:w-[75%]">
        {leaderboard.map(({ position, id, avatar, agent, uid, ap }, i) => (
          <li
            className={`flex flex-col justify-center items-center py-4 box-border ${
              position === "1st" || position === "2nd" || position === "3rd"
                ? "linear_bg"
                : ""
            } ${
              position === "1st"
                ? "rounded-t-xl pt-8"
                : position === "3rd"
                ? "rounded-b-xl"
                : ""
            }`}
            key={id}
          >
            <div className="flex items-center w-full">
              <h6
                className={`${
                  position == "1st" || position == "2nd" || position == "3rd"
                    ? "text-shadow_foursides text-white"
                    : "whiteOpacityColor"
                } font-black tracking-[.5px] text-2xl w-[15%] sm:w-1/4 ml-[3%] sm:ml-[10%]`}
              >
                {position}
              </h6>
              <div className="flex items-center flex-1">
                <div className="w-[60px]">
                  <Image src={avatar} alt="avatar" />
                </div>
                <div className="flex flex-col ml-4">
                  <h6 className="uppercase text-[#9C9C9C] font-light text-[20px]">
                    {agent}
                  </h6>
                  <h6 className="text-white font-light text-lg">{uid}</h6>
                </div>
              </div>
              <div className="flex items-center justify-between w-1/4 pr-[3%] sm:pr-[10%]">
                <h6 className="font-light text-white text-[20px]">{ap}</h6>
                <h6 className="font-light text-white text-[20px] whiteOpacityColor">
                  AP
                </h6>
              </div>
            </div>
            <div
              className={`w-[95%] sm:w-[90%] h-[2px] ${
                position != "3rd" &&
                leaderboard.length != i + 1 &&
                "border-b border-[#565656]"
              } mt-4`}
            ></div>
          </li>
        ))}
        <li
          className="flex flex-col justify-center items-center py-4 box-border w-[90%] mx-auto mt-8 border-l-4 border-[#E46138]"
          style={{
            background:
              "linear-gradient(90.21deg, #23252B -77.87%, rgba(35, 37, 43, 0) 121.27%)",
          }}
        >
          <div className="flex items-center w-full">
            <h6 className="text-white font-black tracking-[.5px] text-2xl w-[15%] sm:w-[27.5%] ml-[3%] sm:ml-[3rem]">
              128,218th
            </h6>
            <div className="flex items-center flex-1">
              <div className="w-[60px]">
                <Image src={AVATAR1} alt="avatar" />
              </div>
              <div className="flex flex-col ml-4">
                <h6 className="uppercase text-[#9C9C9C] font-light text-[20px]">
                  AGENT
                </h6>
                <h6 className="text-white font-light text-lg">0xI3nd...93ns</h6>
              </div>
            </div>
            <div className="flex items-center justify-between w-[22.5%] pr-[3%] sm:pr-[5.6%]">
              <h6 className="font-light text-white text-[20px]">15,200</h6>
              <h6 className="font-light text-white text-[20px] whiteOpacityColor">
                AP
              </h6>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}

export default LeaderBoard_Positions;
