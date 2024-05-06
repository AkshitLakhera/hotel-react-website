import { Navbar } from "./components/Navbar";
import { Navslideshow } from "./components/Navslideshow";
import { Overview } from "./components/Overview";
import StickyScrollRevealDemo from "./components/Scroll";

export default function App() {
  return (
    <div className="bg-slate-50">
      <Navbar />
      <Navslideshow />
      <Overview />
      <StickyScrollRevealDemo />
    </div>
  );
}
