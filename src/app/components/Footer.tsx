import React from 'react';
import Image from 'next/image';
import { IoIosArrowUp } from "react-icons/io";
import Link from 'next/link';
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-white">
      {/* Top Section */}
      <div className="max-w-[1440px] mx-auto px-10 flex flex-col justify-end">
        <div className="flex items-center justify-between px-20 p-10">
          {/* First Column */}
          <div className="w-[276px] h-[157px] flex flex-col gap-2">
            <Link href="/">
              <Image src="/images/logo-colored.png" alt="logo" width={150} height={46} />
            </Link>
            <p className="text-gray-500 text-sm">Best information about the company goes here but now lorem ipsum is</p>
            <div className="flex gap-2 text-3xl text-gray-400">
              <MdFacebook />
              <AiFillTwitterCircle />
              <FaLinkedin className="border rounded-full" />
              <AiFillInstagram />
              <FaYoutube />
            </div>
          </div>

          {/* Links Columns */}
          {[
            { title: "About", links: ["About us", "Find store", "Categories", "Blogs"] },
            { title: "Partnership", links: ["About us", "Find store", "Categories", "Blogs"] },
            { title: "Information", links: ["Help center", "Money refund", "Shipping", "Contact us"] },
            { title: "For users", links: ["Login", "Register", "Settings", "My orders"] }
          ].map((col, index) => (
            <div key={index} className="flex flex-col gap-1">
              <p className="text-sm text-black pb-2">{col.title}</p>
              {col.links.map((link, idx) => (
                <p key={idx} className="text-gray-400 text-sm">{link}</p>
              ))}
            </div>
          ))}

          {/* App Download Section */}
          <div className="flex flex-col w-[124px] h-[129px] gap-2">
            <p className="text-sm text-black">Get app</p>
            <Image src="/images/appstore.png" alt="app store" width={124} height={42} />
            <Image src="/images/googleplay.png" alt="google play" width={124} height={42} />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full h-[68px] bg-[#DEE2E7] flex items-center justify-center">
        <div className="max-w-[1440px] w-full flex items-center justify-between px-20">
          <p className="text-gray-500 text-sm">© 2023 Ecommerce. |  Developed by Fatima Salman | DHC-1107</p>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/images/icon.png" alt="flag" width={24} height={17} />
            <span className="text-gray-500 text-sm">English</span>
            <IoIosArrowUp className="text-gray-500 text-lg" />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
