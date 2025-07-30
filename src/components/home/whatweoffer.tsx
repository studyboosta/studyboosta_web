"use client";
import React from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
const WhatWeOffer = () => {
  const { token } = useAuth();
  const offers = [
    {
      title: "Smarter Learning, Better Results",
      description:
        "You’ll get free access to easy-to-follow video lessons tailored to your course of study in school. The expert video lessons break down complex topics so you can study smarter (not just harder) and ace your exams.",
      image: "/assests/images/whatweoffer1.png",
    },
    {
      title: "Mentoring from the Best",
      description:
        "You’ll also get mentored by top graduates (aka, Best Graduating Students)  and scholarship recipients who’ve excelled academically. Get the guidance you need to crush your goals with proven strategies and real-world advice.",
      image: "/assests/images/whatweoffer2.png",
    },
    {
      title: "Opportunities and a Thriving Community",
      description:
        "We provide updates on scholarships and internships that can transform your academic and career journey. We bring you the opportunities you deserve, all in one place & access to a vibrant network of students like you.",
      image: "/assests/images/whatweoffer3.png",
    },
    {
      title: "Digital Skills for a Thriving Future",
      description:
        "Get equipped with high income & in-demand digital skills. From entrepreneurship to tech tools, build your financial independence and get ahead in today’s competitive world.",
      image: "/assests/images/whatweoffer3.png",
    },
  ];

  return (
    <div className="bg-white w-full py-16 lg:px-4 px-4 md:px-0">
      <div className="text-center mb-12">
        <h2 className="text-black text-[28px] font-semibold">What we offer</h2>
        <p className="text-black text-[16px] mt-2">
          StudyBoosta offers a variety of services that help improve students
          all round.
        </p>
      </div>
     <div className="grid gap-y-8 gap-x-4 lg:grid-cols-4 md:grid-cols-2 md:px-10 lg:px-0 px-0 max-w-6xl mx-auto mb-32 mt-5 justify-center">
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
              <div className="p-6 ">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {offer.title}
                </h3>
                <p className="text-white text-sm">{offer.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center">
        <Link href={token ? "/marketplace" : "/signup"}>
          <button className="px-6 py-3 bg-[#050C9C] font-bold text-[16px] text-white rounded hover:bg-blue-800 mt-[40px] mb-[50px]">
            {token
              ? "Explore Our mentorship Program"
              : "Create an account for free"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WhatWeOffer;
