import React from 'react'
import Button from './Button'

import SecondSectionCard from './SecondSectionCard'
import { FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'

function ProductsSection() {
    return (
        <div>

         <div className='hidden md:block'>
        <div className="flex gap-0 mt-8 h-[280px] mx-auto w-[1180px] border border-gray-300 bg-white ">
            <div 
                className="w-[300px] border border-gray-200 rounded-l-lg"
                style={{ backgroundImage: `url(${'/images/bg2.png'})`, backgroundSize: 'cover' }}
            >
                <div className="p-7">
                    <div className="flex flex-col">
                        <h2 className="text-[20px] font-semibold">Home and outdoor</h2>

                        {/* button */}
                        <div className="flex gap-2 mt-6">
                            <Button />
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Product Cards */}
            <div className='flex-1 w-full'>
                <SecondSectionCard />
            </div>
        </div>
        </div>

           {/* mobile */}
           <div className='sm:hidden'>
                <h1 className='text-xl p-3 font-bold'>Consumer electronics</h1>
                {/* Product Cards */}
                <div className='flex-1 w-full'>
                    <SecondSectionCard />
                </div>
                {/* button */}
                <div className="flex gap-2 mt-6 text-blue-500 ">
                    <Link href={"/productsListing"}>
                        <h1 className='text-blue-500 mb-3'>Source now</h1>
                    </Link>

                    <FaArrowRight className='text-blue-500' />
                </div>
                <div>

                </div>

            </div>


        </div>
    )
}

export default ProductsSection