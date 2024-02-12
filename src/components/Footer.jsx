import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-slate-900 rounded-sm pt-10 space-y-10">
        <div className="flex space-x-5 justify-center items-center">
          <FaFacebookF className="size-10 cursor-pointer bg-gray-700 px-1 py-2 rounded-full text-red-200" />
          <FaInstagram className="size-10 cursor-pointer bg-gray-700 px-1 py-2 rounded-full text-red-200" />
          <FaXTwitter className="size-10 cursor-pointer bg-gray-700 px-1 py-2 rounded-full text-red-200" />
          <FaGooglePlusG className="size-10 cursor-pointer bg-gray-700 px-1 py-2 rounded-full text-red-200" />
          <FaYoutube className="size-10 cursor-pointer bg-gray-700 px-1 py-2 rounded-full text-red-200" />
        </div>
        <div className="flex justify-center items-center mt-5">
          <ul className="flex gap-16 text-xl font-quicksand font-semibold text-red-200">
            <li className="cursor-pointer">
              <Link to="about">About</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="contact-us">Contact Us</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="our-team">Our Team</Link>
            </li>
          </ul>
        </div>
        <p className="flex text-sm md:text-base justify-center items-center text-red-700 font-rubik mt-5 bg-black py-2 font-semibold">
          Copyright @2024, Designed by FUZAIL
        </p>
      </div>
      <Outlet />
    </>
  );
};

export default Footer;
