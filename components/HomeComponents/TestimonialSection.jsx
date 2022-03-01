import Image from "next/image"
import { FaStar, FaStarHalf } from "react-icons/fa"

const TestimonialSection = () => {
    return (
        <div className="bg-white dark:bg-slate-800">
            <div className="w-5/6 mx-auto py-20 ">
                <h1 className="text-4xl	font-bold text-violet-800 dark:text-violet-400 pt-7 pb-32 text-center">What others are saying</h1>
                <div className="mx-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                    <div className="rounded-xl bg-slate-100 dark:bg-slate-700 shadow-xl  hover:shadow-zinc-400 dark:hover:shadow-violet-500 transition duration-300 px-3 mb-7 md:mb-0">
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
                    <div className="rounded-xl bg-slate-100 dark:bg-slate-700 shadow-xl hover:shadow-zinc-400 dark:hover:shadow-violet-500 transition duration-300 px-3 mb-7 md:mb-0">
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
                    <div className="rounded-xl bg-slate-100 dark:bg-slate-700 shadow-xl hover:shadow-zinc-400 dark:hover:shadow-violet-500 transition duration-300 px-3 mb-7 md:mb-0">
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
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;