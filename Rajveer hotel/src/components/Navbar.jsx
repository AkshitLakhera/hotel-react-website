export const Navbar = () => {
  return (
    <header className="bg-white p-6 shadow-md">
      <nav className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-black font-extrabold text-3xl">Hotel Name</h1>
        </div>
        <ul className="flex flex-wrap items-center justify-end space-x-4 md:space-x-8">
          <li>
            <a href="#about" className="text-black hover:text-gray-200  ">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-black hover:text-gray-200">
              About Us
            </a>
          </li>
          <li>
            <a href="#rooms" className="text-black hover:text-gray-200">
              Photo Gallery
            </a>
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
            className="text-white text-center font-semibold bg-yellow-500 px-8 py-3 rounded-full hover:bg-yellow-600 transition duration-300"
          >
            Book now
          </a>
        </div>
      </nav>
    </header>
  );
};
