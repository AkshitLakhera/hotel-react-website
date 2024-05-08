import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showNavLinks, setShowNavLinks] = useState(false);
  const navigate = useNavigate("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };

  return (
    <header
      className={`bg-slate-50 p-4 shadow-md sticky top-0  z-50 transition-all ${
        scrolled ? "opacity-90" : ""
      }`}
    >
      <nav className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <h1
            className="text-black font-extrabold text-3xl cursor-pointer"
            onClick={() => navigate("/")}
          >
            Hotel Name
          </h1>
        </div>
        {/* Toggle button for small screens */}
        <div className="block md:hidden">
          <button
            onClick={toggleNavLinks}
            className="text-gray-900 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {showNavLinks ? (
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
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        {/* Navigation links */}
        <ul
          className={`${
            showNavLinks ? "block" : "hidden"
          } md:flex md:flex-wrap md:items-center md:justify-end space-x-4 md:space-x-8`}
        >
          <li>
            <Link
              to="/"
              onClick={toggleNavLinks}
              className="text-black hover:text-gray-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={toggleNavLinks}
              className="text-black hover:text-gray-200"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              to="/rooms"
              onClick={toggleNavLinks}
              className="text-black hover:text-gray-200"
            >
              Rooms
            </Link>
          </li>
          <li>
            <Link
              to="/photos"
              onClick={toggleNavLinks}
              className="text-black hover:text-gray-200"
            >
              Photo Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/partyhall"
              onClick={toggleNavLinks}
              className="text-black hover:text-gray-200"
            >
              Party Hall
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={toggleNavLinks}
              className="text-black hover:text-gray-200"
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="flex items-center">
          <a
            href="#"
            onClick={() => navigate("/contact#bookingForm")}
            className=" text-gray-900 text-center font-semibold bg-yellow-500 px-8 py-3 rounded-full hover:bg-yellow-600 transition duration-300"
          >
            Book now
          </a>
        </div>
      </nav>
    </header>
  );
};
