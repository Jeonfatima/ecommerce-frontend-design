import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const Category = () => {
  return (
    <div>
         {/* categories section */}
         <div className="w-full max-w-[1440px] h-[56px] flex items-center gap-3 px-6 mx-auto">
                        <div className="flex items-center text-gray-500 hover:text-gray-700 cursor-pointer">
                            Home <IoIosArrowForward className="ml-1" />
                        </div>
                        <div className="flex items-center text-gray-500 hover:text-gray-700 cursor-pointer">
                            Clothing <IoIosArrowForward className="ml-1" />
                        </div>
                        <div className="flex items-center text-gray-500 hover:text-gray-700 cursor-pointer">
                            Mens wear <IoIosArrowForward className="ml-1" />
                        </div>
                        <div className="text-gray-500 hover:text-gray-700 cursor-pointer">
                            Summer clothing
                        </div>
                    </div>
    </div>
  )
}

export default Category