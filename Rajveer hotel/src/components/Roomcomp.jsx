import { ThreeDCard } from "./Threedcard";
import image1 from "../assets/image1.jpg";
import image6 from "../assets/image6.jpg";

export const Roomcomp = () => {
  return (
    <div>
      <div className="heading flex justify-center">
        <h1 className="text-5xl font-extrabold text-slate-600">Our Rooms</h1>
      </div>
      <div className="flex justify-center gap-32">
        <ThreeDCard
          title="Standard Room Non-Ac"
          // description="Hover over this card to unleash the power of CSS perspective"
          imageUrl={image1}
          price="2000 per night"
        />
        <ThreeDCard
          title="Delux Room Ac"
          // description="Hover over this card to unleash the power of CSS perspective"
          imageUrl={image6}
          price="2500 per night"
        />
      </div>
    </div>
  );
};
