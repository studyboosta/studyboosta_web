import Image from "next/image";
import React from "react";

const StudyFeatures = () => {
  return (
    <section className="bg-[#F8F8F8] py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px]">
          <Image
            src="/assests/images/heroImage.png" // 👉 replace with your image
            alt="Student learning on laptop"
            fill
            className="rounded-2xl object-cover shadow-lg"
          />
        </div>

        {/* Right: Text */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A] mb-6 leading-snug">
            Specially Designed for You <span className="ml-1">👊</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#5C5C5C] leading-relaxed">
            Whether you’re an early career professional, student, graduate, or
            ambitious self-learner without a university degree, don’t worry,
            <span className="font-semibold text-[#050C9C]"> StudyBoosta </span>
            is here to help you discover your path, build in-demand skills, grow
            faster in today’s competitive world, and earn globally!
          </p>
        </div>
      </div>
    </section>
  );
};

export default StudyFeatures;
