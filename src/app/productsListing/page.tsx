"use client"
import React, { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from 'next/image';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { BsFillGridFill } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import Category from '../components/Category';
import Link from 'next/link';
import Navbar from '../components/Navbar';

const products = [
    {
        title: 'Canon Camera EOS 2000D, Black 10x zoom',
        price: '$998.00',
        rating: "☆☆☆☆☆ 7.5",
        orders: 154,
        shipping: 'Free Shipping',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.",
        image: '/images/p1.png'
    },
    {
        title: 'Ophix HE600 4K Action Camera - Black',
        price: '$998.00',
        rating: "☆☆☆☆☆ 7.5",
        orders: 154,
        shipping: 'Free Shipping',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.",
        image: '/images/p2.png'
    },
    {
        title: 'GoPro HERO6 4K action Camera - Black',
        price: '$998.00',
        rating: "☆☆☆☆☆ 7.5",
        orders: 154,
        shipping: 'Free Shipping',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.",
        image: '/images/p3.png'
    },
    {
        title: 'GoPro HERO6 4K Action - Black',
        price: '$998.00',
        rating: "☆☆☆☆☆ 7.5",
        orders: 154,
        shipping: 'Free Shipping',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.",
        image: '/images/p4.png'
    },
    {
        title: 'GoPro Hero6 4K Action- Black',
        price: '$998.00',
        rating: "☆☆☆☆☆ 7.5",
        orders: 154,
        shipping: 'Free Shipping',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.",
        image: '/images/p5.png'
    },
    {
        title: 'Canon Camera EOS 2000D, Black 10x zoom',
        price: '$998.00',
        rating: "☆☆☆☆☆ 7.5",
        orders: 154,
        shipping: 'Free Shipping',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.",
        image: '/images/p6.png'
    },
];

const Page = () => {
    const [isGridView, setIsGridView] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div className='mx-auto'>
            <Navbar/>
            <Category/>
            
            {/* Mobile sidebar toggle button */}
            <button 
                className="md:hidden fixed top-24 left-4 z-50 bg-blue-500 text-white p-2 rounded shadow-lg"
                onClick={() => setShowSidebar(!showSidebar)}
            >
                {showSidebar ? 'Hide Filters' : 'Show Filters'}
            </button>

            {/* Main content container */}
            <div className="flex justify-center bg-gray-50 min-h-screen py-8">
                <div className="w-full lg:w-[1180px] flex gap-4 px-4 lg:px-0">
                    {/* Sidebar - hidden on mobile unless toggled */}
                    <div className="hidden md:block w-[240px] h-auto flex-shrink-0">
                        <div className="flex flex-col justify-between items-center p-4 rounded space-y-2">
                            {/* Categories */}
                            <div className="p-4 w-[230px] border-t border-t-gray-300">
                                <h3 className="font-bold text-lg mb-2">Categories</h3>
                                <ul className="space-y-2 text-[18px] text-gray-500">
                                    <li className='hover:bg-blue-200 rounded-md p-1'>Mobile Accessories</li>
                                    <li className='hover:bg-blue-200 rounded-md p-1'>Electronics</li>
                                    <li className='hover:bg-blue-200 rounded-md p-1'>Headphones</li>
                                    <li className='hover:bg-blue-200 rounded-md p-1'>Smartphones</li>
                                    <p className='text-blue-500 cursor-pointer hover:text-blue-600'>See All</p>
                                </ul>
                            </div>

                            {/* Brands */}
                            <div className="p-4 w-[230px] border-t border-t-gray-300">
                                <h3 className="font-bold text-lg mb-2">Brands</h3>
                                <ul className="space-y-2 text-[18px] text-gray-500">
                                    <li><input type="checkbox" className='p-1' /> Samsung</li>
                                    <li><input type="checkbox" className='p-1' /> Oppo</li>
                                    <li><input type="checkbox" className='p-1' /> Apple</li>
                                    <li><input type="checkbox" className='p-1' /> Huawei</li>
                                    <li><input type="checkbox" className='p-1' /> Pocco</li>
                                    <p className='text-blue-500 mt-3 cursor-pointer hover:text-blue-600'>See All</p>
                                </ul>
                            </div>

                            {/* Features */}
                            <div className="p-4 w-[230px] border-t border-t-gray-300">
                                <h3 className="font-bold text-lg mb-2">Features</h3>
                                <ul className="space-y-2 text-[18px] text-gray-500">
                                    <li><input type="checkbox" className='p-1' /> Metallic</li>
                                    <li><input type="checkbox" className='p-1' /> Plastic</li>
                                    <li><input type="checkbox" className='p-1' /> 8GB Ram</li>
                                    <li><input type="checkbox" className='p-1' /> Super Power</li>
                                    <li><input type="checkbox" className='p-1' /> Large Memory</li>
                                    <p className='text-blue-500 mt-3 cursor-pointer hover:text-blue-600'>See All</p>
                                </ul>
                            </div>

                            {/* Price Range */}
                            <div className='p-4 w-[230px] border-t border-t-gray-300'>
                                <h3 className="font-semibold mb-2">Price range</h3>
                                <div className="mb-2">
                                    <input type="range" className="w-full" />
                                    <input type="range" className="w-full mt-1" />
                                </div>
                                <div className="flex gap-2 mb-2">
                                    <input type="number" placeholder="Min" className="w-[111px] border border-gray-200 rounded px-2 py-1" />
                                    <input type="number" placeholder="Max" className="w-[111px] border border-gray-200 rounded px-2 py-1" />
                                </div>
                                <button className="text-blue-600 font-semibold border w-[228px] h-[40px] border-gray-200 rounded-md">Apply</button>
                            </div>

                            {/* Condition */}
                            <div className='p-4 w-[230px] border-t border-t-gray-300'>
                                <h3 className="font-bold text-lg mb-2">Condition</h3>
                                <div className="space-y-1 text-[18px] text-gray-500">
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="condition" defaultChecked /> Any
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="condition" /> Refurbished
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="condition" /> Brand new
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="condition" /> Old items
                                    </label>
                                </div>
                            </div>

                            {/* Ratings */}
                            <div className='p-4 w-[230px] border-t border-t-gray-300'>
                                <h3 className="font-bold text-lg mb-2">Ratings</h3>
                                <div className="space-y-1">
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" /> <span>⭐⭐⭐⭐⭐</span>
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" /> <span>⭐⭐⭐⭐☆</span>
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" /> <span>⭐⭐⭐☆☆</span>
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" /> <span>⭐⭐☆☆☆</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product List - Single version that works for both mobile and desktop */}
                    <main className="flex-1">
                        {/* Header */}
                        <div className='w-full bg-white p-4 rounded shadow mb-4 hidden md:flex justify-between items-center h-[62px]'>
                            <div className='flex text-lg gap-2'>
                                <div>12,911 items in</div>
                                <div className='font-bold'>Mobile accessory</div>
                            </div>
                            <div className='flex text-lg gap-3 items-center'>
                                <div><input type='checkbox' /> Verified only</div>
                                <div className='flex justify-between items-center border border-gray-300 rounded-md w-[172px] h-[40px] p-3 cursor-pointer'>
                                    <p className='text-gray-600'>Featured</p>
                                    <RiArrowDropDownLine className='text-gray-600 text-3xl' />
                                </div>
                                {/* Toggle Icons */}
                                <div className="flex w-[76px] h-[40px] divide-x divide-gray-300 border border-gray-300 rounded-md overflow-hidden">
                                    <div
                                        onClick={() => setIsGridView(true)}
                                        className={`flex justify-center items-center w-1/2 h-full cursor-pointer ${isGridView ? "bg-gray-200" : ""}`}
                                    >
                                        <BsFillGridFill />
                                    </div>
                                    <div
                                        onClick={() => setIsGridView(false)}
                                        className={`flex justify-center items-center w-1/2 h-full cursor-pointer ${!isGridView ? "bg-gray-200" : ""}`}
                                    >
                                        <GiHamburgerMenu />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Header */}
                        <div className='w-full bg-white p-3 rounded shadow mb-3 flex justify-between items-center md:hidden'>
                            <div className='flex text-base gap-1'>
                                <div>12,911 items</div>
                                <div className='font-bold'>in Mobile</div>
                            </div>
                            <div className='flex items-center gap-2'>
                                <input type='checkbox' className='h-4 w-4' />
                                <span className='text-sm'>Verified</span>
                                <div className='flex justify-between items-center border border-gray-300 rounded-md w-[100px] h-8 p-2 cursor-pointer'>
                                    <p className='text-gray-600 text-sm'>Featured</p>
                                    <RiArrowDropDownLine className='text-gray-600 text-lg' />
                                </div>
                            </div>
                        </div>

                        {/* Filter section */}
                        <div className="w-full flex items-center gap-2 text-sm mb-4 flex-wrap">
                            {['Samsung', 'Apple', 'Poco', 'Metallic', '4 star', '3 star'].map((item, idx) => (
                                <div key={idx} className="h-[32px] px-[10px] border border-blue-400 rounded-md flex items-center gap-[6px] text-gray-700 bg-white">
                                    <span className='text-xs md:text-sm'>{item}</span>
                                    <button className="text-gray-400 text-xs font-bold hover:text-red-400">✕</button>
                                </div>
                            ))}
                            <button className="text-blue-500 hover:text-blue-600 text-sm hover:underline whitespace-nowrap">
                                Clear all filter
                            </button>
                        </div>

                        {/* Product Layout */}
                        {isGridView ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {products.map((product, idx) => (
                                    <div key={idx} className="bg-white p-4 rounded shadow flex flex-col items-start">
                                        <Link href="/ProductDetail" className="w-full flex justify-center">
                                            <Image
                                                src={product.image}
                                                alt={product.title}
                                                width={210}
                                                height={210}
                                                className="object-contain pb-4"
                                            />
                                        </Link>
                                        <p className="text-xl font-semibold">{product.price}</p>
                                        <p className='text-orange-400'>{product.rating}</p>
                                        <p className='text-gray-500 text-sm mt-1'>{product.title}</p>
                                        <button className='text-blue-500 font-medium mt-2 hover:text-blue-600'>View Details</button>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="space-y-3 md:space-y-4">
                                {products.map((product, idx) => (
                                    <div key={idx} className="bg-white rounded shadow flex flex-row p-3 md:p-4 w-full">
                                        <div className="flex-shrink-0 w-20 md:w-[210px] h-20 md:h-[210px] flex items-center justify-center">
                                            <Link href="/ProductDetail">
                                                <Image
                                                    src={product.image}
                                                    alt={product.title}
                                                    width={80}
                                                    height={80}
                                                    className="object-contain h-full w-auto md:w-[210px] md:h-[210px]"
                                                />
                                            </Link>
                                        </div>
                                        <div className="flex flex-col justify-between ml-3 md:ml-4 flex-1">
                                            <div>
                                                <h3 className="text-sm md:text-md font-bold line-clamp-2">{product.title}</h3>
                                            </div>
                                            <p className="text-lg md:text-xl font-semibold">{product.price}</p>
                                            <div className='flex flex-wrap items-center gap-1 md:gap-2 text-xs md:text-base'>
                                                <p className='text-orange-400'>{product.rating}</p>
                                                <span className='hidden md:inline text-gray-500'>•</span>
                                                <p className='text-gray-400'>{product.orders} orders</p>
                                                <span className='hidden md:inline text-gray-500'>•</span>
                                                <p className='text-green-500'>{product.shipping}</p>
                                            </div>
                                            <p className='text-gray-500 text-xs md:text-base line-clamp-2 md:line-clamp-none mt-1'>
                                                {product.description}
                                            </p>
                                            <button className='text-blue-500 font-medium text-sm md:text-base mt-1 md:mt-2 hover:text-blue-600 w-fit'>
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Pagination */}
                        <div className='flex flex-col md:flex-row gap-2 items-center justify-between md:justify-end p-4 mt-4'>
                            <div className='flex items-center justify-center rounded-md text-gray-600 border border-gray-300 text-sm md:text-lg w-full md:w-[125px] h-8 md:h-[40px]'>
                                <p>Show 10</p>
                                <RiArrowDropDownLine className="text-gray-500 text-xl md:text-3xl" />
                            </div>
                            <div className="flex border border-gray-300 rounded-md cursor-pointer w-full md:w-[217px] h-8 md:h-[40px] text-sm md:text-lg divide-x divide-gray-300">
                                <div className="flex justify-center items-center w-full hover:bg-gray-200">
                                    <IoIosArrowBack />
                                </div>
                                <div className="flex justify-center items-center w-full hover:bg-gray-200">1</div>
                                <div className="flex justify-center items-center w-full hover:bg-gray-200">2</div>
                                <div className="flex justify-center items-center w-full hover:bg-gray-200">3</div>
                                <div className="flex justify-center items-center w-full hover:bg-gray-200">
                                    <IoIosArrowForward />
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Page
