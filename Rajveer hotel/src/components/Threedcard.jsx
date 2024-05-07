import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";

export const ThreeDCard = ({ title, imageUrl, price }) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        {/* <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem> */}
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={imageUrl}
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <a
            href="https://twitter.com/mannupaaji"
            target="_blank"
            className="px-4 py-2 rounded-xl text-3xl font-bold dark:text-white font-serif"
          >
            {price}
          </a>
          <button className="px-4 py-3 rounded-xl bg-yellow-500  text-white text-xs font-bold">
            Book Now
          </button>
        </div>
      </CardBody>
    </CardContainer>
  );
};
