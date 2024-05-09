import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHotel,
  faUtensils,
  faClock,
  faCar,
  faCreditCard,
  faRupeeSign,
} from "@fortawesome/free-solid-svg-icons";

export const Amenities = () => {
  return (
    <div className="text-center  p-10">
      <h2 className="text-5xl font-bold mb-20 text-slate-600 font-heading">
        Amenities
      </h2>
      <div className="flex justify-around items-center mb-4 flex-wrap md:flex-nowrap">
        <div className="hover:bg-yellow-100 rounded-lg p-4">
          <FontAwesomeIcon
            icon={faHotel}
            style={{ color: "#FFD43B" }}
            className="text-4xl mb-2"
          />
          <p className="font-bold font-sans">Homestay</p>
        </div>
        <div className="hover:bg-yellow-100 rounded-lg p-4">
          <FontAwesomeIcon
            icon={faUtensils}
            style={{ color: "#FFD43B" }}
            className="text-4xl mb-2"
          />
          <p className="font-bold font-sans">Resturant</p>
        </div>
        <div className="hover:bg-yellow-100 rounded-lg p-4">
          <FontAwesomeIcon
            icon={faClock}
            style={{ color: "#FFD43B" }}
            className="text-4xl mb-2"
          />
          <p className="font-bold font-sans">24hr Service</p>
        </div>
        <div className="hover:bg-yellow-100 rounded-lg p-4">
          <FontAwesomeIcon
            icon={faCar}
            style={{ color: "#FFD43B" }}
            className="text-4xl mb-2"
          />
          <p className="font-bold font-sans">Parking</p>
        </div>
        <div className="hover:bg-yellow-100 rounded-lg p-4">
          <FontAwesomeIcon
            icon={faCreditCard}
            style={{ color: "#FFD43B" }}
            className="text-4xl mb-2"
          />
          <p className="font-bold font-sans">Visa Payment</p>
        </div>
        <div className="hover:bg-yellow-100 rounded-lg p-4">
          <FontAwesomeIcon
            icon={faRupeeSign}
            style={{ color: "#FFD43B" }}
            className="text-4xl mb-2"
          />
          <p className="font-bold font-sans">Best Price</p>
        </div>
      </div>
    </div>
  );
};
