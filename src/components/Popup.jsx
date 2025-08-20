import Image from "next/image";
import React from "react";

const Popup = ({ setShowPopup }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
      <div className="relative flex flex-col w-full max-w-4xl overflow-hidden bg-white rounded-xl shadow-2xl md:flex-row">
        {/* Image section with a subtle overlay for better text readability */}
        <div className="relative hidden w-full md:w-1/2 md:flex">
          <Image
            src="/assests/images/pop.jpg"
            alt="Study community"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
          <div className="absolute bottom-6 left-6 text-white p-4">
          </div>
        </div>

        {/* Content section */}
        <div className="relative flex w-full flex-col justify-center p-8 md:w-1/2 sm:p-12">
          {/* Close button - modern and discreet */}
          <button
            className="absolute p-2 transition-transform duration-300 rounded-full top-4 right-4 text-gray-500 hover:text-gray-700 hover:scale-110"
            onClick={() => setShowPopup(false)}
            aria-label="Close popup"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
              Join the Global <span className="text-green-600">StudyBoosta</span> Community!
            </h2>
            <p className="mt-4 text-sm text-gray-600 md:text-base leading-relaxed">
              Over 1,000 students from 20+ universities are already part of the
              StudyBoosta community—and they’re gaining an edge! By joining, you&apos;ll get access to free live mentorship
              webinars, exclusive scholarship alerts, internship and job
              opportunities, and career-building resources that aren&apos;t
              shared anywhere else.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeuEcZMJ21CmW9lzY2UpSH8f4RnuX86Ft2M36n_9T9A_xkK3w/viewform"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setShowPopup(false)}
              className="self-start px-6 py-3 mt-8 font-semibold text-white transition-all duration-300 bg-green-600 rounded-lg hover:bg-green-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
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