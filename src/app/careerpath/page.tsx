import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { VscChip } from "react-icons/vsc";

const CareerPath = () => {
  return (
    <div className="flex flex-col items-center min-h-screen px-3 pt-10">
      <div className="flex gap-2 items-center mb-6">
        <h1 className="sm:text-4xl text-lg font-bold bg-text-gradient bg-clip-text text-transparent bg-[0_0] bg-triple animate-text-gradient-move">
          StudyBoosta Tech Career Pathfinder
        </h1>
        <VscChip className="sm:text-4xl text-lg text-blue-700" />
      </div>
      <p className="sm:text-lg text-sm text-center max-w-2xl mb-8 text-[#050C9C]">
        Discover your ideal career path with our comprehensive guide using AI.
      </p>
      <div className="bg-gray-50 p-6 rounded-lg shadow-md w-full max-w-2xl">
        <form action="">
          <div className="mb-4">
            <label className="text-[#5392b5] text-sm " htmlFor="">
              Skills (e.g., Node.js, Python, Photoshop)
            </label>
            <div className="flex gap-2 items-center ">
              <input
                className=" flex-1 w-full p-2 border rounded-md bg-[#F1F5FF] text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Type a skill and press Enter or Click Add button"
              />
              <button
                className="px-4 flex items-center gap-2 py-2 font-semibold bg-[#050C9C] text-white rounded-xl hover:bg-blue-800"
                type="button"
              >
                <CiCirclePlus /> Add
              </button>
            </div>
            <div>
              <span>
                <button></button>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <label className="text-[#5392b5] text-sm" htmlFor="">
              Interests (e.g., AI, web development, data science, gaming)
            </label>
            <textarea
              rows={3}
              className="p-2 text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F1F5FF]"
              placeholder="Describe your tech interests as detailed as possible"
              id="interest"
            ></textarea>
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <label className="text-[#5392b5] text-sm" htmlFor="">
              Current Experience Level
            </label>
            <select
              name=""
              id=""
              className=" w-full p-2 border rounded-md bg-[#F1F5FF] text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Entry-Level">Beginner</option>
              <option value="Junior">Junior</option>
              <option value="Mid-Level">Mid-Level</option>
              <option value="Senior">Senior</option>
              <option value="Lead/Principal">Lead/Principal</option>
            </select>
          </div>
          <button className="w-full px-4 py-2 flex items-center gap-2 justify-center font-semibold bg-[#050C9C] text-white rounded-xl hover:bg-blue-800">
            <FaWandMagicSparkles />
            Get Career Suggestions
          </button>
        </form>
      </div>
    </div>
  );
};

export default CareerPath;
