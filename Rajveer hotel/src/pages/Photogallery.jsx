import { Navbar } from "../components/Navbar";
import { Footerbox } from "../components/Footer";
import image18 from "../assets/image8.jpg";
import image10 from "../assets/image10.jpg";
import image7 from "../assets/image7.jpg";
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
import "../custom styles/ImageCollection.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export const PhotoGallery = () => {
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
          >
            {/* Empty div for overlay if needed */}
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">Photo Gallery</h1>
              {/* <p className="text-lg">Insert your about content here...</p> */}
            </div>
          </div>
        </div>
        <div className="gallery_img flex justify-center mt-20 mb-8">
          <ul>
            <li>
              <a>
                <figure>
                  <img src={image18} alt="Aerial View uttarakhand" />
                </figure>
              </a>
            </li>
            <li>
              <a>
                <figure>
                  <img src={image10} alt="Mountainview night" />
                </figure>
              </a>
            </li>
            <li>
              <a>
                <figure>
                  <img
                    src={image7}
                    alt="Guy on a bike ok a wooden bridge with a forest backdrop"
                  />
                </figure>
              </a>
            </li>
            <li>
              <a>
                <figure>
                  <img
                    src={image16}
                    alt="Guy on a bike ok a wooden bridge with a forest backdrop"
                  />
                </figure>
              </a>
            </li>
            <li>
              <a>
                <figure>
                  <img
                    src={image14}
                    alt="Guy on a bike ok a wooden bridge with a forest backdrop"
                  />
                </figure>
              </a>
            </li>
            <li>
              <a>
                <figure>
                  <img
                    src={image15}
                    alt="Guy on a bike ok a wooden bridge with a forest backdrop"
                  />
                </figure>
              </a>
            </li>
            <li>
              <a>
                <figure>
                  <img
                    src={image17}
                    alt="Guy on a bike ok a wooden bridge with a forest backdrop"
                  />
                </figure>
              </a>
            </li>
            <li>
              <a>
                <figure>
                  <img
                    src={image12}
                    alt="Guy on a bike ok a wooden bridge with a forest backdrop"
                  />
                </figure>
              </a>
            </li>
            <li>
              <a>
                <figure>
                  <img
                    src={image9}
                    alt="Guy on a bike ok a wooden bridge with a forest backdrop"
                  />
                </figure>
              </a>
            </li>
            <li>
              <a>
                <figure>
                  <img
                    src={image2}
                    alt="Guy on a bike ok a wooden bridge with a forest backdrop"
                  />
                </figure>
              </a>
            </li>
            <li>
              <a>
                <figure>
                  <img
                    src={image21}
                    alt="Guy on a bike ok a wooden bridge with a forest backdrop"
                  />
                </figure>
              </a>
            </li>
            <li>
              <a>
                <figure>
                  <img
                    src={image22}
                    alt="Guy on a bike ok a wooden bridge with a forest backdrop"
                  />
                </figure>
              </a>
            </li>
            <li>
              <a>
                <figure>
                  <img
                    src={image23}
                    alt="Guy on a bike ok a wooden bridge with a forest backdrop"
                  />
                </figure>
              </a>
            </li>
            <li>
              <a>
                <figure>
                  <img
                    src={image24}
                    alt="Guy on a bike ok a wooden bridge with a forest backdrop"
                  />
                </figure>
              </a>
            </li>
            <li>
              <a>
                <figure>
                  <img
                    src={image25}
                    alt="Guy on a bike ok a wooden bridge with a forest backdrop"
                  />
                  {/* <figcaption>Adventure getaways</figcaption> */}
                </figure>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Footerbox />
    </div>
  );
};
