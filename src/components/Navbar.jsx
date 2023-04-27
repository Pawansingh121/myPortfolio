import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <nav className="shadow-md fixed z-[2] flex justify-between items-center h-[80px] w-full bg-white px-12 ">
      <h3 className="text-[#2d2e32] font-sans text-xl font-bold">Pawan.dev</h3>
      <ul className="font-sans font-semibold text-lg text-[#2d2e32] hidden md:flex gap-8 ">
        <li className="hover:text-blue-500 cursor-pointer">
          <Link to="home" spy={true} smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-blue-500 cursor-pointer">
          <Link to="about" spy={true} smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-blue-500 cursor-pointer">
          <Link to="projects" spy={true} smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="hover:text-blue-500 cursor-pointer">
          <Link to="contact" spy={true} smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div
        onClick={handleClick}
        className="md:hidden z-10  text-[26px] hover:text-blue-500"
      >
        {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "  font-sans font-semibold text-lg text-[#2d2e32] absolute  top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center gap-8 animate-mobNav  "
        }
      >
        <li className="hover:text-blue-500 cursor-pointer">
          <Link
            onClick={handleClick}
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="hover:text-blue-500 cursor-pointer">
          <Link
            onClick={handleClick}
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="hover:text-blue-500 cursor-pointer">
          <Link
            onClick={handleClick}
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="hover:text-blue-500 cursor-pointer">
          <Link
            onClick={handleClick}
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
