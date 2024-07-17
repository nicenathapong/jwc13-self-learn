export default function Footer() {
    return (
        <footer className="h-[500px] w-full bg-[#F0F0F0] flex justify-center items-center">
            <div className="relative container">
                <div className="absolute top-[-175px] left-0 w-full bg-black text-white h-[177px] px-[64px] py-[36px] flex justify-between items-center rounded-[20px]">
                    <h1 className="text-[40px] leading-[45px] font-semibold">
                        STAY UPTO DATE ABOUT
                        <br />
                        OUR LATEST OFFERS
                    </h1>
                    <div className="space-y-[14px]">
                        <div className="w-[349px] h-[48px] bg-[#F0F0F0] rounded-full px-6 flex gap-4 items-center">
                            <p className="text-lg text-black/40">
                                <i className="far fa-envelope"></i>
                            </p>
                            <input
                                type="text"
                                className="py-1 bg-transparent w-full"
                                placeholder="Enter your email address"
                            />
                        </div>
                        <button
                            type="button"
                            className="w-[349px] h-[43px] bg-white text-black rounded-full"
                        >
                            Subscribe to Newsletter
                        </button>
                    </div>
                </div>
                <div className="flex justify-between pt-12 mb-[50px]">
                    <div className="">
                        <h1 className="text-[33px] font-semibold mb-3">
                            JWC.CO
                        </h1>
                        <p className="text-black/60 text-sm leading-[22px] mb-8">
                            We have clothes that suits your style
                            <br />
                            and which you’re proud to wear.
                            <br />
                            From women to men.
                        </p>
                        <div className="flex gap-3">
                            <div className="w-[28px] h-[28px] rounded-full bg-white border border-black/20 flex justify-center items-center">
                                <p className="text-xs">
                                    <i className="fab fa-twitter"></i>
                                </p>
                            </div>
                            <div className="w-[28px] h-[28px] rounded-full bg-black flex justify-center items-center">
                                <p className="text-xs text-white">
                                    <i className="fab fa-facebook-f"></i>
                                </p>
                            </div>
                            <div className="w-[28px] h-[28px] rounded-full bg-white border border-black/20 flex justify-center items-center">
                                <p className="text-xs">
                                    <i className="fab fa-instagram"></i>
                                </p>
                            </div>
                            <div className="w-[28px] h-[28px] rounded-full bg-white border border-black/20 flex justify-center items-center">
                                <p className="text-xs">
                                    <i className="fab fa-github"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-medium tracking-[3px] mb-6">
                            COMPANY
                        </h1>
                        <div className="space-y-4">
                            <p className="text-black/60">About</p>
                            <p className="text-black/60">Features</p>
                            <p className="text-black/60">Works</p>
                            <p className="text-black/60">Career</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-medium tracking-[3px] mb-6">
                            HELP
                        </h1>
                        <div className="space-y-4">
                            <p className="text-black/60">Customer Support</p>
                            <p className="text-black/60">Delivery Details</p>
                            <p className="text-black/60">Terms & Conditions</p>
                            <p className="text-black/60">Privacy Policy</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-medium tracking-[3px] mb-6">FAQ</h1>
                        <div className="space-y-4">
                            <p className="text-black/60">Account</p>
                            <p className="text-black/60">Manage Deliveries</p>
                            <p className="text-black/60">Orders</p>
                            <p className="text-black/60">Payments</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-medium tracking-[3px] mb-6">
                            RESOURCES
                        </h1>
                        <div className="space-y-4">
                            <p className="text-black/60">Free eBooks</p>
                            <p className="text-black/60">
                                Development Tutorial
                            </p>
                            <p className="text-black/60">How to - Blog</p>
                            <p className="text-black/60">Youtube Playlist</p>
                        </div>
                    </div>
                </div>
                <div className="h-[1px] w-full bg-black/10 mb-4"></div>
                <div className="flex justify-between items-center">
                    <p className="text-sm text-black/40 -translate-x-[18px]">
                        JWC.CO © 2000-2023, All Rights Reserved
                    </p>
                    <div className="flex gap-3">
                        <div className="w-[46px] h-[30px] bg-white border border-gray-200 flex justify-center items-center rounded-md shadow-md">
                            <img
                                className="h-[11px]"
                                src="https://cdn.aona.co.th/1i312siaa/Visa.png"
                                alt="payment_img"
                            />
                        </div>
                        <div className="w-[46px] h-[30px] bg-white border border-gray-200 flex justify-center items-center rounded-md shadow-md">
                            <img
                                className="h-[15px]"
                                src="https://cdn.aona.co.th/1i312siaa/Mastercard.png"
                                alt="payment_img"
                            />
                        </div>
                        <div className="w-[46px] h-[30px] bg-white border border-gray-200 flex justify-center items-center rounded-md shadow-md">
                            <img
                                className="h-[9px]"
                                src="https://cdn.aona.co.th/1i312siaa/Paypal.png"
                                alt="payment_img"
                            />
                        </div>
                        <div className="w-[46px] h-[30px] bg-white border border-gray-200 flex justify-center items-center rounded-md shadow-md">
                            <img
                                className="h-[11px]"
                                src="https://cdn.aona.co.th/1i312siaa/ Pay.png"
                                alt="payment_img"
                            />
                        </div>
                        <div className="w-[46px] h-[30px] bg-white border border-gray-200 flex justify-center items-center rounded-md shadow-md">
                            <img
                                className="h-[11px]"
                                src="https://cdn.aona.co.th/1i312siaa/G Pay.png"
                                alt="payment_img"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
