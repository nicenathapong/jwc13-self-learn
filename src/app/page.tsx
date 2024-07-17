import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function HomePage() {
    return (
        <>
            <Navbar />
            <div className="h-[calc(100vh-260px)] relative bg-[#F2F0F1] w-full flex justify-center pt-[100px]">
                <div className="absolute top-0 left-0 w-full h-full flex justify-center">
                    <img
                        className="h-full w-auto"
                        src="https://cdn.aona.co.th/1i30rugkt/Frame%20127.png"
                        alt="home_bg"
                    />
                </div>
                <div className="relative container">
                    <h1 className="text-[64px] font-semibold leading-[64px] mb-8">
                        FIND CLOTHES
                        <br />
                        THAT MATCHES
                        <br />
                        YOUR STYLE
                    </h1>
                    <p className="text-black/60 mb-8">
                        Browse through our diverse range of meticulously crafted
                        garments,
                        <br />
                        designed to bring out your individuality and cater to
                        your sense of style.
                    </p>
                    <button
                        type="button"
                        className="w-[210px] h-[52px] bg-black text-white rounded-full font-medium mb-12"
                    >
                        Shop Now
                    </button>
                    <div className="flex gap-16">
                        <div>
                            <h1 className="text-[40px] font-bold">200+</h1>
                            <p className="-mt-2 text-black/60">
                                International Brands
                            </p>
                        </div>
                        <div>
                            <h1 className="text-[40px] font-bold">2,000+</h1>
                            <p className="-mt-2 text-black/60">
                                High-Quality Products
                            </p>
                        </div>
                        <div>
                            <h1 className="text-[40px] font-bold">30,000+</h1>
                            <p className="-mt-2 text-black/60">
                                Happy Customers
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[122px] bg-black flex justify-center items-center">
                <div className="container flex justify-between">
                    <img
                        className="h-[33px]"
                        src="https://cdn.aona.co.th/1i30sb1ku/versage.png"
                        alt="brand"
                    />
                    <img
                        className="h-[38px]"
                        src="https://cdn.aona.co.th/1i30sb1ku/zara-logo-1%201.png"
                        alt="brand"
                    />
                    <img
                        className="h-[36px]"
                        src="https://cdn.aona.co.th/1i30sb1ku/gucci-logo-1%201.png"
                        alt="brand"
                    />
                    <img
                        className="h-[31px]"
                        src="https://cdn.aona.co.th/1i30sb1ku/prada-logo-1%201.png"
                        alt="brand"
                    />
                    <img
                        className="h-[33px]"
                        src="https://cdn.aona.co.th/1i30sb1ku/calvin.png"
                        alt="brand"
                    />
                </div>
            </div>
            <div className="pt-[70px] pb-[100px] flex justify-center overflow-hidden">
                <div className="container">
                    <h1 className="text-5xl font-semibold text-center mb-16">
                        NEW ARRIVALS
                    </h1>
                    <div className="grid grid-cols-4 gap-5 mb-12">
                        <div>
                            <div className="relative w-full aspect-[1/1] bg-[#F0EEED] rounded-[20px] overflow-hidden mb-4">
                                <img
                                    className="w-full h-full"
                                    src="https://cdn.aona.co.th/1i30ubs4e/image%207.png"
                                    alt="product"
                                />
                            </div>
                            <h1 className="text-xl font-bold mb-1">
                                T-shirt with Tape Details
                            </h1>
                            <div className="flex mb-1.5 items-center gap-3">
                                <div className="flex gap-2">
                                    <p className="text-[#FFC633] text-lg">
                                        <i className="fas fa-star"></i>
                                    </p>
                                    <p className="text-[#FFC633] text-lg">
                                        <i className="fas fa-star"></i>
                                    </p>
                                    <p className="text-[#FFC633] text-lg">
                                        <i className="fas fa-star"></i>
                                    </p>
                                    <p className="text-[#FFC633] text-lg">
                                        <i className="fas fa-star"></i>
                                    </p>
                                    <p className="text-[#FFC633] text-lg max-w-[10px] overflow-hidden">
                                        <i className="fas fa-star"></i>
                                    </p>
                                </div>
                                <p className="text-sm">
                                    4.5/<span className="text-black/60">5</span>
                                </p>
                            </div>
                            <h1 className="text-2xl font-bold">$120</h1>
                        </div>
                        <div>
                            <div className="relative w-full aspect-[1/1] bg-[#F0EEED] rounded-[20px] overflow-hidden mb-4">
                                <img
                                    className="w-full h-full"
                                    src="https://cdn.aona.co.th/1i30ubs4e/image%208.png"
                                    alt="product"
                                />
                            </div>
                            <h1 className="text-xl font-bold mb-1">
                                Skinny Fit Jeans
                            </h1>
                            <div className="flex mb-1.5 items-center gap-3">
                                <div className="flex gap-2">
                                    <p className="text-[#FFC633] text-lg">
                                        <i className="fas fa-star"></i>
                                    </p>
                                    <p className="text-[#FFC633] text-lg">
                                        <i className="fas fa-star"></i>
                                    </p>
                                    <p className="text-[#FFC633] text-lg">
                                        <i className="fas fa-star"></i>
                                    </p>
                                    <p className="text-[#FFC633] text-lg max-w-[10px] overflow-hidden">
                                        <i className="fas fa-star"></i>
                                    </p>
                                </div>
                                <p className="text-sm">
                                    3.5/<span className="text-black/60">5</span>
                                </p>
                            </div>
                            <div className="flex gap-2.5 items-center">
                                <h1 className="text-2xl font-bold">$120</h1>
                                <h1 className="text-2xl font-bold text-[#999999] line-through decoration-[#999999] decoration-[2.5px]">
                                    $260
                                </h1>
                                <p className="h-[27px] w-[58px] bg-[#FF3333]/10 text-[#FF3333] flex justify-center items-center text-xs rounded-full font-medium">
                                    -20%
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="relative w-full aspect-[1/1] bg-[#F0EEED] rounded-[20px] overflow-hidden mb-4">
                                <img
                                    className="w-full h-full"
                                    src="https://cdn.aona.co.th/1i30ubs4e/image%209.png"
                                    alt="product"
                                />
                            </div>
                            <h1 className="text-xl font-bold mb-1">
                                Checkered Shirt
                            </h1>
                            <div className="flex mb-1.5 items-center gap-3">
                                <div className="flex gap-2">
                                    <p className="text-[#FFC633] text-lg">
                                        <i className="fas fa-star"></i>
                                    </p>
                                    <p className="text-[#FFC633] text-lg">
                                        <i className="fas fa-star"></i>
                                    </p>
                                    <p className="text-[#FFC633] text-lg">
                                        <i className="fas fa-star"></i>
                                    </p>
                                    <p className="text-[#FFC633] text-lg">
                                        <i className="fas fa-star"></i>
                                    </p>
                                    <p className="text-[#FFC633] text-lg max-w-[10px] overflow-hidden">
                                        <i className="fas fa-star"></i>
                                    </p>
                                </div>
                                <p className="text-sm">
                                    4.5/<span className="text-black/60">5</span>
                                </p>
                            </div>
                            <div className="flex gap-2.5 items-center">
                                <h1 className="text-2xl font-bold">$180</h1>
                            </div>
                        </div>
                        <div>
                            <div className="relative w-full aspect-[1/1] bg-[#F0EEED] rounded-[20px] overflow-hidden mb-4">
                                <img
                                    className="w-full h-full"
                                    src="https://cdn.aona.co.th/1i30ubs4e/image%2010.png"
                                    alt="product"
                                />
                            </div>
                            <h1 className="text-xl font-bold mb-1">
                                Checkered Shirt
                            </h1>
                            <div className="flex mb-1.5 items-center gap-3">
                                <div className="flex gap-2">
                                    <p className="text-[#FFC633] text-lg">
                                        <i className="fas fa-star"></i>
                                    </p>
                                    <p className="text-[#FFC633] text-lg">
                                        <i className="fas fa-star"></i>
                                    </p>
                                    <p className="text-[#FFC633] text-lg">
                                        <i className="fas fa-star"></i>
                                    </p>
                                    <p className="text-[#FFC633] text-lg">
                                        <i className="fas fa-star"></i>
                                    </p>
                                    <p className="text-[#FFC633] text-lg max-w-[10px] overflow-hidden">
                                        <i className="fas fa-star"></i>
                                    </p>
                                </div>
                                <p className="text-sm">
                                    4.5/<span className="text-black/60">5</span>
                                </p>
                            </div>
                            <div className="flex gap-2.5 items-center">
                                <h1 className="text-2xl font-bold">$130</h1>
                                <h1 className="text-2xl font-bold text-[#999999] line-through decoration-[#999999] decoration-[2.5px]">
                                    $160
                                </h1>
                                <p className="h-[27px] w-[58px] bg-[#FF3333]/10 text-[#FF3333] flex justify-center items-center text-xs rounded-full font-medium">
                                    -30%
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mb-[80px]">
                        <button
                            type="button"
                            className="w-[218px] h-[52px] border border-black/10 rounded-full font-medium"
                        >
                            View All
                        </button>
                    </div>
                    <div className="w-full h-[1px] bg-black/10 mb-[70px]">

                    </div>
                    <h1 className="text-5xl font-semibold text-center mb-16">
                        TOP SELLING
                    </h1>
                    <div className="grid grid-cols-4 gap-5 mb-12">
                        <div>
                            <div className="relative w-full aspect-[1/1] bg-[#F0EEED] rounded-[20px] overflow-hidden mb-4">
                                <img
                                    className="w-full h-full"
                                    src="https://cdn.aona.co.th/1i315hs16/image%207%20(1).png"
                                    alt="product"
                                />
                            </div>
                            <h1 className="text-xl font-bold mb-1">
                                Vertical Striped Shirt
                            </h1>
                            <div className="flex mb-1.5 items-center gap-3">
                                <div className="flex gap-2">
                                    <p className="text-[#FFC633] text-lg">
                                        <i className="fas fa-star"></i>
                                    </p>
                                    <p className="text-[#FFC633] text-lg">
                                        <i className="fas fa-star"></i>
                                    </p>
                                    <p className="text-[#FFC633] text-lg">
                                        <i className="fas fa-star"></i>
                                    </p>
                                    <p className="text-[#FFC633] text-lg">
                                        <i className="fas fa-star"></i>
                                    </p>
                                    <p className="text-[#FFC633] text-lg max-w-[10px] overflow-hidden">
                                        <i className="fas fa-star"></i>
                                    </p>
                                </div>
                                <p className="text-sm">
                                    4.5/<span className="text-black/60">5</span>
                                </p>
                            </div>
                            <div className="flex gap-2.5 items-center">
                                <h1 className="text-2xl font-bold">$212</h1>
                                <h1 className="text-2xl font-bold text-[#999999] line-through decoration-[#999999] decoration-[2.5px]">
                                    $230
                                </h1>
                                <p className="h-[27px] w-[58px] bg-[#FF3333]/10 text-[#FF3333] flex justify-center items-center text-xs rounded-full font-medium">
                                    -20%
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="relative w-full aspect-[1/1] bg-[#F0EEED] rounded-[20px] overflow-hidden mb-4">
                                <img
                                    className="w-full h-full"
                                    src="https://cdn.aona.co.th/1i315hs16/image%208%20(1).png"
                                    alt="product"
                                />
                            </div>
                            <h1 className="text-xl font-bold mb-1">
                            Courage Graphic T-shirt
                            </h1>
                            <div className="flex mb-1.5 items-center gap-3">
                                <div className="flex gap-2">
                                    <p className="text-[#FFC633] text-lg">
                                        <i className="fas fa-star"></i>
                                    </p>
                                    <p className="text-[#FFC633] text-lg">
                                        <i className="fas fa-star"></i>
                                    </p>
                                    <p className="text-[#FFC633] text-lg">
                                        <i className="fas fa-star"></i>
                                    </p>
                                    <p className="text-[#FFC633] text-lg max-w-[10px] overflow-hidden">
                                        <i className="fas fa-star"></i>
                                    </p>
                                </div>
                                <p className="text-sm">
                                    3.5/<span className="text-black/60">5</span>
                                </p>
                            </div>
                            <div className="flex gap-2.5 items-center">
                                <h1 className="text-2xl font-bold">$145</h1>
                            </div>
                        </div>
                        <div>
                            <div className="relative w-full aspect-[1/1] bg-[#F0EEED] rounded-[20px] overflow-hidden mb-4">
                                <img
                                    className="w-full h-full"
                                    src="https://cdn.aona.co.th/1i315hs16/image%209%20(1).png"
                                    alt="product"
                                />
                            </div>
                            <h1 className="text-xl font-bold mb-1">
                                Loose Fit Bermuda Shorts
                            </h1>
                            <div className="flex mb-1.5 items-center gap-3">
                                <div className="flex gap-2">
                                    <p className="text-[#FFC633] text-lg">
                                        <i className="fas fa-star"></i>
                                    </p>
                                    <p className="text-[#FFC633] text-lg">
                                        <i className="fas fa-star"></i>
                                    </p>
                                    <p className="text-[#FFC633] text-lg">
                                        <i className="fas fa-star"></i>
                                    </p>
                                    <p className="text-[#FFC633] text-lg">
                                        <i className="fas fa-star"></i>
                                    </p>
                                    <p className="text-[#FFC633] text-lg max-w-[10px] overflow-hidden">
                                        <i className="fas fa-star"></i>
                                    </p>
                                </div>
                                <p className="text-sm">
                                    4.5/<span className="text-black/60">5</span>
                                </p>
                            </div>
                            <div className="flex gap-2.5 items-center">
                                <h1 className="text-2xl font-bold">$80</h1>
                            </div>
                        </div>
                        <div>
                            <div className="relative w-full aspect-[1/1] bg-[#F0EEED] rounded-[20px] overflow-hidden mb-4">
                                <img
                                    className="w-full h-full"
                                    src="https://cdn.aona.co.th/1i315hs16/image%2010%20(1).png"
                                    alt="product"
                                />
                            </div>
                            <h1 className="text-xl font-bold mb-1">
                                Faded Skinny Jeans
                            </h1>
                            <div className="flex mb-1.5 items-center gap-3">
                                <div className="flex gap-2">
                                    <p className="text-[#FFC633] text-lg">
                                        <i className="fas fa-star"></i>
                                    </p>
                                    <p className="text-[#FFC633] text-lg">
                                        <i className="fas fa-star"></i>
                                    </p>
                                    <p className="text-[#FFC633] text-lg">
                                        <i className="fas fa-star"></i>
                                    </p>
                                    <p className="text-[#FFC633] text-lg">
                                        <i className="fas fa-star"></i>
                                    </p>
                                    <p className="text-[#FFC633] text-lg max-w-[10px] overflow-hidden">
                                        <i className="fas fa-star"></i>
                                    </p>
                                </div>
                                <p className="text-sm">
                                    4.5/<span className="text-black/60">5</span>
                                </p>
                            </div>
                            <div className="flex gap-2.5 items-center">
                                <h1 className="text-2xl font-bold">$210</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mb-[80px]">
                        <button
                            type="button"
                            className="w-[218px] h-[52px] border border-black/10 rounded-full font-medium"
                        >
                            View All
                        </button>
                    </div>
                    <div className="bg-[#F0F0F0] p-[64px] rounded-[40px] mb-[80px]">
                        <h1 className="text-center font-semibold text-5xl mb-[64px]">
                            BROWSE BY DRESS STYLE
                        </h1>
                        <div className="flex h-[289px] gap-5 mb-5">
                            <div className="relative min-w-[407px] h-full bg-white rounded-[20px] overflow-hidden">
                                <img
                                    className="absolute top-0 left-0 w-full h-full object-cover object-center"
                                    src="https://cdn.aona.co.th/1i30vmh8a/Frame%2061.png"
                                    alt="pd_image"
                                />
                                <h1 className="absolute z-10 top-[26px] left-[36px] text-4xl font-bold">
                                    Casual
                                </h1>
                            </div>
                            <div className="relative w-full h-full bg-white rounded-[20px] overflow-hidden">
                                <img
                                    className="absolute top-0 left-0 w-full h-full object-cover object-center"
                                    src="https://cdn.aona.co.th/1i30vmh8a/Frame%2062.png"
                                    alt="pd_image"
                                />
                                <h1 className="absolute z-10 top-[26px] left-[36px] text-4xl font-bold">
                                    Formal
                                </h1>
                            </div>
                        </div>
                        <div className="flex h-[289px] gap-5">
                            <div className="relative w-full h-full bg-white rounded-[20px] overflow-hidden">
                                <img
                                    className="absolute top-0 left-0 w-full h-full object-cover object-center"
                                    src="https://cdn.aona.co.th/1i30vmh8a/Frame%2064.png"
                                    alt="pd_image"
                                />
                                <h1 className="absolute z-10 top-[26px] left-[36px] text-4xl font-bold">
                                    Party
                                </h1>
                            </div>
                            <div className="relative min-w-[407px] h-full bg-white rounded-[20px] overflow-hidden">
                                <img
                                    className="absolute top-0 left-0 w-full h-full object-cover object-center scale-125"
                                    src="https://cdn.aona.co.th/1i30vmh8a/Frame%2063.png"
                                    alt="pd_image"
                                />
                                <h1 className="absolute z-10 top-[26px] left-[36px] text-4xl font-bold">
                                    Gym
                                </h1>
                            </div>
                        </div>
                    </div>
                    <h1 className="font-semibold text-5xl mb-[50px]">
                        OUR HAPPY CUSTOMERS
                    </h1>
                    <div className="relative grid grid-cols-3 gap-5 mb-[80px]">
                        <div className="px-[32px] py-[24px] rounded-[20px] border border-black/10">
                            <div className="flex gap-2 mb-3">
                                <p className="text-[#FFC633] text-xl">
                                    <i className="fas fa-star"></i>
                                </p>
                                <p className="text-[#FFC633] text-xl">
                                    <i className="fas fa-star"></i>
                                </p>
                                <p className="text-[#FFC633] text-xl">
                                    <i className="fas fa-star"></i>
                                </p>
                                <p className="text-[#FFC633] text-xl">
                                    <i className="fas fa-star"></i>
                                </p>
                                <p className="text-[#FFC633] text-xl">
                                    <i className="fas fa-star"></i>
                                </p>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                <h1 className="text-xl font-bold">Sarah M.</h1>
                                <div className="mb-0.5 w-[20px] h-[20px] rounded-full bg-[#01AB31] text-white flex justify-center items-center">
                                    <p className="text-[10px]">
                                        <i className="far fa-check"></i>
                                    </p>
                                </div>
                            </div>
                            <p className="text-black/60">
                                "I'm blown away by the quality and style of the
                                clothes I received from JWC.CO. From casual wear
                                to elegant dresses, every piece I've bought has
                                exceeded my expectations.”
                            </p>
                        </div>
                        <div className="px-[32px] py-[24px] rounded-[20px] border border-black/10">
                            <div className="flex gap-2 mb-3">
                                <p className="text-[#FFC633] text-xl">
                                    <i className="fas fa-star"></i>
                                </p>
                                <p className="text-[#FFC633] text-xl">
                                    <i className="fas fa-star"></i>
                                </p>
                                <p className="text-[#FFC633] text-xl">
                                    <i className="fas fa-star"></i>
                                </p>
                                <p className="text-[#FFC633] text-xl">
                                    <i className="fas fa-star"></i>
                                </p>
                                <p className="text-[#FFC633] text-xl">
                                    <i className="fas fa-star"></i>
                                </p>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                <h1 className="text-xl font-bold">Alex K.</h1>
                                <div className="mb-0.5 w-[20px] h-[20px] rounded-full bg-[#01AB31] text-white flex justify-center items-center">
                                    <p className="text-[10px]">
                                        <i className="far fa-check"></i>
                                    </p>
                                </div>
                            </div>
                            <p className="text-black/60">
                                "Finding clothes that align with my personal
                                style used to be a challenge until I discovered
                                JWC.CO. The range of options they offer is truly
                                remarkable, catering to a variety of tastes and
                                occasions.”
                            </p>
                        </div>
                        <div className="px-[32px] py-[24px] rounded-[20px] border border-black/10">
                            <div className="flex gap-2 mb-3">
                                <p className="text-[#FFC633] text-xl">
                                    <i className="fas fa-star"></i>
                                </p>
                                <p className="text-[#FFC633] text-xl">
                                    <i className="fas fa-star"></i>
                                </p>
                                <p className="text-[#FFC633] text-xl">
                                    <i className="fas fa-star"></i>
                                </p>
                                <p className="text-[#FFC633] text-xl">
                                    <i className="fas fa-star"></i>
                                </p>
                                <p className="text-[#FFC633] text-xl">
                                    <i className="fas fa-star"></i>
                                </p>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                <h1 className="text-xl font-bold">James L.</h1>
                                <div className="mb-0.5 w-[20px] h-[20px] rounded-full bg-[#01AB31] text-white flex justify-center items-center">
                                    <p className="text-[10px]">
                                        <i className="far fa-check"></i>
                                    </p>
                                </div>
                            </div>
                            <p className="text-black/60">
                                "As someone who's always on the lookout for
                                unique fashion pieces, I'm thrilled to have
                                stumbled upon JWC.CO. The selection of clothes
                                is not only diverse but also on-point with the
                                latest trends.”
                            </p>
                        </div>
                        <div className="absolute top-0 right-[calc(100%+20px)] w-[500px] h-[222px] px-[32px] py-[24px] rounded-[20px] border border-black/10 blur-[2px]">
                            <div className="flex gap-2 mb-3">
                                <p className="text-[#FFC633] text-xl">
                                    <i className="fas fa-star"></i>
                                </p>
                                <p className="text-[#FFC633] text-xl">
                                    <i className="fas fa-star"></i>
                                </p>
                                <p className="text-[#FFC633] text-xl">
                                    <i className="fas fa-star"></i>
                                </p>
                                <p className="text-[#FFC633] text-xl">
                                    <i className="fas fa-star"></i>
                                </p>
                                <p className="text-[#FFC633] text-xl">
                                    <i className="fas fa-star"></i>
                                </p>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                <h1 className="text-xl font-bold">Sarah M.</h1>
                                <div className="mb-0.5 w-[20px] h-[20px] rounded-full bg-[#01AB31] text-white flex justify-center items-center">
                                    <p className="text-[10px]">
                                        <i className="far fa-check"></i>
                                    </p>
                                </div>
                            </div>
                            <p className="text-black/60">
                                "I'm blown away by the quality and style of the
                                clothes I received from JWC.CO. From casual wear
                                to elegant dresses, every piece I've bought has
                                exceeded my expectations.”
                            </p>
                        </div>
                        <div className="absolute top-0 left-[calc(100%+20px)] w-[500px] h-[222px] px-[32px] py-[24px] rounded-[20px] border border-black/10 blur-[2px]">
                            <div className="flex gap-2 mb-3">
                                <p className="text-[#FFC633] text-xl">
                                    <i className="fas fa-star"></i>
                                </p>
                                <p className="text-[#FFC633] text-xl">
                                    <i className="fas fa-star"></i>
                                </p>
                                <p className="text-[#FFC633] text-xl">
                                    <i className="fas fa-star"></i>
                                </p>
                                <p className="text-[#FFC633] text-xl">
                                    <i className="fas fa-star"></i>
                                </p>
                                <p className="text-[#FFC633] text-xl">
                                    <i className="fas fa-star"></i>
                                </p>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                <h1 className="text-xl font-bold">Mooen</h1>
                                <div className="mb-0.5 w-[20px] h-[20px] rounded-full bg-[#01AB31] text-white flex justify-center items-center">
                                    <p className="text-[10px]">
                                        <i className="far fa-check"></i>
                                    </p>
                                </div>
                            </div>
                            <p className="text-black/60">
                                "As someone who's always on the lookout for
                                unique fashion pieces, I'm thrilled to have
                                stumbled upon JWC.CO. The selection of clothes
                                is not only diverse but also on-point with the
                                latest trends.”
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
