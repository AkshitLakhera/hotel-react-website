import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export const TopStrip = () => {
  return (
    <div className="bg-yellow-400 text-white py-2 px-4 flex justify-between items-center flex-wrap">
      <div>
        <span className="mr-2">
          <FontAwesomeIcon icon={faEnvelope} />
        </span>
        <span>Email: example@example.com</span>
      </div>
      <div>
        <span className="mr-2">
          <FontAwesomeIcon icon={faPhone} />
        </span>
        <span>Phone: +1234567890</span>
      </div>
    </div>
  );
};
