

const Slider = () => {
    return (
        <div>
            <div className="carousel w-full mt-5 rounded-xl h-[40vh] lg:h-[80vh]">
                <div id="slide1" className="carousel-item relative w-full  ">

                    {/* title */}
                    <div className="bg-black/50 absolute w-full h-full flex flex-col justify-center items-center text-white P-8 space-y-5">
                        <h1 className="text-3xl lg:text-6xl font-serif font-bold text-center ">Buy and Sell Amazing Places</h1>
                        <h1 className="lg:text-3xl text-center ">EQUESTRIAL/HISTORIC/WATERFRONT</h1>
                    </div>
                    <img src="https://i.ibb.co/pQhfR93/banner-1.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="bg-black/50 absolute w-full h-full flex flex-col justify-center items-center text-white P-8 space-y-5">
                        <h1 className="text-3xl lg:text-6xl font-serif font-bold text-center ">Explore Unique And Lifestyles</h1>
                        <h1 className="lg:text-3xl text-center ">EQUESTRIAL/HISTORIC/WATERFRONT</h1>
                    </div>
                    <img src="https://i.ibb.co/2nY0Bz7/banner-2.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="bg-black/50 absolute w-full h-full flex flex-col justify-center items-center text-white P-8 space-y-5">
                        <h1 className="text-3xl lg:text-6xl font-serif font-bold text-center ">Discover Luxury Homes</h1>
                        <h1 className="lg:text-3xl text-center ">EQUESTRIAL/HISTORIC/WATERFRONT</h1>
                    </div>
                    <img src="https://i.ibb.co/hgtNfTc/banner-3.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className="bg-black/50 absolute w-full h-full flex flex-col justify-center items-center text-white P-8 space-y-4">
                        <h1 className="text-3xl lg:text-6xl font-serif font-bold text-center ">Buy and Sell Amazing Places</h1>
                        <h1 className="lg:text-3xl text-center ">EQUESTRIAL/HISTORIC/WATERFRONT</h1>
                    </div>
                    <img src="https://i.ibb.co/Gp108bD/banner-4.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;