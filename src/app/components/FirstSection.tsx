import React from 'react'
import Button from './Button'

import FirstSectionCard from './FirstSectionCard'

function ProductsSection() {
    return (
        <div className="flex gap-0 mt-8 h-[280px] mx-auto w-[1180px] border border-gray-300 bg-white ">
            <div 
                className="w-[300px] border border-gray-200 rounded-l-lg"
                style={{ backgroundImage: `url(${'/images/firstsection.png'})`, backgroundSize: 'cover' }}
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
                <FirstSectionCard />
            </div>
        </div>
    )
}

export default ProductsSection