"use client";
import Header from "@/components/Header";
import Image from "next/image";
import React, { useState } from "react";
import SHADOW_LEVEL_ICON from "/public/assets/images/shadowLevel_icon.png";
import BG_IMG from "/public/assets/images/leaderboard_bg.png";
import AVATAR1 from "/public/assets/images/leaderboard_avatar1.png";
import SHADOW_IMG from "/public/assets/images/modal_shadow_img.png";
import LeaderBoard_Positions from "@/components/LeaderBoard_Positions";
import Footer from "@/components/Footer";
import PMC_ranking from "@/components/PMC_ranking";

enum Tabs {
  codebreakers_ranking = "CODEBREAKERS RANKING",
  pmc_ranking = "PMC RANKING",
}

function LeaderBoard() {
  const [activeTab, setActiveTab] = useState(Tabs.codebreakers_ranking);
  return (
    <>
      <Header />
      <main className="w-full flex flex-col items-center z-50">
        <div className="h-[150px] w-full"></div>
        <h6 className="uppercase whiteOpacityColor tracking-[3px] text-[18px] font-medium">
          Season 1
        </h6>
        <h3 className="uppercase text-xl font-medium text-white tracking-[6px] mt-2">
          WAR ZONE LEADERBOARD
        </h3>
        <div
          style={{
            background:
              "linear-gradient(90.01deg, #23252B 25.05%, rgba(35, 37, 43, 0) 150.12%)",
          }}
          className="mt-6 flex flex-col items-center px-2 sm:px-5 md:px-10 py-7 rounded-xl box-border w-[99%] md:w-[88%] xl:w-[75%]"
        >
          <div className="flex justify-between w-full border-b border-[#80808080]">
            <div className="flex items-center">
              <Image src={AVATAR1} alt="icon" />
              <div className="flex flex-col ml-4">
                <h6 className="uppercase font-bold whiteOpacityColor text-[13px] lg:text-[18px] tracking-[2px]">
                  CURRENT RANK
                </h6>
                <h5 className="text-white font-bold text-[25px] lg:text-[34px] tracking-[2.5px]">
                  128,292th
                </h5>
              </div>
            </div>
            <div className="w-auto h-auto flex items-center">
              <div className="flex flex-col items-end justify-end mb-[13px]">
                <h5 className="uppercase text-[#ffffff] opacity-[20%] tracking-[.1rem] text-[15px] lg:text-[20px] font-extrabold">
                  Shadow Level
                </h5>
                <div className="flex items-center h-[5px] w-[200px] lg:w-[250px] my-[8px] lg:my-[10px]">
                  <div className="lvl_boxshadow w-[25%] h-full bg-[#FFFFFF]"></div>
                  <div className="flex-1 bg-[#353637] h-full"></div>
                </div>
                <h6 className="text-[13px] lg:text-[15px] font-light tracking-[.1rem]">
                  <span className="whiteOpacityColor">lv.25 - </span>
                  <span className="text-white">SPECIAL AGENT</span>
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
            <div className="flex flex-col w-[31%]">
              <h4 className="whiteOpacityColor font-bold tracking-[1px] text-[14px] lg:text-[17px]">
                MISSION COMPLETED
              </h4>
              <h6 className="text-white tracking-[2.5px] font-medium text-[24px] lg:text-[26px]">
                118
              </h6>
            </div>
            <div className="flex flex-col items-center border-x border-[#80808080] w-[38%]">
              <div>
                <h4 className="whiteOpacityColor font-bold tracking-[1px] text-[14px] lg:text-[17px]">
                  AGENT POINTS EARNED
                </h4>
                <h6 className="text-white tracking-[2.5px] font-medium text-[24px] lg:text-[26px]">
                  118,832
                </h6>
              </div>
            </div>
            <div className="flex flex-col items-end w-[31%]">
              <div>
                <h4 className="whiteOpacityColor font-bold tracking-[1px] text-[14px] lg:text-[17px]">
                  SHADOW CREDITS
                </h4>
                <h6 className="text-white tracking-[2.5px] font-medium text-[24px] lg:text-[26px]">
                  118,832
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="my-9">
          <ul className="flex items-center gap-10">
            <li
              className={`uppercase tracking-[1.5px] text-white font-bold text-[20px] cursor-pointer ${
                activeTab === Tabs.codebreakers_ranking
                  ? "text-shadow_foursides"
                  : "opacity-30"
              }`}
              onClick={() => setActiveTab(Tabs.codebreakers_ranking)}
            >
              CODEBREAKERS RANKING
            </li>
            <li
              className={`uppercase tracking-[1.5px] text-white font-bold text-[20px] cursor-pointer ${
                activeTab === Tabs.pmc_ranking
                  ? "text-shadow_foursides"
                  : "opacity-30"
              }`}
              onClick={() => setActiveTab(Tabs.pmc_ranking)}
            >
              PMC RANKING
            </li>
          </ul>
        </div>
        {activeTab === Tabs.codebreakers_ranking ? (
          <LeaderBoard_Positions />
        ) : (
          <PMC_ranking />
        )}
      </main>
      <Footer />
      <Image
        src={BG_IMG}
        alt="background_image"
        className="absolute top-0 right-0 w-full -z-50"
      />
      <Image
        src={SHADOW_IMG}
        alt="shadow_image"
        className="absolute top-[16rem] right-0 w-full -z-30"
        style={{ height: "calc(100% - 16rem)" }}
      />
    </>
  );
}

export default LeaderBoard;
