import React from "react";
import AVATAR1 from "/public/assets/images/leaderboard_avatar1.png";
import AVATAR2 from "/public/assets/images/leaderboard_avatar2.svg";
import AVATAR4 from "/public/assets/images/leaderboard_avatar4.png";
import AVATAR5 from "/public/assets/images/leaderboard_avatar5.png";
import AVATAR7 from "/public/assets/images/leaderboard_avatar7.png";
import AVATAR3 from "/public/assets/images/leaderboard_avatar3.png";
import AVATAR6 from "/public/assets/images/leaderboard_avatar6.png";
import AVATAR8 from "/public/assets/images/leaderboard_avatar8.png";
import Image from "next/image";
import { CaretDownFilled, CaretUpOutlined } from "@ant-design/icons";

function PMC_ranking() {
  return (
    <div className="w-[99%] md:w-[88%] xl:w-[75%] flex flex-col items-center justify-center h-auto relative">
      <div className="w-auto h-auto flex items-center">
        <div className="w-[5%] flex flex-col justify-around text-white h-[450px] text-[10px] tracking-[3px] font-bold">
          <h6 className="rotate-[270deg] mt-4">DOMINION</h6>
          <h6 className="rotate-[270deg] mb-4">RISING</h6>
          <h6 className="rotate-[270deg] mt-4">UNWORTHY</h6>
        </div>
        <ul className="flex items-center justify-between flex-wrap w-[90%] pmc_ranking">
          <li className="flex items-center w-[33%] h-[150px]">
            <div className="flex flex-col items-center">
              <Image
                src={AVATAR4}
                alt="avatar"
                className="w-[60px] object-cover"
              />
              <div className="flex items-center mt-1">
                <CaretUpOutlined style={{ color: "green" }} />
                <h6 className="text-xl font-black text-white text-shadow ml-2 mr-[26px]">
                  1st
                </h6>
              </div>
            </div>
            <div className="flex flex-col ml-1">
              <h5 className="font-medium text-lg text-[#9C9C9C] whitespace-nowrap">
                Sanzu Biomedical
              </h5>
              <span className="flex items-center">
                <h6 className="text-white text-xl font-light">12,342,322</h6>
                <h6 className="whiteOpacityColor text-xl font-light ml-4">
                  AP
                </h6>
              </span>
            </div>
          </li>
          <li className="flex items-center w-[33%] h-[150px]">
            <div className="flex flex-col items-center">
              <Image
                src={AVATAR1}
                alt="avatar"
                className="w-[60px] object-cover"
              />
              <div className="flex items-center mt-1">
                <CaretDownFilled style={{ color: "red" }} />
                <h6 className="text-xl font-black text-white text-shadow ml-2 mr-[26px]">
                  2nd
                </h6>
              </div>
            </div>
            <div className="flex flex-col ml-1">
              <h5 className="font-medium text-lg text-[#9C9C9C] whitespace-nowrap">
                Junpei Light & Power
              </h5>
              <span className="flex items-center">
                <h6 className="text-white text-xl font-light">7,342,322</h6>
                <h6 className="whiteOpacityColor text-xl font-light ml-4">
                  AP
                </h6>
              </span>
            </div>
          </li>
          <li className="flex items-center w-[33%] h-[150px]">
            <div className="flex flex-col items-center">
              <Image
                src={AVATAR5}
                alt="avatar"
                className="w-[60px] object-cover"
              />
              <div className="flex items-center mt-1">
                <h6 className="text-xl font-black text-white text-shadow">
                  3rd
                </h6>
              </div>
            </div>
            <div className="flex flex-col ml-1">
              <h5 className="font-medium text-lg text-[#9C9C9C] whitespace-nowrap">
                Deadeye Enforcement
              </h5>
              <span className="flex items-center">
                <h6 className="text-white text-xl font-light">1,342,322</h6>
                <h6 className="whiteOpacityColor text-xl font-light ml-4">
                  AP
                </h6>
              </span>
            </div>
          </li>
          <li className="flex items-center w-[33%] h-[150px]">
            <div className="flex flex-col items-center">
              <Image
                src={AVATAR7}
                alt="avatar"
                className="w-[50px] object-cover"
              />
              <div className="flex items-center mt-1">
                <h6 className="text-xl font-black whiteOpacityColor">4th</h6>
              </div>
            </div>
            <div className="flex flex-col ml-1">
              <h5 className="font-medium text-lg text-[#9C9C9C] whitespace-nowrap">
                Arotech Telecom
              </h5>
              <span className="flex items-center">
                <h6 className="text-white text-xl font-light">1,342,322</h6>
                <h6 className="whiteOpacityColor text-xl font-light ml-4">
                  AP
                </h6>
              </span>
            </div>
          </li>
          <li className="flex items-center w-[33%] h-[150px]">
            <div className="flex flex-col items-center">
              <Image
                src={AVATAR3}
                alt="avatar"
                className="w-[60px] object-cover"
              />
              <div className="flex items-center mt-1">
                <h6 className="text-xl font-black whiteOpacityColor">5th</h6>
              </div>
            </div>
            <div className="flex flex-col ml-1">
              <h5 className="font-medium text-lg text-[#9C9C9C] whitespace-nowrap">
                Patriots Division
              </h5>
              <span className="flex items-center">
                <h6 className="text-white text-xl font-light">1,342,322</h6>
                <h6 className="whiteOpacityColor text-xl font-light ml-4">
                  AP
                </h6>
              </span>
            </div>
          </li>
          <li className="flex items-center w-[33%] h-[150px]">
            <div className="flex flex-col items-center">
              <Image
                src={AVATAR6}
                alt="avatar"
                className="w-[60px] object-cover"
              />
              <div className="flex items-center mt-1">
                <h6 className="text-xl font-black whiteOpacityColor">6th</h6>
              </div>
            </div>
            <div className="flex flex-col ml-1">
              <h5 className="font-medium text-lg text-[#9C9C9C] whitespace-nowrap">
                0x898
              </h5>
              <span className="flex items-center">
                <h6 className="text-white text-xl font-light">1,342,322</h6>
                <h6 className="whiteOpacityColor text-xl font-light ml-4">
                  AP
                </h6>
              </span>
            </div>
          </li>
          <li className="flex items-center w-[33%] h-[150px]">
            <div className="flex flex-col items-center">
              <Image
                src={AVATAR8}
                alt="avatar"
                className="w-[50px] object-cover"
              />
              <div className="flex items-center mt-1">
                <h6 className="text-xl font-black whiteOpacityColor">7th</h6>
              </div>
            </div>
            <div className="flex flex-col ml-1">
              <h5 className="font-medium text-lg text-[#9C9C9C] whitespace-nowrap">
                Celeste Group
              </h5>
              <span className="flex items-center">
                <h6 className="text-white text-xl font-light">1,342,322</h6>
                <h6 className="whiteOpacityColor text-xl font-light ml-4">
                  AP
                </h6>
              </span>
            </div>
          </li>
          <li className="flex items-center w-[33%] h-[150px]">
            <div className="flex flex-col items-center">
              <Image
                src={AVATAR2}
                alt="avatar"
                className="w-[50px] object-cover"
              />
              <div className="flex items-center mt-1">
                <h6 className="text-xl font-black whiteOpacityColor">8th</h6>
              </div>
            </div>
            <div className="flex flex-col ml-1">
              <h5 className="font-medium text-lg text-[#9C9C9C] whitespace-nowrap">
                Lebenskraft Armorers
              </h5>
              <span className="flex items-center">
                <h6 className="text-white text-xl font-light">1,342,322</h6>
                <h6 className="whiteOpacityColor text-xl font-light ml-4">
                  AP
                </h6>
              </span>
            </div>
          </li>
          <li className="flex items-center w-[33%] h-[150px]">
            <div className="flex flex-col items-center">
              <Image
                src={AVATAR4}
                alt="avatar"
                className="w-[60px] object-cover"
              />
              <div className="flex items-center mt-1">
                <h6 className="text-xl font-black whiteOpacityColor">9th</h6>
              </div>
            </div>
            <div className="flex flex-col ml-1">
              <h5 className="font-medium text-lg text-[#9C9C9C] whitespace-nowrap">
                The Seekers
              </h5>
              <span className="flex items-center">
                <h6 className="text-white text-xl font-light">1,342,322</h6>
                <h6 className="whiteOpacityColor text-xl font-light ml-4">
                  AP
                </h6>
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div
        className="flex flex-col justify-center items-center py-4 box-border w-[90%] mt-8 border-l-4 border-[#E46138]"
        style={{
          background:
            "linear-gradient(90.21deg, #23252B -77.87%, rgba(35, 37, 43, 0) 121.27%)",
        }}
      >
        <div className="flex items-center w-full">
          <h6 className="text-white font-black tracking-[.5px] text-2xl w-[15%] sm:w-1/4 ml-[3%] sm:ml-[3rem]">
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
          <div className="flex items-center justify-between w-1/4 pr-[3%] sm:pr-[10%]">
            <h6 className="font-light text-white text-[20px]">15,200</h6>
            <h6 className="font-light text-white text-[20px] whiteOpacityColor">
              AP
            </h6>
          </div>
        </div>
      </div>
      <div
        className="absolute top-0 right-0 w-full h-[150px] -z-10 opacity-5"
        style={{
          background:
            "linear-gradient(180deg, #D9D9D9 0%, rgba(217, 217, 217, 0) 100%)",
        }}
      ></div>
    </div>
  );
}

export default PMC_ranking;
