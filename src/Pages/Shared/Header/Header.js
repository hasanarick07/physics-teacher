import React, { useState } from "react";
import CustomLink from "../CustomLink/CustomLink";
import { MenuIcon } from "@heroicons/react/solid";
import logo from "../../../images/image.jpg";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-7">
      <nav className="p-3 bg-green-800 text-white">
        <div onClick={() => setOpen(!open)} className="w-6 md:hidden">
          <MenuIcon></MenuIcon>
        </div>
        <div className={"flex items-center justify-between"}>
          <div className="flex items-center">
            <img className="h-12 md:ml-10 " src={logo} alt="" />
            <span className="ml-2 md:text-2xl">Physics Teacher</span>
          </div>
          <div
            className={`flex md:static transition duration-500 ease-in-out absolute md:justify-center ${
              open ? "top-2" : "top-[-120px]"
            } ${open ? "left-10" : "top-[-120px]"}`}
          >
            <CustomLink
              className="md:mr-7 text-white text-xs md:text-base"
              to="/home"
            >
              HOME
            </CustomLink>
            <CustomLink className="md:mr-7 text-xs md:text-base" to="/pricing">
              Pricing
            </CustomLink>
            <CustomLink className="md:mr-7 text-xs md:text-base" to="/blogs">
              Blogs
            </CustomLink>
            <CustomLink className="md:mr-7 text-xs md:text-base" to="/about">
              About Me
            </CustomLink>
            <CustomLink className=" md:mr-7 text-xs md:text-base" to="/login">
              Log In
            </CustomLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
