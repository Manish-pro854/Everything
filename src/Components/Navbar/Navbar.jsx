import React, { useState } from "react";
import { LuClock } from "react-icons/lu";
import logo from "../../assets/logo.png";
import { CiLocationOn } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import border from "../../assets/border.svg";
import openmenu from "../../assets/openmenu.svg";
import closemenu from "../../assets/closemenu.svg";
import { ImHome } from "react-icons/im";
import { CiViewList } from "react-icons/ci";
import { PiCurrencyCircleDollar } from "react-icons/pi";
import { FaRegNewspaper } from "react-icons/fa";
import { MdPermDeviceInformation } from "react-icons/md";
import { MdFastfood } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div id="navbar" className="fixed bg-white">
      <div className="grid grid-cols-3 md:grid-cols-[22%_78%] h-20 relative">
        <div className="h-62 w-62 -mt-45 -ml-6 md:h-70 md:w-70 md:-mt-50 z-50">
          <img src={logo} alt="logo" className="mt-23 md:mt-25" />
        </div>

        <div className="hidden lg:flex items-center justify-between">
          <ul className="flex items-center justify-center gap-8 text-xl">
            <Link to="/stores">
              <li className="hover:border-b-2 pb-1">Stores</li>
            </Link>
            <Link to="/events">
              <li className="hover:border-b-2 pb-1">Events</li>
            </Link>
            <Link to="/offers">
              <li className="hover:border-b-2 pb-1">Offers</li>
            </Link>
            <Link to="/food"><li className="hover:border-b-2 pb-1">Food+Drink</li></Link>
            <Link to="/entertainment"><li className="hover:border-b-2 pb-1">Entertainment</li></Link>
            <Link to="/rent"><li className="hover:border-b-2 pb-1">Business Premises</li></Link>
          </ul>
          <div className="flex items-center justify-center gap-5 mr-5">
            <LuClock className="text-3xl" />
            <CiLocationOn className="text-3xl" />
            <FaCartShopping className="text-3xl" />
          </div>
        </div>

        <div className="flex items-center justify-center md:hidden gap-2 absolute left-[55%] top-6">
          <LuClock className="h-6 w-6" />
          <CiLocationOn className="h-6 w-6" />
          <ImHome className="h-6 w-6" />
        </div>
      </div>

      <img
        id="borderimage"
        src={border}
        alt="border"
        className="h-2 w-screen object-cover block bg-amber-300"
      />

      {/* Hamburger Icon */}
      {!menuOpen && (
        <div
          className="lg:hidden absolute right-5 top-5 z-40"
          onClick={toggleMenu}
        >
          <img
            src={openmenu}
            alt="openmenu"
            className="h-9 w-9 cursor-pointer"
          />
        </div>
      )}

      {/* Close Icon */}
      {menuOpen && (
        <div
          className="lg:hidden absolute right-5 top-5 z-50"
          onClick={closeMenu}
        >
          <img
            src={closemenu}
            alt="closemenu"
            className="h-9 w-9 cursor-pointer"
          />
        </div>
      )}

      {/* Mobile Menu */}
      {menuOpen && (
        <div id="mobilemenu" className="lg:hidden">
          <ul className="flex flex-col items-center justify-center w-full">
            <li
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 text-xl w-full p-5 border-b"
            >
              <ImHome className="h-8 w-8 text-green-300" /> Stores
            </li>
            <li
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 text-xl w-full p-5 border-b"
            >
              <CiViewList className="h-8 w-8 text-green-300" /> Events
            </li>
            <li
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 text-xl w-full p-5 border-b"
            >
              <PiCurrencyCircleDollar className="h-8 w-8 text-green-300" />{" "}
              Offers
            </li>
            <li
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 text-xl w-full p-5 border-b"
            >
              <MdFastfood className="h-8 w-8 text-green-300" /> Food+Drinks
            </li>
            <li
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 text-xl w-full p-5 border-b"
            >
              <FaRegNewspaper className="h-8 w-8 text-green-300" /> News
            </li>
            <li
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 text-xl w-full p-5 border-b"
            >
              <MdPermDeviceInformation className="h-8 w-8 text-green-300" />{" "}
              Center Information
            </li>
          </ul>
        </div>
      )}

      {!menuOpen && (
        <div className="lg:hidden grid grid-cols-2 md:grid-cols-[40%_30%_30%] shadow-lg">
          <div className="flex items-center justify-center gap-2 col-span-2 md:col-auto p-1 md:p-3 border-b md:border-0 border-amber-200">
            <LuClock className="h-6 w-6 md:h-7 md:w-7 text-green-300" />
            <h1 className="text-xl">Open 9:00am - 5pm today</h1>
          </div>
          <div className="flex items-center justify-center gap-2 p-1 md:p-3 border-r border-amber-200 md:border-x">
            <CiLocationOn className="h-6 w-6 md:h-7 md:w-7 text-green-300" />
            <h1 className="text-xl">Getting here</h1>
          </div>
          <div className="flex items-center justify-center gap-2 p-1 md:p-3">
            <ImHome className="h-6 w-6 md:h-7 md:w-7 text-green-300" />
            <h1 className="text-xl">Find a store</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
