export const BrandNavBussiness=()=>{
    return(
        <div className="mt-20">

            <div className="text-center">
                <h1 className="font-bold text-4xl">Who is using BrandNav?</h1>
                <p className="text-base mt-3">BrandNav has become irreplaceable tool for businesses</p>
            </div>

            <div className="flex justify-around mt-10">

            <div className="flex flex-col justify-center text-center"> 
            <img
              aria-hidden
              src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/icon.svg`}
              alt="icon"
              width={70}
              height={66}
              className=" mb-1 ml-20"
            />
            <h2 className="font-bold text-xl mb-3">Sales & Marketing Teams</h2>
            <p className="w-64 text-base">Sales and marketing teams are using BrandNav to efficiently locate and verify prospect contact information and identify key decision-makers.</p>
            </div>


            <div className="flex flex-col justify-center text-center">
            <img
              aria-hidden
              src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/icon (1).svg`}
              alt="icon (1)"
              width={70}
              height={66}
              className=" mb-1 ml-20"
            />
            <h2 className="font-bold mb-3 text-xl">Software & IT CompaniSaleses </h2>
            <p className="w-64 text-base">IT companies are using BrandNav to build lists for outreach, identify target organizations, and verify email addresses of leads to improve email deliverability.</p>
            </div>

            <div className="flex flex-col justify-center text-center">
            <img
              aria-hidden
              src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/icon (2).svg`}
              alt="icon (2)"
              width={70}
              height={66}
              className=" mb-1 ml-20"
            />
            <h2 className="font-bold mb-3 text-xl">Service Providers</h2>
            <p className="w-64 text-base">Service providers are using BrandNav to locate accurate email addresses build a list of contacts, and improve the efficiency of their sales process.</p>
            </div>

            </div>

               <div className="flex justify-around mt-10">

            <div className="flex flex-col justify-center text-center"> 
            <img
              aria-hidden
              src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/icon (3).svg`}
              alt="icon (3)"
              width={70}
              height={66}
              className=" mb-1 ml-20"
            />
            <h2 className="font-bold mb-3 text-xl">Recruiters</h2>
            <p className="w-64 text-base">Recruiters are using BrandNav to locate and verify the email addresses of job candidates, build a talent pool, and streamline their hiring process.</p>
            </div>


            <div className="flex flex-col justify-center text-center">
            <img
              aria-hidden
              src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/icon (4).svg`}
              alt="icon (4)"
              width={70}
              height={66}
              className=" mb-1 ml-20"
            />
            <h2 className="font-bold mb-3 text-xl">Backlinks Outreach</h2>
            <p className="w-64 text-base">SEO link builders are using BrandNav to locate and verify the email addresses of potential link partners, and build outreach lists for link-building purposes.</p>
            </div>

            <div className="flex flex-col justify-center text-center">
            <img
              aria-hidden
              src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/icon (5).svg`}
              alt="icon (5)"
              width={70}
              height={66}
              className=" mb-1 ml-20"
            />
            <h2 className="font-bold mb-3 text-xl">Investors</h2>
            <p className="w-64 text-base">Investors are using BrandNav to quickly find and verify contact information for key executives and decision-makers and streamline their workflow.</p>
            </div>

            </div>




        </div>
    )
}