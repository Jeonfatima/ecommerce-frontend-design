import React from 'react'

const RequestSection = () => {
  return (
    <div>

      {/* laptop */}
    <div className='mx-auto w-[1180px] py-10 hidden md:block'>
         <div 
                className="w-[1180px] h-[480px] border border-gray-200 rounded-l-lg flex justify-between"
                style={{ backgroundImage: `url(${'/images/bannerbg.png'})`, backgroundSize: 'cover' }}
            >
                 {/* text */}
                <div className='text-white m-5 p-5 w-[440px]'>
                  <h1 className='text-3xl font-bold '>An easy way to send <br/> requests to all suppliers</h1>
                  <br/>
                  <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro eligendi dolorem esse impedit quia cumque saepe accusantium dolore ipsa aspernatur.</p>
                </div>

                {/* form */}
                <div className='w-[491px] h-[346px] bg-white p-5 m-10'>
                    <form className='flex flex-col gap-4'>
                        <p className='text-lg font-bold'>Send quote to suppliers</p>
                        <input type='text' placeholder='what item you need?' className= 'text-black border border-gray-200 rounded-md w-[440px] h-[40px] px-2'/>
                        <input type='text' placeholder='TypeMore details' className= 'text-gray-500 border border-gray-200 rounded-md w-[440px] h-[73px] px-2'/>
                        <input type='number' placeholder='Quantity' className='text-gray-500 border border-gray-200 rounded-md w-[350px] h-[40px] px-2' />
                        <button className='bg-blue-500 text-white rounded-md  w-[128px] h-[40px] px-2'>Send inquiry</button>
                    </form>

                </div>


            </div>
    </div>
{/* mobile */}
<div
  className="w-full h-full border border-gray-200 rounded-l-lg sm:hidden"
  style={{ backgroundImage: `url('/images/bannerbg.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
>
  <div className="flex flex-col items-start justify-start p-6 h-full gap-4">
    <div className="text-white">
      <h1 className="text-xl font-semibold leading-snug">
        An easy way to send <br /> requests to all suppliers
      </h1>
    </div>

    <button className="bg-blue-500 text-white rounded-md w-[128px] h-[40px] px-2">
      Send inquiry
    </button>
  </div>
</div>





    </div>
  )
}

export default RequestSection