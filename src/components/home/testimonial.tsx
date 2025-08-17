import React from "react";

const Testimonial = () => {
  const reviews = [
    {
      name: "John Tobechukwu",
      occupation: "Computer Science Student",
      rating: 5,
      image: "/assets/images/image.png",
      review:
        "This platform has completely changed the way I learn. The resources are clear, interactive, and easy to follow. It has boosted my confidence in coding and problem-solving.",
    },
    {
      name: "Amara Okafor",
      occupation: "Frontend Developer",
      rating: 5,
      image: "/assets/images/image (1).png",
      review:
        "The UI/UX is smooth, and the explanations are practical. I’ve applied what I learned here directly to my projects at work, and it has made me more productive.",
    },
    {
      name: "Christain Nwosu",
      occupation: "Software Engineering Student",
      rating: 5,
      image: "/assets/images/image.png",
      review:
        "I love how the content is broken down into simple steps. Even complex topics feel approachable. Definitely one of the best platforms for anyone starting a tech career.",
    },
    {
      name: "Samuel Johnson",
      occupation: "Full-Stack Developer",
      rating: 4,
      image: "/assets/images/image (1).png",
      review:
        "Very helpful and practical. The hands-on exercises keep me engaged, and I can see real improvement in my coding skills. Would recommend to both students and professionals.",
    },
  ];
  return (
    <div className="bg-white py-10">
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-[#1A1A1A] tracking-tight mb-6">
        Our Users reviews
      </h2>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 md:gap-8 lg:gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white shadow-lg rounded-lg p-6 w-[250px] md:w-[300px] lg:w-[350px] border border-gray-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-medium text-lg">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.occupation}</p>
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
  );
};

export default Testimonial;
