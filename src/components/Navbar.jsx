import React from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../assets/logo.png";
import Cart from "../assets/cart.png";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartItemCount } = useCart();

  return (
    <>
      <nav className="flex justify-between px-4 py-2 md:px-16 md:py-3 bg-slate-900 text-gray-300 mt-2 rounded-lg mx-2">
        <div className="flex justify-center items-center space-x-2 text-xl md:space-x-5 font-bold font-quicksand md:text-2xl text-red-400">
          <Link to="/">
            <img src={Logo} alt="Shop-Now" className="w-14 cursor-pointer" />
          </Link>
          <ul>
            <li className="cursor-pointer">
              <Link to="/">Shop Now</Link>
            </li>
          </ul>
        </div>

        <div className="flex">
          <ul className="flex justify-center items-center gap-7 text-base md:text-xl font-quicksand font-bold">
            <li className="cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="cursor-pointer flex">
              <Link to="cart">
                Cart <span> ({cartItemCount})</span>
              </Link>
              <Link to="cart">
                <img src={Cart} alt="cart" className="size-7 ml-2 absolute" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
