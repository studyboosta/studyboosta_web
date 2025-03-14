"use client";
import React, { useState } from "react";
import Image from "next/image";

interface Course {
  id: number;
  title: string;
  instructor: string;
  price: string;
  oldprice: string;
  rating: number;
  reviews: number;
  image: string;
}

const CoursesSection: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const courses: Course[] = [
    {
      id: 1,
      title: "Data Analytics 101",
      instructor: "Gloria Stark and Wilbur Becker",
      price: "₦4,500",
      oldprice: "₦20,000",
      rating: 4.5,
      reviews: 1200,
      image: "/assests/images/image 1.png",
    },
    {
      id: 2,
      title: "Artificial Intelligence",
      instructor: "Gloria Stark and Wilbur Becker",
      price: "₦4,500",
      oldprice: "₦20,000",
      rating: 4.5,
      reviews: 1050,
      image: "/assests/images/image 2.png",
    },
    {
      id: 3,
      title: "UI/UX",
      instructor: "Gloria Stark and Wilbur Becker",
      price: "₦4,500",
      oldprice: "₦20,000",
      rating: 4.5,
      reviews: 980,
      image: "/assests/images/image 3.png",
    },
    {
      id: 4,
      title: "Python",
      instructor: "Gloria Stark and Wilbur Becker",
      price: "₦4,500",
      oldprice: "₦20,000",
      rating: 4.5,
      reviews: 1100,
      image: "/assests/images/image 4.png",
    },
  ];

  const categories = [
    "Data Analytics",
    "Search Engine Marketing (SEM)",
    "Python",
    "Artificial Intelligence",
    "Data Science",
    "ChatGPT",
    "Web Development",
  ];

  return (
      <div className="bg-white">
        {/* Hero Section */}
        <div
          className="relative text-white py-16 px-6 text-center"
          style={{ backgroundImage: `url(/assests/images/Rectangle.png)` }}
        >
          <h1 className="text-[28px] lg:text-[30px]  md:text-[22px] sm:text-[18px] font-bold mb-4">
            Get all the skills necessary to have a successful career in tech.
          </h1>
          <p className="mx-auto text-[14px] sm:text-[10px]  md:text-[12px] lg:text-[14px] italic mb-4 max-w-5xl">
            Let StudyBoosta get you started. We have a variety of top courses
            for you to choose from, taught by top-notch tutors and
            professionals.
          </p>
          <div className="relative max-w-4xl mx-auto">
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full py-3 pl-12 pr-4 rounded-full text-black"
            />
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 18a7 7 0 100-14 7 7 0 000 14zm0 0l4 4m-4-4l-4-4"
                />
              </svg>
            </span>
          </div>
        </div>

        {/* Courses Section */}
        <div className="max-w-7xl mx-auto py-8 px-6">
          {/* Courses Section */}
          <div className="max-w-7xl mx-auto py-8 px-6">
            {/* Tabs */}
            <div className="flex flex-wrap items-center justify-start gap-2 mb-8">
              <button className="px-3 py-2 bg-[#050C9C] text-white rounded-full text-[14px]">
                Trending
              </button>

              {/* Show other tabs only on larger screens */}
              <div className="hidden lg:flex gap-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="px-2 py-2 bg-[#F1F5FF] text-[14px] text-[rgba(0,0,0,0.7)] rounded-full hover:bg-gray-300"
                  >
                    {category}
                  </button>
                ))}
              </div>
              {/* View All Button */}
              <button className="ml-auto text-[#000B76] font-[12px] hover:underline">
                View All
              </button>

              {/* Dropdown for smaller screens */}
              <div className="lg:hidden relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="px-4 py-2 bg-[#F1F5FF] text-[14px] text-[rgba(0,0,0,0.7)] rounded-full flex items-center hover:bg-gray-300"
                >
                  Categories
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="absolute mt-2 bg-white shadow-lg rounded-lg p-2 z-10">
                    {categories.map((category) => (
                      <button
                        key={category}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsDropdownOpen(false)} // Close dropdown on click
                      >
                        {category}
                      </button>
                    ))}
                    {/* View More inside dropdown for smaller screens */}
                    <button className="block w-full text-left px-4 py-2 text-sm text-[#000B76] font-bold hover:bg-gray-100">
                      View All
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Courses Grid */}
          {/* Courses Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-lg overflow-hidden border"
              >
                <div className="relative h-40">
                  <Image
                    src={course.image}
                    alt={course.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-[14px] text-black">
                      {course.title}
                    </h3>
                    <div className="flex items-center">
                      <span className="text-[14px] font-medium text-black">
                        {course.rating}
                      </span>
                      <span className="text-yellow-400 mr-1">
                        {"★".repeat(Math.floor(1))}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-[10px] text-[#000B76]">
                      {course.instructor}
                    </p>
                    <span className="text-[7px] font-normal text-black">
                      ({course.reviews})
                    </span>
                  </div>
                  <div className="flex  items-center mx-2">
                    <p className="font-semibold  text-[14px] text-black">
                      {course.price}
                    </p>
                    <p className="font-thin mx-1 line-through text-[8px] text-black">
                      {course.oldprice}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Courses Grid 2 */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-lg overflow-hidden border"
              >
                <div className="relative h-40">
                  <Image
                    src={course.image}
                    alt={course.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-[14px] text-black">
                      {course.title}
                    </h3>
                    <div className="flex items-center">
                      <span className="text-[14px] font-medium text-black">
                        {course.rating}
                      </span>
                      <span className="text-yellow-400 mr-1">
                        {"★".repeat(Math.floor(1))}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-[10px] text-[#000B76]">
                      {course.instructor}
                    </p>
                    <span className="text-[7px] font-normal text-black">
                      ({course.reviews})
                    </span>
                  </div>
                  <div className="flex  items-center mx-2">
                    <p className="font-semibold  text-[14px] text-black">
                      {course.price}
                    </p>
                    <p className="font-thin mx-1 line-through text-[8px] text-black">
                      {course.oldprice}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* section 2 */}

        <div className="w-full bg-[#050C9C] text-white font-semibold text-[17px] text-center">
          <h2 className=" py-4">Top rated courses</h2>
        </div>
        <div className="max-w-7xl mx-3 py-8 px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-lg overflow-hidden border"
              >
                <div className="relative h-40">
                  <Image
                    src={course.image}
                    alt={course.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-[14px] text-black">
                      {course.title}
                    </h3>
                    <div className="flex items-center">
                      <span className="text-[14px] font-medium text-black">
                        {course.rating}
                      </span>
                      <span className="text-yellow-400 mr-1">
                        {"★".repeat(Math.floor(1))}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-[10px] text-[#000B76]">
                      {course.instructor}
                    </p>
                    <span className="text-[7px] font-normal text-black">
                      ({course.reviews})
                    </span>
                  </div>
                  <div className="flex  items-center mx-2">
                    <p className="font-semibold  text-[14px] text-black">
                      {course.price}
                    </p>
                    <p className="font-thin mx-1 line-through text-[8px] text-black">
                      {course.oldprice}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Courses Grid 2 */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-lg overflow-hidden border"
              >
                <div className="relative h-40">
                  <Image
                    src={course.image}
                    alt={course.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-[14px] text-black">
                      {course.title}
                    </h3>
                    <div className="flex items-center">
                      <span className="text-[14px] font-medium text-black">
                        {course.rating}
                      </span>
                      <span className="text-yellow-400 mr-1">
                        {"★".repeat(Math.floor(1))}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-[10px] text-[#000B76]">
                      {course.instructor}
                    </p>
                    <span className="text-[7px] font-normal text-black">
                      ({course.reviews})
                    </span>
                  </div>
                  <div className="flex  items-center mx-2">
                    <p className="font-semibold  text-[14px] text-black">
                      {course.price}
                    </p>
                    <p className="font-thin mx-1 line-through text-[8px] text-black">
                      {course.oldprice}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* section 3 */}

        <div className="w-full bg-[#050C9C] text-white font-semibold text-[17px] text-center">
          <h2 className=" py-4">Most watched courses</h2>
        </div>
        <div className="max-w-7xl mx-3 py-8 px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-lg overflow-hidden border"
              >
                <div className="relative h-40">
                  <Image
                    src={course.image}
                    alt={course.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-[14px] text-black">
                      {course.title}
                    </h3>
                    <div className="flex items-center">
                      <span className="text-[14px] font-medium text-black">
                        {course.rating}
                      </span>
                      <span className="text-yellow-400 mr-1">
                        {"★".repeat(Math.floor(1))}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-[10px] text-[#000B76]">
                      {course.instructor}
                    </p>
                    <span className="text-[7px] font-normal text-black">
                      ({course.reviews})
                    </span>
                  </div>
                  <div className="flex  items-center mx-2">
                    <p className="font-semibold  text-[14px] text-black">
                      {course.price}
                    </p>
                    <p className="font-thin mx-1 line-through text-[8px] text-black">
                      {course.oldprice}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center m-8">
          <button className="px-6 py-3 bg-white text-[#050C9C] rounded-full font-[11px] hover:bg-white transition-colors">
            view more →
          </button>
        </div>
      </div>
  );
};

export default CoursesSection;
