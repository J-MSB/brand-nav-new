export const CardsProfile=()=>{
    return(
        <div>
                    <div className="flex mt-10 flex-col justify-center text-center">
            <div className="flex justify-center">
            <h1 className="font-bold text-xl w-96 flex justify-center text-center">Pinpoint your ideal customer with relevant data attributes</h1>
            </div>
            </div>

            <div className="mt-16">
            <h3 className="text-blue-700 text-center">Screener attributes</h3>
            <div className="flex justify-around mt-10">
                <div>
                <img
              aria-hidden
              src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/Group 1000001990.svg`}
              alt="Group 1000001990"
              width={70}
              height={70}
            />
            <h3 className="font-bold text-sm">Financials</h3>
                </div>

                <div>
                <img
              aria-hidden
              src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/Group 1000001992 (1).svg`}
              alt="Group 1000001992 (1)"
              width={70}
              height={70}
            />
            <h3  className="font-bold text-sm">Company Name</h3>
            <h3  className="font-bold text-sm"> & Website</h3>
                </div>

                <div>
                <img
              aria-hidden
              src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/Group 1000001992 (2).svg`}
              alt="Group 1000001992 (2)"
              width={70}
              height={70}
            />
           <div> 
            <h3  className="font-bold text-sm">Company</h3>
            <h3 className="ml-1 font-bold text-sm">location</h3>
            </div>
                </div>

                <div>
                <img
              aria-hidden
              src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/Group 1000001992 (3).svg`}
              alt="Group 1000001992 (3)"
              width={70}
              height={70}
            />
            <h3 className="font-bold text-sm">Country Code</h3>
                </div>

            </div>

            <div className="flex flex-row text-center ml-96 mt-20">

            <div className="mr-52 ml-10">
                <img
              aria-hidden
              src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/Group 1000001996.svg`}
              alt="Group 1000001996"
              width={70}
              height={70}
              className="ml-5"
            />
            <h3 className="font-bold text-sm">Empolyee count</h3>
            </div>

            <div className="mr-52">
                <img
              aria-hidden
              src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/Group 1000001997.svg`}
              alt="Group 1000001997"
              width={70}
              height={70}
            />
            <h3 className="font-bold text-sm">Industry</h3>
            </div>

            <div>
                <img
              aria-hidden
              src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/Group 1000001997 (1).svg`}
              alt="Group 1000001997 (1)"
              width={70}
              height={70}
              className="ml-5"
            />
            <h3 className="font-bold text-sm">and 20+ more</h3>
            </div>
            </div>

            <div className="mt-20">
                <h1 className="text-center font-bold text-blue-700">Enrichers attributes</h1>

         <div className="flex justify-around text-center mt-10">

            <div>
                <img
              aria-hidden
              src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/Group 1000001992 (5).svg`}
              alt="Group 1000001992 (5)"
              width={70}
              height={70}
            />
            <h3 className="font-bold text-sm">Phone</h3>
            </div>

            <div>
                <img
              aria-hidden
              src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/Group 1000001994.svg`}
              alt="Group 1000001994"
              width={70}
              height={70}
            />
            <h3 className="font-bold text-sm">Email</h3>
            </div>

            <div>
                <img
              aria-hidden
              src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/Group 1000001995.svg`}
              alt="Group 1000001995"
              width={70}
              height={70}
            />
            <h3 className="font-bold text-sm">Job title</h3>
            </div>

            <div>
                <img
              aria-hidden
              src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/Group 1000001997 (1).svg`}
              alt="Group 1000001997 (1)"
              width={70}
              height={70}
            />
            <h3 className="font-bold text-sm">Linkedin</h3>
            </div>

         </div>


            </div>
            </div>
        </div>
    )
}