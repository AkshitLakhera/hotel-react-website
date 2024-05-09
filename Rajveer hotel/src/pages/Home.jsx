import { Navbar } from "../components/Navbar";
import { TopStrip } from "../components/Iconfloating";
import { Navslideshow } from "../components/Navslideshow";
import { Overview } from "../components/Overview";
import { Roomcomp } from "../components/Roomcomp";
import { Gallery } from "../components/Gallery";
import { Footerbox } from "../components/Footer";
import { Amenities } from "../components/Amenties";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import image18 from "../assets/image18.jpg";
export default function Home() {
  return (
    <div className="bg-slate-50">
      <div className="relative top-0 left-0">
        <FloatingWhatsApp
          phoneNumber={"9758584612"}
          accountName={"Rajveer HomeStay"}
          avatar={image18}
        />
      </div>
      <TopStrip />
      <Navbar />
      <Navslideshow />
      <Overview />
      <Roomcomp />
      <Amenities />
      <Gallery />
      <Footerbox />
    </div>
  );
}
