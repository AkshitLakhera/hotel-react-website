export const HotelMap = () => {
  return (
    <div className="w-full text-center mt-20">
      <div className="relative mb-40" style={{ paddingBottom: "50%" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.830941409583!2d78.27266307420581!3d30.241897174824707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092335754dc1b3%3A0xee1cb4cdf31d6161!2sRajveer%20homestay%20and%20restaurant!5e0!3m2!1sen!2sin!4v1715170648112!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute top-0 left-0 w-full h-full "
          style={{ border: "0" }} // Remove iframe border
        ></iframe>
      </div>
    </div>
  );
};
