import { useState, useEffect } from "react";
import BeCreativeGIF from "../Assets/Images/Be Creative.gif"; // adjust path based on your file structure

function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true); // Change the state when the user scrolls more than 50px
      } else {
        setScrolling(false); // Reset when scrolling back to top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* ========== HEADER ========== */}
      <header
        className={`flex flex-wrap lg:justify-start lg:flex-nowrap z-50 w-full py-7 transition-all duration-300 ${
          scrolling ? "bg-white shadow-lg backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <nav className="relative max-w-7xl w-full flex flex-wrap lg:grid lg:grid-cols-12 basis-full items-center px-4 md:px-6 lg:px-8 mx-auto">
          <div className="lg:col-span-3 flex items-center">
          <img src={BeCreativeGIF} alt="Be Creative" className="w-12 h-12 object-contain" />


            <a
              className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80"
              href="#"
              aria-label="Preline"
            >
              Vasoya Parth
            </a>
            {/* End Logo */}
          </div>

          {/* Button Group */}
          <div className="flex items-center gap-x-1 lg:gap-x-2 ms-auto py-1 lg:ps-6 lg:order-3 lg:col-span-3">
            <div className="lg:hidden">
              <button
                type="button"
                className="hs-collapse-toggle relative z-50 size-10 flex items-center justify-center rounded-full border border-gray-300 bg-white text-black shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
                id="hs-navbar-hcail-collapse"
                aria-expanded="false"
                aria-controls="hs-navbar-hcail"
                aria-label="Toggle navigation"
                data-hs-collapse="#hs-navbar-hcail"
              >
                <span className="relative w-6 h-0.5 bg-current transition-all duration-300 before:absolute before:content-[''] before:w-6 before:h-0.5 before:bg-current before:-translate-y-2 before:transition-all before:duration-300 after:absolute after:content-[''] after:w-6 after:h-0.5 after:bg-current after:translate-y-2 after:transition-all after:duration-300 group-[aria-expanded='true']:rotate-45 group-[aria-expanded='true']:before:rotate-90 group-[aria-expanded='true']:before:translate-y-0 group-[aria-expanded='true']:after:hidden"></span>
              </button>
            </div>
          </div>
          {/* End Button Group */}

          {/* Collapse Menu */}
          <div
            id="hs-navbar-hcail"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow lg:block lg:w-auto lg:basis-auto lg:order-2 lg:col-span-6"
            aria-labelledby="hs-navbar-hcail-collapse"
          >
            <div className="lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-x-7 lg:mt-0 mt-5 flex flex-col gap-y-4">
              <a
                href="/"
                className="relative text-black font-medium transition-all duration-300 hover:text-blue-600 group"
              >
                Home
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>

              <a
                href="#about-me"
                className="relative text-black font-medium transition-all duration-300 hover:text-blue-600 group"
              >
                About
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>

              <a
                href="#skills"
                className="relative text-black font-medium transition-all duration-300 hover:text-blue-600 group"
              >
                Skills
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>

              <a
                href="#projects"
                className="relative text-black font-medium transition-all duration-300 hover:text-blue-600 group"
              >
                Projects
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>

              <a
                href="#contact"
                className="relative text-black font-medium transition-all duration-300 hover:text-blue-600 group"
              >
                Contact
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
