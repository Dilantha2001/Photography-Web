import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "The Experience", path: "/experence" },
  
    { label: "Journal", path: "/journal" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-[5%]">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <Link
            to="/"
            className="font-noto-serif font-light text-2xl italic text-gray-800 
              hover:text-gray-600 transition-colors duration-300"
          >
            whitney rae
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-12 items-center">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="text-sm uppercase font-noto-serif font-light 
                    tracking-wider text-gray-700 hover:text-gray-900 
                    transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 
                      group-hover:w-full transition-all duration-300"
                  ></span>
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/inquary"
                className="bg-gray-700 text-white py-2 px-6 uppercase text-xs 
                  font-noto-serif font-light tracking-wider hover:bg-gray-800 
                  transition-colors duration-300"
              >
                Inquire
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <ul className="flex flex-col gap-4 pt-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="text-sm uppercase font-noto-serif font-light 
                      tracking-wider text-gray-700 hover:text-gray-900 
                      transition-colors duration-300 block py-2"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block bg-gray-700 text-white py-2 px-4 uppercase text-xs 
                    font-noto-serif font-light tracking-wider text-center 
                    hover:bg-gray-800 transition-colors duration-300"
                >
                  Inquire
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
