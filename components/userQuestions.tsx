import Image from "next/image";
export const UsersQuestionsData = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <h1 className="font-bold text-3xl">Got a Question?</h1>
        <h1 className="font-bold text-3xl mt-2">Get Your Answers</h1>
      </div>

      <div className="mt-10">
        <div className="flex justify-around text-center">
        <p>What is the purpose of email verifier?</p>
        <img
          aria-hidden
          src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/akar-icons_plus.svg`}
          alt="akar-icons_plus"
          width={24}
          height={24}
          className="-ml-7"
        />
        </div>

        <div className="flex justify-around mt-2">
        <p>How do you find email addresses?</p>
        <img
          aria-hidden
          src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/akar-icons_plus.svg`}
          alt="akar-icons_plus"
          width={24}
          height={24}
          className="-ml-1"
        />
        </div>

        <div className="flex justify-around mt-2">
        <p>What is the purpose of email verifier?</p>
        <img
          aria-hidden
          src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/akar-icons_plus.svg`}
          alt="akar-icons_plus"
          width={24}
          height={24}
          className=" -ml-7"
        />
        </div>

        <div className="flex justify-around mt-2">
        <p>How do you find email addresses?</p>
        <img
          aria-hidden
          src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/akar-icons_plus.svg`}
          alt="akar-icons_plus"
          width={24}
          height={24}
          className=" -ml-2"
        />
        </div>

        <div className="flex justify-around mt-2">
        <p>What is the purpose of email verifier?</p>
        <img
          aria-hidden
          src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/akar-icons_plus.svg`}
          alt="akar-icons_plus"
          width={24}
          height={24}
          className="-ml-7"
        />
        </div>

        <div className="flex justify-around mt-2">
        <p>How do you find email addresses</p>
        <img
          aria-hidden
          src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/akar-icons_plus.svg`}
          alt="akar-icons_plus"
          width={24}
          height={24}
        />
        </div>
      </div>

    </div>
  );
};
