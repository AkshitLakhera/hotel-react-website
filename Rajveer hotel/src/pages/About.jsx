import { Navbar } from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image18 from "../assets/image18.jpg";
import {
  faRoad,
  faTrain,
  faPlane,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";
import image8 from "../assets/image8.jpg";
import image9 from "../assets/image9.jpg";
import { Footerbox } from "../components/Footer";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export const About = () => {
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
            backgroundImage: `url(${image8})`,
            backgroundPosition: "50% 30%",
          }}
        >
          {/* Empty div for overlay if needed */}
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">About</h1>
          </div>
        </div>
      </div>
      <div className="about_section container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-slate-600">Our Story</h2>
          <p className="text-lg leading-relaxed mb-6 font-sans">
            Hotel Rajveer stands tall amidst the best hotels in Rishikesh.
            Offering an amalgam of warm hospitality and comfort for the guests,
            Hotel Rajveer is enveloped with an aura of tranquility that
            guarantees a blissful stay. Situated near prominent tourist
            attractions, it provides round-the-clock travel assistance and
            houses a fully-fledged travel desk.
          </p>
          <img src={image9} alt="Placeholder Image" className="w-full mb-6" />
          <p className="text-lg leading-relaxed mb-6 font-sans">
            Plan out your city tours at our travel desk and explore the scenic
            beauty of Rishikesh and its surroundings.
          </p>
          <h1 className="text-3xl font-bold mb-6 text-slate-600 font-heading">
            How to Reach Us ?
          </h1>
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 flex items-center text-slate-600">
              <FontAwesomeIcon
                icon={faRoad}
                className="text-yellow-500 mr-2 font-heading"
              />
              By Road
            </h2>
            <p className="text-lg leading-relaxed mb-6 font-sans">
              Rishikesh enjoys excellent connectivity via road networks,
              particularly NH 58, serving as the gateway to the Shivalik range
              in Uttarakhand. Buses and taxis to Haridwar are readily available
              from major cities in Northern India, offering a convenient and
              comfortable journey.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 flex items-center text-slate-600">
              <FontAwesomeIcon
                icon={faTrain}
                className="text-yellow-500 mr-2 font-heading"
              />
              By Train
            </h2>
            <p className="text-lg leading-relaxed mb-6 font-sans">
              Haridwar is well-connected to all major cities across India,
              ensuring a hassle-free journey within a few hours.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 flex items-center text-slate-600">
              <FontAwesomeIcon
                icon={faPlane}
                className="text-yellow-500 mr-2 font-heading"
              />
              By Air
            </h2>
            <p className="text-lg leading-relaxed mb-6 font-sans">
              The nearest airport, Jolly Grant (DED) in Dehradun, is located
              approximately 45 kilometers away. For guests arriving by air, we
              offer convenient car transfer services from the airport to Hotel
              Rajveer.
            </p>
          </div>
        </div>
      </div>
      <div className="distance_section container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-slate-600 font-heading">
            Distance
          </h1>
          <ul className="text-lg leading-relaxed">
            <li>
              <FontAwesomeIcon
                icon={faLongArrowAltRight}
                className="text-yellow-500 mr-2 font-sans"
              />
              Delhi – 214Kms
            </li>
            <li>
              <FontAwesomeIcon
                icon={faLongArrowAltRight}
                className="text-yellow-500 mr-2 font-sans"
              />
              Agra – 386 Kms
            </li>
            <li>
              <FontAwesomeIcon
                icon={faLongArrowAltRight}
                className="text-yellow-500 mr-2 font-sans"
              />
              Ambala – 168 Kms
            </li>
            <li>
              <FontAwesomeIcon
                icon={faLongArrowAltRight}
                className="text-yellow-500 mr-2 font-sans"
              />
              Badrinath – 275 Kms
            </li>
            <li>
              <FontAwesomeIcon
                icon={faLongArrowAltRight}
                className="text-yellow-500 mr-2 font-sans"
              />
              Dehradun – 52Kms
            </li>
            <li>
              <FontAwesomeIcon
                icon={faLongArrowAltRight}
                className="text-yellow-500 mr-2 font-sans"
              />
              Corbett National Park – 180 Kms
            </li>
            <li>
              <FontAwesomeIcon
                icon={faLongArrowAltRight}
                className="text-yellow-500 mr-2 font-sans"
              />
              Nainital – 250Kms
            </li>
          </ul>
        </div>
      </div>
      <Footerbox />
    </div>
  );
};
