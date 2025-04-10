"use client";
import WhatWeOffer from "@/components/home/whatweoffer";
import HeroSection from "@/components/home/hero";
import VideoSection from "@/components/home/videosection";
import TopCourses from "@/components/home/topcourses";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import React, { useEffect, useState } from "react";
import Popup from "@/components/Popup";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenPopup");

    if (!hasSeenPopup) {
      setShowPopup(true);
      localStorage.setItem("hasSeenPopup", "true");
    }
  }, []);

  return (
    <>
      {showPopup && <Popup setShowPopup={setShowPopup} />}
      <HeroSection />
      <WhatWeOffer />

      <TopCourses />
      <VideoSection />
    </>
  );
};

export default Home;
