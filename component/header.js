import React from 'react';

const Header = () => {
  return (
    <header className="text-Black p-10 flex justify-between items-center ml-40 mr-40 ">
      

      {/* Company Name */}
      <div className="flex items-center">
        <h1 className="text-4xl font-bold font-sans">pti.</h1>
      </div>

      {/* Search Bar with Orange Icon */}
      <div className="flex items-center py-2.5 justify-center flex-1">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            {/* Orange Search Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="orange"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-5.2-5.2"
              />
              <circle cx="10" cy="10" r="8" />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search Audiobook"
            className="py-2 pl-6 pr-4 rounded-md bg-gray-100 text-gray-500 focus:outline-none"
            style={{ width: '450px', fontFamily: 'font-ui-serif' }}
          />
        </div>

        <div className="ml-4">
          <div className="relative">
            <select
              className="bg-gray-100 border text-1.5xl rounded-md py-2.5 px-4 text-gray-600 font-bold  focus:outline-none appearance-none"
              style={{ fontFamily: 'font-ui-mono', fontWeight: 600 }}
              defaultValue=""
            >
              <option value="" disabled hidden>
                MENU
              </option>
              <option value="home"  style={{color:'gray'}} >Home</option>
              <option value="details"style={{color:'gray'}} >Details</option>
              <option value="category"style={{color:'gray'}} >Category</option>
              <option value="favorites"style={{color:'gray'}} >My Favourites</option>
              <option value="profile"style={{color:'gray'}} >Profile</option>
              <option value="loginSignup"style={{color:'gray'}} >Login/Signup</option>
            </select>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              {/* Orange Dropdown Arrow Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="orange"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className=''>
      <img src="user.png" alt="User" className="w-14 h-14 " />
      </div>
    </header>
  );
};

export default Header;
