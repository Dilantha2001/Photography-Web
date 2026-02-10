import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#ebeaea] h-auto md:h-[180px] w-full flex flex-col md:flex-row items-center justify-center font-poppins relative z-50">
      {/* Mobile Menu Button */}
      <button
        className="md:hidden absolute right-4 top-4 p-2 z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-8 h-8"
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

      {/* Desktop Navigation */}
      <ul
        className={`md:flex justify-between gap-4 lg:gap-12 hidden text-base md:text-xl font-normal cursor-pointer ${isOpen ? "hidden" : ""}`}
      >
        <li className="border-r border-black pr-4 md:pr-10 hover:underline">
          <Link to="/">Home</Link>
        </li>

        <li className="border-r border-black pr-4 md:pr-10 hover:underline">
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className="border-r border-black pr-4 md:pr-10 hover:underline">
          <Link to="/experence">Experence</Link>
        </li>
        <li className="border-r border-black pr-4 md:pr-10 hover:underline">
          <Link to="/Journal">Journal</Link>
        </li>
        <li className="hover:underline">
          <Link to="/inquary">Inquary</Link>
        </li>
      </ul>

      {/* Mobile Navigation Links */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 py-4 w-full absolute top-full left-0 bg-[#ebeaea] z-40">
          <li className="hover:underline">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className="hover:underline">
            <Link to="/portfolio" onClick={() => setIsOpen(false)}>
              Portfolio
            </Link>
          </li>
          <li className="hover:underline">
            <Link to="/experence" onClick={() => setIsOpen(false)}>
              Experence
            </Link>
          </li>
          <li className="hover:underline">
            <Link to="/Journal" onClick={() => setIsOpen(false)}>
              Journal
            </Link>
          </li>
          <li className="hover:underline">
            <Link to="/inquary" onClick={() => setIsOpen(false)}>
              Inquary
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navigation;
