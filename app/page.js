import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import LiveStreamBanner from "./components/LiveStreamBanner";
import ServicesSection from "./components/ServicesSection";
import MessagesSection from "./components/MessagesSection";
import OutreachSection from "./components/OutreachSection";
import WhatWeBelieveSection from "./components/WhatWeBelieveSection";
import DonateSection from "./components/DonateSection";
import AboutPastorSection from "./components/AboutPastorSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <LiveStreamBanner />
        <ServicesSection />
        <MessagesSection />
        <OutreachSection />
        <WhatWeBelieveSection />
        <DonateSection />
        <AboutPastorSection />
      </main>
      <Footer />
    </div>
  );
}


