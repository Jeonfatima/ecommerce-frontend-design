import React from 'react';

const Newsletter = () => {
  return (
    <div className="w-full max-w-[1440px] h-auto bg-[#DEE2E7] mx-auto px-4 py-6 md:px-10 md:py-10 flex flex-col justify-center items-center text-center">
      
      {/* Heading */}
      <h1 className="text-lg md:text-2xl font-bold text-black">
        Subscribe to our Newsletter
      </h1>

      {/* Subtext */}
      <p className="text-gray-500 text-sm mt-2 max-w-md">
        Get daily news on upcoming offers from many suppliers all over the world.
      </p>

      {/* Input & Button Section */}
      <div className="flex flex-col sm:flex-row items-center mt-4 gap-2 w-full max-w-md">
        {/* Input Field */}
        <input 
          type="text"
          className="w-full sm:w-[280px] h-[42px] bg-white border border-gray-300 rounded-md px-4 text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="Enter your email..."
        />
        
        {/* Subscribe Button */}
        <button className="w-full sm:w-auto bg-blue-600 text-white px-5 py-2 h-[42px] rounded-md text-sm md:text-lg font-light hover:bg-blue-700">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;

