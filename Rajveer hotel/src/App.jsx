import { Footerbox } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Navbar } from "./components/Navbar";
import { Navslideshow } from "./components/Navslideshow";
import { Overview } from "./components/Overview";
import { Roomcomp } from "./components/Roomcomp";
import StickyScrollRevealDemo from "./components/Scroll";

export default function App() {
  return (
    <div className="bg-slate-50">
      <Navbar />
      <Navslideshow />
      <Overview />
      <Roomcomp />
      <StickyScrollRevealDemo />
      <Gallery />
      <Footerbox />
    </div>
  );
}
