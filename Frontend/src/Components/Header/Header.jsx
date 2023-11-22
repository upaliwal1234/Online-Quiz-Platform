import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { tokenCheck } from '../../helperToken';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Header() {

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="border-black-200 px-4 lg:px-6 bg-red-500 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center text-white">
            Quizify
          </Link>
          <div className="flex items-center lg:order-2">
            <NavLink
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'bg-gray-50' : 'text-white'
                } text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none`
              }
              to="/Login"
            >
              Log in
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'bg-gray-50' : 'text-white'
                } text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none`
              }
              to="/SignUp"
            >
              Sign UP
            </NavLink>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-black' : 'text-white'
                    } border-b border-gray-100  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  hover:text-black lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/About"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-black' : 'text-white'
                    } border-b border-gray-100  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  hover:text-black lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/CreateQuiz"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-black' : 'text-white'
                    } border-b border-gray-100  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  hover:text-black lg:p-0`
                  }
                >
                  Create Quiz
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/JoinQuiz"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-black' : 'text-white'
                    } border-b border-gray-100  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  hover:text-black lg:p-0`
                  }
                >
                  Join Quiz
                </NavLink>
              </li>
<<<<<<< HEAD
=======

>>>>>>> 552dcedbf5129b8e850b26c0d5eeaf49326d5be3
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
