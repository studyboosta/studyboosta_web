import React from "react";

const CareerStats = () => {
  const stats = [
    {
      title: "Over 55%",
      description:
        "Over 55% of students & young adults feel uncertain about their future careers.",
    },
    {
      title: "66%",
      description:
        "66% of workers in major markets regret their career choice—especially early in their careers. (Indeed & Censuswide)",
    },
    {
      title: "89%",
      description:
        "89% of African graduates lack formal digital training. (World Bank & IFC)",
    },
    {
      title: "625-650M",
      description:
        "By 2030, ~625–650 million African workers will need digital skills to meet demand. (World Bank, Mastercard Fdn)",
    },
    {
      title: "Schools Are Lagging",
      description:
        "Traditional schools aren’t updating fast enough — employers can’t find job-ready talent.",
    },
    {
      title: "Upskilling Urgency",
      description:
        "AI is changing job requirements now — upskilling is urgent.",
    },
  ];

  return (
    <section className=" py-16 px-6 lg:px-20">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
          Why Upskilling Matters Now
        </h2>
        <p className="mt-4 text-lg text-[#5C5C5C] max-w-3xl mx-auto leading-relaxed">
          The latest research shows why career guidance, digital training, and
          skill-building are urgent for students, graduates, and workers in
          Africa.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100 flex flex-col"
          >
            <h3 className="text-3xl font-bold text-[#050C9C] mb-4">
              {stat.title}
            </h3>
            <p className="text-[#5C5C5C] text-base leading-relaxed">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerStats;
