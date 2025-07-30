import Image from "next/image";
import React from "react";

const Popup = ({ setShowPopup }) => {
  return (
    <div className="z-50 fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="flex flex-col md:flex-row w-[80%] h-[550px] bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Image section */}
        <div className="w-full md:w-1/2 h-64 md:h-auto hidden sm:block relative">
          <Image
            src="/assests/images/pop.jpg"
            alt="popup"
            fill
            className="object-fit"
          />
        </div>

        {/* Text section */}
        <div className="w-full md:w-1/2 p-10  flex flex-col relative">
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700"
            onClick={() => setShowPopup(false)}
          >
            ×
          </button>
          <div className="pt-0 sm:pt-10 m flex flex-col justify-center h-full">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 sm:mb-6 mb-4">
              Join the Global StudyBoosta Community on WhatsApp!
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed sm:mb-10 mb-6">
              Over 1,000 students from 20+ universities are already part of the
              StudyBoosta community &mdash; and they&rsquo;re gaining an edge!
              By joining, you&apos;ll get access to free live mentorship
              webinars, exclusive scholarship alerts, internship and job
              opportunities, and career-building resources that aren&rsquo;t
              shared anywhere else.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeuEcZMJ21CmW9lzY2UpSH8f4RnuX86Ft2M36n_9T9A_xkK3w/viewform"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setShowPopup(false)}
              className="bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-md self-start transition cursor-pointer"
            >
              Click here to join now!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
