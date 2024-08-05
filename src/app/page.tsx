"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Missions from "@/components/Missions";
import Slider from "@/components/Slider";
import { usePathname } from "next/navigation";
import SLIDERS_SHDW2 from "/public/assets/images/sliders_shdw2.png";
import SLIDERS_SHDW3 from "/public/assets/images/sliders_shdw3.png";
import Image from "next/image";

export default function Home() {
  const pathname = usePathname();
  const isRootPath: boolean = pathname == "/";
  return (
    <>
      {isRootPath && (
        <>
          <Image
            src={SLIDERS_SHDW2}
            alt="shadow_image"
            className="absolute top-[-5rem] left-0 -z-10 opacity-75"
          />
        </>
      )}
      <Image
        src={SLIDERS_SHDW3}
        alt="shadow_image"
        className="absolute top-[-5rem] right-0 -z-30"
      />
      <Header />
      <main>
        <Slider />
        <Missions />
      </main>
      <Footer />
    </>
  );
}
