import Image from "next/image";
import React from "react";
import LOGO from "/public/assets/images/logo.png";
import {
  DiscordFilled,
  FacebookFilled,
  InstagramFilled,
  XOutlined,
  YoutubeFilled,
} from "@ant-design/icons";

function Footer() {
  return (
    <footer className="w-full flex flex-col mt-44 px-[2%]">
      <div className="flex flex-col items-center sm:flex-row justify-between w-full py-6 border-b border-[#6D7078]">
        <Image src={LOGO} alt="logo" className="w-[65px]" />
        <div className="flex items-center text-3xl whiteOpacityColor gap-8 mt-9 mb-6 sm:mb-0 sm:mt-0">
          <XOutlined />
          <YoutubeFilled />
          <InstagramFilled />
          <FacebookFilled />
          <DiscordFilled />
        </div>
      </div>
      <div className="w-full flex justify-center sm:justify-end my-5 text-[#6D7078] font-normal text-[10px] sm:text-[12px]">
        <p>© 2023 Shadownet · A Shadow War NFT Project · Break Survelliance </p>
      </div>
    </footer>
  );
}

export default Footer;
