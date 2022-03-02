import Image from "next/image";
import { FaStar, FaStarHalf } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const TestimonialSection = () => {
    
    var settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 700,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
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
        <div className="bg-white dark:bg-slate-800">
            <div className="w-5/6 mx-auto py-20 ">
                <h1 className="text-4xl	font-bold text-violet-800 dark:text-violet-400 pt-20 text-center">What others are saying</h1>
                <div className="my-6 review-card">
                    <Slider {...settings}>
                        <div className="single-card rounded-xl bg-slate-100 dark:bg-slate-700 shadow-xl hover:shadow-zinc-400 dark:hover:shadow-violet-500 transition duration-300 px-3 mb-7 my-20 md:mb-0">
                            <div className="grid place-content-center relative bottom-12">
                                <Image
                                    src="/img/person1.png"
                                    height="120"
                                    width="120"
                                    alt="User"
                                    draggable="false"
                                />
                            </div>
                            <div className="flex justify-center">
                                <span className="text-center text-xl text-rose-500 px-1"><FaStar /></span>
                                <span className="text-center text-xl text-rose-500 px-1"><FaStar /></span>
                                <span className="text-center text-xl text-rose-500 px-1"><FaStar /></span>
                                <span className="text-center text-xl text-rose-500 px-1"><FaStar /></span>
                                <span className="text-center text-xl text-rose-500 px-1"><FaStarHalf /></span>
                            </div>
                            <div>
                                <p className="text-slate-500 dark:text-slate-400 my-5 w-5/6 mx-auto text-center pb-7">“I received my certificate, and I would like to thank you for your support. Your course was challenging, but you were always there supporting me and ready to help. I enjoyed your class tremendously.”</p>
                            </div>
                        </div>
                        <div className="single-card rounded-xl bg-slate-100 dark:bg-slate-700 shadow-xl hover:shadow-zinc-400 dark:hover:shadow-violet-500 transition duration-300 px-3 mb-7 my-20 md:mb-0">
                            <div className="grid place-content-center relative bottom-12 ">
                                <Image
                                    src="/img/person2.png"
                                    height="120"
                                    width="120"
                                    alt="User"
                                    draggable="false"
                                />
                            </div>
                            <div className="flex justify-center">
                                <span className="text-center text-xl text-rose-500 px-1"><FaStar /></span>
                                <span className="text-center text-xl text-rose-500 px-1"><FaStar /></span>
                                <span className="text-center text-xl text-rose-500 px-1"><FaStar /></span>
                                <span className="text-center text-xl text-rose-500 px-1"><FaStar /></span>
                                <span className="text-center text-xl text-rose-500 px-1"><FaStar /></span>
                            </div>
                            <div>
                                <p className="text-slate-500 dark:text-slate-400 my-5 w-5/6 mx-auto text-center pb-7">“I received my certificate, and I would like to thank you for your support. Your course was challenging, but you were always there supporting me and ready to help. I enjoyed your class tremendously.”</p>
                            </div>
                        </div>
                        <div className="single-card rounded-xl bg-slate-100 dark:bg-slate-700 shadow-xl hover:shadow-zinc-400 dark:hover:shadow-violet-500 transition duration-300 px-3 mb-7 my-20 md:mb-0">
                            <div className="grid place-content-center relative bottom-12">
                                <Image
                                    src="/img/person3.png"
                                    height="120"
                                    width="120"
                                    alt="User"
                                    draggable="false"
                                />
                            </div>
                            <div className="flex justify-center">
                                <span className="text-center text-xl text-rose-500 px-1"><FaStar /></span>
                                <span className="text-center text-xl text-rose-500 px-1"><FaStar /></span>
                                <span className="text-center text-xl text-rose-500 px-1"><FaStar /></span>
                                <span className="text-center text-xl text-rose-500 px-1"><FaStar /></span>
                            </div>
                            <div>
                                <p className="text-slate-500 dark:text-slate-400 my-5 w-5/6 mx-auto text-center pb-7">“I received my certificate, and I would like to thank you for your support. Your course was challenging, but you were always there supporting me and ready to help. I enjoyed your class tremendously.”</p>
                            </div>
                        </div>
                        <div className="single-card rounded-xl bg-slate-100 dark:bg-slate-700 shadow-xl  hover:shadow-zinc-400 dark:hover:shadow-violet-500 transition duration-300 px-3 mb-7 my-20 md:mb-0">
                            <div className="grid place-content-center relative bottom-12">
                                <Image
                                    src="/img/person1.png"
                                    height="120"
                                    width="120"
                                    alt="User"
                                    draggable="false"
                                />
                            </div>
                            <div className="flex justify-center">
                                <span className="text-center text-xl text-rose-500 px-1"><FaStar /></span>
                                <span className="text-center text-xl text-rose-500 px-1"><FaStar /></span>
                                <span className="text-center text-xl text-rose-500 px-1"><FaStar /></span>
                                <span className="text-center text-xl text-rose-500 px-1"><FaStar /></span>
                                <span className="text-center text-xl text-rose-500 px-1"><FaStarHalf /></span>
                            </div>
                            <div>
                                <p className="text-slate-500 dark:text-slate-400 my-5 w-5/6 mx-auto text-center pb-7">“I received my certificate, and I would like to thank you for your support. Your course was challenging, but you were always there supporting me and ready to help. I enjoyed your class tremendously.”</p>
                            </div>
                        </div>
                    </Slider>
                    <style jsx global>
                        {`
                            .single-card {
                                width: 90% !important;
                            }
                            .review-card .slick-list{
                                padding-bottom: 4rem !important;
                            }
                            .slick-prev:before {
                                color: #32007E;
                            }
                            
                            .slick-next:before {
                                color: #32007E;
                            }
                            
                            .slick-slide:focus {
                                outline: none;
                            }
                            
                            .slick-dots {
                                bottom: 0px;
                            }
                            
                            .slick-dots li button:before {
                                font-size: 0.75rem;
                                opacity: 1;
                                color: #CCDEE2;
                            }
                            
                            .slick-dots li.slick-active button:before {
                                opacity: .75;
                                color: #F2522F;
                            }
                        `}
                    </style>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;