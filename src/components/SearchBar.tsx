import React from "react";
import { CiSearch } from "react-icons/ci";

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  icon?: React.ReactNode;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search...",
  className = "",
  icon = <CiSearch className="text-xl" />,
}) => {
  return (
    <div className={`flex justify-center sm:text-md text-sm items-center mt-7 ${className}`}>
      <div className="flex items-center sm:w-[900px] w-96 h-11 rounded-full shadow-md px-4 border border-gray-300">
        <div className="bg-[#F1F5FF] rounded-full p-1 mr-2 items-center">
          {icon}
        </div>
        <input
          type="text"
          placeholder={placeholder}
          className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-500"
        />
      </div>
    </div>
  );
};

export default SearchBar;
