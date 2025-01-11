import Image from "next/image";
const ListItem = [
  "All BrandNav features included",
  "Screener credits per month",
  "25 Enricher credits per month",
  "Pinpoint ideal prospects",
  "Chat support with real humans",
];
export const FreeSpin = () => {
  return (
    <div className="w-full flex justify-center items-center mt-7 pt-32 pb-32 bg-[url('../public/images/freeSpinBg.png')] bg-no-repeat bg-cover ">
      <div className="bg-white rounded-lg px-5 py-16 w-96 h-4/5">
      <div className="flex flex-col items-center">
        <img
          aria-hidden
          src="/images/gift 1.png"
          alt="gift 1"
          width={80}
          height={80}
        />
        <div className="text-2xl font-bold">Free</div>
        <div className="font-bold text-4xl">$0</div>
        <button className="text-base border px-5 py-2 rounded-lg bg-blue-500 text-white ">
          Grab free leads
        </button>
        <div className="flex my-4">
          <img
            aria-hidden
            src="/images/Vector.svg"
            alt="Vector"
            width={16}
            height={16}
            className="mr-1"
          />
          <div className="mr-2 text-xs">No credit card required |</div>
          <img
            aria-hidden
            src="/images/emojione_star.svg"
            alt="emojione_star"
            width={13}
            height={13}
            className="mr-1"
          />
          <div className="text-xs">4.8/5 G2 Ratings</div>
        </div>
        <div>
          <ul className="mr-5">
            {ListItem.map((item) => {
              return (
                <li key={item} className="flex my-3 ">
                  <img
                    aria-hidden
                    src="/images/SUCCESS.svg"
                    alt="SUCCESS"
                    width={17}
                    height={17}
                    className="mr-3"
                  />
                  <span className="text-base font-medium">{item}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex justify-center flex-col text-center mt-4">
        <img
            aria-hidden
            src="/images/headshots.svg"
            alt="headshots"
            width={202}
            height={35}
            className="mt-5 ml-12"
          />
          <p className="text-sm mt-4">These people are alredy using BrandNav.</p>
          <p className="text-sm mt-1">When will YOU?</p>
        </div>
      </div>
      </div>
      <div className="ml-10 flex flex-col justify-center text-center"> 
        <h1 className="font-bold text-white text-2xl">Not convinced yet?</h1>
        <h1 className="font-bold text-white text-3xl">Take it for a <span className="text-blue-600">FREE</span> spin</h1>
        <h1 className="font-bold text-white text-2xl">before committing</h1>
      </div>
     
    </div>
  );
};
