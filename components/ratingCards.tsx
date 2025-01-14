import Image from "next/image";
export const RatingCards=()=>{
    return(
        <div className="mt-32 p-16" style={{backgroundColor : '#E1F1FE'}}>
            <h1 className="font-bold text-3xl text-center">Don't just take our word for it</h1>
            <div className="flex flex-row text-center justify-center mt-3">
                <h3 className="text-base">Exellent</h3>
                <img
              aria-hidden
              src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/5 star review (1).svg`}
              alt="5 star review (1)"
              width={100}
              height={20}
              className="mr-1 ml-1 -mt-1"
                 />
                 <h3 className="text-base">4.8/5 G2 Ratings</h3>

            </div>

            <div className="flex justify-center mt-10">
            <img
              aria-hidden
              src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/Review 1.svg`}
              alt="Review 1"
              width={450}
              height={287}
              className="mr-3 ml-1"
              />

            <img
              aria-hidden
              src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/Review 2.svg`}
              alt="Review 2"
              width={450}
              height={287}
              className="mr-1 ml-1 -mt-1"
              />
            </div>
        </div>
    )
}