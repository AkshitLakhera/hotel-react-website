import image18 from "../assets/image18.jpg";

export const Overview = () => {
  return (
    <div className="row m-16 flex flex-wrap justify-center gap-6">
      {/* Content Section */}
      <div className="about_content w-full lg:w-1/2 max-w-4xl p-4 rounded-lg">
        <div
          className="sec_title text-slate-600 relative mb-6 text-left leading-10 font-bold text-#0f3a4a tracking-wide"
          style={{ fontSize: 40 }}
        >
          Overview
        </div>
        <div className="w-full">
          <div className="content1 mt-4 text-left max-w-md  leading-7 font-2xl">
            Hotel Rajveer stands tall amidst the best hotels in Rishikesh. Hotel
            Rajveer offering an amalgam of warm hospitality and comfort for the
            guests.
          </div>
          <div className="content1 mt-4 text-left max-w-md leading-7">
            Also it is Away from the hustle and bustle of the city. The hotel is
            enveloped with an aura of tranquillity that guarantees a blissful
            stay at one of the best hotels in Rishikesh. Hotel Kangan is in
            close proximity to the prominent tourist attraction.
          </div>
        </div>

        <div className="flex justify-start mt-4">
          <div className="Link1">
            <button
              type="button"
              className="py-2.5 px-8 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Read More...
            </button>
          </div>
          <div className="Link2">
            <button
              type="button"
              className="py-2.5 px-8 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-yellow-500 rounded-full border border-gray-200 hover:bg-yellow-600 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Enquiry Now
            </button>
          </div>
        </div>
      </div>
      {/* Image Section */}
      <div className="overiew_imag w-full lg:w-1/2 max-w-xl p-4">
        <img
          className="w-full h-full rounded-lg hover:scale-105 transition-transform duration-500 ease-in-out loop"
          src={image18}
          alt="Hotel"
        />{" "}
        {/* Adjust the size of the image here */}
      </div>
    </div>
  );
};
