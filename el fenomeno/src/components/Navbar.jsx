import { useState } from "react";
import Logo from "../assets/logo.png";
import { navLinks } from '../constants';
import { UilListUl, UilMultiply } from "@iconscout/react-unicons";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <div className="flex flex-row">
        <img src={Logo} alt="el feno" className="w-[32px] h-[32px]"/>
        <h2 className="text-32px font-bold ml-2 text-gradient">Techprocraft</h2>
      </div>

      <div className="flex flex-row gap-1">
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
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center">
          {toggleMenu ? (
            <UilMultiply
              className="hamburger text-white cursor-pointer"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <UilListUl
              className="hamburger text-white cursor-pointer"
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="flex p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] rounded-xl sidebar">
              <ul className="list-none flex flex-col justify-end items-center space-x-0 space-y-4 flex-1">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-normal cursor-pointer text-[16px] text-white`}
                  >
                    <a href={`#$(nav.id)`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
    </nav>
)
};

export default Navbar