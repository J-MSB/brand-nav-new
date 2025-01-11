import Image from "next/image";
import Link from "next/link";
export const Header = () => {
  return (
    <div className=" px-20 flex justify-between items-center">
      <div className="flex justify-between items-center">
        <Image aria-hidden src="/logo.svg" alt="logo" width={120} height={20} unoptimized />
        <div className="flex px-10">
          <Link href="/products" className="p-3 text-sm flex text-center">
            Products
            <Image
              aria-hidden
              src="/down_arrow.svg"
              alt="logo"
              width={16}
              height={16}
              className="mx-1"
            />{" "}
          </Link>
          <Link href="/pricing" className="p-3 text-sm">
            Pricing
          </Link>
          <Link href="/blogs" className="p-3 text-sm">
            Blogs
          </Link>
          <Link href="/resources" className="p-3 text-sm flex text-center">
            Resources
            <Image
              aria-hidden
              src="/down_arrow.svg"
              alt="logo"
              width={16}
              height={16}
              className="mx-1"
            />
          </Link>
        </div>
      </div>

      <div>
        <button className="mx-3 text-sm border px-4 py-1 rounded-lg">
          Login
        </button>
        <button className="text-sm border px-4 py-1 rounded-lg bg-blue-500 text-white ">
          Start for free
        </button>
      </div>
    </div>
  );
};
