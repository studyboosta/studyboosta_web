"use client";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const HeroSection = () => {
  const { token } = useAuth();
  const words = ["Career", "Dream", "Life"]; // words to animate
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 4000); // swap every 4s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" w-full flex justify-center text-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center max-w-4xl w-full">
        {/* Heading with animated words */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] leading-tight mt-12 mb-6 tracking-tight">
          Stop Guessing. Start Building the{" "}
          <span className="text-[#050C9C] inline-flex items-baseline">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="text-[#050C9C] ml-2 inline-block"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </span>
          you actually want.
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-[#5C5C5C] max-w-2xl mb-8 leading-relaxed">
          StudyBoosta gives you a simple & clear career roadmap, Interview/Exam
          practice, real opportunities & practical digital/AI skills to earn
          globally.
        </p>

        {/* Button */}
        <Link href={token ? "/courses" : "/signup"}>
          <button className="px-8 py-4 bg-[#050C9C] font-bold text-lg text-white rounded-xl shadow-lg hover:bg-[#081566] transition-all duration-300 ease-in-out transform hover:-translate-y-1 mt-6 mb-8">
            {token ? "Go to Courses" : "Get Started for Free"}
          </button>
        </Link>

        {/* Footer note */}
        <p className="text-sm text-[#888888] font-medium tracking-wide">
          Join 1,000+ members • Built by founders who’ve trained over 2,000+
          learners
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
