import React, { useState } from "react";
import CustomLink from "../CustomLink/CustomLink";
import { MenuIcon } from "@heroicons/react/solid";
import logo from "../../../images/image.jpg";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <div className="sticky top-0 z-auto">
      <nav className="p-3 bg-green-800 text-white">
        <div onClick={() => setOpen(!open)} className="w-6 ml-auto md:hidden">
          <MenuIcon></MenuIcon>
        </div>
        <div className={"flex items-center justify-between"}>
          <div className="flex items-center">
            <img
              onClick={navigateToHome}
              className="h-12 md:ml-10 rounded-full"
              src={logo}
              alt=""
            />
            <span
              onClick={navigateToHome}
              className="ml-2 md:text-2xl pb-1 pr-3 inline-block rounded-br-3xl border-b-4"
            >
              Physics Teacher
            </span>
          </div>
          <div
            className={`flex md:static transition duration-500 ease-in-out absolute md:justify-center ${
              open ? "top-2" : "top-[-120px]"
            } ${open ? "right-10" : "top-[-120px]"}`}
          >
            <CustomLink
              className="mr-2 md:mr-7 text-white text-xs md:text-base"
              to="/home"
            >
              HOME
            </CustomLink>
            <CustomLink
              className="mr-2 md:mr-7 text-xs md:text-base"
              to="/pricing"
            >
              Pricing
            </CustomLink>
            <CustomLink
              className="mr-2 md:mr-7 text-xs md:text-base"
              to="/blogs"
            >
              Blogs
            </CustomLink>
            <CustomLink
              className="mr-2 md:mr-7 text-xs md:text-base"
              to="/about"
            >
              About Me
            </CustomLink>
            {user ? (
              ""
            ) : (
              <CustomLink
                className="mr-2 md:mr-7 text-xs md:text-base"
                to="/register"
              >
                Register
              </CustomLink>
            )}
            {user ? (
              <CustomLink
                className="mr-2  md:mr-7 text-xs md:text-base"
                to="/signOut"
              >
                Log Out
              </CustomLink>
            ) : (
              <CustomLink
                className="mr-2  md:mr-7 text-xs md:text-base"
                to="/login"
              >
                Log In
              </CustomLink>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
