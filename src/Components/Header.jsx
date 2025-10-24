import React, { useContext, useState } from "react";
import logoImage from "../assets/logo.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import photo from "../assets/logo.png";

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div className="navbar bg-base-200 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/plants">Plants</NavLink>
            </li>
            {user && (
              <>
                <li>
                  {" "}
                  <NavLink to="/profile">My Profile</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <div>
          {" "}
          <img className="h-50px] w-[100px]" src={logoImage} alt="" />
        </div>
      </div>
      <div className="navbar-center hidden  lg:flex">
        <ul className="menu menu-horizontal px-1  ">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/plants">Plants</NavLink>
          </li>
          {user && (
            <>
              <li>
                {" "}
                <NavLink to="/profile">My Profile</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {/* <NavLink to="/login">
          <button className="btn">Login</button>
        </NavLink> */}

        {user ? (
          <div className="relative">
            {user?.photoURL ? (
              <img
                src={user?.photoURL}
                className="w-[50px] h-[50px] rounded-full object-cover cursor-pointer border border-gray-300 "
                onClick={() => setDropdownOpen(!dropdownOpen)}
              />
            ) : (
              <img
                src={photo}
                alt="avatar"
                className="w-[50px] h-[50px] rounded-full object-cover cursor-pointer border border-gray-300 "
                onClick={() => setDropdownOpen(!dropdownOpen)}
              />
            )}

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white border shadow-lg rounded-md w-40">
                <p className="p-2 text-center text-gray-700">
                  {user.displayName || "mahfoz"}
                </p>
                <hr />
                <button
                  onClick={signOutUser}
                  className="block w-full text-left px-4 py-2 hover:bg-green-50"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/login"
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
