"use client";
import Image from "next/image";
import Link from "next/link";
import Searchbar from "./Searchbar";
import { IoMdPerson } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { useState } from "react";
import { HiMenu, HiOutlineX, HiOutlineHome, HiOutlineInboxIn, HiOutlineHeart, HiOutlineDocumentText, HiOutlineGlobeAlt, HiOutlinePhone } from "react-icons/hi";


function MenuItem({ icon, label }: { icon?: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3 text-gray-700 text-sm cursor-pointer hover:text-black">
      {icon && <span className="text-lg">{icon}</span>}
      <span>{label}</span>
    </div>
  );
}
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-[1440px] w-full h-[86px] mx-auto flex items-center justify-between px-4 md:px-10 bg-white">

      {/* Left Section: Hamburger + Logo */}
      <div className="flex items-center gap-4">
        {/* Hamburger - visible on mobile only */}

        <button onClick={() => setIsOpen(true)} className="text-2xl sm:hidden">
          <HiMenu />
        </button>

        {/* Side Drawer */}
        {isOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-gray-300 bg-opacity-30 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <div className="fixed top-0 left-0 w-[250px] h-full bg-white shadow-md z-50 p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-500">
                  <div className="w-8 h-8 rounded-full bg-gray-200" />
                  <span>Sign in | Register</span>
                </div>
                <button onClick={() => setIsOpen(false)}>
                  <HiOutlineX className="text-xl" />
                </button>
              </div>

              <nav className="space-y-4">
                <MenuItem icon={<HiOutlineHome />} label="Home" />
                <MenuItem icon={<HiOutlineInboxIn />} label="Categories" />
                <MenuItem icon={<HiOutlineHeart />} label="Favorites" />
                <MenuItem icon={<HiOutlineDocumentText />} label="My orders" />
                <hr />
                <MenuItem icon={<HiOutlineGlobeAlt />} label="English | USD" />
                <MenuItem icon={<HiOutlinePhone />} label="Contact us" />
                <MenuItem icon={<HiOutlineDocumentText />} label="About" />
                <hr />
                <MenuItem label="User agreement" />
                <MenuItem label="Partnership" />
                <MenuItem label="Privacy policy" />
              </nav>
            </div>
          </>
        )}


        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo-colored.png"
            alt="logo"
            width={116}
            height={36}
            className="md:w-[150px] md:h-[46px]"
          />
        </Link>
      </div>

      {/* Searchbar - hidden on mobile */}
      <div className="hidden md:block w-[665px] h-[40px]">
        <Searchbar />
      </div>

      {/* Icons */}
      <div className="flex items-center gap-6">
        {/* Cart */}
        <Link href="/Cart">
          <div className="flex flex-col items-center text-gray-500 text-2xl cursor-pointer hover:text-gray-700">
            <MdShoppingCart />
            <p className="text-sm hidden md:block">Cart</p>
          </div>
        </Link>

        {/* Profile */}
        <div className="flex flex-col items-center text-gray-500 text-2xl cursor-pointer hover:text-gray-700">
          <IoMdPerson />
          <p className="text-sm hidden md:block">Profile</p>
        </div>

        {/* Hidden Icons on Mobile */}
        <div className="hidden md:flex flex-row gap-6 items-center">
          {/* Message */}
          <div className="flex flex-col items-center text-gray-500 text-2xl cursor-pointer hover:text-gray-700">
            <MdMessage />
            <p className="text-sm">Message</p>
          </div>

          {/* Orders */}
          <div className="flex flex-col items-center text-gray-500 text-2xl cursor-pointer hover:text-gray-700">
            <FaHeart />
            <p className="text-sm">Orders</p>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Header;
