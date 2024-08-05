import { Modal } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SHADOW_IMG from "/public/assets/images/modal_shadow_img.png";
import SHADOW_LINE from "/public/assets/images/modal_shadowline.png";
import ORANGE_SHADOW from "/public/assets/images/modal_orange_btm_shdw.png";
import GREEN_SHADOW from "/public/assets/images/modal_green_btm_shdw.png";
import RED_SHADOW from "/public/assets/images/modal_red_btm_shdw.png";
import LORE_TAB_ICON from "/public/assets/images/lore_tab_icon.png";
import {
  CaretRightOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import missions from "@/data";

interface MissionModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  missionId: number | null;
}

enum MissionStatus {
  Incomplete = "incomplete",
  Completed = "completed",
  Failed = "failed",
}

interface mission {
  id: number;
  title: string;
  category: string;
  type: string;
  status: string;
  story: string;
  question: string;
  answer: string;
  img: any;
}

const MissionModal: React.FC<MissionModalProps> = ({
  isModalOpen,
  setIsModalOpen,
  missionId,
}) => {
  const [answer, setAnswer] = useState("");
  const [mission, setMission] = useState<mission | null>(null);
  const handleClose = () => {
    setAnswer("");
    setIsModalOpen(false);
  };
  const sendAnswer = () => {
    if (answer.trim() === mission?.answer.trim()) {
      missions.forEach((obj) => {
        if (obj.id === mission?.id) {
          obj.status = MissionStatus.Completed;
          setMission({
            ...mission,
            status: MissionStatus.Completed,
          });
        }
      });
    } else {
      missions.forEach((obj) => {
        if (obj.id === mission?.id) {
          obj.status = MissionStatus.Failed;
          setMission({
            ...mission,
            status: MissionStatus.Failed,
          });
        }
      });
    }
  };

  useEffect(() => {
    if (missionId) {
      const mission = missions.find((obj) => obj.id === missionId) || null;
      setMission(mission);
    }
  }, [missionId, mission]);
  return (
    <Modal
      open={isModalOpen}
      onCancel={handleClose}
      onClose={handleClose}
      footer={null}
    >
      <div className="w-auto h-auto relative overflow-hidden pt-4 box-border">
        <Image
          src={mission?.img}
          alt="missionBg"
          className="w-full h-full absolute top-0 left-0 object-cover"
        />
        <Image
          src={SHADOW_IMG}
          alt="sliderImage"
          className="w-full h-full md:h-[auto] absolute top-[5%] md:top-[22%] left-0 object-cover"
        />
        <div className="z-20 relative">
          <div className="flex px-4 mt-3 mb-6">
            <CaretRightOutlined
              style={{
                color: "white",
              }}
            />
            <h6 className="text_shadow font-bold text-[13px] text-white tracking-[3px] ml-2">
              {mission?.type}
            </h6>
          </div>
          <div className="flex px-4 flex-col h-auto w-[99%] md:w-9/12 mx-auto items-center mt-[6rem]">
            <h5 className="gray_text_shadow text-white uppercase text-shadow font-medium tracking-[7px] text-sm">
              {mission?.category}
            </h5>
            <h2 className="w-[97%] md:w-9/12 gray_text_shadow uppercase mt-4 text-white bebasNeue-font font-bold text-[50px] leading-[60px] tracking-[2.5px] text-center">
              {mission?.title}
            </h2>
            <Image src={SHADOW_LINE} alt="shadow underline" className="my-11" />
            <p
              className="text-white gray_text_shadow text-[17px] font-light tracking-[2px]"
              dangerouslySetInnerHTML={{ __html: mission?.story || "" }}
            ></p>
            <Image src={SHADOW_LINE} alt="shadow underline" className="my-11" />
          </div>
          <div className="flex py-10 w-full h-auto items-center relative justify-center bg-[#0E1318]">
            {mission?.status === MissionStatus.Incomplete ? (
              <Image
                src={ORANGE_SHADOW}
                alt="shadow_img"
                className="absolute bottom-0 right-0 w-full h-auto object-cover"
              />
            ) : mission?.status === MissionStatus.Completed ? (
              <Image
                src={GREEN_SHADOW}
                alt="shadow_img"
                className="absolute bottom-0 right-0 w-full h-auto object-cover"
              />
            ) : (
              <Image
                src={RED_SHADOW}
                alt="shadow_img"
                className="absolute bottom-0 right-0 w-full h-auto object-cover"
              />
            )}
            <div className="flex flex-col w-[97%] md:w-[65%] items-center z-50 relative">
              <Image
                src={LORE_TAB_ICON}
                alt="icon"
                className="w-11 opacity-[25%]"
              />
              <p className="text-white font-semibold text-[26px] text-center tracking-[1px] my-8">
                {mission?.question}
              </p>
              {mission?.status === MissionStatus.Incomplete ? (
                <>
                  <textarea
                    onChange={(e) => setAnswer(e.target.value)}
                    value={answer}
                    className="w-11/12 opacity-[70%] tracking-[1px] text-white font-normal focus:outline-none h-[10rem] resize-none bg-[#0A0E13] border border-[#63636B] px-[5%] py-[4%] oxamin"
                    placeholder="Type your answer here..."
                  ></textarea>
                  <button
                    disabled={!answer.trim()}
                    onClick={sendAnswer}
                    className="modal_btns_clipPath uppercase bg-[#E46138] w-11/12 py-4 tracking-[1px] font-semibold my-10 text-[20px] text-white"
                  >
                    Send your answer
                  </button>
                </>
              ) : mission?.status === MissionStatus.Completed ? (
                <>
                  <CheckOutlined
                    style={{
                      color: "green",
                      fontSize: "45px",
                      marginTop: "30px",
                    }}
                  />
                  <h6 className="uppercase font-medium text-[25px] text-white tracking-[2px] mt-4 mb-1">
                    You pass!
                  </h6>
                  <p className="font-normal text-[15px] tracking-[1px] whiteOpacityColor">
                    Your knowledge of SHADOW WAR grows
                  </p>
                  <button
                    onClick={handleClose}
                    className="modal_btns_clipPath uppercase bg-black w-11/12 py-4 tracking-[1px] font-semibold my-10 text-[20px] text-white"
                  >
                    Close
                  </button>
                </>
              ) : (
                <>
                  <CloseOutlined
                    style={{
                      color: "red",
                      fontSize: "45px",
                      marginTop: "30px",
                    }}
                  />
                  <h6 className="uppercase font-medium text-[25px] text-white tracking-[2px] mt-4 mb-1">
                    nice try...
                  </h6>
                  <p className="font-normal text-[15px] tracking-[1px] whiteOpacityColor">
                    Better luck next time, agent.
                  </p>
                  <button
                    onClick={handleClose}
                    className="modal_btns_clipPath uppercase bg-black w-11/12 py-4 tracking-[1px] font-semibold my-10 text-[20px] text-white"
                  >
                    Close
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MissionModal;
