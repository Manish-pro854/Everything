import React from "react";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import { LuClock } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import border from "../../assets/border.svg";

const Footer = () => {
  return (
    <div
      id="footer"
      className="bg-[#3a3a38] pt-20 text-[1.1rem] text-white w-full"
    >
      <h1 className="text-2xl px-8 md:text-4xl pb-15 text-start md:px-20">
        Centre Management
      </h1>

      <div className="flex flex-wrap items-center justify-start gap-10 md:gap-20 md:pl-20 pl-8">
        <div className="flex flex-col items-start justify-center gap-2">
          <h1 className="flex items-center justify-center gap-2">
            <MdOutlinePhoneInTalk className="text-2xl text-green-400" />
            <span>8930562856</span>
          </h1>
          <h1 className="flex items-center justify-center gap-2">
            <RiMessage2Fill className="text-2xl text-green-400" />
            <span>manishsoftengineer3@gmail.com</span>
          </h1>
          <h2 className="pt-5">Privacy Policy</h2>
        </div>

        <div className="flex flex-col items-start justify-center gap-4">
          <h1 className="flex items-center justify-center gap-2">
            <CiLocationOn className="text-2xl text-green-400" />
            <h2 className="flex flex-col items-start justify-center">
              Find Us <span>160–194 Main Street, Bacchus Marsh</span>
            </h2>
          </h1>
          <h1 className="flex items-center justify-center gap-2">
            <LuClock className="text-2xl text-green-400" />
            <span>Opening Hours</span>
          </h1>
          <h1 className="flex items-center justify-center gap-2">
            <FaFacebook className="text-2xl text-green-400" />
            <span>Follow us for latest events and offers</span>
          </h1>
          <h1 className="flex items-center justify-center gap-2">
            <FaInstagram className="text-2xl text-green-400" />
            <span>Follow us on Instagram</span>
          </h1>
        </div>

        <div className="flex flex-col items-start justify-center gap-2">
          <h1>Centre Opening Hours</h1>
          <h2 className="flex items-center justify-center">
            Open Now <FaAngleRight />
          </h2>
          <p className="-mt-1">10 AM - 9 PM</p>
        </div>
      </div>

      <div className="flex items-start justify-start px-8 md:pl-20 pt-15">
        <h1 className="text-md">
          © 2025 Copyright The Village Bacchus Marsh is proudly owned and
          managed by DeGroup Pty Ltd
        </h1>
      </div>
      <img
        id="borderimage"
        src={border}
        alt="border"
        className="h-2 w-screen object-cover block bg-amber-300 mt-20"
      />
    </div>
  );
};

export default Footer;
