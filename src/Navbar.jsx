import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
  
import Login from './Component/Login';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="pl-4 pr-4">
      <nav className=" p-2 sticky w-full z-20 top-0 bg-white-100 bg-opacity-80 text-bold bg-white">
        <div className="max-w-screen-x1 flex  flex-wrap items-center justify-between mx-auto p-2 bg-white">
          
          <img
             
            src="https://marketing-assets.calendly.com/media/logo.svg"
            height={150}
            width={200}
            alt="image"
          />
          

          <div className="flex md:order-2 justify-between">
           
            <button
              onClick={toggle}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-md
            text-black-500 rounded-lg md:hidden focus:ring-2 focus:ring-black-200"
            >
              <AiOutlineMenu className="text-black-700 text-2xl" />
            </button>
          </div>

          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <ul
              className={`flex flex-col p-4 md:p-0 mt-4 text-x1 border cursor-pointer border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  bg-white
             ${isOpen ? "bg-white-100 bg-opacity-70" : ""}`}
            >
              <Link spy={true} to="Individuals" className="bg-white">
                <li>
                  <div className="block  py-3 pl-2 pr-5 pt-4 rounded md:p-0 hover:text-blue-600 text-black-700">
                    Individuals
                  </div>
                </li>
              </Link>
              <hr />
              <Link spy={true} to="Teams" className="bg-white">
                <li>
                  <div className="block py-3 pl-2 pr-5 pt-4 rounded md:p-0 hover:text-blue-600 text-black-700">
                    Teams
                  </div>
                </li>
              </Link>
              <hr />
              <Link spy={true} to="Enterprises" className="bg-white">
                <li>
                  <div className="block py-3 pl-2 pr-5 pt-4 rounded md:p-0 hover:text-blue-600 text-black-700">
                    Enterprises
                  </div>
                </li>
              </Link>
              <hr />
              <Link spy={true} to="Product"  className="bg-white">
                <li className="arrow bg-white-500" >
                  <div>
                  <a type='base' id='header-menu-item-1' className=" flex flex-wrap block py-3 pl-2 pr-5 pt-4rounded md:p-0 hover:text-blue-600 text-black-700 bg-white ">
                    Product 
                    <button aria-expanded='false' aria-label="Show" aria-labelledby='header-menu-item-1' aria-control='Product' className="eWJpdD">
                     <svg xmlns='http://www.w3.org/2000/svg' width={15} height={8}
                      fill="none" stroke="currentColor" viewBox="0 0 15 8" className="flex flex-row">
                    <path stroke="inherit" stroke-linecap='round' stroke-linejoin='round' stroke-width='1.25' d="m1.5 1 6 6 6-6"></path>
                      </svg>
                    </button>
                 
                    
 
                    <span className=" b-27 w-0 h-4 transition:0.3s ease-on-out 0s bg-blue-500"></span>
                    <div>
                      <section className="paydrop">
                        <h6>hjhj</h6>
                        <hr />
                        <h6>jhjkjjk</h6>
                      </section>
                    </div>
                  </a>
                   </div>
                </li>
              </Link>
              <hr />
              <Link spy={true} to="Pricing" className="bg-white">
                <li>
                  <div className="block py-3 pl-2 pr-5 pt-4 rounded md:p-0 hover:text-blue-600 text-black-700">
                    Pricing
                  </div>
                </li>
              </Link>
              <hr />
              <Link spy={true} to="Resources" className="bg-white">
                <li>
                  <a className=" flex flex-wrap block py-3 pl-2 pr-5 pt-4 rounded md:p-0 hover:text-blue-600 text-black-800 bg-white">
                    <h2 className="flex">Resources</h2>
                    <button aria-expanded='false' aria-label="Show" aria-labelledby='header-menu-item-1' aria-control='Product' className="eWJpdD">
                     <svg xmlns='http://www.w3.org/2000/svg' width={15} height={8}
                      fill="none" stroke="currentColor" viewBox="0 0 15 8" className="flex flex-row">
                    <path stroke="inherit" stroke-linecap='round' stroke-linejoin='round' stroke-width='1.25' d="m1.5 1 6 6 6-6"></path>
                      </svg>
                    </button>
 
                    <span className="b-27 w-0 h-4 transition:0.3s ease-on-out 0s bg-blue-500"></span>
              
                  </a>
                </li>

              </Link>
            </ul>

            <ul className="relative flex flex-row text-bold pr-0 bg-white pl-16">
              <li className="block py-2 pl-6 pr-2 ">
                
                <NavLink to="/login" className="bg-white">
                 
                Login
                </NavLink>
              </li>
              <li className="block py-2 pl-3 pr-4  ">
                <button className="bg-blue-500  flex  flex-wrap  p-2  rounded-full text-white">
                 
                  <NavLink className="primary-button " to="/signup">
                    <span>Get started</span>
                  </NavLink>
                </button>
              </li>
            </ul>
          </div>
        </div>
    
      </nav>
     
    </div>
  );
};

export default Navbar;
