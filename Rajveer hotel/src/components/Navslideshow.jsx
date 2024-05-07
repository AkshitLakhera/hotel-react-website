import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import image6 from "../assets/image6.jpg";
import image9 from "../assets/image9.jpg";
import image10 from "../assets/image10.jpg";
import image7 from "../assets/image7.jpg";

const fadeImages = [
  {
    url: image6,
    caption: "Welcome to Hotel Rajveer !",
  },  
  {
    url: image7,
    caption: "Quality Holidays with us",
  },
  {
    url: image10,
    caption: "Best view",
  },
  {
    url: image9,
  },
];

export const Navslideshow = () => {
  return (
    <div className="slide-container">
      <Zoom
        autoplay={true} // Enable autoplay
        duration={3000}
        scale={0.2} // Duration between slides in milliseconds (e.g., 3000 = 3 seconds)
      >
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img
              style={{ width: "100%", height: "700px" }}
              src={fadeImage.url}
              alt={fadeImage.caption}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className=" p-6 rounded-lg text-white text-center">
                <h2 className="text-4xl md:text-6xl lg:text-8xl font-serif">
                  {fadeImage.caption}
                </h2>
                <p className="mt-2">{fadeImage.text}</p>
              </div>
            </div>
          </div>
        ))}
      </Zoom>
    </div>
  );
};
