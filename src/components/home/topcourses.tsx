'use client';
import React, {useState} from 'react';


 const TopCourses: React.FC = () => {
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const categories = [
        
        "Computer engineering",
        "Mechanical engineering",
        "Medicine",
        "Architecture",
        "Civil engineering",
        "Pharmacy",
      ];
    
      const courses = [
        {
          videoUrl: "https://www.youtube.com/embed/DKPqNQ3CZ9I?si=g2OUorL3HYXXa6Ud",
        },
        {
          videoUrl: "https://www.youtube.com/embed/pdbQvIbGd_4?si=oxxWUGhv9DQtpwlF",
        },
        {
          videoUrl: "https://www.youtube.com/embed/FFDMzbrEXaE?si=dK-zvOM0jga0gK3f",
        },
      ];
  return (
    <section className="bg-[#F1F5FF] w-full py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-8">
            <h2 className="text-black text-[28px] font-semibold">
              Top courses
            </h2>
          </div>
        <div>
          {/* Categories */}
          
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button className="px-3 py-2 bg-[#050C9C] text-white rounded-full text-[14px]">
          All categories
          </button>

          {/* Show other tabs only on larger screens */}
          <div className="hidden lg:flex gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-2 py-2 bg-[#F1F5FF] text-[14px] font-medium text-black text-opacity-77 rounded-full hover:hover:bg-blue-700 hover:text-white transition-colors duration-300"
              >
                {category}
              </button>
            ))}
             
          </div>
          

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
                
              </div>
            )}
          </div>

         
        </div>
        </div>
          

          {/* Courses Grid */}
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="rounded shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <iframe
                  src={course.videoUrl}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-[280px] border-none"
                  style={{
                    display: "block",
                    aspectRatio: "16/9",
                  }}
                ></iframe>
              </div>
            ))}
          </div>

         
        </div>
        </section>
        
      

  )
}

export default TopCourses