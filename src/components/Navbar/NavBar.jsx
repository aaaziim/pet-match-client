import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import FancyText from '@carefully-coded/react-text-gradient';
import Logo from "../../assets/favicon.svg"
const NavBar = () => {
    return (
        <div className='shadow-md rounded-lg p-2'>
 <div className="navbar bg-base-100 ">
        <div className="flex-1">
        <Link to="/" className='flex items-center gap-4'>
        <img src={Logo} />
        <FancyText className="text-3xl font-bold"
            gradient={{ from: '#F858E0', to: '#77156C', type: 'linear' }}
            animateTo={{ from: '#6DEDD0', to: '#7AE23A' }}
            animateDuration={2000}
        > PetMatch </FancyText>
        </Link>
        </div>
        <div className="flex-none">
          <div className="flex gap-4">
          <NavLink className="bg-gray-200 px-4 py-2 rounded-md text-xl font-semibold hover:text-white hover:bg-[#6DEDD0] transition duration-300 ease-in-out" to="/login" > Log In</NavLink> 
          <NavLink className="bg-gray-200 px-4 py-2 rounded-md text-xl font-semibold hover:text-white hover:bg-[#6DEDD0] transition duration-300 ease-in-out" to="/register" > Register</NavLink> 
          </div>
          <div className="dropdown dropdown-end px-3">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                 
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
        
        <div className='navbar'>
        <div className="flex items-center space-x-4 w-full px-6">
  {/* Search Box with Icon and Button */}
  <div className="relative flex items-center border border-gray-300 rounded-md flex-grow">
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className="absolute left-3 w-5 h-5 text-gray-400" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M10 16a6 6 0 100-12 6 6 0 000 12z" />
    </svg>
    <input 
      type="text" 
      placeholder="Search..." 
      className="px-10 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
    <button 
      className="px-4 py-2 bg-indigo-500 text-white rounded-r-md hover:bg-indigo-600 focus:outline-none"
    >
      Search
    </button>
  </div>

  {/* Filter Dropdown */}
  <select 
    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
  >
    <option value="all">All Types</option>
    <option value="dog">Dog</option>
    <option value="bird">Bird</option>
    <option value="cat">Cat</option>
    <option value="other">Other</option>
  </select>
</div>


        </div>
        </div>
       
    );
};

export default NavBar;