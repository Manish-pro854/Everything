import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { IoChatbox } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [chatOpen, setChatOpen] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  let dispatch = useDispatch();
  const cartItemCount = useSelector((state) => state.cart.items.length);

  const [showBottomBar, setShowBottomBar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowBottomBar(window.scrollY < 100); // hide if scroll > 100px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="navbar" className="fixed bg-white z-50 w-full">
      <div className="grid grid-cols-2 lg:grid-cols-[22%_78%] h-16 md:h-20 relative">
        <Link to="/" className="outline-0">
          <img
            src={logo}
            alt="logo"
            className="h-15 pl-2 pt-3 md:h-20 md:pl-5 md:py-3 lg:pt-4 lg:h-19 lg:pl-2"
          />
        </Link>

        <div className="hidden lg:flex items-center justify-between">
          <ul className="flex items-center justify-center gap-8 text-xl">
            <li>
              <NavLink
                to="/stores"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600 border-b-2 pb-1"
                    : "hover:border-b-2 pb-1"
                }
              >
                Stores
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600 border-b-2 pb-1"
                    : "hover:border-b-2 pb-1"
                }
              >
                Events
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/offers"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600 border-b-2 pb-1"
                    : "hover:border-b-2 pb-1"
                }
              >
                Offers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/food"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600 border-b-2 pb-1"
                    : "hover:border-b-2 pb-1"
                }
              >
                Food+Drink
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/entertainment"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600 border-b-2 pb-1"
                    : "hover:border-b-2 pb-1"
                }
              >
                Entertainment
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/rent"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600 border-b-2 pb-1"
                    : "hover:border-b-2 pb-1"
                }
              >
                Business Premises
              </NavLink>
            </li>
          </ul>
          <div className="flex items-center justify-center gap-5 mr-5">
            <Link to="/clock">
              <LuClock className="text-3xl hover:text-[#47a477]" />
            </Link>
            <Link to="/location">
              <CiLocationOn className="text-3xl hover:text-[#47a477]" />
            </Link>
            <Link to="/cart">
              <div className="relative hover:text-[#47a477]">
                <FaCartShopping className="text-3xl" />
                <span className="absolute -right-2 -top-4 font-[600]">
                  {cartItemCount}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <img
        id="borderimage"
        src={border}
        alt="border"
        className="absolute top-16 md:top-20 left-0 h-2 w-full object-cover bg-amber-300 z-40"
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
            <li className="w-full">
              <NavLink
                to="/stores"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `flex items-center justify-center gap-2 text-xl w-full p-5 border-b ${
                    isActive ? "text-green-600" : "hover:text-green-500"
                  }`
                }
              >
                <ImHome className="h-8 w-8 text-green-300" /> Stores
              </NavLink>
            </li>
            <li className="w-full">
              <NavLink
                to="/events"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `flex items-center justify-center gap-2 text-xl w-full p-5 border-b ${
                    isActive ? "text-green-600" : "hover:text-green-500"
                  }`
                }
              >
                <CiViewList className="h-8 w-8 text-green-300" /> Events
              </NavLink>
            </li>
            <li className="w-full">
              <NavLink
                to="/offers"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `flex items-center justify-center gap-2 text-xl w-full p-5 border-b ${
                    isActive ? "text-green-600" : "hover:text-green-500"
                  }`
                }
              >
                <PiCurrencyCircleDollar className="h-8 w-8 text-green-300" />{" "}
                Offers
              </NavLink>
            </li>
            <li className="w-full">
              <NavLink
                to="/food"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `flex items-center justify-center gap-2 text-xl w-full p-5 border-b ${
                    isActive ? "text-green-600" : "hover:text-green-500"
                  }`
                }
              >
                <MdFastfood className="h-8 w-8 text-green-300" /> Food+Drinks
              </NavLink>
            </li>
            <li className="w-full">
              <NavLink
                to="/entertainment"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `flex items-center justify-center gap-2 text-xl w-full p-5 border-b ${
                    isActive ? "text-green-600" : "hover:text-green-500"
                  }`
                }
              >
                <FaRegNewspaper className="h-8 w-8 text-green-300" />{" "}
                Entertainment
              </NavLink>
            </li>
            <li className="w-full">
              <NavLink
                to="/rent"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `flex items-center justify-center gap-2 text-xl w-full p-5 border-b ${
                    isActive ? "text-green-600" : "hover:text-green-500"
                  }`
                }
              >
                <MdPermDeviceInformation className="h-8 w-8 text-green-300" />{" "}
                Business Premises
              </NavLink>
            </li>
          </ul>
        </div>
      )}
      {!menuOpen && showBottomBar && (
        <div className="lg:hidden grid grid-cols-2 md:grid-cols-3 shadow-lg w-full z-30 bg-white fixed top-[64px] md:top-[80px] pt-2">
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

          <Link
            to="/cart"
            className="flex items-center justify-center gap-2 p-2 md:p-3 border-t border-amber-200 md:col-span-1"
          >
            <FaCartShopping className="h-6 w-6 md:h-7 md:w-7 text-green-300" />
            <h1 className="text-base md:text-xl">Cart</h1>
          </Link>
        </div>
      )}

      {/* Floating Chat Icon */}
      <div className="fixed bottom-1 right-1 md:bottom-3 md:right-3 z-[99]">
        <div
          onClick={() => setChatOpen(!chatOpen)}
          className="cursor-pointer group relative"
        >
          <IoChatbox className="h-16 w-16 text-[#87643c] group-hover:text-black transition-all duration-200" />
          <p className="absolute text-white bottom-6 font-[500] left-3">CHAT</p>
        </div>

        {/* Chat Form Box */}
        {chatOpen && (
          <div className="w-80 p-4 bg-white rounded-2xl shadow-2xl absolute bottom-20 right-0 border border-gray-200 z-[999]">
            <h3 className="text-xl font-bold mb-4 text-[#87643c]">
              Chat With Us
            </h3>
            <form className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Your Name"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#87643c]"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#87643c]"
                required
              />
              <textarea
                placeholder="Your Message"
                rows="3"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#87643c]"
                required
              />
              <button
                type="submit"
                className="bg-[#87643c] text-white py-2 rounded-lg hover:bg-black transition-all"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
