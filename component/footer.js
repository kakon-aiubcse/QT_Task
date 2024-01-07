import React from "react";

const Footer = () => {
  return (
    <div className="bg-amber-500 p-6 md:p-8 flex flex-col items-center mt-10 ">
      <div className="flex flex-col md:flex-row md:justify-between w-full md:w-auto">
        <div className="mb-4 md:mb-0 ml-14 md:mr-4">
          <div className="bg-white rounded-full overflow-hidden mb-4" style={{ width: '500px', fontFamily: 'font-ui-serif' }}>
            <input
              type="text"
              placeholder="Enter Your Email"
              className="py-2 pl-6 pr-4 rounded-l-md w-64 bg-gray-100 text-gray-500 focus:outline-none"
              style={{ fontFamily: 'font-ui-serif' }}
            />
            <button className="bg-orange-600 text-white py-2 px-6 mt-1 mb-1 ml-8 font-bold rounded-full" style={{ width: '200px', fontFamily: 'font-ui-serif' }}>
              Subscribe <span className="" style={{ width: '20px' }}>&#8594;</span>
            </button>
          </div>
          <div className="mt-20">
             <p className="text-black font-bold text-4xl mb-2">pti<span className="text-red-500">.</span></p>
          <p className="text-black ml-1 font-bold text-sm mb-2">
            Copyright©Tripp. All Rights Reserved
          </p>
          
          </div>
         
        </div>
        <div className="flex items-center ml-2 mt-32">
  <img src="google.png" alt="logo" className="w-8 h-8 rounded-full" />
  <img src="twitter.png" alt="logo" className="w-8 h-8 rounded-full ml-4" />
  <img src="insta.png" alt="logo" className="w-8 h-8 rounded-full ml-4" />
</div>


        
        <div className="flex items-center ml-32">
          <img src="Image2.png" alt="logo" className="w-56 h-56" />
        </div>
      </div>
    </div>
  );
};

export default Footer;