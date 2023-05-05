import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

export default function Navbar({user}) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const clickedOutside = (e) => {
      if (navbarOpen && ref.current && !ref.current.contains(e.target)) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener("mousedown", clickedOutside);

    return () => {
      document.removeEventListener("mousedown", clickedOutside);
    };
  }, [navbarOpen]);

  return (
    <div className="fixed w-full top-0 z-20" ref={ref}>
      <nav
        className={`relative flex flex-wrap items-center justify-between px-2 py-1 mb-3 bg-white`}
      >
        <div className="container px-6 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-2xl font-bold leading-relaxed mr-4 my-2 whitespace-nowrap text-[#636363] flex flex-row"
              to="/"
            >
              <img src={logo} className="h-6 mt-2" alt="logo" />
            </Link>
            <button
              className=" cursor-pointer leading-none mx-6 my-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {!navbarOpen && (
                <i className="fa-solid fa-bars text-[#2f2e41] text-2xl"></i>
              )}
              {navbarOpen && (
                <i className="fa-solid fa-x text-[#2f2e41] text-2xl"></i>
              )}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto justify-center lg:items-center">
              <li className="nav-item">
                <Link
                  className={
                    "mx-6 my-2 flex items-center text-sm font-semibold leading-snug text-[#636363] hover:opacity-75"
                  }
                  to="/about"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    "mx-6 my-2 flex items-center text-sm font-semibold leading-snug text-[#636363] hover:opacity-75"
                  }
                  to="/marketplace"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  For Shoppers
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    "mx-6 my-2 flex items-center text-sm font-semibold leading-snug text-[#636363] hover:opacity-75"
                  }
                  to="/sell"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  For Farmers
                </Link>
              </li>
              {user ? (
                <li className="nav-item">
                  <Link
                    className={
                      "mx-6 my-2 flex items-center text-sm font-semibold leading-snug text-[#636363] hover:opacity-75"
                    }
                    to="/profile"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                  >
                    {" "}
                    <i className="fa-regular fa-circle-user text-lg"></i>
                    &nbsp;Account{" "}
                  </Link>
                </li>
              ) : (
                <>
                <li className="nav-item">
                  <Link
                    className={
                      "mx-6 my-2 py-2 px-6 flex items-center text-sm font-semibold leading-snug hover:opacity-75 bg-[#3B8056] text-white rounded-md"
                    }
                    to="/signup"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                  >
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                <Link
                  className={
                "mx-6 my-2 py-2 px-6 flex items-center text-sm font-semibold leading-snug hover:opacity-75 border-2 border-[#3B8056] text-[#3B8056] rounded-md"
                  }
                  to="/login"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                "mx-6 my-2 py-2 px-6 flex items-center text-sm font-semibold leading-snug hover:opacity-75 bg-[#BD966D] text-white rounded-md"
                  }
                  to="/sell"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  Start Selling
                </Link>
              </li>
              </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
