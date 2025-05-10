import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Hero = () => {
  return (
    <div>
      <div className='hidden md:block'>
        <div className='flex flex-row items-center gap-4 p-10 mx-auto w-[1180px] h-[400px]  border border-gray-300 bg-white mt-5 '>

          {/* categories */}
          <div className='w-[250px] h-[360px] flex flex-col gap-3 pt-0'>
            <p className='text-gray-500 text-sm cursor-pointer hover:bg-[#E5F1FF] hover:text-black hover:rounded-sm py-2 px-3 -mx-1 -my-1 transition-all duration-300'>Automobiles</p>
            <p className='text-gray-500 text-sm cursor-pointer hover:bg-[#E5F1FF] hover:text-black hover:rounded-sm py-2 px-3 -mx-1 -my-1 transition-all duration-300'>Clothes and wear</p>
            <p className='text-gray-500 text-sm cursor-pointer hover:bg-[#E5F1FF] hover:text-black hover:rounded-sm py-2 px-3 -mx-1 -my-1 transition-all duration-300'>Home inetriors</p>
            <p className='text-gray-500 text-sm cursor-pointer hover:bg-[#E5F1FF] hover:text-black hover:rounded-sm py-2 px-3 -mx-1 -my-1 transition-all duration-300'>Computer and tech</p>
            <p className='text-gray-500 text-sm cursor-pointer hover:bg-[#E5F1FF] hover:text-black hover:rounded-sm py-2 px-3 -mx-1 -my-1 transition-all duration-300'>tools, equipments</p>
            <p className='text-gray-500 text-sm cursor-pointer hover:bg-[#E5F1FF] hover:text-black hover:rounded-sm py-2 px-3 -mx-1 -my-1 transition-all duration-300'>Sports and outdoor</p>
            <p className='text-gray-500 text-sm cursor-pointer hover:bg-[#E5F1FF] hover:text-black hover:rounded-sm py-2 px-3 -mx-1 -my-1 transition-all duration-300'>Animals and pet</p>
            <p className='text-gray-500 text-sm cursor-pointer hover:bg-[#E5F1FF] hover:text-black hover:rounded-sm py-2 px-3 -mx-1 -my-1 transition-all duration-300'>Machinery tools</p>
            <p className='text-gray-500 text-sm cursor-pointer hover:bg-[#E5F1FF] hover:text-black hover:rounded-sm py-2 px-3 -mx-1 -my-1 transition-all duration-300'>More category</p>
          </div>

          <div>
            <div
              className="w-[665px] h-[360px] border border-gray-200 rounded-lg"
              style={{ backgroundImage: `url('/images/mainbanner.png')`, backgroundSize: 'cover' }}
            >
              <div className='m-10'>
                <div className='text-3xl'>Latest Trending</div>
                <div className='text-3xl font-bold'>Electronic items</div>
                <Link href={'/productsListing'}>
                  <button className="bg-white w-[119px] h-[40px] my-8 cursor-pointer">Learn More</button>
                </Link>

              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 items-center mt-2 mb-2 h-[360px]">
            {/* User Profile Box */}
            <div className="bg-[#E3F0FF] w-[200px] p-4 flex flex-col items-center gap-1 rounded-md mx-auto">
              <div className="flex items-center justify-center gap-2 w-full">
                <Image src="/images/Avatar.png" alt="avatar" height={44} width={44} />
                <p className="text-gray-700">Hi, user lets get started</p>
              </div>
              <button className="w-full py-2 bg-blue-500 text-white hover:bg-blue-400 rounded-md">
                Join now
              </button>
              <button className="w-full py-2 bg-white text-blue-500 hover:bg-blue-400 hover:text-white rounded-md border border-blue-500">
                Log in
              </button>
            </div>

            {/* Offer Boxes */}
            <div className="bg-[#F38332] text-white text-left p-5 w-[200px] rounded-md">
              Get $US 10% off with new suppliers
            </div>
            <div className="bg-[#55BDC3] text-white text-left p-5 w-[200px] rounded-md">
              Sent quotes with supplier preferences
            </div>
          </div>


        </div>
      </div>

      <div className='sm:hidden'>
        <div
          className="w-[360px] h-[180px] border border-gray-200 rounded-lg"
          style={{ backgroundImage: `url('/images/mainbanner.png')`, backgroundSize: 'cover' }}
        >
          <div className='m-10'>
            <div className='text-sm'>Latest Trending</div>
            <div className='text-sm font-bold'>Electronic items</div>
            <Link href={'/productsListing'}>
              <button className="bg-white w-[91px] h-[30px] my-8 cursor-pointer text-sm font-medium text-center flex items-center justify-center overflow-hidden whitespace-nowrap rounded">
                Learn More
              </button>
            </Link>

          </div>
        </div>

      </div>


    </div>
  )
}

export default Hero