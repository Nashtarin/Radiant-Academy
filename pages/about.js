import Image from "next/image";
import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaLink } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Contact from '../components/Contact';

const about = () => {
    return (
        <section className="bg-white dark:bg-slate-800 text-slate-700 dark:text-white">
            {/* Team section  */}
            <section className="container mx-auto pb-7">
                <h2 className="text-center text-4xl font-bold py-12">Meet Our Dedicated Team</h2>
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
                            <h2 className="text-slate-700 dark:text-slate-200 font-semibold text-xl">
                                Md. Jahidul Islam
                            </h2>
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
                                src="/img/iftikharrasha.jpg"
                                height="150"
                                width="150"
                                alt="User"
                                draggable="false"
                                className="rounded-full"
                            />
                        </div>
                        <div className="flex justify-center">
                            <h2 className="text-slate-700 dark:text-slate-200 font-semibold text-xl">
                                Iftikhar Rasha
                            </h2>
                        </div>
                        <div className="flex justify-center">
                            <h4 className="text-slate-700 dark:text-slate-200  text-md">
                                Project Manager
                            </h4>
                        </div>
                        <div>
                            <p className="text-slate-500 dark:text-slate-400 my-5 w-5/6 mx-auto text-center pb-3">“I was project manager of our team and also contributed on both client and server side. Helped the backend developer designing mongoose schema and maintained the redux system.”</p>
                        </div>
                        <div className="flex justify-center pb-5">
                            <a href="https://www.linkedin.com/in/iftikharrasha/" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-blue-500 hover:text-blue-500 duration-300">
                                    <FaLinkedinIn />
                                </span>
                            </a>
                            <a href="https://github.com/iftikharrasha" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-slate-900 hover:text-slate-900 duration-300">
                                    <FaGithub />
                                </span>
                            </a>
                            <a href="https://www.facebook.com/iftikhar.rasha" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-blue-600 hover:text-blue-600 duration-300">
                                    <FaFacebook />
                                </span>
                            </a>
                            <a href="https://iftikhar-rasha.web.app/" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-blue-600 hover:text-blue-600 duration-300">
                                    <FaLink />
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="single-card rounded-xl bg-slate-100 dark:bg-slate-700 shadow-xl hover:shadow-zinc-400 dark:hover:shadow-violet-500 transition duration-300 px-3 mb-7 my-20 md:mb-0">
                        <div className="grid place-content-center relative bottom-12">
                            <Image
                                src="/img/shahriar.jpg"
                                height="150"
                                width="150"
                                alt="User"
                                draggable="false"
                                className="rounded-full"
                            />
                        </div>
                        <div className="flex justify-center">
                            <h2 className="text-slate-700 dark:text-slate-200 font-semibold text-xl">
                                Md. Shahriar Mehedi
                            </h2>
                        </div>
                        <div className="flex justify-center">
                            <h4 className="text-slate-700 dark:text-slate-200  text-md">
                                Backend Developer
                            </h4>
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
                                src="/img/Nashtarin.jpg"
                                height="150"
                                width="150"
                                alt="User"
                                draggable="false"
                                className="rounded-full"
                            />
                        </div>
                        <div className="flex justify-center">
                            <h2 className="text-slate-700 dark:text-slate-200 font-semibold text-xl">
                                Nastarin Nur
                            </h2>
                        </div>
                        <div className="flex justify-center">
                            <h4 className="text-slate-700 dark:text-slate-200  text-md">
                                Planning and R&D
                            </h4>
                        </div>
                        <div>
                            <p className="text-slate-500 dark:text-slate-400 my-5 w-5/6 mx-auto text-center pb-3">“I mainly generated the ideas of our project and it was a continuous process throughout the time. Moreover, I implemented authentication and managed collaborators and repo in GitHub.”</p>
                        </div>
                        <div className="flex justify-center pb-5">
                            <a href="https://www.linkedin.com/in/nashtarin-nur-34037b227/" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-blue-500 hover:text-blue-500 duration-300">
                                    <FaLinkedinIn />
                                </span>
                            </a>
                            <a href="https://www.facebook.com/nashtarin.nur/" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-blue-600 hover:text-blue-600 duration-300">
                                    <FaFacebook />
                                </span>
                            </a>
                            <a href="https://github.com/Nashtarin/" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-slate-900 hover:text-slate-900 duration-300">
                                    <FaGithub />
                                </span>
                            </a>
                            <a href="https://nashtarin-portfolio.netlify.app/" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-blue-600 hover:text-blue-600 duration-300">
                                    <FaLink />
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="single-card rounded-xl bg-slate-100 dark:bg-slate-700 shadow-xl hover:shadow-zinc-400 dark:hover:shadow-violet-500 transition duration-300 px-3 mb-7 my-20 md:mb-0">
                        <div className="grid place-content-center relative bottom-12">
                            <Image
                                src="/img/iftakher.jpg"
                                height="150"
                                width="150"
                                alt="User"
                                draggable="false"
                                className="rounded-full"
                            />
                        </div>
                        <div className="flex justify-center">
                            <h2 className="text-slate-700 dark:text-slate-200 font-semibold text-xl">
                                Iftakher Hossen
                            </h2>
                        </div>
                        <div className="flex justify-center">
                            <h4 className="text-slate-700 dark:text-slate-200  text-md">
                                Front End Developer
                            </h4>
                        </div>
                        <div>
                            <p className="text-slate-500 dark:text-slate-400 my-5 w-5/6 mx-auto text-center pb-3">“I worked here as a main Frontend Developer on our team. And also helped my team to Research & Developement.”</p>
                        </div>
                        <div className="flex justify-center pb-5">
                            <a href="https://www.linkedin.com/in/iftakher-hossen/" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-blue-500 hover:text-blue-500 duration-300">
                                    <FaLinkedinIn />
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
                                src="/img/Mostofa.jpg"
                                height="150"
                                width="150"
                                alt="User"
                                draggable="false"
                                className="rounded-full"
                            />
                        </div>
                        <div className="flex justify-center">
                            <h2 className="text-slate-700 dark:text-slate-200 font-semibold text-xl">
                                Mostofa Kabir
                            </h2>
                        </div>
                        <div className="flex justify-center">
                            <h4 className="text-slate-700 dark:text-slate-200  text-md">
                                Front End Developer
                            </h4>
                        </div>
                        <div>
                            <p className="text-slate-500 dark:text-slate-400 my-5 w-5/6 mx-auto text-center pb-3">“I worked as a front end developer on our team and also contributed on both client side and server side. Helped our team implement some major feature and research.”</p>
                        </div>
                        <div className="flex justify-center pb-5">
                            <a href="https://www.linkedin.com/in/iammostofakabir/" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-blue-500 hover:text-blue-500 duration-300">
                                    <FaLinkedinIn />
                                </span>
                            </a>
                            <a href="https://www.facebook.com/mostofakabir.sunny" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-blue-600 hover:text-blue-600 duration-300">
                                    <FaFacebook />
                                </span>
                            </a>
                            <a href="https://github.com/iammostofakabir" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-slate-900 hover:text-slate-900 duration-300">
                                    <FaGithub />
                                </span>
                            </a>
                            <a href="https://mostofakabirportfolio.netlify.app/" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-blue-600 hover:text-blue-600 duration-300">
                                    <FaLink />
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="single-card rounded-xl bg-slate-100 dark:bg-slate-700 shadow-xl hover:shadow-zinc-400 dark:hover:shadow-violet-500 transition duration-300 px-3 mb-7 my-20 md:mb-0">
                        <div className="grid place-content-center relative bottom-12">
                            <Image
                                src="/img/ashaduzzaman.jpg"
                                height="150"
                                width="150"
                                alt="User"
                                draggable="false"
                                className="rounded-full"
                            />
                        </div>
                        <div className="flex justify-center">
                            <h2 className="text-slate-700 dark:text-slate-200 font-semibold text-xl">
                                Md. Ashadujjaman
                            </h2>
                        </div>
                        <div className="flex justify-center">
                            <h4 className="text-slate-700 dark:text-slate-200  text-md">
                                Front End Developer
                            </h4>
                        </div>
                        <div>
                            <p className="text-slate-500 dark:text-slate-400 my-5 w-5/6 mx-auto text-center pb-3">“I worked mainly as a front end developer for our team and also contributed on other different aspects in front end development.”</p>
                        </div>
                        <div className="flex justify-center pb-5">
                            <a href="https://www.linkedin.com/in/md-ashadujjaman-4250ba201/" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-blue-500 hover:text-blue-500 duration-300">
                                    <FaLinkedinIn />
                                </span>
                            </a>
                            <a href="https://www.facebook.com/mdashadujjaman.emon.3/" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-blue-600 hover:text-blue-600 duration-300">
                                    <FaFacebook />
                                </span>
                            </a>
                            <a href="https://github.com/emon2058" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-slate-900 hover:text-slate-900 duration-300">
                                    <FaGithub />
                                </span>
                            </a>
                            <a href="https://ashadujjaman-emon.web.app/" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-blue-600 hover:text-blue-600 duration-300">
                                    <FaLink />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="text-center py-20">●</div>

            <div className="w-3/5 mx-auto">
                <div className="py-8 px-0 sm:px-8">
                    <div>
                        <h2 className="text-center font-semibold text-3xl my-5">Who We Are?</h2>
                        <p className="text-center">We as a platform of about hundred plus lecturer around the world with thousand plus pre organized courses serving more then millions of students and learners through the globe. We are growing everyday, According to the past years of experiences we are building our platform more accessible and constantly adding new features for our students and teachers.</p>
                    </div>
                </div>
                <div className="py-8 px-0 sm:px-8 ">
                    <div>
                        <h2 className="text-center font-semibold text-3xl my-5">Our Mission</h2>
                        <h3 className="text-center font-semibold text-xl my-5">Spreading Knowledge At Low Cost</h3>
                        <p className="text-center">we are dedicated to provide recognizable and remarkable courses through the world on les cost then other competitor so that everyone around the world can access their desired Knowledge.</p>
                    </div>
                </div>
                <div className="py-8 px-0 sm:px-8">
                    <div>
                        <h2 className="text-center font-semibold text-3xl my-5">Our Vision</h2>
                        <h3 className="text-center font-semibold text-xl my-5 text-rose-5">Providing Education All Over The World</h3>
                        <p className="text-center">Our key motive is to reach those countries and places where education is a burden over family expenses and provide mandatory education so that the future of the world does not rely on un professional and illiterate people.</p>
                    </div>
                </div>
            </div>

            <Fade>
                <Contact />
            </Fade>
        </section>
    );
};

export default about;