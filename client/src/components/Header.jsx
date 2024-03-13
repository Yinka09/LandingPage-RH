import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  return (
    <header className=" z-10 sticky top-0 self-start py-4   bg-yellow-950 text-white">
      <div className="container flex justify-between  mx-auto">
        <Link to="/" rel="noopener noreferrer" className="flex items-center">
          <button className="self-center px-4 sm:px-0 py-3 font-semibold  border-b-2 border-yellow-950 hover:border-white">
            Realty<span className="text-black">Hub</span>
          </button>
        </Link>

        <section className="MOBILE-MENU flex lg:hidden ">
          <div
            className="HAMBURGER-ICON space-y-2 px-6 py-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8  bg-orange-50"></span>
            <span className="block h-0.5 w-8  bg-orange-50"></span>
            <span className="block h-0.5 w-8  bg-orange-50"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav " : "hideMenuNav "}>
            {" "}
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8 "
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-white "
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] ">
              <li className="border-b border-white my-8 uppercase">
                <Link to="/">Intro</Link>
              </li>
              <li className="border-b border-white my-8 uppercase">
                <Link to="/feature">Features</Link>
              </li>
              <li className="border-b border-white my-8 uppercase">
                <Link to="/about">About</Link>
              </li>
              <li className="border-b border-white my-8 uppercase">
                <a
                  href="https://realtyhub-2xz1.onrender.com/sign-up"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden items-stretch space-x-3 lg:flex">
          <li className="flex">
            <Link
              to="/"
              rel="noopener noreferrer"
              className="flex items-center px-4  border-b-2 border-white dark:text-violet-400 dark:border-violet-400 hover:border-yellow-950"
            >
              Intro
            </Link>
          </li>
          <li className="flex">
            <Link
              to="/feature"
              rel="noopener noreferrer"
              className="flex items-center px-4 border-b-2 border-white hover:border-yellow-950"
            >
              Features
            </Link>
          </li>
          <li className="flex">
            <Link
              to="/about"
              rel="noopener noreferrer"
              className="flex items-center px-4  border-b-2 border-white hover:border-yellow-950"
            >
              About
            </Link>
          </li>
        </ul>

        <div className="items-center flex-shrink-0 hidden lg:flex">
          <a
            href="https://realtyhub-2xz1.onrender.com/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="self-center px-0 py-3 font-semibold dark:bg-violet-400 dark:text-gray- border-b-2 border-yellow-950 hover:border-white">
              Sign up
            </button>
          </a>
        </div>
      </div>
    </header>
  );
}
