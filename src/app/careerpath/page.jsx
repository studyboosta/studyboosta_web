"use client";
import { useState, useEffect } from "react";
import { getCareerSuggestions } from "@/lib/gemini";
import { VscChip } from "react-icons/vsc";
import {
  MdBuild,
  MdCode,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdLightbulbOutline,
  MdOutlineAccessTime,
  MdOutlineWorkOutline,
  MdScience,
} from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { FaSpinner } from "react-icons/fa";
import { FaWandMagicSparkles } from "react-icons/fa6";
import {
  FiDollarSign,
  FiExternalLink,
  FiLink,
  FiThumbsUp,
  FiTool,
} from "react-icons/fi";
import { LuBriefcase } from "react-icons/lu";
// Consolidate imports for cleaner code

// Save a search to localStorage
const saveSearch = (search) => {
  const searches = JSON.parse(localStorage.getItem("careerSearches") || "[]");
  searches.push(search);
  localStorage.setItem("careerSearches", JSON.stringify(searches));
};

// Load saved searches from localStorage
const loadSearches = () => {
  return JSON.parse(localStorage.getItem("careerSearches") || "[]");
};

const CareerPath = () => {
  const [skillInput, setSkillInput] = useState("");
  const [skills, setSkills] = useState([]);
  const [interests, setInterests] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("Entry-Level");
  const [suggestions, setSuggestions] = useState([]);
  const [previousSearches, setPreviousSearches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showAllSearches, setShowAllSearches] = useState(false); // 👈 New state for pagination

  useEffect(() => {
    setPreviousSearches(loadSearches());
  }, []);

  const handleAddSkill = () => {
    if (skillInput.trim() && !skills.includes(skillInput.trim())) {
      setSkills((prev) => [...prev, skillInput.trim()]);
      setSkillInput("");
    }
  };

  const handleRemoveSkill = (skill) => {
    setSkills((prev) => prev.filter((s) => s !== skill));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuggestions([]);
    setError(null);

    if (skills.length === 0 || !interests.trim()) {
      setError("Please add at least one skill and describe your interests.");
      setLoading(false);
      return; // Stop the function from proceeding
    }

    try {
      const result = await getCareerSuggestions(
        skills,
        interests,
        experienceLevel
      );
      if (result && result.pathways) {
        setSuggestions(result.pathways);

        const currentSearch = {
          inputs: { skills, interests, experienceLevel },
          output: result.pathways,
          timestamp: new Date().toISOString(),
        };

        saveSearch(currentSearch);
        setPreviousSearches(loadSearches());
      } else {
        throw new Error("Received empty suggestions from API");
      }
    } catch (err) {
      setError("Error fetching suggestions. Please try again.");
      console.error("Error fetching suggestions:", err);
    } finally {
      setLoading(false);
    }
  };

  // Define which searches to display based on the state
  const searchesToDisplay = showAllSearches
    ? previousSearches
    : previousSearches.slice(0, 5);

  return (
    <div className="flex flex-col items-center min-h-screen px-4 py-16 bg-slate-50">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-4 mb-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#050C9C] tracking-tight">
            Tech Career Pathfinder
          </h1>
          <VscChip className="text-4xl sm:text-5xl text-blue-600 animate-pulse" />
        </div>
        <p className="sm:text-lg text-base max-w-2xl mx-auto text-gray-600">
          Tell us about your skills and interests to get a personalized career
          roadmap.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl border border-gray-200">
        <form onSubmit={handleSubmit}>
          {/* Skills Section */}
          <div className="mb-8">
            <label
              htmlFor="skills-input"
              className="block text-lg font-semibold text-blue-900 mb-2 flex items-center gap-2"
            >
              <MdCode className="text-[#050C9C]" />
              Skills
              <span className="text-sm font-normal text-gray-500 ml-2">
                (e.g., React, Python, UI/UX Design)
              </span>
            </label>
            <div className="flex gap-2 items-center">
              <input
                id="skills-input"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" && (e.preventDefault(), handleAddSkill())
                }
                className="flex-1 w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-slate-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                type="text"
                placeholder="Type a skill and press Enter"
              />
              <button
                type="button"
                onClick={handleAddSkill}
                className="px-5 py-3 font-semibold text-white rounded-lg bg-[#050C9C] hover:bg-[#081566] transition-colors duration-200 flex items-center gap-2"
              >
                <IoIosAddCircle className="text-xl" />
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition-colors duration-200 cursor-pointer hover:bg-blue-200"
                  onClick={() => handleRemoveSkill(skill)}
                >
                  {skill}
                  <span className="font-bold text-blue-500">×</span>
                </span>
              ))}
            </div>
          </div>

          {/* Interests Section */}
          <div className="mb-8">
            <label
              htmlFor="interests-textarea"
              className="block text-lg font-semibold text-[#050C9C] mb-2 flex items-center gap-2"
            >
              <MdScience className="text-[#050C9C]" />
              Interests
            </label>
            <textarea
              id="interests-textarea"
              rows={4}
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-slate-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              placeholder="Describe your tech interests in detail (e.g., I'm passionate about building scalable web applications and exploring new backend technologies)."
            />
          </div>

          {/* Experience Level Section */}
          <div className="mb-10">
            <label
              htmlFor="experience-select"
              className="block text-lg font-semibold text-[#050C9C] mb-2 flex items-center gap-2"
            >
              <MdOutlineWorkOutline className="text-[#050C9C]" />
              Current Experience Level
            </label>
            <select
              id="experience-select"
              value={experienceLevel}
              onChange={(e) => setExperienceLevel(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            >
              <option value="Entry-Level">Entry-Level</option>
              <option value="Junior">Junior</option>
              <option value="Mid-Level">Mid-Level</option>
              <option value="Senior">Senior</option>
              <option value="Lead/Principal">Lead/Principal</option>
            </select>
          </div>

          <button
            disabled={loading}
            className="w-full px-6 py-4 flex items-center justify-center gap-3 font-bold text-lg text-white rounded-lg bg-[#050C9C] hover:bg-[#081566] transition-colors duration-200 disabled:bg-blue-400 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <FaSpinner className="animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <FaWandMagicSparkles className="text-xl" />
                Get Career Suggestions
              </>
            )}
          </button>
        </form>
      </div>

      {error && (
        <div className="text-red-600 mt-6 text-center font-medium">{error}</div>
      )}

      {loading && (
        <div className="mt-6 flex gap-2 items-center justify-center">
          <FaSpinner className="w-8 h-8 text-[#050C9C] animate-spin" />
          <p className="text-lg text-[#050C9C]">Generating Career Paths...</p>
        </div>
      )}

      {/* Suggestions Display (unchanged) */}
      {!loading && suggestions.length > 0 && (
        <div className="mx-auto mt-10 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#050C9C] leading-tight tracking-wide">
              Your Personalized Career Paths 🚀
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Explore career suggestions tailored just for you based on your
              interests and skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {suggestions.map((career, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 bg-white border border-gray-200"
              >
                <div className="absolute top-0 right-0 p-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-green-800 bg-green-100">
                    <FiThumbsUp className="mr-1" /> {career.compatibility}
                  </span>
                </div>

                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex-shrink-0 text-blue-600 group-hover:text-blue-800 transition-colors duration-300">
                      <LuBriefcase className="h-10 w-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900 group-hover:text-blue-800 transition-colors duration-300">
                      {career.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {career.description}
                  </p>

                  <div className="space-y-4 text-sm text-gray-700">
                    <div className="flex items-center">
                      <FiDollarSign className="text-gray-400 mr-2" />
                      <span className="font-medium">Salary Range:</span>{" "}
                      {career.salaryRange}
                    </div>
                    <div className="flex items-start gap-3">
                      <FiTool className="text-gray-400 text-2xl mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-blue-800">
                          Skills to Learn:
                        </span>
                        {Array.isArray(career.skillsToLearn) &&
                        career.skillsToLearn.length > 0 ? (
                          <ul className="list-disc list-inside text-sm mt-1 text-gray-700 space-y-1">
                            {career.skillsToLearn.map((skill, i) => (
                              <li key={i}>{skill}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="mt-1 text-xs text-gray-500">N/A</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {career.resources?.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <p className="font-semibold text-[#081566] mb-2 flex items-center">
                        <FiExternalLink className="mr-2" />
                        Resources
                      </p>
                      <ul className="space-y-2 text-sm">
                        {career.resources.map((link, i) => (
                          <li key={i}>
                            <a
                              href={typeof link === "string" ? link : link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-300"
                            >
                              <FiLink className="mr-2 text-blue-400" />
                              {typeof link === "string" ? link : link.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Previous Searches Display */}
      {previousSearches.length > 0 && (
        <div className="mt-10 mx-auto max-w-4xl w-full">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl font-bold text-[#050C9C]">
              Your Search History
            </h2>
            <MdOutlineAccessTime className="text-2xl text-[#050C9C]" />
          </div>

          <div className="space-y-4">
            {searchesToDisplay.map((search, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 text-gray-700">
                  <div className="flex items-start gap-3">
                    <MdBuild className="text-[#050C9C] text-2xl mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-[#050C9C]">Skills:</p>
                      <p className="text-sm mt-1">
                        {search.inputs.skills.join(", ")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MdLightbulbOutline className="text-[#050C9C] text-2xl mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-[#050C9C]">Interests:</p>
                      <p className="text-sm mt-1">{search.inputs.interests}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MdOutlineWorkOutline className="text-[#050C9C] text-2xl mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-[#050C9C]">Experience:</p>
                      <p className="text-sm mt-1">
                        {search.inputs.experienceLevel}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100 mt-4">
                  <p className="text-xs text-gray-500">
                    <span className="font-medium">Searched on:</span>{" "}
                    {new Date(search.timestamp).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {previousSearches.length > 5 && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setShowAllSearches(!showAllSearches)}
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm text-[#050C9C] bg-blue-50 rounded-full hover:bg-blue-100 transition-colors duration-200"
              >
                {showAllSearches ? (
                  <>
                    <MdKeyboardArrowUp className="text-lg" />
                    See Less
                  </>
                ) : (
                  <>
                    <MdKeyboardArrowDown className="text-lg" />
                    See More
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CareerPath;
