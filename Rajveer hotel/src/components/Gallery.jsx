import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import image10 from "../assets/image10.jpg";
import image7 from "../assets/image7.jpg";
import image18 from "../assets/image18.jpg";
import image16 from "../assets/image16.jpg";
import image14 from "../assets/image14.jpg";
import image15 from "../assets/image15.jpg";
import image17 from "../assets/image17.jpg";
import image12 from "../assets/image12.jpg";
import image9 from "../assets/image9.jpg";
import image2 from "../assets/image2.jpg";
import image21 from "../assets/image21.jpg";
import image22 from "../assets/image22.jpg";
import image23 from "../assets/image23.jpg";
import image24 from "../assets/image24.jpg";
import image25 from "../assets/image25.jpg";
import "../custom styles/Gallery.css";

const fadeImages = [
  {
    url: image18,
  },
  {
    url: image16,
  },
  {
    url: image14,
  },
  {
    url: image15,
  },
  {
    url: image17,
  },
  {
    url: image12,
  },
  {
    url: image10,
  },
  {
    url: image9,
  },
  {
    url: image7,
  },
  {
    url: image2,
  },
  {
    url: image21,
  },
  {
    url: image22,
  },
  {
    url: image23,
  },
  {
    url: image24,
  },
  {
    url: image25,
  },
];

export const Gallery = () => {
  return (
    <div>
      <div className="heading flex justify-center m-9 mb-6">
        <h1 className="text-5xl font-extrabold text-slate-600 font-heading">
          Our Gallery
        </h1>
      </div>
      <div className="slide-container">
        <Fade
          autoplay={true} // Enable autoplay
          duration={1000}
          scale={0.9} // Duration between slides in milliseconds (e.g., 3000 = 3 seconds)
        >
          {fadeImages.map((fadeImage, index) => (
            <div key={index} className="image-wrapper flex justify-center ">
              <img
                className=" max-w-160 max-h-100 mb-40"
                alt={fadeImage.caption}
                src={fadeImage.url}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className=" p-6 rounded-lg text-white text-center">
                  <h2 className="text-4xl md:text-6xl lg:text-8xl font-serif">
                    {fadeImage.caption}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
};
