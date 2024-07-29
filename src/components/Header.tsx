import Image from "next/image";
import React, { useState } from "react";
import "@/styles/homePage.css";
import LOGO from "/public/assets/images/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AVATAR from "/public/assets/images/avatar.png";
import ACTIVELINK_LINE from "/public/assets/images/activelink_line.png";
import ACTIVELINK_LINE2 from "/public/assets/images/activelink_line2.png";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import HeaderTabs from "./HeaderTabs";

function Header() {
  const pathname = usePathname();
  const isRootPath: string = pathname == "/" ? "active" : "";
  const isLeaderBoard: string = pathname == "/leaderboard" ? "active" : "";
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  function ProfileInfo() {
    return (
      <div
        className={`${
          menuOpen
            ? "flex absolute top-[19rem] left-[50%] custom-transform"
            : "hidden"
        } md:flex items-center md:static`}
      >
        <div className="flex flex-col md:mr-1 lg:mr-3">
          <h4 className="uppercase font-light tracking-[3px] text-[12px] lg:text-base whiteOpacityColor">
            codeBreaker
          </h4>
          <h6 className="uppercase font-normal text-[15px] lg:text-[20px] tracking-[3px] text-white">
            0x23k...4534
          </h6>
        </div>
        <Image
          src={AVATAR}
          alt="avatar"
          className="w-[43px] h-[43px] lg:w-[50px] lg:h-[50px] object-fill"
        />
      </div>
    );
  }

  function NavLinks() {
    return (
      <nav
        className={`${
          !menuOpen
            ? "hidden"
            : "flex absolute top-[80px] left-0 w-full bg-black pb-16 menu_boxShadow"
        } md:static md:shadow-none md:z-auto md:bg-transparent md:flex md:pb-0 flex-col items-center flex-1`}
      >
        <ul
          className={`${
            menuOpen && "flex flex-col gap-6 my-10"
          } md:flex md:flex-row md:gap-0 md:my-0 items-center justify-center uppercase text-[#FFFFFF] font-medium text-[11px] lg:text-sm tracking-[3px] nav_links`}
        >
          <li className={isRootPath}>
            {isRootPath && (
              <span className="text-2xl mr-3 text-shadow">{"//"}</span>
            )}
            <Link href="/">MISSIONS</Link>
          </li>
          <li className={isLeaderBoard}>
            {isLeaderBoard && (
              <span className="text-2xl mr-3 text-shadow">{"//"}</span>
            )}
            <Link href="/leaderboard">LEADERBOARD</Link>
          </li>
          <li>
            <Link href="#">STAKING</Link>
          </li>
        </ul>
      </nav>
    );
  }

  return (
    <>
      <header className="h-[80px] md:h-auto border-b-2 border-[rgba(86,86,86,.35)] md:border-none p-[2%] box-border absolute top-0 left-0 z-50 w-full">
        <div className="flex justify-between items-center w-full md:relative">
          <div className="h-[80px] md:h-auto flex items-center justify-center absolute top-0 left-2 md:static">
            <Image src={LOGO} alt="logo" className="w-[65px] lg:w-[80px]" />
          </div>
          <div className="h-[80px] flex justify-center items-center absolute right-2 top-0 z-50 md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <CloseOutlined style={{ color: "white", fontSize: "28px" }} />
              ) : (
                <MenuOutlined style={{ color: "white", fontSize: "28px" }} />
              )}
            </button>
          </div>
          <NavLinks />
          <ProfileInfo />
          <div
            className={`hidden md:block absolute top-[55px] lg:top-[65px] w-full ${
              isRootPath
                ? "left-[-4.5rem] lg:left-[-7rem] xl:left-[-5rem] 2xl:left-[-2.5rem]"
                : "left-[-3.8rem] lg:left-[-5.5rem]"
            }`}
          >
            {isRootPath ? (
              <Image
                src={ACTIVELINK_LINE}
                alt="linethrough"
                className="w-full"
              />
            ) : (
              <Image
                src={ACTIVELINK_LINE2}
                alt="linethrough"
                className="w-full"
              />
            )}
          </div>
        </div>
      </header>
      {isRootPath && <HeaderTabs isMenuOpen={menuOpen} />}
    </>
  );
}

export default Header;
