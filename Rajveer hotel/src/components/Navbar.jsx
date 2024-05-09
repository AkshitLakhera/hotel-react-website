import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../custom styles/Navbar.css";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`bg-slate-50 p-4 shadow-md sticky top-0  z-50 transition-all ${
        scrolled ? "opacity-90" : ""
      }`}
    >
      {/* Navbar for large screen */}
      <nav className="nav_container container md:mx-auto md:flex md:flex-wrap md:items-center md:justify-between hidden sm:block">
        <div className="flex items-center">
          <h1
            className="text-black font-extrabold text-3xl cursor-pointer"
            onClick={() => navigate("/")}
          >
            Hotel Name
          </h1>
        </div>
        <ul className="flex flex-wrap items-center justify-end space-x-4 md:space-x-8">
          <li>
            <Link to="/" className="text-black hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-black hover:text-gray-200">
              About us
            </Link>
          </li>
          <li>
            <Link to="/rooms" className="text-black hover:text-gray-200">
              Rooms
            </Link>
          </li>
          <li>
            <Link to="/photos" className="text-black hover:text-gray-200">
              Photo Gallery
            </Link>
          </li>
          <li>
            <Link to="/partyhall" className="text-black hover:text-gray-200">
              Party Hall
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-black hover:text-gray-200">
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

      {/* Navbar for small screen */}
      <div className="sm:hidden">
        <div className="flex justify-between items-center">
          <h1
            className="text-black font-extrabold text-3xl cursor-pointer"
            onClick={() => navigate("/")}
          >
            Hotel Name
          </h1>
          <button className="hamburger_menu" onClick={handleMenuToggle}>
            {/* Hamburger menu icon */}
          </button>
        </div>
        {menuOpen && (
          <ul className="nav_links">
            <li>
              <Link
                to="/"
                className="text-black hover:border hover:bg-yellow-400 p-3  rounded-lg"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-black hover:border hover:bg-yellow-400 p-3  rounded-lg"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to="/rooms"
                className="text-black hover:border hover:bg-yellow-400 p-3  rounded-lg"
              >
                Rooms
              </Link>
            </li>
            <li>
              <Link
                to="/photos"
                className="text-black hover:border hover:bg-yellow-400 p-3  rounded-lg"
              >
                Photo Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/partyhall"
                className="text-black hover:border hover:bg-yellow-400 p-3  rounded-lg"
              >
                Party Hall
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-black hover:border hover:bg-yellow-400 p-3  rounded-lg"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <a
                href="#"
                onClick={() => navigate("/contact")}
                className=" text-gray-900 text-center font-semibold bg-yellow-500 px-8 py-3 rounded-full hover:bg-yellow-600 transition duration-300"
              >
                Book now
              </a>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};
