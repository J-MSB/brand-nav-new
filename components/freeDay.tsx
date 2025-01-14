import Image from "next/image";
export const FreeBrandNav = () => {
  return (
    <div className="mt-32">
      <h1 className="text-center font-bold text-3xl">Want to see BrandNav in action?</h1>
      <p className="text-center mt-3">Try BrandNav for free today!</p>
     <div className="text-center mt-4">
     <button className="text-base  border px-5 py-2 rounded-lg bg-blue-500 text-white ">
        Grab free leads
      </button>
     </div>

      <div className="flex justify-center mt-5">
        <div className="flex ">
          <img
            aria-hidden
            src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/Vector.svg`}
            alt="Vector"
            width={16}
            height={16}
            className="mr-1"
          />
          <span>No credit card required |</span>
        </div>
        <div className="flex">
          <img
            aria-hidden
            src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/five_star_review.svg`}
            alt="five_star_review"
            width={65}
            height={13}
            className="mr-1 ml-1"
          />
          <span>4.8/5 G2 Rating</span>
        </div>
      </div>
    </div>
  );
};
