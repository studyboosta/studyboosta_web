import WhatWeOffer from "@/components/home/whatweoffer";
import HeroSection from "@/components/home/hero";
import VideoSection from "@/components/home/videosection";
import TopCourses from "@/components/home/topcourses";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import React from "react";
import ClientPopupWrapper from "@/components/ClientPopupWrapper";
import Testimonial from "@/components/home/testimonial";
import CareerStats from "@/components/home/careerstats";
import StudyFeatures from "@/components/home/studyfeatures";
import FAQSection from "@/components/home/faqsection";

const Home = () => {
  return (
    <>
      <ClientPopupWrapper />
      <HeroSection />
      <Testimonial />
      <CareerStats />
      <WhatWeOffer />
      <StudyFeatures />
      {/* <TopCourses /> */}
      <VideoSection />
       <FAQSection /> 
    </>
  );
};

export default Home;
