import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";

const Searchbar = () => {
  return (
    <div className="border-2 border-blue-600 rounded-xl flex flex-row items-center justify-between w-full max-w-[665px] h-[40px] overflow-hidden">
      
      {/* Search Input */}
      <div className="flex-1">
        <input
          type="text"
          className="w-full h-full border-none px-4 text-gray-700 focus:ring-2 focus:ring-white outline-none"
          placeholder="Search products..."
        />
      </div>

      {/* Vertical Blue Line Between Input & Category */}
      <div className="h-full w-[2px] bg-blue-600"></div>

      {/* Category Dropdown */}
      <div className="flex items-center gap-1 cursor-pointer px-2">
        <h2 className="text-black font-light">All category</h2>
        <RiArrowDropDownLine className="text-gray-600 text-3xl" />
      </div>

      {/* Search Button */}
      <button className="w-[100px] h-full bg-blue-600 text-white text-lg font-light hover:bg-blue-700">
        Search
      </button>

    </div>
  );
};

export default Searchbar;
