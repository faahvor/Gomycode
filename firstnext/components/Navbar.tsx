"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function NavBar() {
  const [navbar, setNavbar] = useState<boolean>(false);

  return (
    <nav className="w-full bg-white text-black shadow fixed z-30 top-0 font-programme ">
      <div className="justify-between px-4 mx-auto md:max-w-7xl md:items-center lg:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 lg:py-2 ">
            <Link href={"/"}>
              <Image
                src={`https://res.cloudinary.com/dhvwthnzq/image/upload/v1720648526/Transparent%20Governance%20Foundation/tgflogo1_uokimu.png`}
                alt="logo ice"
                className="h-14 w-14"
                height={300}
                width={300}
              />
              {/* <h1 className="text-3xl font-semibold font-playfair">TGF</h1> */}
            </Link>

            <div className="lg:hidden">
              <button
                className="p-2 text-black rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mb-4 mt-8 lg:block lg:pb-0 md:mt-3 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul
              className="items-center justify-center md:text-sm space-y-8 md:ml-[32rem] md:flex
                            lg:flex-row md:flex-col lg:space-x-6 lg:mr-10 lg:space-y-0 md:space-x-10 md:space-y-8"
            >
              <li className="text-green-800  md:min-w-fit hover:text-[#ffffff] hover:underline underline-offset-4  ">
                <Link href="/" onClick={() => setNavbar(!navbar)}>
                 Home
                </Link>
              </li>
              <li className="text-green-800 md:min-w-fit hover:text-[#ffffff] hover:underline underline-offset-4 ">
                <Link href="/about">
                  <button onClick={() => setNavbar(!navbar)}>About</button>
                </Link>
              </li>
             
              <li className="text-green-800 md:min-w-fit hover:text-[#ffffff] hover:underline underline-offset-4 ">
                <Link href="/contact">
                  <button onClick={() => setNavbar(!navbar)}>Contact Us</button>
                </Link>
              </li>
            </ul>
            {/* <div className="mt-5 space-y-2 space-x-2 flex items-center lg:hidden">
                            <button className="w-1/2 px-4 py-2 text-center text-[#068353]
                            bg-white rounded-3xl  border-[#068353] border-[0.3px] mx-10 pl-3 p-1 items-center shadow hover:bg-[#068353] hover:text-black ">
                                Sign in
                            </button>

                            <button className="w-1/2 px-4 py-2 text-center text-black 
                            bg-[#068353] mx-10 pl-3 p-1 items-center  rounded-3xl shadow hover:bg-green-600" >
                                Sign up
                            </button>

                        </div> */}
          </div>
        </div>
        {/* <div className="hidden space-x-2  lg:flex md:hidden ">
                    <button className="inline-block w-[6rem] py-2 text-center text-[#068353] border-[#068353] border-[0.3px]
                     bg-white rounded-3xl md:text-sm shadow hover:bg-[#068353] hover:text-black">
                        Sign in
                    </button>

                    <button className="inline-block py-2 text-sm  w-[6rem] text-center text-black bg-[#068353] rounded-3xl shadow hover:bg-green-600" >
                        Sign up
                    </button>
                </div> */}
      </div>
    </nav>
  );
}