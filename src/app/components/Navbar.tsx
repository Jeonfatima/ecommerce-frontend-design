import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="lg:max-w-[1440px] w-full mx-auto border-t border-b border-gray-300 bg-white">

      {/* Mobile Searchbar - visible only on small screens */}
      <div className="block md:hidden bg-gray-100 px-4 py-2">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>

      {/* Main Navbar */}
      <div className="w-full h-[56px] flex flex-col sm:flex-col md:flex-row justify-between items-start md:items-center px-4 sm:px-6 md:px-20">

        {/* Left Section (Categories & Nav) */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 w-full md:w-auto mt-2 md:mt-0">
          
          {/* Top Nav Items: Category, Gadgets, Accessories */}
          <div className="flex flex-row items-center gap-4">
            <GiHamburgerMenu className="text-gray-600 text-lg hidden md:block" />
            <span className="text-sm sm:text-blue-500 hover:bg-gray-100 cursor-pointer">All Category</span>
            <span className="text-sm sm:text-blue-500 hover:bg-gray-100 cursor-pointer">Gadgets</span>
            <span className="text-sm sm:text-blue-500 hover:bg-gray-100 cursor-pointer">Accessories</span>
          </div>

          {/* Other Nav Items (hidden on small screens) */}
          <div className="hidden lg:flex flex-row items-center gap-6">
            <div className="cursor-pointer">Hot Offers</div>
            <div className="cursor-pointer">Gift boxes</div>
            <div className="cursor-pointer">Projects</div>
            <div className="cursor-pointer">Menu items</div>
            <div className="flex flex-row items-center gap-1 cursor-pointer">
              <span>Help</span>
              <RiArrowDropDownLine className="text-gray-600 text-2xl" />
            </div>
          </div>
        </div>

        {/* Right Section - Language & Shipping (hidden on small screens) */}
        <div className="hidden md:flex flex-row items-center gap-6 mt-2 md:mt-0">
          <div className="flex flex-row items-center gap-1 cursor-pointer">
            <span>English, USD</span>
            <RiArrowDropDownLine className="text-gray-600 text-2xl" />
          </div>
          <div className="flex flex-row items-center gap-1 cursor-pointer">
            <span>Ship to</span>
            <RiArrowDropDownLine className="text-gray-600 text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
