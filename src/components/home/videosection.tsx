"use client";
import Link from "next/link";
// import dynamic from "next/dynamic";
// import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useAuth } from "@/context/AuthContext";

const VideoSection = () => {
  const { token } = useAuth();

  return (
    <section className="bg-white w-full py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Video Section */}
        <div className="text-center mb-12">
          <h2 className="text-[28px] font-semibold text-gray-800 mb-8">
            How to navigate the StudyBoosta platform
          </h2>
          <iframe
            src="https://www.youtube.com/embed/sample-video"
            title="How to navigate the StudyBoosta platform"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full max-w-4xl h-[500px] mx-auto rounded-lg shadow-lg"
          ></iframe>
        </div>

        <div className="flex justify-center items-center">
          <Link href={token ? "/courses" : "/signup"}>
            <button className="px-6 py-3 bg-[#050C9C] font-bold text-[16px] text-white rounded hover:bg-blue-800 mt-[40px] mb-[50px]">
              {token ? "Go to Courses" : "Create an account for free"}
            </button>
          </Link>
        </div>

        {/* Reviews Section */}
        
      </div>
    </section>
  );
};

export default VideoSection;
