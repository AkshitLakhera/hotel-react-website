import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { About } from "./pages/About";
import { PhotoGallery } from "./pages/Photogallery";
export default function App() {
  return (
    <div className="bg-slate-50">
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/photos" element={<PhotoGallery />} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}
