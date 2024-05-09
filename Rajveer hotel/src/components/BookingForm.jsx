import { useState } from "react";
import emailjs from "emailjs-com";
const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    checkIn: "",
    checkOut: "",
    phoneNumber: "",
    note: "",
    numberOfGuests: "",
    numberOfRooms: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");

    emailjs
      .send("your_service_id", "your_template_id", formData, "your_user_id")
      .then(
        (response) => {
          alert("Booking submitted successfully!");
          setFormData({
            name: "",
            checkIn: "",
            checkOut: "",
            phoneNumber: "",
            note: "",
            numberOfGuests: "",
            numberOfRooms: "",
          });
        },
        (error) => {
          console.error("Error submitting booking:", error);
        }
      );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:bg-yellow-100 transition duration-300 ease-in-out">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 font-heading">
        Book Your Stay
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-800 font-sans">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="px-4 py-2 rounded border border-gray-400 focus:outline-none focus:border-gray-500 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-800 font-sans">Check In:</label>
          <input
            type="date"
            name="checkIn"
            placeholder="Check In"
            value={formData.checkIn}
            onChange={handleChange}
            required
            className="px-4 py-2 rounded border border-gray-400 focus:outline-none focus:border-gray-500 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-800 font-sans">Check Out:</label>
          <input
            type="date"
            name="checkOut"
            placeholder="Check Out"
            value={formData.checkOut}
            onChange={handleChange}
            required
            className="px-4 py-2 rounded border border-gray-400 focus:outline-none focus:border-gray-500 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-800 font-sans">Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="px-4 py-2 rounded border border-gray-400 focus:outline-none focus:border-gray-500 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-800 font-sans">Note:</label>
          <textarea
            name="note"
            placeholder="Note"
            value={formData.note}
            onChange={handleChange}
            className="px-4 py-2 rounded border border-gray-400 focus:outline-none focus:border-gray-500 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-800 font-sans">
            Number of Guests:
          </label>
          <input
            type="number"
            name="numberOfGuests"
            placeholder="Number of Guests"
            value={formData.numberOfGuests}
            onChange={handleChange}
            required
            className="px-4 py-2 rounded border border-gray-400 focus:outline-none focus:border-gray-500 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-800 font-sans">
            Number of Rooms:
          </label>
          <input
            type="number"
            name="numberOfRooms"
            placeholder="Number of Rooms"
            value={formData.numberOfRooms}
            onChange={handleChange}
            required
            className="px-4 py-2 rounded border border-gray-400 focus:outline-none focus:border-gray-500 w-full"
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="bg-yellow-400 font-heading px-6 py-3 focus:outline-none text-white rounded-lg"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
