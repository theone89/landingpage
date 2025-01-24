"use client";
import Header from "@/components/Header";
import Services from "@/components/Services"; /* 
import Mission from "@/components/Mission";
import Team from "@/components/Team";
import Branches from "@/components/Branches";
import News from "@/components/News";
import Timeline from "@/components/Timeline";*/
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden ">
      <Header />
      <Services />
      {/*  <Mission />
      <Team />
      <Branches />
      <News />
      <Timeline />` */}
      <Contact />
    </main>
  );
}
