import Image from "next/image";
import React, { useState } from "react";
import LORE_TAB_ICON from "/public/assets/images/lore_tab_icon.png";
import MISSION_BG_SHADOW from "../../public/assets/images/mission_bg_shadow.png";
import { CaretRightOutlined } from "@ant-design/icons";
import missions from "@/data";
import MissionModal from "./Modal";

enum MissionStatus {
  Incomplete = "incomplete",
  Completed = "completed",
  Failed = "failed",
}

function Missions() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mission, setMission] = useState<number | null>(null);
  const [missionsLength, setMissionsLength] = useState(8);

  const handleMissionClick = (id: number) => {
    setIsModalOpen(true);
    setMission(id);
  };
  return (
    <>
      <div className="mt-[40px] sm:mt-[-3rem] md:mt-[-5rem] lg:mt-[-15rem] z-50 relative">
        <span className="uppercase flex items-center mx-10">
          <Image src={LORE_TAB_ICON} alt="icon" />
          <h6 className="ml-2 tracking-[3.5px] font-medium whiteOpacityColor text-sm">
            Past Missions
          </h6>
        </span>
        <ul className="flex items-center justify-center my-16 flex-wrap gap-4">
          {missions.slice(0, missionsLength).map((mission) => {
            return (
              <li
                key={mission.id}
                className={`w-[330px] h-[470px] relative flex justify-center items-center rounded-xl overflow-hidden ${
                  mission.status === MissionStatus.Incomplete
                    ? "cursor-pointer missionHover"
                    : "opacity-[50%] cursor-not-allowed"
                }`}
                onClick={() =>
                  mission.status === MissionStatus.Incomplete &&
                  handleMissionClick(mission.id)
                }
              >
                <div className="w-full h-full object-cover absolute top-0 right-0 -z-10">
                  <Image
                    src={mission.img}
                    alt="mission_img"
                    className="object-cover w-full h-full"
                  />
                </div>
                <Image
                  src={MISSION_BG_SHADOW}
                  alt="shadow_image"
                  className="w-full h-full object-cover absolute top-0 right-0 -z-10"
                />
                <CaretRightOutlined
                  style={{
                    color:
                      mission.status == MissionStatus.Incomplete
                        ? "white"
                        : mission.status == MissionStatus.Completed
                        ? "green"
                        : "#A32F0B",
                  }}
                  className="absolute top-8 left-7"
                />
                <div className="border-2 border-[rgba(255,255,255,0.1)] w-[96%] h-[97.2%] rounded-xl flex flex-col items-start justify-end">
                  <div className="w-full h-fit flex flex-col px-4 box-border">
                    <h5 className="text-white uppercase text-shadow font-medium tracking-[3px] text-sm">
                      {mission.category}
                    </h5>
                    <div className="w-full h-[2px] my-4 bg-[#FFFFFF] opacity-[5%]"></div>
                    <p className="uppercase text-white bebasNeue-font font-bold text-[33px] tracking-[2px]">
                      {mission.title}
                    </p>
                    <div className="flex mt-3 mb-6">
                      <CaretRightOutlined
                        style={{
                          color:
                            mission.status == MissionStatus.Incomplete
                              ? "white"
                              : mission.status == MissionStatus.Completed
                              ? "green"
                              : "#A32F0B",
                        }}
                      />
                      <h6
                        className={`font-bold text-[13px] ${
                          mission.status == MissionStatus.Incomplete
                            ? "whiteOpacityColor"
                            : mission.status === MissionStatus.Completed
                            ? "text-[green] uppercase"
                            : "text-[#A32F0B] uppercase"
                        } tracking-[3px] ml-2`}
                      >
                        {mission.status == MissionStatus.Incomplete
                          ? mission.type
                          : mission.status}
                      </h6>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        {missionsLength != missions.length && (
          <div className="w-full flex items-center justify-center">
            <div className="relative w-[250px] h-[60px] mt-4 z-30">
              <button
                onClick={() => setMissionsLength(missionsLength + 4)}
                className="btn_clip_path uppercase absolute top-0 right-0 font-bold text-[17px] tracking-[2px] bg-[#0A0A0A] text-white w-full h-full z-20"
              >
                Learn More...
              </button>
              <div className="btn_clip_path bg-[#3A3A3A] btn_btn_div absolute top-[-2px] left-[-2px] -z-20"></div>
            </div>
          </div>
        )}
      </div>
      <MissionModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        missionId={mission}
      />
    </>
  );
}

export default Missions;
