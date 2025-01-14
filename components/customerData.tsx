import Image from "next/image";
export const CustomerData=()=>{
    return(
        <div>
        <div className="text-center mt-24">
            <h1 className="text-black-900 text-3xl font-bold">Why should you use BrandNav?</h1>
            <p className="text-xs mt-6">Optimize your workflow for faster results and higher revenue</p>
        </div>
        <div className="flex flex-row justify-center mt-20">
        <div>
        <img
              aria-hidden
              src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/image (3).svg`}
              alt="image (3)"
              width={470}
              height={381}
            />
         <img
              aria-hidden
              src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/Group_persons.svg`}
              alt="Group_persons.svg"
              width={457}
              height={255}
              className="-mt-80 ml-3"
            />
        </div>

        <div className="flex flex-col justify-center mt-80 ml-10">
        <img
              aria-hidden
              src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/Frame 1000001728.svg`}
              alt="Frame 1000001728"
              width={50}
              height={50}
              className="-mt-60 mb-3"
            />
            <h3 className="mb-4">Enrich any CSV</h3>
            <p className="w-96 text-xs">BrandNav transforms your CSV files by adding valuable contact, firmographics, and technographics data. With just a few clicks, you can enhance your data with enriched information and unlock new insights and opportunities.</p>
        </div>

        </div>

        <div className="flex flex-row justify-center mt-10">
        <div>
        <img
              aria-hidden
              src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/sync 1 2.svg`}
              alt="sync 1 2"
              width={50}
              height={50}
              className="mt-60 mb-3"
            />
              <h3 className="mb-4">Fresh data updates everyday</h3>
            <p className="w-96 text-xs">BrandNav updates its data every day, providing the most recent and accurate information to its users. With a constant stream of new information, BrandNav ensures that users have access to the latest contact, firmographics, and technographics data for better decision-making.</p>
        </div>

        <div className="flex flex-col justify-center mt-80 ml-5">
        <img
              aria-hidden
              src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/image (2) 2.svg`}
              alt="images (2) 2"
              width={470}
              height={381}
              className="-mt-60 mb-3"
            />
        </div>

        </div>

        
        <div className="flex flex-row justify-center mt-20">
        <div>
        <img
              aria-hidden
              src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/image (4).svg`}
              alt="images (4)"
              width={470}
              height={381}
              className=" mb-3"
            />
        </div>

        <div className="flex flex-col justify-center mt-80 ml-20">
        <img
              aria-hidden
              src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/filter (2) 1.svg`}
              alt="filter (2)"
              width={50}
              height={50}
              className="-mt-60 mb-3"
            />
            <h3 className="mb-4">Advanced search with 25+ unique filters</h3>
            <p className="w-96 text-xs">BrandNav offers over 25+ filters to help users build highly segmented lists for better prospecting. With BrandNav, you can create highly targeted lists that are tailored to your specific needs, streamlining your workflow and maximizing your productivity.</p>
        </div>
        </div>
        </div>
    )
}