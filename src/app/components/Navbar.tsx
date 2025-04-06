import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="max-w-[1440px]  h-[56px] mx-auto flex flex-row justify-between items-center px-20 border-t border-b border-gray-300 bg-white">
      
      {/* Nav List */}
      <div className="flex flex-row items-center justify-between w-[620px] gap-6">
        {/* All Category */}
        <div className="flex flex-row items-center gap-2 cursor-pointer">
          <GiHamburgerMenu className="text-gray-600 text-lg" />
          <span>All Category</span>
        </div>

        <div className="cursor-pointer">Hot Offers</div>
        <div className="cursor-pointer">Gift boxes</div>
        <div className="cursor-pointer">Projects</div>
        <div className="cursor-pointer">Menu items</div>

        {/* Help */}
        <div className="flex flex-row items-center gap-1 cursor-pointer">
          <span>Help</span>
          <RiArrowDropDownLine className="text-gray-600 text-2xl" />
        </div>
      </div>

      {/* Payment and Shipment */}
      <div className="flex flex-row items-center gap-6">
        {/* Payment */}
        <div className="flex flex-row items-center gap-1 cursor-pointer">
          <span>English, USD</span>
          <RiArrowDropDownLine className="text-gray-600 text-2xl" />
        </div>

        {/* Ship To */}
        <div className="flex flex-row items-center gap-1 cursor-pointer">
          <span>Ship to</span>
          <RiArrowDropDownLine className="text-gray-600 text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
