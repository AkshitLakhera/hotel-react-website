import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

export const Footerbox = () => {
  return (
    <footer className="bg-slate-900 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between flex-col md:flex-row items-center">
          <div className=" mr-56 mb-6 md:mb-0 md:w-1/5 text-center md:text-left">
            <a
              href="https://flowbite.com/"
              className="flex items-center justify-center md:justify-start"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 me-3"
                alt="FlowBite Logo"
              />
              <span className=" text-white hover:text-gray-300 self-center text-2xl font-semibold whitespace-nowrap">
                Flowbite
              </span>
            </a>
            <p className=" text-white hover:text-gray-300 mt-2 max-h-24 overflow-hidden md:max-h-none md:mt-4 text-center md:text-left">
              Hotel Kangan stands tall amidst the best hotels in Rishikesh.
              Hotel Kangan offering an amalgam of warm hospitality and comfort
              for the guests
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 md:w-4/5">
            <div className="text-center md:text-left">
              <h2 className="mb-6 text-sm font-semibold  text-white hover:text-gray-300 uppercase">
                Resources
              </h2>
              <ul className=" text-white hover:text-gray-300 font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Flowbite
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h2 className="mb-6 text-sm font-semibold  text-white hover:text-gray-300 uppercase">
                Follow us
              </h2>
              <ul className=" text-white hover:text-gray-300 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h2 className="mb-6 text-sm font-semibold text-white hover:text-gray-300">
                Legal
              </h2>
              <ul className=" text-white hover:text-gray-300 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex flex-col gap-4 items-center sm:flex-row sm:justify-center sm:items-center">
          <span className="text-sm  mr-10 text-white hover:text-gray-300 mb-4 sm:mb-0">
            © {new Date().getFullYear()}{" "}
            <a href="https://flowbite.com/" className="hover:underline mr-6">
              Flowbite™
            </a>
            All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" className=" text-white hover:text-gray-300">
              <BsFacebook className="w-4 h-4" />
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className=" text-white hover:text-gray-300 ms-5">
              <BsInstagram className="w-4 h-4" />
              <span className="sr-only">Discord community</span>
            </a>
            <a href="#" className=" text-white hover:text-gray-300 ms-5">
              <BsTwitter className="w-4 h-4" />
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="#" className=" text-white hover:text-gray-300 ms-5">
              <BsGithub className="w-4 h-4" />
              <span className="sr-only">GitHub account</span>
            </a>
            <a href="#" className=" text-white hover:text-gray-300 ms-5">
              <BsDribbble className="w-4 h-4" />
              <span className="sr-only">Dribbble account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
