import { Navbar } from "../components/Navbar";
import image8 from "../assets/image8.jpg";
import image1 from "../assets/image1.jpg";
import image6 from "../assets/image6.jpg";
import { ThreeDCard } from "../components/Threedcard";
import { Footerbox } from "../components/Footer";

export const Rooms = () => {
  return (
    <div>
      <Navbar />
      <div className="Aboutrooms">
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
              <h1 className="text-4xl font-bold mb-4">Rooms</h1>
              {/* <p className="text-lg">Insert your about content here...</p> */}
            </div>
          </div>
        </div>
        <div className="about_section container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-slate-600">
              Our Rooms
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              The Hotel Rajveer offer you the lap of luxury and comforts making
              you feel at home even away from your home. Hotel offers you a
              sustained tradition of elegance and service. You will never know
              until you experience. Whether it is business, leisure or
              conference, everyone wants to make the best use of their time. The
              promptness and efficiency of our services, will always meet your
              expectations.The hotel provides guests with an unforgettable stay
              experience, both in terms of luxury and comfort. It features
              state-of-the-art facilities for travelers. Visitors prefer the
              hotel for its impeccable bundle of services it delivers and the
              world-class facilities that it provides.
            </p>
            <div className="flex justify-center gap-3">
              <ThreeDCard
                title="Standard Room Non-Ac"
                description="Standard Rooms at Hotel Rajveer is the most occupied set of rooms that remains in demand throughout the year. While visiting haridwar, try staying in one of these Standerd Rooms and experience the world class facilities at reasonable tariff. We wish you a happy and relaxing stay during your spiritual quest."
                imageUrl={image1}
                price="2000 per night"
              />
              <ThreeDCard
                title="Delux Room Ac"
                description="Family Rooms of Hotel Rajveer are the freshly refurbished rooms that are designed to ensure an unforgettable experience to our guests. All Family rooms are decorated with a contemporary style ambiance. These rooms are laid with a wide range of amenities to make you feel special as a guest ."
                imageUrl={image6}
                price="2500 per night"
              />
            </div>
          </div>
        </div>
        <Footerbox />
      </div>
    </div>
  );
};
