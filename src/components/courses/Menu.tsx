import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CoursesDispatch, CoursesState } from "./coursesStore";
import {
  setDepartment,
  setFaculty,
  setLevel,
  setLoading,
  setSelectedContent,
} from "./menuSlice";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  computerEngineering300,
  computerEngineering500,
} from "@/app/constants";
import {
  facultyOptions,
  departmentOptions,
  levelOptions,
} from "@/app/constants";
import { AiOutlineCheck } from "react-icons/ai";

const dataMap: Record<number, typeof computerEngineering300> = {
  300: computerEngineering300,
  500: computerEngineering500,
};

const Menu = () => {
  const dispatch: CoursesDispatch = useDispatch();
  const { faculty, department, level, selectedContent, loading } = useSelector(
    (state: CoursesState) => state.menu
  );

  const [facultyOpen, setFacultyOpen] = useState(false);
  const [departmentOpen, setDepartmentOpen] = useState(false);
  const [levelOpen, setLevelOpen] = useState(false);
  const [selectedVideos, setSelectedVideos] = useState<number[]>([]);
  const [tempFaculty, setTempFaculty] = useState("Engineering");
  const [tempDepartment, setTempDepartment] = useState("Computer Engineering");
  const [tempLevel, setTempLevel] = useState(300);

  React.useEffect(() => {
    if (!selectedContent) {
      dispatch(setFaculty(tempFaculty));
      dispatch(setDepartment(tempDepartment));
      dispatch(setLevel(tempLevel));
      dispatch(setSelectedContent(computerEngineering300[0]));
    }
  }, []);

  const handleLoad = () => {
    dispatch(setLoading(true));
    dispatch(setFaculty(tempFaculty));
    dispatch(setDepartment(tempDepartment));
    dispatch(setLevel(tempLevel));

    setTimeout(() => {
      const selectedData = dataMap[tempLevel] || null;
      if (selectedData) {
        dispatch(setSelectedContent(selectedData[0]));
      } else {
        dispatch(setSelectedContent(null));
      }
      dispatch(setLoading(false));
    }, 1000);
  };

  const handleTitleClick = (title: string) => {
    if (loading || !selectedContent) return;

    const currentData = dataMap[level] || [];
    const content = currentData.find((item) => item.title === title);
    if (content) {
      dispatch(setSelectedContent(content));
    }
  };

  const handleVideoToggle = (index: number) => {
    setSelectedVideos((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  interface Video {
    link: string;
    name: string;
  }

  function renderDropdown<T extends string | number>(
    title: string,
    options: T[],
    isOpen: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    selected: T,
    setSelected: React.Dispatch<React.SetStateAction<T>>
  ) {
    return (
      <div className="relative sm:w-52 w-full">
        <div
          className="flex justify-between items-center h-9 px-2 rounded-lg bg-[#F1F5FF] cursor-pointer"
          onClick={() => setOpen(!isOpen)}
        >
          <p>{selected || title}</p>
          <MdKeyboardArrowDown
            className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </div>
        {isOpen && (
          <ul className="absolute top-full left-0 w-full bg-white border rounded-md shadow-lg z-10">
            {options.map((option, index) => (
              <li
                key={index}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSelected(option);
                  setOpen(false);
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  const currentData = dataMap[level] || [];

  return (
    <div className="flex flex-col items-center justify-center">
      <section className="flex flex-col sm:flex-row sm:gap-6 gap-3 justify-center text-[13px] mt-7 w-full">
        {renderDropdown(
          "Select Faculty",
          facultyOptions,
          facultyOpen,
          setFacultyOpen,
          tempFaculty,
          setTempFaculty
        )}
        {renderDropdown(
          "Select Department",
          departmentOptions,
          departmentOpen,
          setDepartmentOpen,
          tempDepartment,
          setTempDepartment
        )}
        {renderDropdown(
          "Select Level",
          levelOptions,
          levelOpen,
          setLevelOpen,
          tempLevel,
          setTempLevel
        )}
        <button
          className="h-9 px-6 bg-[#051F9C] text-white rounded-lg"
          onClick={handleLoad}
          disabled={loading}
        >
          {loading ? "Loading..." : "Load"}
        </button>
      </section>
      <section className="w-full max-w-5xl mt-6">
        {selectedContent ? (
          <div className="flex sm:flex-row flex-col gap-8 mb-5 p-4  bg-gray-100 border rounded-lg shadow-md">
            <div className="flex flex-1 flex-col gap-4">
              <h3 className="font-semibold text-lg text-[#051F9C]">Titles</h3>
              {currentData.map((item) => (
                <button
                  key={item.title}
                  className={`text-left p-2 rounded-lg ${
                    selectedContent.title === item.title
                      ? "bg-[#051F9C] text-white"
                      : "hover:bg-gray-200"
                  }`}
                  onClick={() => handleTitleClick(item.title)}
                >
                  {item.title}
                </button>
              ))}
            </div>
            <div className="flex-[2]">
              <h3 className="font-semibold text-lg text-[#051F9C]">Summary</h3>
              <ul className="mt-3">
                {selectedContent.summary.map(
                  (summary: string, index: number) => (
                    <li key={index} className="text-gray-700">
                      {summary}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="flex-[3]">
              <h3 className="font-semibold text-lg text-[#051F9C]">Videos</h3>
              <div className="mt-3 space-y-4">
                {selectedContent.videos.map((video: Video, index: number) => (
                  <div key={index} className="border rounded-lg p-3">
                    <div
                      className="flex items-start cursor-pointer"
                      onClick={() => handleVideoToggle(index)}
                    >
                      <AiOutlineCheck
                        className={`text-lg mr-3 transition-colors ${
                          selectedVideos.includes(index)
                            ? "text-green-500"
                            : "text-gray-400"
                        }`}
                      />
                      <p className="text-sm text-gray-700 font-medium">
                        {video.name}
                      </p>
                    </div>
                    {selectedVideos.includes(index) && (
                      <iframe
                        src={video.link}
                        title={video.name}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full rounded-lg mt-3 h-64"
                      ></iframe>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-700 mt-4">
            No content available for the selected options.
          </p>
        )}
      </section>
    </div>
  );
};

export default Menu;
