"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is this platform only for Africans?",
    answer: "No… StudyBoosta is open to anyone globally.",
  },
  {
    question: "Do I need technical skills to start?",
    answer:
      "No. Whether you’re exploring careers in tech, business, creative industries, or other sectors, we start from your current level and guide you step-by-step.",
  },
  {
    question: "Who is this platform for?",
    answer:
      "It’s for anyone who wants to earn globally, gain career clarity, learn digital & AI skills to gain an edge in their industry (career professionals, students, graduates, or ambitious self-learners even without a university degree).",
  },
  {
    question: "I don’t have a university Degree, Can I Still Use StudyBoosta?",
    answer:
      "100% YES… You don’t need a university degree to learn digital/AI skills or earn globally. You only need to be willing to learn.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" py-16 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A]">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-[#5C5C5C] text-lg">
          Everything you need to know about getting started with{" "}
          <span className="font-semibold text-[#050C9C]">StudyBoosta</span>.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
            >
              <span className="text-lg font-medium text-[#1A1A1A]">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-6 h-6 text-[#050C9C] transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {openIndex === index && (
              <div className="px-6 pb-4 text-[#5C5C5C] text-base leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQSection;