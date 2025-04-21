import { useState, useEffect } from "react";
import BeCreativeGIF from "../Assets/Images/Be Creative.gif"; // adjust path as needed

function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
     <header
  className={`w-full py-7 transition-all duration-300 ${
    scrolling ? "bg-white shadow-lg backdrop-blur-xl" : "bg-transparent"
  }`}
>
  <nav className="max-w-7xl w-full grid grid-cols-12 items-center px-4 md:px-6 lg:px-8 mx-auto">
    {/* Left - Logo + Name */}
    <div className="col-span-6 lg:col-span-3 flex items-center space-x-3">
      <img
        src={BeCreativeGIF}
        alt="Be Creative"
        className="w-12 h-12 object-contain"
      />
      <a
        className="text-xl font-semibold rounded-xl focus:outline-none focus:opacity-80"
        href="#"
      >
        Vasoya Parth
      </a>
    </div>

    {/* Center Nav Links - Desktop Only */}
    <div className="hidden lg:flex col-span-6 justify-center items-center gap-x-7">
      {[
        ["Home", "/"],
        ["About", "/#about-me"],
        ["Skills", "/#skills"],
        ["Projects", "/projects"],
        ["Certificates", "/certificates"],
        ["Contact", "/#contact"],
      ].map(([label, href]) => (
        <a
          key={label}
          href={href}
          className="relative text-black font-medium transition-all duration-300 hover:text-blue-600 group"
        >
          {label}
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
        </a>
      ))}
    </div>

    {/* Right - Socials + Mobile Hamburger */}
    <div className="col-span-6 lg:col-span-3 flex justify-end items-center gap-4">
      {/* Hamburger Icon */}
      <button
        className="lg:hidden text-2xl text-gray-700"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <i className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"}`}></i>
      </button>

      {/* Desktop Socials */}
      <div className="hidden lg:flex flex-col items-end">
        <div className="flex space-x-4 text-gray-500">
          <a href="https://www.linkedin.com/in/vasoya-parth-82a69224b" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin text-lg hover:text-gray-800"></i>
          </a>
          <a href="https://twitter.com/i_VasoyaPunit_i" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter text-lg hover:text-gray-800"></i>
          </a>
          <a href="https://www.instagram.com/parth_vasoya_10/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram text-lg hover:text-gray-800"></i>
          </a>
          <a href="https://github.com/VasoyaParth" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github text-lg hover:text-gray-800"></i>
          </a>
        </div>
        <p className="text-xs text-gray-400 mt-1">Built with ❤️ from India</p>
      </div>
    </div>
  </nav>

  {/* Mobile Menu */}
  {mobileMenuOpen && (
    <div className="lg:hidden px-4 pb-4 pt-2">
      <div className="flex flex-col gap-3 text-black font-medium">
        {[
          ["Home", "/"],
          ["About", "/#about-me"],
          ["Skills", "/#skills"],
          ["Projects", "/projects"],
          ["Certificates", "/certificates"],
          ["Contact", "/#contact"],
        ].map(([label, href]) => (
          <a
            key={label}
            href={href}
            className="transition-colors duration-300 hover:text-blue-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            {label}
          </a>
        ))}

        <div className="flex justify-start space-x-4 text-gray-500 mt-3">
          <a href="https://www.linkedin.com/in/vasoya-parth-82a69224b" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin text-lg"></i>
          </a>
          <a href="https://twitter.com/i_VasoyaPunit_i" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter text-lg"></i>
          </a>
          <a href="https://www.instagram.com/parth_vasoya_10/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram text-lg"></i>
          </a>
          <a href="https://github.com/VasoyaParth" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github text-lg"></i>
          </a>
        </div>
      </div>
    </div>
  )}
</header>

    </>
  );
}

export default Navbar;
