import { useState, useEffect } from "react";
import BeCreativeGIF from "../Assets/Images/Be Creative.gif"; // adjust path as needed

function Navbar() {
  const [scrolling, setScrolling] = useState(false);

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
        className={`z-50 w-full py-7 transition-all duration-300 ${
          scrolling ? "bg-white shadow-lg backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <nav className="relative max-w-7xl w-full grid grid-cols-12 items-center px-4 md:px-6 lg:px-8 mx-auto">
          {/* Left - Logo + Name */}
          <div className="col-span-4 lg:col-span-3 flex items-center space-x-3">
            <img src={BeCreativeGIF} alt="Be Creative" className="w-12 h-12 object-contain" />
            <a
              className="text-xl font-semibold rounded-xl focus:outline-hidden focus:opacity-80"
              href="#"
            >
              Vasoya Parth
            </a>
          </div>

          {/* Center - Navigation Links */}
          <div
            id="hs-navbar-hcail"
            className="hidden lg:flex col-span-6 justify-center items-center gap-x-7"
          >
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

          {/* Right - Social Icons */}
          <div className="col-span-8 lg:col-span-3 flex justify-end items-center gap-4 mt-4 lg:mt-0">
            {/* Right - Social Media */}
          
            <div className="flex space-x-4 text-gray-500">
              <a href="https://www.linkedin.com/in/vasoya-parth-82a69224b" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">
                <i className="fab fa-linkedin text-lg"></i>
              </a>
              <a href="https://twitter.com/i_VasoyaPunit_i" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">
                <i className="fab fa-twitter text-lg"></i>
              </a>
              <a href="https://www.instagram.com/parth_vasoya_10/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a href="https://github.com/VasoyaParth" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">
                <i className="fab fa-github text-lg"></i>
              </a>
            </div>
            <p className="text-xs text-gray-400 mt-1">Built with ❤️ from India</p>
      
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
