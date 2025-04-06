import React from 'react';

const Newsletter = () => {
  return (
    <div className="w-[1440px] h-[190px] bg-[#DEE2E7] mx-auto px-10 flex flex-col justify-center items-center text-center">
      {/* Heading */}
      <h1 className="text-2xl font-bold text-black">Subscribe to our Newsletter</h1>
      
      {/* Subtext */}
      <p className="text-gray-500 text-sm mt-2">
        Get daily news on upcoming offers from many suppliers all over the world.
      </p>

      {/* Input & Button Section */}
      <div className="flex items-center mt-4 gap-2">
        {/* Input Field */}
        <input 
          type="text"
          className="w-[280px] h-[42px] bg-white border border-gray-300 rounded-md px-4 text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="Enter your email..."
        />
        
        {/* Subscribe Button */}
        <button className="bg-blue-600 text-white px-5 py-2 h-[42px] rounded-md text-lg font-light hover:bg-blue-700">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
