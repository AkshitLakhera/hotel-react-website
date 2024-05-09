import { Navbar } from "../components/Navbar";
import image18 from "../assets/image18.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HotelMap } from "../components/HotelMap";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import BookingForm from "../components/BookingForm";
import { Footerbox } from "../components/Footer";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export const Contact = () => {
  return (
    <div>
      <div className="relative top-0 left-0">
        <FloatingWhatsApp
          phoneNumber={"9758584612"}
          accountName={"Rajveer HomeStay"}
          avatar={image18}
        />
      </div>
      <Navbar />
      <div className="relative">
        <div
          className="w-full h-96 bg-cover"
          style={{
            backgroundImage: `url(${image18})`,
            backgroundPosition: "50% 30%",
          }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Contact us</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-wrap space-x-4 mt-16 gap-10 mb-16">
        <div className="flex items-center text-yellow-500 text-lg md:text-2xl lg:text-3xl">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
          <span>123 Main St, Haridwar, India</span>
        </div>
        <div className="flex items-center text-yellow-500 text-lg md:text-2xl lg:text-3xl">
          <FontAwesomeIcon icon={faPhone} className="mr-2" />
          <span>+91 123 456 7890</span>
        </div>
        <div className="flex items-center text-yellow-500 text-lg md:text-2xl lg:text-3xl">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          <span>info@example.com</span>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8  justify-center max-w-md">
        <h2 className="text-3xl font-bold mb-4 flex justify-center">
          Hotel Stay Booking Form
        </h2>
        <BookingForm />
      </div>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 flex justify-center">
          Location
        </h2>
        <HotelMap />
      </div>
      <Footerbox />
    </div>
  );
};
