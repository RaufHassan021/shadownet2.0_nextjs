"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Missions from "@/components/Missions";
import Slider from "@/components/Slider";
import "@/styles/homePage.css";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Slider />
        <Missions />
      </main>
      <Footer />
    </>
  );
}
