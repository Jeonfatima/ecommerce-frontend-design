import React from 'react'
import Link from 'next/link'
const BlueBanner = () => {
  return (
    <div>
         {/* banner */}
              <div className='w-[1180px] h-[120px] flex justify-between p-5 mx-auto mb-5' style={{ backgroundImage: `url(${'/images/bluebanner.png'})`, backgroundSize: 'cover' }}>
        
              <div>
                <h1 className='text-3xl font-bold text-white'>Super Discount on more than 100 USD</h1>
                <p className='text-lg text-white'>Have you ever finally just write dummy info</p>
              </div>
              <Link href={"/productsListing"}>
              <button className='w-[105.4px] h-[40px] bg-orange-400 text-white shadow rounded-md text-center p-auto m-5 cursor-pointer'>Shop more</button>
              </Link>
              </div>
    </div>
  )
}

export default BlueBanner