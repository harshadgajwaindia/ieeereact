import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

function Nav() {

const handleSideNavClick = () => {
    const sideNav = document.getElementById("sideNav");
    const sideNavClosed = document.getElementById("sideNavClosed");
    const sideNavOpened = document.getElementById("sideNavOpened");
    sideNavClosed.classList.toggle("hidden");
    sideNavOpened.classList.toggle("hidden");
    sideNav.classList.toggle("h-[0px]");
}

  return (
    <nav className="flex items-center justify-between border shadow-md sticky top-0 md:top-8 bg-white h-16 z-10">
      {/* left */}
      <div className="flex items-center">
        <div className="h-16 flex items-center ml-3">
          <img className="h-4/5" src="https://ieeebombay.org/wp-content/uploads/2022/09/IEEE-BS-Logo.png" alt="ieeebombay" />
        </div>

        <div className="hidden md:block border w-[0.5px] h-14 border-gray-400 mx-5"></div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-4 font-semibold">
          <a href="#" className="nav-link hover:cursor-pointer">
            ABOUT
          </a>
          <a href="#" className="nav-link hover:cursor-pointer">
            MEMBERSHIP
          </a>
          <a href="#" className="nav-link hover:cursor-pointer">
            CONFERENCES
          </a>
          <a href="#" className="nav-link hover:cursor-pointer">
            SKEP
          </a>
          <a href="#" className="nav-link hover:cursor-pointer">
            Events
          </a>
          <a href="#" className="nav-link hover:cursor-pointer">
            Gallery
          </a>
          <a href="#" className="nav-link hover:cursor-pointer">
            BULLETIN
          </a>
        </div>
      </div>

      {/* right */}
      <div className="hidden md:block mx-6 bg-[#006699] text-white py-2 px-4 rounded hover:cursor-pointer hover:bg-[#125678] hover:scale-105">CONTACT US</div>

    <GiHamburgerMenu
        id="sideNavOpened"
        className="md:hidden text-2xl mr-4 hover:cursor-pointer"
        onClick={handleSideNavClick}
    />

    <RxCross2 id="sideNavClosed" className="hidden md:hidden text-2xl mr-4 hover:cursor-pointer" onClick={handleSideNavClick}/>

      <div className="absolute h-[0px] overflow-hidden bg-white top-16 mt-2 right-2 rounded shadow" id="sideNav">
        <div className="flex flex-col items-center gap-4 p-4">
          <a href="#" className="nav-link">
            ABOUT
          </a>
          <a href="#" className="nav-link">
            MEMBERSHIP
          </a>
          <a href="#" className="nav-link">
            CONFERENCES
          </a>
          <a href="#" className="nav-link">
            SKEP
          </a>
          <a href="#" className="nav-link">
            Events
          </a>
          <a href="#" className="nav-link">
            Gallery
          </a>
          <a href="#" className="nav-link">
            BULLETIN
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
