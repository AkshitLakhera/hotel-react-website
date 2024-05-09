import {
  faEnvelopeOpen,
  faMapMarker,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   BsDribbble,
//   BsFacebook,
//   BsGithub,
//   BsInstagram,
//   BsTwitter,
// } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export const Footerbox = () => {
  const navigate = useNavigate("");
  return (
    <footer className="bg-slate-900 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex  flex-col md:flex-row items-center">
          <div className=" mr-10 mb-6 md:mb-0 md:w-1/5   ">
            <a href="" className="  md:flex md:items-center md:justify-center">
              <span className=" text-white hover:text-yellow-400 self-center text-2xl font-semibold whitespace-nowrap ">
                <h1
                  className="text-black font-extrabold  cursor-pointer"
                  onClick={() => navigate("/")}
                >
                  <span className="text-5xl font-bold text-yellow-500">R</span>
                  <span className="text-3xl text-white">ajveer Homestay</span>
                </h1>
              </span>
            </a>
            <p className="font-sans text-white hover:text-gray-300 mt-2 max-h-24 overflow-hidden md:max-h-none md:mt-4 sm-text-center">
              Rajveer homestay stands tall amidst the best hotels in Rishikesh.
              we are offering an amalgam of warm hospitality and comfort for the
              guests
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 md:w-4/5">
            <div className="md:text-center  ">
              <h2 className="font-heading mb-6 text-md font-semibold  text-white hover:text-yellow-400  uppercase">
                Quick Links
              </h2>
              <ul className=" text-white font-medium cursor-pointer">
                <li>
                  <a
                    onClick={() => navigate("/")}
                    className="hover:text-yellow-400 font-sans"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => navigate("/rooms")}
                    className="hover:text-yellow-400 font-sans"
                  >
                    Rooms
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => navigate("/contact")}
                    className="hover:text-yellow-400 font-heading"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:text-center">
              <h2 className="mb-6 text-md font-semibold  text-white hover:text-yellow-400 uppercase">
                Contact us
              </h2>
              <ul className=" text-white hover:text-gray-300 font-medium cursor-pointer">
                <li>
                  <FontAwesomeIcon
                    icon={faMapMarker}
                    className="mr-2 font-sans"
                  />
                  <span className="hover:text-yellow-400">
                    {" "}
                    123 Main St, Haridwar, India
                  </span>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faPhoneAlt}
                    className="mr-2 font-sans"
                  />
                  <span className="hover:text-yellow-400">
                    +91 123 456 7890
                  </span>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faEnvelopeOpen}
                    className="mr-2 font-sans"
                  />
                  <span className="hover:text-yellow-400">
                    info@example.com
                  </span>
                </li>
              </ul>
            </div>
            <div className="md:text-center">
              <h2 className="mb-6 text-md font-semibold  text-white hover:text-yellow-400 uppercase font-heading">
                Location
              </h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.830941409583!2d78.27266307420581!3d30.241897174824707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092335754dc1b3%3A0xee1cb4cdf31d6161!2sRajveer%20homestay%20and%20restaurant!5e0!3m2!1sen!2sin!4v1715170648112!5m2!1sen!2sin"
                width="100%"
                height=""
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex flex-col gap-4 items-center sm:flex-row sm:justify-center sm:items-center">
          <span className="text-sm  mr-10 text-white hover:text-gray-300 mb-4 sm:mb-0">
            © {new Date().getFullYear()}{" "}
            <a href="" className="hover:underline mr-6 font-heading">
              copyright™
            </a>
            All Rights Reserved.
          </span>
          {/* <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" className=" text-white hover:text-gray-300">
              <BsFacebook className="w-4 h-4" />
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className=" text-white hover:text-gray-300 ms-5">
              <BsInstagram className="w-4 h-4" />
              <span className="sr-only">Discord community</span>
            </a>
            <a href="#" className=" text-white hover:text-gray-300 ms-5">
              <BsTwitter className="w-4 h-4" />
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="#" className=" text-white hover:text-gray-300 ms-5">
              <BsGithub className="w-4 h-4" />
              <span className="sr-only">GitHub account</span>
            </a>
            <a href="#" className=" text-white hover:text-gray-300 ms-5">
              <BsDribbble className="w-4 h-4" />
              <span className="sr-only">Dribbble account</span>
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};
