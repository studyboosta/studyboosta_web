"use client";

import Script from "next/script";

export default function CoachingPage() {
  return (
    // 1. Add a light gray background to the main container
    <div className="bg-slate-50 text-gray-900">
      {/* Load Tally embed script once */}
      <Script async src="https://tally.so/widgets/embed.js" />

      {/* Hero Section (Stays white) */}
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
            Coaching with Experienced Career, HR & Business Experts
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Fast clarity, practical strategies, and a step-by-step plan you can
            actually use— whether you need career clarity, interview prep, help
            landing a high-paying job, or starting a business.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              data-tally-open="mRA8ZQ"
              data-tally-layout="modal"
              data-tally-width="600"
              data-tally-hide-title="1"
              className="px-5 py-4 font-semibold bg-[#050C9C] text-white rounded-xl hover:bg-[#081566] shadow-md transition"
            >
              Apply for 1:1 Coaching
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section (Inherits slate-50 background) */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid sm:grid-cols-3 gap-8 text-center">
          {/* Cards remain white, creating a nice contrast */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
            <h3 className="font-semibold text-xl text-gray-900">Get Clear</h3>
            <p className="mt-3 text-gray-600">
              Pinpoint the right career path and your next 90-day action plan.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
            <h3 className="font-semibold text-xl text-gray-900">
              Get Hired Faster
            </h3>
            <p className="mt-3 text-gray-600">
              Proven systems for resume, interview prep, and job search success.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
            <h3 className="font-semibold text-xl text-gray-900">
              Get Expert Coaching
            </h3>
            <p className="mt-3 text-gray-600">
              Work with coaches who bring real industry and hiring experience.
            </p>
          </div>
        </div>
      </section>

      {/* How it Works Section (Add white background) */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            How it Works – Simple 3-Step Process
          </h2>
          <div className="mt-12 grid sm:grid-cols-3 gap-8 text-left">
            <div className="bg-slate-50/80 rounded-2xl p-6 ring-1 ring-slate-200">
              <span className="text-[#050C9C] font-bold text-2xl">1</span>
              <h3 className="mt-4 font-semibold text-xl">Apply (5 mins)</h3>
              <p className="mt-2 text-gray-600">
                Tell us where you are now and what you need.
              </p>
            </div>
            <div className="bg-slate-50/80 rounded-2xl p-6 ring-1 ring-slate-200">
              <span className="text-[#050C9C] font-bold text-2xl">2</span>
              <h3 className="mt-4 font-semibold text-xl">We Match You</h3>
              <p className="mt-2 text-gray-600">
                After a free consultation, we pair you with your best-fit coach.
              </p>
            </div>
            <div className="bg-slate-50/80 rounded-2xl p-6 ring-1 ring-slate-200">
              <span className="text-[#050C9C] font-bold text-2xl">3</span>
              <h3 className="mt-4 font-semibold text-xl">Start Coaching</h3>
              <p className="mt-2 text-gray-600">
                Book your session, get a personalized plan, and take action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA (Inherits slate-50 background) */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Ready to take the next step?
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Apply today to get started on your journey.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            data-tally-open="mRA8ZQ"
            data-tally-layout="modal"
            data-tally-width="600"
            data-tally-hide-title="1"
            className="px-5 py-3 font-semibold bg-[#050C9C] text-white rounded-xl hover:bg-[#081566] shadow-md transition"
          >
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}