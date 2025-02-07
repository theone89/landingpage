"use client";
import Header from "@/components/Header";
import Services from "@/components/Services"; /* 
import Mission from "@/components/Mission";
import Team from "@/components/Team";
import Branches from "@/components/Branches";
import News from "@/components/News";
import Timeline from "@/components/Timeline";*/
import Contact from "@/components/Contact";
import PartnersSection from "@/components/PatnersSlider";
import { partners } from "@/data/patnersData";
import Team from "@/components/Team";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen  ">
        <Services />
        <Team />
        {/*  <Mission />
      <Branches />
      <News />
      <Timeline />` */}
        <Contact />
        <PartnersSection partners={partners} />
      </main>
    </>
  );
}
