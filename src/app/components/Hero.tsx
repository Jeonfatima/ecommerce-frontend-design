import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
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
            
            <Image
            src="/images/banner.png"
            alt='hero'
            width={665}
            height={360}
            />
        </div>

        <div className="flex flex-col gap-2 items-center mt-2 mb-2 h-[360px]">
  {/* User Profile Box */}
  <div className="bg-[#E3F0FF] w-[200px] p-4 flex flex-col items-center gap-1 rounded-md mx-auto">
    <div className="flex items-center justify-center gap-2 w-full">
      <Image src="/images/Avatar.png" alt="avatar" height={44} width={44} />
      <p className="text-gray-700">Hi, user let's get started</p>
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
  )
}

export default Hero