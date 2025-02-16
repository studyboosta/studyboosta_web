import React from 'react';

const WhatWeOffer = () => {
  const offers = [
    {
      title: 'Smarter Learning, Better Results',
      description:
        'You’ll get free access to easy-to-follow video lessons tailored to your course of study in school. The expert video lessons break down complex topics so you can study smarter (not just harder) and ace your exams.',
      image: '/assests/images/whatweoffer1.png', 
    },
    {
      title: 'Mentoring from the Best',
      description:
        'You’ll also get mentored by top graduates (aka, Best Graduating Students)  and scholarship recipients who’ve excelled academically. Get the guidance you need to crush your goals with proven strategies and real-world advice.',
      image: '/assests/images/whatweoffer2.png', 
    },
    {
      title: 'Opportunities and a Thriving Community',
      description:
        'We provide updates on scholarships and internships that can transform your academic and career journey. We bring you the opportunities you deserve, all in one place & access to a vibrant network of students like you.',
      image: '/assests/images/whatweoffer3.png', 
    },
    {
        title: 'Digital Skills for a Thriving Future',
        description:
          'Get equipped with high income & in-demand digital skills. From entrepreneurship to tech tools, build your financial independence and get ahead in today’s competitive world.',
        image: '/assests/images/whatweoffer3.png', 
      },
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-black text-[28px] font-semibold">What we offer</h2>
        <p className="text-black text-[16px] mt-2">
          StudyBoosta offers a variety of services that help improve students all round.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-4 max-w-6xl mx-auto mb-56 mt-5 justify-center">
        {offers.map((offer, index) => (
          <div
          key={index}
          className="rounded-lg shadow-lg overflow-hidden hover:shadow-2xl  transition-shadow duration-300 relative"
          style={{ width: "275px", height: "500px" }}>
            
          {/* Background Image */}
          <div
            className="w-full h-full bg-cover bg-center flex flex-col justify-end"
            style={{ backgroundImage: `url(${offer.image})` }}
            
          >
            {/* Content */}
          <div className="p-6 ">
            <h3 className="text-lg font-semibold text-white mb-2">
              {offer.title}
            </h3>
            <p className="text-white text-sm">{offer.description}</p>
          </div>
          </div>
          
        </div>
      ))}
      </div>
    </div>
  );
};

export default WhatWeOffer;