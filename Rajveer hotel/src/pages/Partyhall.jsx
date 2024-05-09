import { Navbar } from "../components/Navbar";
import image18 from "../assets/image8.jpg";
import image11 from "../assets/image11.jpg";
import { ThreeDCard } from "../components/Threedcard";
import { Footerbox } from "../components/Footer";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export const Partyhall = () => {
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
      <div>
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
              <h1 className="text-4xl font-bold mb-4">Party Hall</h1>
            </div>
          </div>
        </div>
        <div className="about_section container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-slate-600">
              Party Hall
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              The most awaited days of your life deserve a grand celebration,
              and we believe for doing so you will require a perfect venue as
              well,where there is open area. Party lawns are just going to be
              perfect for your celebration as it has lot of open space. No need
              to scratch your heads in search of party lawns Haridwar as we have
              the largest venue aggregation, recommendation, and booking
              platform for you, where you can easily filter, compare and book
              your shortlisted Party Lawn by facilities, customer ratings,
              prices, seating capacity, location, and many more such parameters.
              Filter, Shortlist, Get Free Quotes and Book from a vast pool of
              Party Lawn in Haridwar that are available to host your event as
              per your event preferences within your budget. Enjoy!.
            </p>
            <div className="flex justify-center gap-3">
              <ThreeDCard
                title="Our party hall"
                imageUrl={image11}
                price="Contact for pricing"
              />
            </div>
          </div>
        </div>
        <div className="bg-yellow-100 py-8">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-slate-600">
              Facilities
            </h2>
            <ul className="list-disc pl-6">
              <li>Guest Accommodation</li>
              <li>Dressing Room</li>
              <li>Parking Area</li>
              <li>In-house Restaurant</li>
            </ul>
          </div>
        </div>
        <div className="bg-yellow-100 py-8">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-slate-600">Policies</h2>
            <ul className="list-disc pl-6">
              <li>In house catering available</li>
              <li>Outside catering allowed</li>
              <li>Outside decorators permitted</li>
              <li>In house DJ available</li>
              <li>Outside DJ permitted</li>
            </ul>
          </div>
        </div>
        <Footerbox />
      </div>
    </div>
  );
};
