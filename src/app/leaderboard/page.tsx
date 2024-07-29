"use client";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import "@/styles/homePage.css";
import SHADOW_LEVEL_ICON from "/public/assets/images/shadowLevel_icon.png";
import BG_IMG from "/public/assets/images/leaderboard_bg.png";
import AVATAR1 from "/public/assets/images/leaderboard_avatar1.png";
import SHADOW_IMG from "/public/assets/images/modal_shadow_img.png";
import LeaderBoard_Positions from "@/components/LeaderBoard_Positions";
import Footer from "@/components/Footer";

function LeaderBoard() {
  return (
    <>
      <Header />
      <main className="w-full flex flex-col items-center z-50">
        <div className="h-[150px] w-full"></div>
        <h6 className="uppercase whiteOpacityColor tracking-[1.5px] text-[18px] font-medium">
          Season 1
        </h6>
        <h3 className="uppercase text-white tracking-[6px] mt-2">
          WAR ZONE LEADERBOARD
        </h3>
        <div
          style={{
            background:
              "linear-gradient(90.01deg, #23252B 25.05%, rgba(35, 37, 43, 0) 150.12%)",
          }}
          className="mt-6 flex flex-col items-center px-2 sm:px-5 md:px-10 py-7 rounded-xl box-border w-[99%] sm:w-[88%] lg:w-8/12"
        >
          <div className="flex justify-between w-full border-b border-[#6D7078]">
            <div className="flex items-center">
              <Image src={AVATAR1} alt="icon" />
              <div className="flex flex-col ml-4">
                <h6 className="uppercase font-bold whiteOpacityColor text-[13px] lg:text-[15px] tracking-[1px]">
                  CURRENT RANK
                </h6>
                <h5 className="text-white font-bold text-[25px] lg:text-[34px] tracking-[2.5px]">
                  128,292th
                </h5>
              </div>
            </div>
            <div className="w-auto h-auto flex items-center">
              <div className="flex flex-col items-end justify-end mb-[13px]">
                <h5 className="uppercase text-[#ffffff] opacity-[20%] tracking-[.1rem] text-[13px] lg:text-[17px] font-bold">
                  Shadow Level
                </h5>
                <div className="flex items-center h-[3px] w-[170px] lg:w-[250px] my-[7px] lg:my-[10px]">
                  <div className="lvl_boxshadow w-[25%] h-full bg-[#FFFFFF]"></div>
                  <div className="flex-1 bg-[#353637] h-full"></div>
                </div>
                <h6 className="text-[10px] lg:text-[15px] font-light whiteOpacityColor tracking-[.1rem]">
                  lv.25 - SPECIAL AGENT
                </h6>
              </div>
              <Image
                src={SHADOW_LEVEL_ICON}
                alt="icon"
                className="w-[90px] lg:w-fit"
              />
            </div>
          </div>
          <div className="flex w-full justify-between mt-6">
            <div className="flex flex-col">
              <h4 className="whiteOpacityColor font-bold tracking-[1px] text-[13px] lg:text-[15px]">
                MISSION COMPLETED
              </h4>
              <h6 className="text-white tracking-[2.5px] font-medium text-[24px] lg:text-[26px]">
                118
              </h6>
            </div>
            <div className="flex flex-col">
              <h4 className="whiteOpacityColor font-bold tracking-[1px] text-[13px] lg:text-[15px]">
                AGENT POINTS EARNED
              </h4>
              <h6 className="text-white tracking-[2.5px] font-medium text-[24px] lg:text-[26px]">
                118,832
              </h6>
            </div>
            <div className="flex flex-col">
              <h4 className="whiteOpacityColor font-bold tracking-[1px] text-[13px] lg:text-[15px]">
                SHADOW CREDITS
              </h4>
              <h6 className="text-white tracking-[2.5px] font-medium text-[24px] lg:text-[26px]">
                118,832
              </h6>
            </div>
          </div>
        </div>
        <LeaderBoard_Positions />
      </main>
      <Footer />
      <Image
        src={BG_IMG}
        alt="background_image"
        className="absolute top-0 right-0 w-full -z-20"
      />
      <Image
        src={SHADOW_IMG}
        alt="shadow_image"
        className="absolute top-[16rem] right-0 w-full -z-10"
        style={{ height: "calc(100% - 16rem)" }}
      />
    </>
  );
}

export default LeaderBoard;
