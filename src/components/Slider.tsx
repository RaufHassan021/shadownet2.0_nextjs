import React from "react";
import Image from "next/image";
import "@/styles/homePage.css";
import SLIDER1_IMG1 from "/public/assets/images/slider1_img1.png";
import { Carousel } from "antd";
import SLIDER1_SKELETON_ICON from "/public/assets/images/slider1_skeletonIcon.png";
import SLIDER1_IMG2 from "/public/assets/images/slider1_img2.png";
import LORE_TAB_ICON from "/public/assets/images/lore_tab_icon.png";
import SLIDER2_IMG from "/public/assets/images/slider2_img.png";

const Slider: React.FC = () => {
  return (
    <>
      <Carousel dots={false} autoplay>
        <div className="relative">
          <span className="uppercase flex items-center whiteOpacityColor absolute top-[27%] sm:top-[25%] left-[5%] md:left-[10%]">
            <Image src={LORE_TAB_ICON} alt="icon" />
            <h6 className="ml-2 tracking-[3.5px] font-medium text-[12px] md:text-sm">
              Featured Mission
            </h6>
          </span>
          <Image
            src={SLIDER1_IMG1}
            alt="sliderImage"
            className="w-full h-[45rem] sm:h-[60rem] md:h-[65rem] lg:h-[75rem] mt-14 sm:mt-3 lg:mt-[25px] z-40"
          />
          <Image
            src={SLIDER1_IMG2}
            alt="text-image"
            className="custom-transform absolute top-[45%] md:top-[50%] left-2/4 -z-30 w-4/5"
          />
          <div className="flex flex-col items-center lg:items-start absolute top-[58%] lg:top-[40%] right-0 lg:right-[2rem] xl:right-[6rem] slider1_textSide w-full lg:w-[350px]">
            <span className="uppercase flex items-center justify-center lg:justify-start whiteOpacityColor">
              <Image src={SLIDER1_SKELETON_ICON} alt="icon" />
              <h6 className="ml-2 tracking-[3.7px] font-medium text-base sm:text-lg gray_text_shadow">
                THE elegant KILLER
              </h6>
            </span>
            <h1 className="bebasNeue-font text-white my-2 text-[4rem] md:text-[85px] font-bold leading-[85px]">
              MANTIS
            </h1>
            <p className="whiteOpacityColor w-[290px] text-base text-center md:text-start">
              Lorem ipsum dolor sit amet brief description that tells you some
              lore facts.
            </p>
            <button className="rounded-2xl border border-[#3A3A3A] uppercase font-bold text-[17px] tracking-[2px] bg-[#0A0A0A] text-white w-fit py-4 px-10 mt-4">
              Start Mission
            </button>
          </div>
        </div>
        <div className="relative">
          <span className="uppercase flex items-center whiteOpacityColor absolute top-[32%] md:top-[35%] lg:top-[37%] left-[5%] md:left-[10%]">
            <Image src={LORE_TAB_ICON} alt="icon" />
            <h6 className="ml-2 tracking-[3.5px] font-medium text-[12px] md:text-sm">
              Featured Mission
            </h6>
          </span>
          <Image
            src={SLIDER2_IMG}
            alt="sliderImage"
            className="w-full h-[30rem] sm:h-[35rem] md:h-[40rem] lg:h-[580px] mt-[165px] lg:mt-[216px] z-40"
          />
          <div className="custom-transform flex flex-col items-center absolute top-[70%] sm:top-[68%] lg:top-[70%] left-[50%] slider1_textSide w-10/12">
            <span className="uppercase flex items-center whiteOpacityColor">
              <h6 className="ml-2 mb-2 tracking-[3.5px] font-medium text-sm">
                GEOGRAPHY
              </h6>
            </span>
            <h1 className="text-center uppercase bebasNeue-font text-white my-2 text-[2rem] md:text-[3rem] lg:text-[65px] font-bold md:leading-normal lg:leading-[85px]">
              LEBENSKRAFT Lorem ipsum dolor sit amet
            </h1>
            <p className="whiteOpacityColor w-full px-[3%] md:px-0 md:w-[400px] py-0 lg:py-3 text-center text-[15px] lg:text-lg tracking-[1px]">
              Lorem ipsum dolor sit amet brief description that tells you some
              lore facts
            </p>
            <button className="rounded-2xl border border-[#3A3A3A] uppercase font-bold text-[17px] tracking-[2px] bg-[#0A0A0A] text-white w-fit py-4 px-10 mt-4">
              Start Mission
            </button>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default Slider;
