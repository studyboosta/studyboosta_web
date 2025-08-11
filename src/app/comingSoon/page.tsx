"use client";
import { FaBolt } from "react-icons/fa";

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 text-center">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-black leading-tight">
        Coming Soon!!! <span className="text-[#050C9C]"></span>
      </h1>

      {/* Subtitle */}
      <p className="text-gray-600 text-lg sm:text-xl mt-4 max-w-2xl">
        We&apos;re crafting something amazing and mind-blowing in a very short while. <br/> Join our community for free to stay updated.
      </p>

      {/* Button */}
      <a href="https://bit.ly/joinstudyboosta">
        <button className="mt-6 flex items-center gap-2 bg-[#050C9C] text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-blue-700 transition">
          <FaBolt /> Launching Soon
        </button>
      </a>

      {/* Footer */}
      <p className="text-sm text-gray-500 mt-10">Launching Soon 🚀</p>
    </div>
  );
};

export default ComingSoon;
