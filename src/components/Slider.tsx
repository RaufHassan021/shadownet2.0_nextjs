import React from "react";
import Image from "next/image";
import SLIDER1_IMG1 from "/public/assets/images/slider1_img1.png";
import { Carousel } from "antd";
import SLIDER1_SKELETON_ICON from "/public/assets/images/slider1_skeletonIcon.png";
import SLIDER1_IMG2 from "/public/assets/images/slider1_img2.png";
import SLIDER2_IMG from "/public/assets/images/slider2_img.png";
import LORE_TAB_ICON from "/public/assets/images/lore_tab_icon.png";
import SLIDERS_SHDW1 from "/public/assets/images/sliders_shdw1.png";
import SLIDER2_BOTTOM_SHDW from "/public/assets/images/slider2_bottom_shdw.png";

const Slider: React.FC = () => {
  return (
    <>
      <Carousel dots={false} autoplay>
        <div className="relative">
          <Image
            src={SLIDERS_SHDW1}
            alt="shadow_image"
            className="absolute bottom-28 object-cover object-bottom left-0 w-full h-full z-50"
          />
          <span className="uppercase flex items-center whiteOpacityColor absolute top-[27%] sm:top-[25%] left-[5%] md:left-[10%]">
            <Image src={LORE_TAB_ICON} alt="icon" />
            <h6 className="ml-2 tracking-[3.5px] font-medium text-[12px] md:text-sm">
              Featured Mission
            </h6>
          </span>
          <Image
            src={SLIDER1_IMG1}
            alt="sliderImage"
            className="w-auto h-[45rem] sm:h-[60rem] md:h-[65rem] lg:h-[75rem] mt-14 sm:mt-0 lg:mt-[30px] z-40"
          />
          <Image
            src={SLIDER1_IMG2}
            alt="text-image"
            className="custom-transform absolute top-[45%] md:top-[50%] left-2/4 -z-30 w-4/5"
          />
          <div className="font-semibold text-[20px] leading-[25px] tracking-[4px] w-[50%] break-words absolute top-[16rem] left-[7%] text-gray-500 opacity-[0.07] -z-50">
            0101001111 101010010110101/1/1/
            0100010100101010110010101///1/////////101001010/1//10100100100011000101//0/1//10//0/1/10/01/01///01011011101000001011100101010100100010010010010100100100010101001111
            101010010110101/1/1/
            0100010100101010110010101///1/////////101001010/1//10100100100011000101//0/1//10//0/1/10/01/01///01011011101000001011100101010100100010010010010100100100010101001111
            101010010110101/1/1/
            0100010100101010110010101///1/////////101001010/1//10100100100011000101//0/1//10//0/1/10/01/01///01011011101000001011100101010100100010010010010100100100010101001111101010010110101/1/10100010100101010110010101///1/////////101001010/1//10100100100011000101//0/1//10//0/1/10/01/01///01011011101000001011100101010100100010010010010100100100010101001111
            101010010110101/1/1/
            0100010100101010110010101///1/////////101001010/1//10100100100011000101//0/1//10//0/1/10/01/01///01011011101000001011100101010100100010010010010100100100010101001111
            101010010110101/1/1/
            0100010100101010110010101///1/////////101001010/1//10100100100011000101//0/1//10//0/1/10/01/01///01011011101000001011100101010100100010010010010100100100010101001111
            101010010110101/1/1/
            0100010100101010110010101///1/////////101001010/1//10100100100011000101//0/1//10//0/1/10/01/01///0101101110100000101110010101010010001001001001010010010001
          </div>

          <div className="z-50 flex flex-col items-center lg:items-start absolute top-[58%] lg:top-[40%] right-0 lg:right-[2rem] xl:right-[12rem] slider1_textSide w-full lg:w-[350px]">
            <span className="uppercase flex items-center justify-center lg:justify-start whiteOpacityColor">
              <Image src={SLIDER1_SKELETON_ICON} alt="icon" />
              <h6 className="ml-2 tracking-[5px] font-medium text-base sm:text-lg text-shadow">
                THE elegant KILLER
              </h6>
            </span>
            <h1 className="bebasNeue-font text-white my-2 text-[5.4rem] md:text-[131px] font-bold leading-[74px] md:leading-[131px]">
              MANTIS
            </h1>
            <p className="whiteOpacityColor w-[290px] text-base text-center md:text-start">
              Lorem ipsum dolor sit amet brief description that tells you some
              lore facts.
            </p>
            <div className="relative w-[250px] h-[60px] mt-4 z-30">
              <button className="btn_clip_path uppercase absolute top-0 right-0 font-bold text-[17px] tracking-[2px] bg-[#0A0A0A] text-white w-full h-full z-20">
                Start Mission
              </button>
              <div className="btn_clip_path bg-[#3A3A3A] btn_btn_div absolute top-[-2px] left-[-2px] -z-20"></div>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            src={SLIDER2_BOTTOM_SHDW}
            className="absolute top-[20rem] md:top-[200px] lg:top-[300px] right-0 w-full h-[600px] object-cover object-top z-40"
            alt="shadow_img"
          />
          <span className="uppercase flex items-center whiteOpacityColor absolute top-[32%] md:top-[15%] lg:top-[37%] left-[5%] md:left-[10%]">
            <Image src={LORE_TAB_ICON} alt="icon" />
            <h6 className="ml-2 tracking-[3.5px] font-medium text-[12px] md:text-sm">
              Featured Mission
            </h6>
          </span>
          <Image
            src={SLIDER2_IMG}
            alt="sliderImage"
            className="w-full h-[30rem] sm:h-[35rem] md:h-[40rem] lg:h-[620px] mt-[165px] lg:mt-[216px] z-40"
          />
          <div className="z-50 custom-transform flex flex-col items-center absolute top-[70%] sm:top-[68%] md:top-[63%] lg:top-[72%] left-[50%] slider1_textSide w-10/12">
            <span className="uppercase flex items-center whiteOpacityColor">
              <h6 className="ml-2 mb-2 tracking-[3.5px] font-medium text-sm">
                GEOGRAPHY
              </h6>
            </span>
            <h1 className="text-center uppercase bebasNeue-font text-white my-2 text-[50px] md:text-[75px] w-[80%] lg:text-[90px] font-bold md:leading-[80px] lg:leading-[100px]">
              LEBENSKRAFT Lorem ipsum dolor sit amet
            </h1>
            <p className="whiteOpacityColor w-full px-[3%] md:px-0 md:w-[400px] py-0 lg:py-3 text-center text-[15px] lg:text-lg tracking-[1px]">
              Lorem ipsum dolor sit amet brief description that tells you some
              lore facts
            </p>
            <div className="relative w-[250px] h-[60px] mt-4 z-30">
              <button className="btn_clip_path uppercase absolute top-0 right-0 font-bold text-[17px] tracking-[2px] bg-[#0A0A0A] text-white w-full h-full z-20">
                Start Mission
              </button>
              <div className="btn_clip_path bg-[#3A3A3A] btn_btn_div absolute top-[-2px] left-[-2px] -z-20"></div>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default Slider;
