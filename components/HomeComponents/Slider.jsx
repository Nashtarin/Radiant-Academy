import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderSection = () => {
    var settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 700,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                },
            },
            {
                breakpoint: 480,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                },
            },
        ],
    };

    return (
        <>
            <div className="w-5/6 mx-auto">
                <div className="flex flex-col justify-center items-center lg:flex-row lg:my-20">
                    <div className="w-5/6 lg:w-[50%] py-14 xl:pl-10">
                        <div>
                            <Slider {...settings}>
                                <div>
                                    <h2 className="text-6xl font-bold">Problem Solving</h2>
                                    <p className="py-5 text-2xl lg:w-3/4 xl:w-1/2">We have got 20+ online solutions for programmers, who is excited?</p>
                                </div>

                                
                                <div>
                                    <h2 className="text-6xl font-bold">Quiz System</h2>
                                    <p className="py-5 text-2xl lg:w-3/4 xl:w-1/2">We have got 20+ online solutions for programmers, who is excited?</p>
                                </div>

                                
                                <div>
                                    <h2 className="text-6xl font-bold">Code Editor</h2>
                                    <p className="py-5 text-2xl lg:w-3/4 xl:w-1/2">We have got 20+ online solutions for programmers, who is excited?</p>
                                </div>
                            </Slider>
                        </div>
                        <button className="bg-rose-500 rounded-md text-white px-7 py-3 my-5">
                            Try it out
                        </button>
                    </div>
                    <div className="w-5/6 lg:w-[50%] py-5">
                        <div className="w-5/6 mx-auto">
                            <Image
                                src="/img/hero.png"
                                width="500"
                                height="432"
                                alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SliderSection;
