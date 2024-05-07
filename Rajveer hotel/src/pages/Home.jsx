import { Navbar } from "../components/Navbar";
import { Navslideshow } from "../components/Navslideshow";
import { Overview } from "../components/Overview";
import { Roomcomp } from "../components/Roomcomp";
import { Gallery } from "../components/Gallery";
import { Footerbox } from "../components/Footer";
import { Amenities } from "../components/Amenties";
export default function Home() {
  return (
    <div className="bg-slate-50">
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
