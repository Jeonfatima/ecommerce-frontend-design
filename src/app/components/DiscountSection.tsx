import React from 'react'
import DiscountCard from './DiscountCard'


function DiscountSection() {


    return (
        <div>
            <div className='hidden md:block'>
        <div className="flex flex-col md:flex-row md:h-[250px] w-full md:w-[1180px] mx-auto border border-gray-300 bg-white mt-5">
        {/* Timer Section */}
        <div className="w-full md:w-[300px] border-b md:border-b-0 md:border-r border-gray-200 rounded-t-lg md:rounded-l-lg p-5">
          <h2 className="text-lg md:text-[20px] font-semibold">Deals and offers</h2>
          <p className="text-sm md:text-[16px] text-gray-500 mt-1">Electronic equipments</p>
      
          {/* Timer */}
         {/* Timer */}
         <div className="flex gap-2 mt-6">
                            {[
                                { value: '04', label: 'Days' },
                                { value: '13', label: 'Hour' },
                                { value: '34', label: 'Min' },
                                { value: '56', label: 'Sec' }
                            ].map((time, index) => (
                                <div key={index} className="bg-[#606060] px-3 py-1 rounded flex flex-col items-center">
                                    <span className="text-white text-[16px]">{time.value}</span>
                                    <span className="text-white text-[11px]">{time.label}</span>
                                </div>
                            ))}
                        </div>
        </div>
      
          {/* Discount Cards */}
          <div className="flex-1">
                <DiscountCard />
            </div>
      </div>
      </div>


      <div className='sm:hidden w-[360px]'>
         {/* Timer Section */}
         <div className='flex flex-row justify-between'>

         <div>
         <div className="w-full md:w-[300px] border-b md:border-b-0 md:border-r border-gray-200 rounded-t-lg md:rounded-l-lg p-5">
          <h2 className="text-lg md:text-[20px] font-semibold">Deals and offers</h2>
          <p className="text-sm md:text-[16px] text-gray-500 mt-1">Electronic equipments</p>
         </div>
         </div>
          {/* Timer */}
         <div className="flex gap-2 mt-6 w-[143px] h-[44px]">
                            {[
                               
                                { value: '13', label: 'Hour' },
                                { value: '34', label: 'Min' },
                                { value: '56', label: 'Sec' }
                            ].map((time, index) => (
                                <div key={index} className="bg-gray-100 px-3 py-1 rounded flex flex-col items-center">
                                    <span className="text-black text-[16px]">{time.value}</span>
                                    <span className="text-black text-[11px]">{time.label}</span>
                                </div>
                            ))}
         </div>



        </div>

        <div>
               {/* Discount Cards */}
               <div className="flex-1">
                <DiscountCard />
            </div>
        </div>

      </div>
      </div>
    )
}

export default DiscountSection