import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Searchbar from './Searchbar'
import { IoMdPerson } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
const Header = () => {
  return (
    <div className='max-w-[1440px] h-[86px] mx-auto flex flex-row p-10 pb-15 justify-center gap-[100px] bg-white'>
        {/* brand logo */}
        <div>
            <Link href={"/"}>
            
            <Image
            src="/images/logo-colored.png"
            alt='logo'
            width={150}
            height={46}
            />
            </Link>
        </div>

        {/* search bar */}
        <div className='w-[665px] h-[40px]'>
            <Searchbar/>

        </div>


    {/* Icons */}
<div className="flex flex-row gap-6 items-center w-[228px] h-[41px] my-auto">
  
  {/* Profile */}
  <div className="flex flex-col items-center text-gray-500 text-2xl cursor-pointer hover:text-gray-700 transition-colors duration-200">
    <IoMdPerson />
    <p className="text-sm">Profile</p>
  </div>

  {/* Message */}
  <div className="flex flex-col items-center text-gray-500 text-2xl cursor-pointer hover:text-gray-700 transition-colors duration-200">
    <MdMessage />
    <p className="text-sm">Message</p>
  </div>

  {/* Orders */}
  <div className="flex flex-col items-center text-gray-500 text-2xl cursor-pointer hover:text-gray-700 transition-colors duration-200">
    <FaHeart />
    <p className="text-sm">Orders</p>
  </div>

  {/* My Cart */}
  <Link href={"/Cart"}>
  <div className="flex flex-col items-center text-gray-500 text-2xl cursor-pointer hover:text-gray-700 transition-colors duration-200">
    <MdShoppingCart />
    <p className="text-sm">Cart</p>
  </div>
  </Link>

</div>


    </div>
  )
}

export default Header