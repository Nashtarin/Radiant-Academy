import Image from "next/image";
import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Contact from '../components/Contact';

const about = () => {
    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 700,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
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
        <section style={{ backgroundImage: "url('https://i.ibb.co/ZhY2n1C/coverBg.png')", backgroundRepeat: "repeat", backgroundAttachment: "fixed" }} >
            <Zoom>
                <h1 className="text-center text-white text-4xl font-bold py-12">
                    Welcome To Radiant Academy
                </h1>
            </Zoom>

            <div className="text-center text-white">●</div>

            <div className="w-3/5 mx-auto">
                <Slider {...settings}>
                    <div className="py-8 px-0 sm:px-8 text-white">
                        <div>
                            <h1 className="text-center font-semibold text-3xl my-5">Who We Are?</h1>
                            <p className="text-center">We as a platform of about hundred plus lecturer around the world with thousand plus pre organized courses serving more then millions of students and learners through the globe. We are growing everyday, According to the past years of experiences we are building our platform more accessible and constantly adding new features for our students and teachers.</p>
                        </div>
                    </div>
                </Slider>
                <style jsx global>
                    {`
                                        .course-card .slick-list{
                                            padding-top: 0;
                                            padding-bottom: 2rem;
                                        }
                                        .course-card .slick-prev, .course-card .slick-next {
                                            top: 2.5rem;
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
                <Slider {...settings}>
                    <div className="py-8 px-0 sm:px-8  text-white">
                        <div>
                            <h1 className="text-center font-semibold text-3xl my-5">Our Mission</h1>
                            <h3 className="text-center font-semibold text-xl my-5 text-rose-500">Spreading Knowledge At Low Cost</h3>
                            <p className="text-center">we are dedicated to provide recognizable and remarkable courses through the world on les cost then other competitor so that everyone around the world can access their desired Knowledge.</p>
                        </div>
                    </div>
                </Slider>
                <style jsx global>
                    {`
                        .course-card .slick-list{
                            padding-top: 0;
                            padding-bottom: 2rem;
                        }
                        .course-card .slick-prev, .course-card .slick-next {
                            top: 2.5rem;
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
                <Slider {...settings}>
                    <div className="py-8 px-0 sm:px-8  text-white">
                        <div>
                            <h1 className="text-center font-semibold text-3xl my-5">Our Vision</h1>
                            <h3 className="text-center font-semibold text-xl my-5 text-rose-5">Providing Education All Over The World</h3>
                            <p className="text-center">Our key motive is to reach those countries and places where education is a burden over family expenses and provide mandatory education so that the future of the world does not rely on un professional and illiterate people.</p>
                        </div>
                    </div>
                </Slider>
                <style jsx global>
                    {`
                        .course-card .slick-list{
                            padding-top: 0;
                            padding-bottom: 2rem;
                        }
                        .course-card .slick-prev, .course-card .slick-next {
                            top: 2.5rem;
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

            <div className="container py-5 mx-auto">
                <div className="mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 mx-auto px-5 sm:px-10 md:px-20 py-10">
                        <div>
                            <h1 className="text-rose-500 text-2xl font-semibold">Subscribe To Our Newsletter Today</h1>
                            <p className="text-slate-400 text-sm">No bloats and zero spams. Be the first to join.</p>
                        </div>
                        <div className="mt-5 sm:mt-0 md:text-right">
                            <form>
                                <input type="text" placeholder="Enter your E-mail" className="px-3 py-2 rounded-md focus:outline-none mr-3 w-3/5" />
                                <button type="submit" className="px-5 py-2 bg-rose-500 rounded-md border-0 text-white font-normal">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team section  */}
            <section className="container mx-auto pb-7">
                <h1 className="text-center text-white text-4xl font-bold py-12">Meet Our Dedicated Team</h1>
                <div className='container grid md:grid-cols-3 xs:grid-cols-1 gap-4 px-5'>
                    <div className="single-card rounded-xl bg-slate-100 dark:bg-slate-700 shadow-xl hover:shadow-zinc-400 dark:hover:shadow-violet-500 transition duration-300 px-3 mb-7 my-20 md:mb-0">
                        <div className="grid place-content-center relative bottom-12">
                            <Image
                                src="/img/jahid.jpg"
                                height="150"
                                width="150"
                                alt="User"
                                draggable="false"
                                className="rounded-full"
                            />
                        </div>
                        <div className="flex justify-center">
                            <h1 className="text-slate-700 dark:text-slate-200 font-semibold text-xl">
                                Md. Jahidul Islam
                            </h1>
                        </div>
                        <div className="flex justify-center">
                            <h4 className="text-slate-700 dark:text-slate-200  text-md">
                                Team Leader
                            </h4>
                        </div>
                        <div>
                            <p className="text-slate-500 dark:text-slate-400 my-5 w-5/6 mx-auto text-center pb-3">“In this project i served as the Team Leader, and led the team of total seven members. I maintained the administrative actions and together build this production ready web app.”</p>
                        </div>
                        <div className="flex justify-center pb-5">
                            <a href="https://www.linkedin.com/in/jahidul-islam-076a8b216/" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-blue-500 hover:text-blue-500 duration-300">
                                    <FaLinkedinIn />
                                </span>
                            </a>
                            <a href="https://www.facebook.com/zahidul.islam.10420" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-blue-600 hover:text-blue-600 duration-300">
                                    <FaFacebook />
                                </span>
                            </a>
                            <a href="https://github.com/jahidulislamjahid" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-slate-900 hover:text-slate-900 duration-300">
                                    <FaGithub />
                                </span>
                            </a>
                            <a href="https://twitter.com/Zahidul15053004" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-blue-600 hover:text-blue-600 duration-300">
                                    <FaTwitter />
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="single-card rounded-xl bg-slate-100 dark:bg-slate-700 shadow-xl hover:shadow-zinc-400 dark:hover:shadow-violet-500 transition duration-300 px-3 mb-7 my-20 md:mb-0">
                        <div className="grid place-content-center relative bottom-12">
                            <Image
                                src="/img/person1.png"
                                height="150"
                                width="150"
                                alt="User"
                                draggable="false"
                                className="rounded-full"
                            />
                        </div>
                        <div className="flex justify-center">
                            <h1 className="text-slate-700 dark:text-slate-200 font-semibold text-xl">
                                Iftikher Rasha
                            </h1>
                        </div>
                        <div>
                            <p className="text-slate-500 dark:text-slate-400 my-5 w-5/6 mx-auto text-center pb-3">“I received my certificate, and I would like to thank you for your support. Your course was challenging, but you were always there supporting me and ready to help. I enjoyed your class tremendously.”</p>
                        </div>
                        <div className="flex justify-center pb-5">
                            <a href="" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-blue-500 hover:text-blue-500 duration-300">
                                    <FaLinkedinIn />
                                </span>
                            </a>
                            <a href="" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-blue-600 hover:text-blue-600 duration-300">
                                    <FaFacebook />
                                </span>
                            </a>
                            <a href="" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-slate-900 hover:text-slate-900 duration-300">
                                    <FaGithub />
                                </span>
                            </a>
                            <a href="" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-blue-600 hover:text-blue-600 duration-300">
                                    <FaTwitter />
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="single-card rounded-xl bg-slate-100 dark:bg-slate-700 shadow-xl hover:shadow-zinc-400 dark:hover:shadow-violet-500 transition duration-300 px-3 mb-7 my-20 md:mb-0">
                        <div className="grid place-content-center relative bottom-12">
                            <Image
                                src="/img/person1.png"
                                height="150"
                                width="150"
                                alt="User"
                                draggable="false"
                                className="rounded-full"
                            />
                        </div>
                        <div className="flex justify-center">
                            <h1 className="text-slate-700 dark:text-slate-200 font-semibold text-xl">
                                Md. Shahriar Mehedi
                            </h1>
                        </div>
                        <div>
                            <p className="text-slate-500 dark:text-slate-400 my-5 w-5/6 mx-auto text-center pb-3">“I received my certificate, and I would like to thank you for your support. Your course was challenging, but you were always there supporting me and ready to help. I enjoyed your class tremendously.”</p>
                        </div>
                        <div className="flex justify-center pb-5">
                            <a href="" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-blue-500 hover:text-blue-500 duration-300">
                                    <FaLinkedinIn />
                                </span>
                            </a>
                            <a href="" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-blue-600 hover:text-blue-600 duration-300">
                                    <FaFacebook />
                                </span>
                            </a>
                            <a href="" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-slate-900 hover:text-slate-900 duration-300">
                                    <FaGithub />
                                </span>
                            </a>
                            <a href="" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-blue-600 hover:text-blue-600 duration-300">
                                    <FaTwitter />
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="single-card rounded-xl bg-slate-100 dark:bg-slate-700 shadow-xl hover:shadow-zinc-400 dark:hover:shadow-violet-500 transition duration-300 px-3 mb-7 my-20 md:mb-0">
                        <div className="grid place-content-center relative bottom-12">
                            <Image
                                src="/img/person1.png"
                                height="150"
                                width="150"
                                alt="User"
                                draggable="false"
                                className="rounded-full"
                            />
                        </div>
                        <div className="flex justify-center">
                            <h1 className="text-slate-700 dark:text-slate-200 font-semibold text-xl">
                                Nastarin Nur
                            </h1>
                        </div>
                        <div>
                            <p className="text-slate-500 dark:text-slate-400 my-5 w-5/6 mx-auto text-center pb-3">“I received my certificate, and I would like to thank you for your support. Your course was challenging, but you were always there supporting me and ready to help. I enjoyed your class tremendously.”</p>
                        </div>
                        <div className="flex justify-center pb-5">
                            <a href="" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-blue-500 hover:text-blue-500 duration-300">
                                    <FaLinkedinIn />
                                </span>
                            </a>
                            <a href="" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-blue-600 hover:text-blue-600 duration-300">
                                    <FaFacebook />
                                </span>
                            </a>
                            <a href="" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-slate-900 hover:text-slate-900 duration-300">
                                    <FaGithub />
                                </span>
                            </a>
                            <a href="" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-blue-600 hover:text-blue-600 duration-300">
                                    <FaTwitter />
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="single-card rounded-xl bg-slate-100 dark:bg-slate-700 shadow-xl hover:shadow-zinc-400 dark:hover:shadow-violet-500 transition duration-300 px-3 mb-7 my-20 md:mb-0">
                        <div className="grid place-content-center relative bottom-12">
                            <Image
                                src="/img/iftakher.png"
                                height="150"
                                width="150"
                                alt="User"
                                draggable="false"
                                className="rounded-full"
                            />
                        </div>
                        <div className="flex justify-center">
                            <h1 className="text-slate-700 dark:text-slate-200 font-semibold text-xl">
                                Iftakher Hossen
                            </h1>
                        </div>
                        <div>
                            <p className="text-slate-500 dark:text-slate-400 my-5 w-5/6 mx-auto text-center pb-3">“I received my certificate, and I would like to thank you for your support. Your course was challenging, but you were always there supporting me and ready to help. I enjoyed your class tremendously.”</p>
                        </div>
                        <div className="flex justify-center pb-5">
                            <a href="https://www.linkedin.com/in/iftakher-hossen/" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-blue-500 hover:text-blue-500 duration-300">
                                    <FaLinkedinIn />
                                </span>
                            </a>
                            <a href="https://www.instagram.com/hossen_iftakher/" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-blue-600 hover:text-blue-600 duration-300">
                                    <FaInstagram />
                                </span>
                            </a>
                            <a href="https://www.facebook.com/hosseniftakher/" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-blue-600 hover:text-blue-600 duration-300">
                                    <FaFacebook />
                                </span>
                            </a>
                            <a href="https://github.com/iftakherhossen" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-slate-900 hover:text-slate-900 duration-300">
                                    <FaGithub />
                                </span>
                            </a>
                            <a href="https://twitter.com/iftakher_hossen" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-blue-600 hover:text-blue-600 duration-300">
                                    <FaTwitter />
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="single-card rounded-xl bg-slate-100 dark:bg-slate-700 shadow-xl hover:shadow-zinc-400 dark:hover:shadow-violet-500 transition duration-300 px-3 mb-7 my-20 md:mb-0">
                        <div className="grid place-content-center relative bottom-12">
                            <Image
                                src="/img/person1.png"
                                height="150"
                                width="150"
                                alt="User"
                                draggable="false"
                                className="rounded-full"
                            />
                        </div>
                        <div className="flex justify-center">
                            <h1 className="text-slate-700 dark:text-slate-200 font-semibold text-xl">
                                Mostofa Kabir
                            </h1>
                        </div>
                        <div>
                            <p className="text-slate-500 dark:text-slate-400 my-5 w-5/6 mx-auto text-center pb-3">“I received my certificate, and I would like to thank you for your support. Your course was challenging, but you were always there supporting me and ready to help. I enjoyed your class tremendously.”</p>
                        </div>
                        <div className="flex justify-center pb-5">
                            <a href="" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-blue-500 hover:text-blue-500 duration-300">
                                    <FaLinkedinIn />
                                </span>
                            </a>
                            <a href="" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-blue-600 hover:text-blue-600 duration-300">
                                    <FaFacebook />
                                </span>
                            </a>
                            <a href="" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-slate-900 hover:text-slate-900 duration-300">
                                    <FaGithub />
                                </span>
                            </a>
                            <a href="" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-blue-600 hover:text-blue-600 duration-300">
                                    <FaTwitter />
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="single-card rounded-xl bg-slate-100 dark:bg-slate-700 shadow-xl hover:shadow-zinc-400 dark:hover:shadow-violet-500 transition duration-300 px-3 mb-7 my-20 md:mb-0">
                        <div className="grid place-content-center relative bottom-12">
                            <Image
                                src="/img/person1.png"
                                height="150"
                                width="150"
                                alt="User"
                                draggable="false"
                                className="rounded-full"
                            />
                        </div>
                        <div className="flex justify-center">
                            <h1 className="text-slate-700 dark:text-slate-200 font-semibold text-xl">
                                Md. Ashadujjaman
                            </h1>
                        </div>
                        <div>
                            <p className="text-slate-500 dark:text-slate-400 my-5 w-5/6 mx-auto text-center pb-3">“I received my certificate, and I would like to thank you for your support. Your course was challenging, but you were always there supporting me and ready to help. I enjoyed your class tremendously.”</p>
                        </div>
                        <div className="flex justify-center pb-5">
                            <a href="" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-blue-500 hover:text-blue-500 duration-300">
                                    <FaLinkedinIn />
                                </span>
                            </a>
                            <a href="" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-blue-600 hover:text-blue-600 duration-300">
                                    <FaFacebook />
                                </span>
                            </a>
                            <a href="" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-slate-900 hover:text-slate-900 duration-300">
                                    <FaGithub />
                                </span>
                            </a>
                            <a href="" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-blue-600 hover:text-blue-600 duration-300">
                                    <FaTwitter />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Fade>
                <Contact />
            </Fade>
        </section>
    );
};

export default about;