import { ThreeDCard } from "./Threedcard";
import image1 from "../assets/image1.jpg";
import image5 from "../assets/image5.jpg";

export const Roomcomp = () => {
  return (
    <div>
      <div className="heading flex justify-center">
        <h1 className="text-6xl font-extrabold">Our Rooms</h1>
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
          imageUrl={image5}
          price="2500 per night"
        />
      </div>
    </div>
  );
};
