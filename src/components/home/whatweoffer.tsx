"use client";
import React from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
const WhatWeOffer = () => {
  const { token } = useAuth();
  const offers = [
    {
      title: "Personalized career roadmap",
      description:
        "AI-built roadmaps that match your strengths and show clear steps to real jobs and study paths.",
      image: "/assests/images/whatweoffer1.png",
    },
    {
      title: "Expert coaching",
      description:
        "Book vetted Expert coaches for personalized advice, application help, and decision support.",
      image: "/assests/images/whatweoffer2.png",
    },
    {
      title: "Practice exam questions",
      description:
        "Adaptive quizzes and practice tests to help you study smarter and improve academic grades.",
      image: "/assests/images/whatweoffer3.png",
    },
    {
      title: "Digital & AI skills trainings",
      description:
        "Practical in high-demand digital & AI skills designed to give you an advantage in the job market.",
      image: "/assests/images/whatweoffer2.png",
    },
    {
      title: "Practice interviews",
      description:
        "Mock interviews with expert feedback so you walk into interviews confident and prepared to win.",
      image: "/assests/images/whatweoffer3.png",
    },
    {
      title: "Opportunity updates",
      description:
        "A curated feed of scholarships, internships, fellowships and opportunities matched to you.",
      image: "/assests/images/whatweoffer1.png",
    },
  ];

  return (
    <div className="bg-white w-full py-16 lg:px-4 px-4 md:px-0">
      <div className="text-center mb-12">
        <h2 className="text-black text-4xl font-extrabold text-[#1A1A1A]">
          What we offer
        </h2>
        <p className="text-black text-[16px] mt-2">
          <span className="font-semibold text-lg text-[#050C9C]">
            {" "}
            StudyBoosta helps you fix this:
          </span>{" "}
          get clarity, learn the right skills, and find real opportunities fast
        </p>
      </div>
      <div className="grid gap-y-8 gap-x-4 lg:grid-cols-3 md:grid-cols-2 md:px-10 lg:px-0 px-0 max-w-6xl mx-auto mb-32 mt-5 justify-center">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 relative h-[500px] "
          >
            {/* Background Image */}
            <div
              className="w-full h-full bg-cover bg-center flex flex-col justify-end"
              style={{ backgroundImage: `url(${offer.image})` }}
            >
              {/* Content */}
              <div className="relative z-10 flex flex-col justify-end h-full p-8 text-white">
                <h3 className="text-3xl font-bold mb-3 drop-shadow-md leading-tight">
                  {offer.title}
                </h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  {offer.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeuEcZMJ21CmW9lzY2UpSH8f4RnuX86Ft2M36n_9T9A_xkK3w/viewform">
          <button className="px-6 py-3 bg-[#050C9C] font-bold text-[16px] text-white rounded hover:bg-[#081566] mt-[40px] mb-[50px]">
            Get Free Opportunity Updates
          </button>
        </a>
      </div>
    </div>
  );
};

export default WhatWeOffer;
