import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  icon?: React.ReactNode;
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search...",
  className = "",
  icon = <CiSearch className="text-xl" />,
  onSearch,
}) => {
  const [query, setQuery] = useState("");


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };


  const handleSearchClick = () => {
    onSearch(query); 
  };

  return (
    <div
      className={`flex justify-center sm:text-md text-sm items-center mt-7 ${className}`}
    >
      <div className="flex items-center sm:w-[900px] w-96 h-11 rounded-full shadow-md px-4 border border-gray-300">
        <div
          className="bg-[#F1F5FF] hover:bg-[#051F9C] hover:text-white rounded-full p-1 mr-2 items-center cursor-pointer"
          onClick={handleSearchClick} 
        >
          {icon}
        </div>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-500"
        />
      </div>
    </div>
  );
};

export default SearchBar;
