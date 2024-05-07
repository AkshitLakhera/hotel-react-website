import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
  return (
    <header
      className={`bg-slate-50 p-4 shadow-md sticky top-0  z-50 transition-all ${
        scrolled ? "opacity-90" : ""
      }`}
    >
      <nav className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-black font-extrabold text-3xl">Hotel Name</h1>
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
            <a href="#contact" className="text-black hover:text-gray-200">
              Contact Us
            </a>
          </li>
        </ul>
        <div className="flex items-center">
          <a
            href="#"
            className=" text-gray-900 text-center font-semibold bg-yellow-500 px-8 py-3 rounded-full hover:bg-yellow-600 transition duration-300"
          >
            Book now
          </a>
        </div>
      </nav>
    </header>
  );
};
