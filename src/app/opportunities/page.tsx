"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import Image from "next/image";

const scholarships = [
  {
    id: 1,
    logo: "/assests/images/image (6).png",
    title: "MTN Go Funds Scholarship 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis maxime quae rem, est labore rerum molestias.",
  },
  {
    id: 2,
    logo: "/assests/images/image (7).png",
    title: "NNPC Tour Scholarship 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis maxime quae rem, est labore rerum molestias.",
  },
  {
    id: 3,
    logo: "/assests/images/image (8).png",
    title: "Total Teens Scholarship 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis maxime quae rem, est labore rerum molestias.",
  },
  {
    id: 4,
    logo: "/assests/images/image (9).png",
    title: "NNPC Tertiary Scholarship 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis maxime quae rem, est labore rerum molestias.",
  },
  {
    id: 5,
    logo: "/assests/images/image (10).png",
    title: "Zenith Bank Brighter Future Scholarship 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis maxime quae rem, est labore rerum molestias.",
  },
  {
    id: 6,
    logo: "/assests/images/image (11).png",
    title: "Opay Giveaway Scholarship 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis maxime quae rem, est labore rerum molestias.",
  },
];

const ScholarshipsPage = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  const handleSearch = () => {
    console.log("Search submitted!");
    // Implement search logic here
  };

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  return (
    <div className="min-h-screen mx-6 bg-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Search Section */}
        <div className="relative flex justify-center items-center mb-6">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={handleSearch}
              className="absolute top-0 bottom-0 left-0 px-3 flex items-center text-gray-500"
            >
              <FaSearch />
            </button>
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-[#E5EBFF] rounded-full focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Filter Section */}
        <div className="relative mb-6">
          <button
            onClick={toggleFilter}
            className="flex items-center px-4 py-2 bg-[#000B76] text-[14px] text-white rounded-md shadow hover:bg-[#081566]"
          >
            Most recent <IoMdArrowDropdown className="ml-2" />
          </button>
          {filterOpen && (
            <div className="absolute mt-2 bg-white border z-10 border-gray-200 rounded-md shadow-lg">
              <ul>
                <li className="px-4 py-2 hover:bg-[#081566] hover:text-white cursor-pointer">
                  Most recent
                </li>
                <li className="px-4 py-2 hover:bg-[#081566] hover:text-white cursor-pointer">
                  Oldest
                </li>
                <li className="px-4 py-2 hover:bg-[#081566] hover:text-white cursor-pointer">
                  Popular
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Scholarships Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {scholarships.map((scholarship) => (
            <div
              key={scholarship.id}
              className="bg-white shadow rounded-lg overflow-hidden"
            >
              <div className="w-full h-40 bg-gray-100 relative">
                <Image
                  src={scholarship.logo}
                  alt={scholarship.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">
                  {scholarship.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {scholarship.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScholarshipsPage;
