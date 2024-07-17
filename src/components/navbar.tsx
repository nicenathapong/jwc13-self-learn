import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <div className="w-full h-[38px] bg-black text-white flex justify-center items-center">
                <div className="relative container">
                    <button
                        type="button"
                        className="absolute right-0 top-1/2 -translate-y-1/2 text-lg"
                    >
                        <i className="fal fa-times"></i>
                    </button>
                    <p className="text-sm text-center">
                        Sign up and get 20% off to your first order.{" "}
                        <Link href="/" className="font-medium underline offset">
                            Sign Up Now
                        </Link>
                    </p>
                </div>
            </div>
            <div className="bg-white h-[100px] flex justify-center">
                <div className="container flex justify-between items-center gap-10 whitespace-nowrap">
                    <h1 className="text-[32px] font-semibold">JWC.CO</h1>
                    <div className="flex gap-6">
                        <Link href="/">
                            Shop <i className="far fa-angle-down"></i>
                        </Link>
                        <Link href="/">On Sale</Link>
                        <Link href="/">New Arrivals</Link>
                        <Link href="/">Brands</Link>
                    </div>
                    <div className="w-full h-[48px] bg-[#F0F0F0] rounded-full px-6 flex gap-4 items-center">
                        <p className="text-lg text-black/40">
                            <i className="far fa-search"></i>
                        </p>
                        <input
                            type="text"
                            className="py-1 bg-transparent w-full"
                            placeholder="Search for products..."
                        />
                    </div>
                    <div className="flex gap-6">
                        <button type="button" className="text-lg">
                            <i className="far fa-shopping-cart"></i>
                        </button>
                        <button type="button" className="text-lg">
                        <i className="far fa-user-circle"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
