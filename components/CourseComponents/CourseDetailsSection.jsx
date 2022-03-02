import React, { useState } from 'react';
import { FaBookmark, FaStar, FaStarHalf, FaLink } from 'react-icons/fa';
import { BsCheck2All, BsCheck2Circle } from 'react-icons/bs';
import ReactStars from "react-rating-stars-component";
import Image from 'next/image';
import CourseCard from './CourseCard';
import Link from 'next/link';

const CourseDetailsSection = ({course}) => {
    const [rating, setRating] = useState(4.5);

    //rating system
    const ratingCount = {
        size: 0,
        count: 5,
        color: "black",
        activeColor: "red",
        value: 0,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        onChange: newValue => {
            setRating(newValue);
        }
    };

    return (
        <div>
            <div className="py-12 px-16 text-white" style={{ backgroundColor: '#522F88' }}>
                <div>
                    <h1 className="my-1 text-[2.1em] font-medium">
                        {course?.data?.title} <small>({course?.data?.price}$)</small>
                    </h1>
                    <p className="flex items-center">
                        <FaBookmark className="text-orange-500" /> &nbsp; Radiant Academy Certificate Included
                    </p>
                    <div className="flex items-center text-yellow-400 my-3 text-xl">
                        <div className="ratings flex items-center">
                            <ReactStars {...ratingCount} value={rating} edit={false} />
                            <style jsx global>{`
                                .ratings {
                                    margin: 0 0.5rem;
                                }
                                .ratings span i{
                                    color: #f4dd1e;
                                    font-size: 1.25rem;
                                }
                            `}</style>
                            <span className="text-white text-[1em] ml-2 mb-2">(45)</span>
                        </div>
                    </div>
                    <p className="text-sm mt-2">● 10 Quizes ● 10 Articles ● 10 Problem Solving</p>
                    <div className="flex items-center mt-8">
                        <Link href="/courses/payment" passHref>
                            <button className="bg-yellow-400 px-5 py-1.5 text-black uppercase rounded-md font-medium">Enroll Now</button>
                        </Link>
                        <span className="text-md mx-4">* 1025 Already Enrolled!</span>
                    </div>
                </div>
            </div>

            <div className="mx-auto w-5/6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-3 py-8 bg-slate-100">
                    <a href="#about-the-course" className="text-center text-xl font-medium text-purple-900">About This Course</a>
                    <a href="#syllabus" className="text-center text-xl font-medium text-stone-500">Syllabus</a>
                    <a href="#reviews" className="text-center text-xl font-medium text-stone-500">Reviews</a>
                    <a href="#related-course" className="text-center text-xl font-medium text-stone-500">Related Course</a>
                </div>

                <div className="mt-8 py-8">
                    <section id="#about-the-course">
                        <div className="flex items-center">
                            <div>
                                <a href="#about-the-course">
                                    <FaLink className="hover:text-purple-900 mr-3 text-xl" />
                                </a>
                            </div>
                            <div>
                                <h3 className="text-2xl font-medium">About this Course</h3>
                                <p className="text-sm text-stone-400 mt-1">Recently Viewed By: 1025</p>
                            </div>
                        </div>
                        <hr className="my-3" />
                        <div>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                        </div>
                    </section>
                </div>
                <div className="mt-1 py-8">
                    <section id="#syllabus">
                        <div className="flex items-center">
                            <div>
                                <a href="#syllabus"><FaLink className="hover:text-purple-900 mr-3 text-xl" /></a>
                            </div>
                            <div>
                                <h3 className="text-2xl font-medium">Syllabus</h3>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-col-2 md:grid-col-3 lg:grid-cols-3 mt-6">
                            <div className="py-8 px-16 bg-orange-300 rounded-xl">
                                <h4 className="text-lg text-orange-900 mb-2 font-medium">What you will learn?</h4>
                                <p className="flex items-center text-lg font-medium">
                                    <BsCheck2All className="mr-2" /> HTML
                                </p>
                                <p className="flex items-center text-lg font-medium my-1">
                                    <BsCheck2All className="mr-2" /> CSS
                                </p>
                                <p className="flex items-center text-lg font-medium">
                                    <BsCheck2All className="mr-2" /> Flexbox Concepts
                                </p>
                            </div>
                            <div className="py-8 px-12">
                                <p className="flex items-center text-lg font-medium">
                                    <BsCheck2Circle className="mr-3" /> 3 Articles
                                </p>
                                <p className="flex items-center text-lg font-medium my-1">
                                    <BsCheck2Circle className="mr-3" /> 10 Quizes
                                </p>
                                <p className="flex items-center text-lg font-medium">
                                    <BsCheck2Circle className="mr-3" /> 3 Problem Solving
                                </p>
                                <p className="flex items-center text-lg font-medium mt-1">
                                    <BsCheck2Circle className="mr-3" /> Approax 1 hour to complete
                                </p>
                            </div>
                            <div className="py-8 px-16">
                                <p className="flex items-center text-lg font-medium">
                                    <BsCheck2Circle className="mr-3" /> 100% Online
                                </p>
                                <p className="flex items-center text-lg font-medium my-1">
                                    <BsCheck2Circle className="mr-3" /> Certificate
                                </p>
                                <p className="flex items-center text-lg font-medium">
                                    <BsCheck2Circle className="mr-3" /> For Beginners
                                </p>
                                <p className="flex items-center text-lg font-medium mt-1">
                                    <BsCheck2Circle className="mr-3" /> English
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="mt-1 py-8">
                    <section id="#reviews">
                        <div>
                            <h3 className="text-2xl font-medium">Reviews</h3>
                        </div>
                        <div>
                            <div className="p-2 sm:p-5 flex items-start">
                                <div className="px-2 pt-1.5 block w-[70px]">
                                    <Image
                                        src="https://i.postimg.cc/4dNK0r0W/people-1.png"
                                        alt="User Picture"
                                        height="100px"
                                        width="100px"
                                    />
                                </div>
                                <div className="w-full">
                                    <div className="flex items-baseline flex-wrap sm:flex-row px-2">
                                        <h4 className="text-xl">Iftakher Hossen</h4>
                                        &nbsp; - &nbsp;
                                        <p className="text-stone-400">a day ago</p>
                                    </div>
                                    <p className="text-sm px-2 pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque maxime natus sit mollitia odit cumque?</p>
                                    <div className="ratings flex">
                                        <ReactStars {...ratingCount} value={rating} edit={false} />
                                        <style jsx global>
                                            {`
                                                .ratings {
                                                    margin: 1rem;
                                                }
                                                .ratings span i{
                                                    color: #f4dd1e;
                                                    font-size: 1.25rem;
                                                }
                                            `}
                                        </style>
                                    </div>
                                </div>
                            </div>
                            <div className="p-2 sm:p-5 flex items-start">
                                <div className="px-2 pt-1.5 block w-[70px]">
                                    <Image
                                        src="https://i.postimg.cc/4dNK0r0W/people-1.png"
                                        alt="User Picture"
                                        height="100px"
                                        width="100px"
                                    />
                                </div>
                                <div className="w-full">
                                    <div className="flex items-baseline flex-wrap sm:flex-row px-2">
                                        <h4 className="text-xl">Iftakher Hossen</h4>
                                        &nbsp; - &nbsp;
                                        <p className="text-stone-400">2 days ago</p>
                                    </div>
                                    <p className="text-sm px-2 pt-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, natus.</p>
                                    <div className="ratings flex">
                                        <ReactStars {...ratingCount} value={rating} edit={false} />
                                        <style jsx global>
                                            {`
                                                .ratings {
                                                    margin: 1rem;
                                                }
                                                .ratings span i{
                                                    color: #f4dd1e;
                                                    font-size: 1.25rem;
                                                }
                                            `}
                                        </style>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="mt-1 mb-20 py-8">
                    <section id="#related-course">
                        <div className="flex items-center">
                            <div>
                                <a href="#related-course"><FaLink className="hover:text-purple-900 mr-3 text-xl" /></a>
                            </div>
                            <div>
                                <h3 className="text-2xl font-medium">Related Course</h3>
                            </div>
                        </div>
                        <div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CourseDetailsSection;