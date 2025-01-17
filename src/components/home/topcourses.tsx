import React from 'react'

 
const TopCourses = () => {
    const categories = [
        "All categories",
        "Computer engineering",
        "Mechanical engineering",
        "Medicine",
        "Architecture",
        "Civil engineering",
        "Pharmacy",
      ];
    
      const courses = [
        {
          videoUrl: "https://www.youtube.com/embed/sample-video-1",
        },
        {
          videoUrl: "https://www.youtube.com/embed/pdbQvIbGd_4?si=oxxWUGhv9DQtpwlF",
        },
        {
          videoUrl: "https://www.youtube.com/embed/sample-video-3",
        },
      ];
  return (
    <section className="bg-[#F1F5FF]  py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-8">
            <h2 className="text-black text-[28px] font-semibold">
              Top courses
            </h2>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 overflow-hidden">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 text-[16px] rounded-full text-sm font-medium ${
                  index === 0
                    ? "bg-[#050C9C] text-white"
                    : "bg-white bg-opacity-35 text-black text-opacity-77 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
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

          {/* View More Button */}
          <div className="text-center mt-10">
            <button className="px-6 py-3 bg-white text-[050C9C] rounded-full font-[11px] hover:bg-gray-700 transition-colors">
              view more →
            </button>
          </div>
        </div>
      </section>

  )
}

export default TopCourses