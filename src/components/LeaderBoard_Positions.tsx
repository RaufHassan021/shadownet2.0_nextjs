import { leaderboard } from "@/data";
import Image from "next/image";
import React from "react";

function LeaderBoard_Positions() {
  return (
    <>
      <ul className="w-[99%] sm:w-[88%] lg:w-8/12 mt-7">
        {leaderboard.map(({ position, id, avatar, agent, uid, ap }, i) => (
          <li
            className={`flex flex-col justify-center items-center py-4 ${
              position === "1st" || position === "2nd" || position === "3rd"
                ? "linear_bg"
                : ""
            } ${
              position === "1st"
                ? "rounded-t-xl"
                : position === "3rd"
                ? "rounded-b-xl"
                : ""
            }`}
            key={id}
          >
            <div className="flex items-center w-full">
              <h6 className="text-shadow text-white font-bold tracking-[.5px] text-2xl w-[15%] sm:w-1/4 ml-[3%] sm:ml-[10%]">
                {position}
              </h6>
              <div className="flex items-center flex-1">
                <Image src={avatar} alt="avatar" />
                <div className="flex flex-col ml-4">
                  <h6 className="uppercase text-[#9C9C9C] font-light text-[15px]">
                    {agent}
                  </h6>
                  <h6 className="text-white font-light text-lg">{uid}</h6>
                </div>
              </div>
              <div className="flex items-center justify-between w-1/4 pr-[3%] sm:pr-[10%]">
                <h6 className="font-light text-white text-base">{ap}</h6>
                <h6 className="font-light text-white text-base whiteOpacityColor">
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
      </ul>
    </>
  );
}

export default LeaderBoard_Positions;
