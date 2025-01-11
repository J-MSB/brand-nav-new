import Image from "next/image";
export const Dashboard = () => {
  return (
    <div className="text-center mt-20">
      <div className="text-center flex justify-center">
        <h1 className="w-96 text-5xl">Weapons to grow your Business</h1>
      </div>
      <div className="text-center my-5">
        <p>Turbocharge your business growth.</p>
        <p>Our products help ignite sales and entrepreuriship.</p>
      </div>

      <div className="text-center mt-10">
        <button className="text-lg border px-10 py-2 rounded-lg bg-blue-500 text-white ">
          Start for free
        </button>
        <div className="flex justify-center mt-2"> 
        <div className="flex ">
          <img
            aria-hidden
            src="/Vector.svg"
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
            src="/five_star_review.svg"
            alt="five_star_review"
            width={65}
            height={13}
            className="mr-1 ml-1"
          />
          <span>4.8/5 G2 Rating</span>
        </div>
        </div>
      </div>

      <div className="flex justify-center -mt-8">
      <img
            aria-hidden
            src="/verifier card.svg"
            alt="verifier card"
            width={256}
            height={300}
            className="mr-1"
          />
            <img
            aria-hidden
            src="/screener card.svg"
            alt="screener card"
            width={256}
            height={208}
            className="mr-1 -mb-20"
          />

           <img
            aria-hidden
            src="/blacklist_shield_card.svg"
            alt="blacklist_shield_card"
            width={256}
            height={208}
            className="mr-1 -mb-20"
          />
           <img
            aria-hidden
            src="/enricher card.png"
            alt="enricher png"
            width={256}
            height={300}
            className="mr-1"
          />
      </div>

      <div className="mt-11 mb-40">
        <p className="text-base">Modern Companies are using BrandNav</p>
        <div className="flex justify-center items-center mt-5">
        <img
            aria-hidden
            src="/logo 1.svg"
            alt="logo 1"
            width={175}
            height={18}
            className="mr-6"
          />
           <img
            aria-hidden
            src="/logo 2.svg"
            alt="logo 2"
            width={122}
            height={17}
            className="mr-6"
          />
           <img
            aria-hidden
            src="/logo 3.svg"
            alt="logo 3"
            width={83.27}
            height={34}
            className="mr-6"
          />
           <img
            aria-hidden
            src="/logo 4.svg"
            alt="logo 4"
            width={46}
            height={29}
            className="mr-6"
          />
           <img
            aria-hidden
            src="/logo 5.svg"
            alt="logo 5"
            width={61}
            height={33}
          />
        </div>
      </div>
    </div>
  );
};
