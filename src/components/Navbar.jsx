"use client";
import Link from "next/link";
import Image from "next/image";
import { SetStateAction, useState } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className="fixed body-font bg- z-10 w-full">
      <div className="font-montserratR flex justify-between flex-wrap p-5 flex-col md:flex-row items-center md:px-[3.5rem]">
        
        <Link
          href="/"
          className="md:flex hidden title-font items-center text-gray-900 md:my-0"
        >
          <Image
            src={"https://firebasestorage.googleapis.com/v0/b/picture-07.appspot.com/o/SSOSC.PLAIN.png?alt=media&token=ef245ff7-4154-4a22-8da4-f74eaae67d07"}
            alt={"alt"}
            width={120}
            height={20}
            className="w-full"
          />
          
        </Link>
        <nav className="flex flex-wrap items-center md:py-0 md:w-auto px-[1rem] md:px-0 w-full justify-between text-base md:justify-center">
          <Link
            href="/"
            onClick={() => handleLinkClick("home")}
            className={`  hover:underline focus:underline decoration-chartreuse-100 md:ml-10 lg:ml-20 underline-offset-8 py-1  rounded-full flex justify-center text-white ${
              activeLink === "home" ? "underline" : ""
            }`}
          >
            <span className =" text-[#ff7b01] ">Home</span>
          </Link>
          
          <Link
            href="/team"
            onClick={() => handleLinkClick("team")}
            className={`hover:underline focus:underline decoration-chartreuse-100 md:ml-10 lg:ml-20 underline-offset-8 py-1  rounded-full flex justify-center text-white ${
              activeLink === "team" ? "underline" : ""
            }`}
          >
            <span className =" text-[#ff7b01]">Team</span>
          </Link>
          <Link
            href="/events"
            onClick={() => handleLinkClick("events")}
            className={`hover:underline focus:underline decoration-chartreuse-100 md:ml-10 lg:ml-20 underline-offset-8 py-1  rounded-full flex justify-center text-white ${
              activeLink === "events" ? "underline" : ""
            }`}
          >
            <span className =" text-[#ff7b01]">Event</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;