import SOCIAL_TAB_ICON from "/public/assets/images/social_tab_icon.png";
import Image from "next/image";
import GAMING_TAB_ICON from "/public/assets/images/gaming_tab_icon.png";
import LORE_TAB_ICON from "/public/assets/images/lore_tab_icon.png";
import DAILY_TAB_ICON from "/public/assets/images/daily_tab_icon.png";
import POLLS_TAB_ICON from "/public/assets/images/polls_tab_icon.png";
import { useState } from "react";

interface Menu {
  isMenuOpen: boolean;
}

function HeaderTabs({ isMenuOpen }: Menu) {
  const [activeTab, setActiveTab] = useState(3);

  const tabs = [
    {
      tab: 1,
      name: "Social",
      icon: SOCIAL_TAB_ICON,
    },
    {
      tab: 2,
      name: "Gaming",
      icon: GAMING_TAB_ICON,
    },
    {
      tab: 3,
      name: "Lore",
      icon: LORE_TAB_ICON,
    },
    {
      tab: 4,
      name: "Daily",
      icon: DAILY_TAB_ICON,
    },
    {
      tab: 5,
      name: "Polls",
      icon: POLLS_TAB_ICON,
    },
  ];
  return (
    <div
      className={`w-full border-b-2 border-[rgba(86,86,86,.35)] flex justify-between pr-[2%] pl-[4%] box-border absolute top-[85px] lg:top-[120px] left-0 overflow-x-auto scroll-hide ${
        isMenuOpen ? "-z-20" : "z-50"
      } md:z-50`}
    >
      <ul className="tabs uppercase flex items-center w-fit gap-[34px] lg:gap-10">
        {tabs.map(({ tab, name, icon }) => (
          <li
            key={tab}
            className={`${
              activeTab == tab ? "active" : ""
            } text-[12px] lg:text-[15px] py-[24px] lg:py-[30px] cursor-pointer`}
            onClick={() => setActiveTab(tab)}
          >
            <Image
              src={icon}
              alt="icon"
              className={`${
                (tab == 5 && "mb-[5px]") || (tab == 3 && "mb-[3px]")
              } w-5 lg:w-[22px]`}
            />
            {name}
          </li>
        ))}
      </ul>
      <div className="flex flex-col items-end justify-end mb-[13px] ml-[200px]">
        <h5 className="uppercase text-[#ffffff] opacity-[20%] tracking-[.1rem] text-[15px] lg:text-[20px] font-extrabold">
          Shadow Level
        </h5>
        <div className="flex items-center h-[5px] w-[200px] lg:w-[250px] my-[7px] lg:my-[10px]">
          <div className="lvl_boxshadow w-[25%] h-full bg-[#FFFFFF]"></div>
          <div className="flex-1 bg-[#353637] h-full"></div>
        </div>
        <h6 className="text-[12px] lg:text-[14px] font-light whiteOpacityColor tracking-[.1rem]">
          lv.25 - SPECIAL AGENT
        </h6>
      </div>
    </div>
  );
}

export default HeaderTabs;
