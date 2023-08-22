import { useState } from "react";
import Logo from "../assets/logo.png";
import { navLinks } from '../constants';

const Navbar = () => (
  <nav className="w-full flex py-6 justify-between items-center navbar">
    <img src={Logo} alt="el feno" className="w-[32px] h-[32px]"/>
    <h2 className="text-lg">Techprocraft</h2>

    <ul className="list-none sm:flex hidden justify-end items-center flex-1">
      {navLinks.map((nav, index) => (
        <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length} text-white mr-10`}
        >
        <a href={`#${nav.id}`}>
          {nav.title}
        </a>
        </li>
      ))}      
    </ul>
  </nav>
);

export default Navbar