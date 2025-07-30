import WhatWeOffer from "@/components/home/whatweoffer";
import HeroSection from "@/components/home/hero";
import VideoSection from "@/components/home/videosection";
import TopCourses from "@/components/home/topcourses";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import React from "react";
import ClientPopupWrapper from "@/components/ClientPopupWrapper";

const Home = () => {
  
  return (
    <>
    <ClientPopupWrapper />
      <HeroSection />
      <WhatWeOffer />
      <TopCourses />
      <VideoSection />
    </>
  );
};

export default Home;
