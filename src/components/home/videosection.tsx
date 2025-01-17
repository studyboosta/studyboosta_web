'use client';
import dynamic from "next/dynamic";

const Swiper = dynamic(() => import("swiper/react").then(mod => mod.Swiper), { ssr: false });
const SwiperSlide = dynamic(() => import("swiper/react").then(mod => mod.SwiperSlide), { ssr: false });


import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const VideoSection = () => {
  const reviews = [
    {
      name: "John Tobechukwu",
      university: "University of Nsukka",
      rating: 5,
      image: "https://via.placeholder.com/48", 
      review:
        "Egestas nibh adipiscing ut aenean. Ante facilisi sed suspendisse arcu mattis. Dictum elit eleifend et turpis lorem.",
    },
    {
      name: "John Tobi",
      university: "University of Enugu",
      rating: 5,
      image: "https://via.placeholder.com/48", 
      review:
        "Egestas nibh adipiscing ut aenean. Ante facilisi sed suspendisse arcu mattis. Dictum elit eleifend et turpis lorem.",
    },
    {
      name: "Roy Winner",
      university: "University of Benin",
      rating: 5,
      image: "https://via.placeholder.com/48", 
      review:
        "Egestas nibh adipiscing ut aenean. Ante facilisi sed suspendisse arcu mattis. Dictum elit eleifend et turpis lorem.",
    },
    {
      name: "Peter Tobechukwu",
      university: "University of Enugu",
      rating: 4,
      image: "https://via.placeholder.com/48", 
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
        <div className="text-center mb-8">
          <h2 className="text-[28px] font-semibold text-black">
            Our students reviews
          </h2>
        </div>
        <Swiper
          slidesPerView={1.2}
          spaceBetween={20}
          centeredSlides={true}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white h-[206px] w-[380px] p-6 rounded-lg border border-gray-300 mx-auto">
                <div className="flex items-center mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-[16px] font-semibold text-[#000B76]">
                      {review.name}
                    </h3>
                    <div className="flex items-center">
                      <p className="text-[12px] text-black mr-2">
                        {review.university}
                      </p>
                      <div className="flex">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 text-yellow-500"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.963a1 1 0 00.95.69h4.166c.969 0 1.371 1.24.588 1.81l-3.366 2.447a1 1 0 00-.364 1.118l1.286 3.963c.3.921-.755 1.688-1.538 1.118L10 13.187l-3.366 2.447c-.783.57-1.838-.197-1.538-1.118l1.286-3.963a1 1 0 00-.364-1.118L2.652 9.39c-.783-.57-.38-1.81.588-1.81h4.166a1 1 0 00.95-.69l1.286-3.963z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-[14px] text-black">{review.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default VideoSection;
