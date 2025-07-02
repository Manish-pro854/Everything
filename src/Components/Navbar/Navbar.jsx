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
    <div id="navbar" className="fixed bg-white z-50 w-full">
       <div className="grid grid-cols-2 lg:grid-cols-[22%_78%] h-16 md:h-20 relative">
          <Link to="/" className="outline-0"><img src={logo} alt="logo" className="h-15 pl-2 pt-3 md:h-20 md:pl-5 md:py-3 lg:pt-4 lg:h-19 lg:pl-2" /></Link>

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
            <Link to="/food">
              <li className="hover:border-b-2 pb-1">Food+Drink</li>
            </Link>
            <Link to="/entertainment">
              <li className="hover:border-b-2 pb-1">Entertainment</li>
            </Link>
            <Link to="/rent">
              <li className="hover:border-b-2 pb-1">Business Premises</li>
            </Link>
          </ul>
          <div className="flex items-center justify-center gap-5 mr-5">
            <Link to="/clock">
              <LuClock className="text-3xl" />
            </Link>
            <Link to="/location">
              <CiLocationOn className="text-3xl" />
            </Link>
            <Link to="/cart"><FaCartShopping className="text-3xl" /></Link>
          </div>
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
        <div id="mobilemenu" className="lg:hidden w-full">
          <ul className="flex flex-col items-center justify-center w-full">
            <Link to="/stores" className="w-full">
              <li
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 text-xl w-full p-5 border-b"
              >
                <ImHome className="h-8 w-8 text-green-300" /> Stores
              </li>
            </Link>
            <Link to="/events" className="w-full">
              <li
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 text-xl w-full p-5 border-b"
              >
                <CiViewList className="h-8 w-8 text-green-300" /> Events
              </li>
            </Link>
            <Link to="/offers" className="w-full">
              <li
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 text-xl w-full p-5 border-b"
              >
                <PiCurrencyCircleDollar className="h-8 w-8 text-green-300" />{" "}
                Offers
              </li>
            </Link>
            <Link to="/food" className="w-full">
              <li
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 text-xl w-full p-5 border-b"
              >
                <MdFastfood className="h-8 w-8 text-green-300" /> Food+Drinks
              </li>
            </Link>
            <Link to="/entertainment" className="w-full">
              <li
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 text-xl w-full p-5 border-b"
              >
                <FaRegNewspaper className="h-8 w-8 text-green-300" />{" "}
                Entertainment
              </li>
            </Link>
            <Link to="/rent" className="w-full">
              <li
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 text-xl w-full p-5 border-b"
              >
                <MdPermDeviceInformation className="h-8 w-8 text-green-300" />{" "}
                Business Premises
              </li>
            </Link>
          </ul>
        </div>
      )}
      {!menuOpen && (
        <div className="lg:hidden grid grid-cols-2 md:grid-cols-3 shadow-lg w-full z-30 bg-white">
          <Link
            to="/clock"
            className="flex items-center justify-center gap-2 p-2 md:p-3 border-b md:border-0 border-amber-200 col-span-2 md:col-span-1 w-full"
          >
            <LuClock className="h-6 w-6 md:h-7 md:w-7 text-green-300" />
            <h1 className="text-base md:text-xl">Open 9:00am - 5pm today</h1>
          </Link>

          <Link
            to="/location"
            className="flex items-center justify-center gap-2 p-2 md:p-3 border-t md:border-x border-amber-200 md:col-span-1 w-full border-r" 
          >
            <CiLocationOn className="h-6 w-6 md:h-7 md:w-7 text-green-300" />
            <h1 className="text-base md:text-xl">Getting here</h1>
          </Link>

          <Link to="/cart" className="flex items-center justify-center gap-2 p-2 md:p-3 border-t border-amber-200 md:col-span-1">
            <FaCartShopping className="h-6 w-6 md:h-7 md:w-7 text-green-300" />
            <h1 className="text-base md:text-xl">Cart</h1>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
