import Image from "next/image";
import React, { useState } from "react";
import LORE_TAB_ICON from "/public/assets/images/lore_tab_icon.png";
import MISSION_BG_SHADOW from "../../public/assets/images/mission_bg_shadow.png";
import { CaretRightOutlined } from "@ant-design/icons";
import missions from "@/data.js";
import MissionModal from "./Modal";

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
      <div className="mt-[40px] sm:mt-[-3rem] md:mt-[-5rem] lg:mt-[-17rem]">
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
                  mission.status === "incomplete"
                    ? "cursor-pointer"
                    : "opacity-[50%] cursor-not-allowed"
                }`}
                onClick={() =>
                  mission.status === "incomplete" &&
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
                  style={{ color: "white" }}
                  className="absolute top-8 left-7"
                />
                <div className="border-2 border-[rgba(255,255,255,0.1)] w-[96%] h-[97.2%] rounded-xl flex flex-col items-start justify-end">
                  <div className="w-full h-fit flex flex-col px-4 box-border">
                    <h5 className="text-white uppercase text-shadow font-medium tracking-[3px] text-sm">
                      {mission.category}
                    </h5>
                    <div className="w-full h-[2px] my-4 bg-[#FFFFFF] opacity-[5%]"></div>
                    <p className="uppercase text-white bebasNeue-font font-bold text-[22px] tracking-[.5px]">
                      {mission.title}
                    </p>
                    <div className="flex mt-3 mb-6">
                      <CaretRightOutlined
                        style={{
                          color:
                            mission.status == "incomplete"
                              ? "white"
                              : mission.status == "completed"
                              ? "green"
                              : "#A32F0B",
                        }}
                      />
                      <h6
                        className={`font-bold text-[13px] ${
                          mission.status == "incomplete"
                            ? "whiteOpacityColor"
                            : mission.status === "completed"
                            ? "text-[green] uppercase"
                            : "text-[#A32F0B] uppercase"
                        } tracking-[3px] ml-2`}
                      >
                        {mission.status == "incomplete"
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
            <button
              onClick={() => setMissionsLength(missionsLength + 4)}
              className="rounded-2xl border border-[#3A3A3A] uppercase font-bold text-[17px] tracking-[2px] bg-[#0A0A0A] text-white w-fit py-4 px-10 mt-4"
            >
              Learn More...
            </button>
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
