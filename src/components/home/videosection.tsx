"use client";
import dynamic from "next/dynamic";
// import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// const Swiper = dynamic(() => import("swiper/react").then((mod) => mod.Swiper), {
//   ssr: false,
// });
// const SwiperSlide = dynamic(
//   () => import("swiper/react").then((mod) => mod.SwiperSlide),
//   { ssr: false }
// );



const VideoSection = () => {
  const reviews = [
    {
      name: "John Tobechukwu",
      university: "University of Nsukka",
      rating: 5,
      image: "/assests/images/image.png",
      review:
        "Egestas nibh adipiscing ut aenean. Ante facilisi sed suspendisse arcu mattis. Dictum elit eleifend et turpis lorem.",
    },
    {
      name: "John Tobi",
      university: "University of Enugu",
      rating: 5,
      image: "/assests/images/image (1).png",
      review:
        "Egestas nibh adipiscing ut aenean. Ante facilisi sed suspendisse arcu mattis. Dictum elit eleifend et turpis lorem.",
    },
    {
      name: "Roy Winner",
      university: "University of Benin",
      rating: 5,
      image: "/assests/images/image.png",
      review:
        "Egestas nibh adipiscing ut aenean. Ante facilisi sed suspendisse arcu mattis. Dictum elit eleifend et turpis lorem.",
    },
    {
      name: "Peter Tobechukwu",
      university: "University of Enugu",
      rating: 4,
      image: "/assests/images/image (1).png",
      review:
        "Egestas nibh adipiscing ut aenean. Ante facilisi sed suspendisse arcu mattis. Dictum elit eleifend et turpis lorem.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Video Section */}
        <div className="text-center mb-12">
          <h2 className="text-[28px] font-semibold text-gray-800 mb-8">
            How to navigate the StudyBoosta platform
          </h2>
          <iframe
            src="https://www.youtube.com/embed/sample-video" // Replace with your actual video link
            title="How to navigate the StudyBoosta platform"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full max-w-4xl h-[500px] mx-auto rounded-lg shadow-lg"
          ></iframe>
        </div>

        {/* Reviews Section */}
        <div className="bg-white py-10">
          <h2 className="text-center text-2xl font-semibold mb-6">
            Our students reviews
          </h2>
          <div className="overflow-x-auto">
            <div className="flex gap-6 md:gap-8 lg:gap-8">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-white shadow-lg rounded-lg p-6 w-[250px] md:w-[300px] lg:w-[350px] border border-gray-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-medium text-lg">{review.name}</h3>
                      <p className="text-sm text-gray-500">
                        {review.university}
                      </p>
                    </div>
                    <div className="flex items-center text-yellow-400 ml-auto">
                      {"★".repeat(review.rating)}
                      {"☆".repeat(5 - review.rating)}
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">{review.review}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
