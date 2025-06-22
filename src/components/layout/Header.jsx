import React from "react";
import { Link } from "react-router-dom";

const Header = ({ navLinks, toggleMobileMenu, mobileMenuOpen, isActive }) => {
  return (
    <header className="bg-primary shadow-sm sticky top-0 z-50">
      <nav className="py-3 sm:py-4">
        <div className="flex justify-between mx-6 md:mx-12 items-center">
          <Link
            to="/"
            className="text-xl sm:text-2xl font-bold font-serif text-white"
          >
            Nari Parcham
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6 lg:space-x-8">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`font-medium transition-colors ${
                    isActive(to)
                      ? "text-violet-200 underline decoration-violet-200 underline-offset-4"
                      : to === "/"
                      ? "text-white hover:underline decoration-white underline-offset-4"
                      : "text-white hover:underline decoration-white underline-offset-4"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div
            className="md:hidden focus:outline-none text-white bg-primary hover:scale-110 transition-transform"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-10 left-0 right-0 shadow-lg">
            <ul className="flex flex-col space-y-3 px-6 py-4 bg-primary mt-3">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className={`block font-semibold transition-colors ${
                      isActive(to)
                        ? "text-violet-300"
                        : "text-white hover:text-primary"
                    }`}
                    onClick={toggleMobileMenu}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
