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
        We're crafting something amazing in a very short while, we are bringing together expert video lessons, high-income digital skills,
        mentorship, scholarships, and internship updates – all in one place.
      </p>

      {/* Button */}
      <a href="https://chat.whatsapp.com/I2FEWTyTANI5F3sVWRQJD8">
      <button className="mt-6 flex items-center gap-2 bg-[#050C9C] text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-blue-800 transition">
        <FaBolt /> Stay Notified
      </button>
      </a>

      {/* Footer */}
      <p className="text-sm text-gray-500 mt-10">Launching Soon 🚀</p>
    </div>
  );
};

export default ComingSoon;
