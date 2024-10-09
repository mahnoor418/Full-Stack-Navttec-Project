import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosGitCompare } from "react-icons/io";
import { TbJewishStar } from "react-icons/tb";
import { MdOutlineMenu } from "react-icons/md";
import { asset } from "../assets/assets";
import { ThemeContext } from "../components/ThemeContext";
import { storecontext } from '../Context/storecontext';

const Navbar = () => {
  const {token ,settoken} = useContext(storecontext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const handleLogout = () => {
    settoken(null) // Reset the current state to log out
    localStorage.removeItem("token"); // Remove token from local storage
    // Optionally, navigate to the login page
    // navigate('/login'); // Uncomment if you have a navigate function
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full">
      {/* Top bar */}
      <div className="bg-black mb-[30px] text-white text-sm text-center p-2">
        FREE SHIPPING & RETURN · MONEY BACK GUARANTEE · ONLINE SUPPORT 24/7
      </div>
      {/* Main Navbar */}
      <div className="flex justify-between items-center p-4 bg-white">
        {/* Left icons */}
        <div className="flex items-center gap-4">
          <Link to="/AddtoCart" className="text-xl text-gray-600 hover:text-gray-800">
            <CiShoppingCart />
          </Link>
          <Link to="/Wishlist" className="text-xl text-gray-600 hover:text-gray-800">
            <TbJewishStar />
          </Link>
          <Link to="/SingingUp" className="text-xl text-gray-600 hover:text-gray-800">
            <IoIosGitCompare />
          </Link>
        </div>

        {/* Logo */}
        <div className="flex justify-center w-full">
          <img src={asset.logoimage} alt="Logo" className="h-16 hidden md:block" />
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button className="text-gray-600 hover:text-gray-800">PK</button>
          {
          token ? <button className="text-gray-600 hover:text-gray-800" onClick={handleLogout}>
              👤 Logout
            </button> : <></>
          }
          <button className="text-gray-600 hover:text-gray-800">🔍</button>
          <button
            className="text-gray-600 hover:text-gray-800 md:hidden"
            onClick={toggleMenu}
          >
            <MdOutlineMenu />
          </button>
        </div>
        <div className="flex items-center gap-4">
          <button
            className="text-gray-600 hover:text-gray-800 dark:text-gray-300"
            onClick={toggleDarkMode}
          >
            {darkMode ? '🌙' : '☀️'}
          </button>
          <button className="text-gray-600 hover:text-gray-800 dark:text-gray-300 md:hidden" onClick={toggleMenu}>
            <MdOutlineMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <nav className="bg-red-600 text-white py-4">
          <ul className="flex flex-col items-center gap-4">
            <li>
              <Link to="/" className="hover:text-gray-300" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/Products" className="hover:text-gray-300" onClick={toggleMenu}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/BestSeller" className="hover:text-gray-300" onClick={toggleMenu}>
                BestSeller
              </Link>
            </li>
            <li>
              <Link to="/Brands" className="hover:text-gray-300" onClick={toggleMenu}>
                Brands
              </Link>
            </li>
            <li className="relative group">
              <button className="hover:text-gray-300">
                Pages
              </button>
              <div className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded">
                <Link
                  to="/AboutUs"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={toggleMenu}
                >
                  AboutUs
                </Link>
                <Link
                  to="/Blog"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={toggleMenu}
                >
                  Blog
                </Link>
                <Link
                  to="/ContactUs"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={toggleMenu}
                >
                  ContactUs
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>

      {/* Bottom Navbar (Desktop) */}
      <div className="mt-[30px] bg-red-600 text-white py-4 hidden md:block">
        <nav className="container mx-auto flex justify-center">
          <ul className="flex flex-col md:flex-row items-center gap-4 lg:gap-10">
            <li>
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Products" className="hover:text-gray-300">
                Products
              </Link>
            </li>
            <li>
              <Link to="/BestSeller" className="hover:text-gray-300">
                BestSeller
              </Link>
            </li>
            <li>
              <Link to="/Brands" className="hover:text-gray-300">
                Brands
              </Link>
            </li>
            <li className="relative group">
              <button className="hover:text-gray-300">
                Pages
              </button>
              <div className="absolute bottom-full left-0 mb-2 hidden group-hover:block bg-white text-black shadow-lg rounded">
                <Link
                  to="/AboutUs"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  AboutUs
                </Link>
                <Link
                  to="/Blog"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Blog
                </Link>
                <Link
                  to="/ContactUs"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  ContactUs
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
