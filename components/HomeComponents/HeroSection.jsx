import Image from "next/image";
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const HeroSection = () => {
    var settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
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
                    dots: false,
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
            <div className="bg-white dark:bg-slate-800">
                <div className="w-5/6 mx-auto ">
                    <div className="flex flex-col justify-center items-center lg:flex-row lg:py-20">
                        <div className="w-5/6 lg:w-[50%] py-14 xl:pl-10">
                            <div className="dark:text-white">
                                <Slider {...settings}>
                                    <div>
                                        <h2 className="text-5xl md:text-6xl font-bold text-violet-800 dark:text-violet-400">Problem Solving</h2>
                                        <p className="py-5 text-2xl lg:w-3/4 xl:w-1/2">We have got 20+ online solutions for programmers, who is excited?</p>
                                    </div>


                                    <div>
                                        <h2 className="text-5xl md:text-6xl font-bold text-violet-800 dark:text-violet-400">Quiz System</h2>
                                        <p className="py-5 text-2xl lg:w-3/4 xl:w-1/2">We have got 20+ online solutions for programmers, who is excited?</p>
                                    </div>


                                    <div>
                                        <h2 className="text-5xl md:text-6xl font-bold text-violet-800 dark:text-violet-400">Code Editor</h2>
                                        <p className="py-5 text-2xl lg:w-3/4 xl:w-1/2">We have got 20+ online solutions for programmers, who is excited?</p>
                                    </div>
                                </Slider>
                                <style jsx global>
                                    {`
                                        .slick-list{
                                            padding-bottom: 0 !important;
                                        }
                                    `}
                                </style>
                            </div>
                            <Link passHref href="/register">
                                <button className="bg-rose-500 animate-[pulse_2s_ease-in-out_infinite] rounded-md text-white px-7 py-3 my-5 flex justify-center items-center">
                                    Try it out &nbsp; <FaArrowRight style={{ fontSize: '14px', marginTop: '2px' }} />
                                </button>
                            </Link>
                        </div>
                        <div className="w-5/6 lg:w-[50%] py-5">
                            <div className="w-5/6 mx-auto">
                                <Image
                                    src="https://i.postimg.cc/qR1FkLYw/hero.png"
                                    width="500"
                                    height="432"
                                    alt="Hero Image"
                                    draggable="false"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;