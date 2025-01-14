import Image from "next/image";
export const DeliverDataIssues=()=>{
    return(
        <div className="mt-40">
            <div className="text-center">
                <h1 className="font-bold text-xl">Fixed data accurancy problems</h1>
                <h1 className="font-bold text-xl">with BrandNav</h1>
            </div>
            <div className="flex justify-center">
            <img
              aria-hidden
              src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/before svg.svg`}
              alt="before svg"
              width={439}
              height={425}
              className="mt-20 mr-5"
            />

            <img
              aria-hidden
              src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/after svg (1).svg`}
              alt="after svg (1)"
              width={438}
              height={424}
              className="mt-20"
            />
            </div>
        </div>
    )
}