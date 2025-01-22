import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services"; /* 
import Mission from "@/components/Mission";
import Team from "@/components/Team";
import Branches from "@/components/Branches";
import News from "@/components/News";
import Timeline from "@/components/Timeline";*/
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Background from "@/components/Background";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Background />
      <Navbar />
      <Header />
      <Services />
      {/*  <Mission />
      <Team />
      <Branches />
      <News />
      <Timeline />` */}
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
