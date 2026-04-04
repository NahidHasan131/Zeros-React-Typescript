import ProductBanner from '../../assets/Product-banner.png';

const NewArrival = () => {
    return (
        <div className="flex justify-between items-center flex-col md:flex-row gap-5 pb-10">
            <div className="md:w-5/12  bg-cyan-400 h-full rounded pt-5 pl-5 text-white/80 hidden md:block">
                <div className='relative'>
                    <h3 className="text-4xl font-black cursor-pointer">Z <span className="text-2xl ">ze<span className="">ros</span></span></h3>
                    <div className="flex justify-between items-center py-14">
                        <h2 className="text-5xl font-bold leading-14 inline-block">
                            Your Style, <br />
                            Delivered. <br />
                            Exclusively <br />
                            Online.
                        </h2>
                        <h1 className="font-black  inline-block leading-0 text-[350px] text-white/20">Z</h1>
                    </div>
                    <img className='absolute bottom-0 right-0 h-90 rounded' src={ProductBanner} alt="" />
                    <p className="pt-26 pb-6">www.zeros.com</p>
                </div>
            </div>
            <div className="md:w-7/12">
                <div className="bg-gray-100 flex items-center justify-between mb-6 rounded">
                    <div className="w-5/12">
                        <img className='h-60' src="https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/1.webp" alt="" />
                    </div>
                    <div>
                        <div className="p-5">
                            <span className="text-gray-700 text-xs font-semibold tracking-[1px] uppercase opacity-80">Timeless Elegance</span>
                            <h3 className="text-gray-900 text-[28px] font-black py-2 uppercase tracking-wide leading-tight">Discover our accessories collections</h3>
                            <button className="mt-2 bg-cyan-400 text-xs font-semibold py-2 px-3 rounded text-white hover:bg-cyan-500 transition-colors duration-300">
                                Shop Now →
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 flex items-center justify-between  rounded">
                    <div  className="">
                        <div className="md:pl-15   p-5">
                            <span className="text-gray-700 text-xs font-semibold tracking-[1px] uppercase opacity-80">Find your perfect pair</span>
                            <h3 className="text-gray-900 text-3xl font-black py-3 uppercase tracking-wide leading-tight">Explore our shoes collections</h3>
                            <button className="mt-2 bg-cyan-400 text-xs font-semibold py-2 px-3 rounded text-white hover:bg-cyan-500 transition-colors duration-300">
                                Shop Now →
                            </button>
                        </div>
                    </div>
                    <div className="w-7/12">
                        <img className="pr-5 h-72 w-full" src="https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/1.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewArrival;