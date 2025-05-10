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
      <div className="max-w-[1440px] w-full mx-auto px-5 md:px-10 flex flex-col justify-end">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-0 px-2 md:px-20 py-10">
          
          {/* First Column */}
          <div className="w-full md:w-[276px] flex flex-col gap-2 text-center md:text-left">
            <Link href="/">
              <Image src="/images/logo-colored.png" alt="logo" width={150} height={46} />
            </Link>
            <p className="text-gray-500 text-sm">
              Best information about the company goes here but now lorem ipsum is
            </p>
            <div className="flex justify-center md:justify-start gap-3 text-2xl text-gray-400">
              <MdFacebook />
              <AiFillTwitterCircle />
              <FaLinkedin className="border rounded-full" />
              <AiFillInstagram />
              <FaYoutube />
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 md:flex gap-8 w-full md:w-auto text-center md:text-left">
            {[
              { title: "About", links: ["About us", "Find store", "Categories", "Blogs"] },
              { title: "Partnership", links: ["About us", "Find store", "Categories", "Blogs"] },
              { title: "Information", links: ["Help center", "Money refund", "Shipping", "Contact us"] },
              { title: "For users", links: ["Login", "Register", "Settings", "My orders"] }
            ].map((col, index) => (
              <div key={index} className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-black pb-2">{col.title}</p>
                {col.links.map((link, idx) => (
                  <p key={idx} className="text-gray-400 text-sm">{link}</p>
                ))}
              </div>
            ))}
          </div>

          {/* App Download Section */}
          <div className="flex flex-col items-center md:items-start w-full md:w-[124px] gap-2 pt-4 md:pt-0">
            <p className="text-sm text-black">Get app</p>
            <Image src="/images/appstore.png" alt="app store" width={124} height={42} />
            <Image src="/images/googleplay.png" alt="google play" width={124} height={42} />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full bg-[#DEE2E7] py-4 px-5">
        <div className="max-w-[1440px] w-full mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-2 md:gap-0">
          <p className="text-gray-500 text-sm">© 2023 Ecommerce. | Developed by Fatima Salman | DHC-1107</p>
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
