import Image from "next/image";
const HeroSection = () => {
  return (
    <div className="bg-white container  mx-[20px] flex flex-col lg:flex-row items-center mb-9  px-6 lg:space-y-0 lg:space-x-[15px]">
      {/* Left Content */}
      <div className="lg:w-1/2 order-1 lg:order-none py-8 ">
      
        <p className="text-[40px] font-bold mt-[50px] text-black  mb-[20px] leading-normal">
        Crush Your Academic, Career & Financial Goals with StudyBoosta
        </p>
        <div className="lg:hidden rounded-lg overflow-hidden mb-6">
          {/* Image on smaller screens */}
          <Image
            src="/assests/images/heroImage.png"
            alt="Excited student"
            width={360}
            height={360}
          />
        </div>
        <p className="text-black text-[16px] mb-6 max-w-[500px]">
        Get access to Expert video lessons, high income digital skills, mentorship from Best Graduating students, scholarship & internship updates in one platform  <span className="font-bold"> StudyBoosta</span>

        </p>
        <button className="px-6 py-3 bg-[#050C9C] font-bold text-[16px] text-white rounded hover:bg-blue-800 mt-[40px] mb-[50px]">
          Start Learning
        </button>
        <div>
          <img
            src="/assests/images/Frame 1597880755.png"
            alt="Excited student"
            className=""
          />
          <div className="mt-6 text-black font-medium text-[14px]">
            Join 1000+ students from 20+ higher institutions all over the
            country.
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="lg:w-1/2 order-2 lg:order-none hidden lg:block">
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/assests/images/heroImage.png"
            alt="Excited student"
            width={570}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
