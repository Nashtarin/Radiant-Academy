import React, { useState } from 'react';
import { FaBookmark, FaStar, FaStarHalf, FaLink } from 'react-icons/fa';
import { BsCheck2All, BsCheck2Circle } from 'react-icons/bs';
import ReactStars from "react-rating-stars-component";
import Image from 'next/image';
import Link from 'next/link';
import CourseCard from './CourseCard';

const CourseDetailsSection = ({ course }) => {
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
        <div className='bg-white dark:bg-[#2f3c4f]'>
            <div className="py-12 px-10 lg:px-32 text-white bg-slate-800 dark:bg-slate-800">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div>
                        <h1 className="my-1 text-[2.1em] font-medium">
                            {course?.data?.title}
                        </h1>
                        <p className="flex items-center">
                            <FaBookmark className="text-orange-500" /> &nbsp; Radiant Academy Certificate Included
                        </p>
                        <div className="flex items-center text-rose-500 my-3">
                            <span className="flex items-center text-2xl"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf /></span>
                            <span className="text-white text-[1em]">(45)</span>
                        </div>
                        <p className="text-sm mt-2">● 10 Quizzes ● 10 Articles ● 10 Problem Solving</p>
                    </div>
                    <div className="flex flex-col py-10 md:py-0">
                        <div className='text-3xl font-bold py-3 text-center'>
                            <h2> <span>$</span> {course?.data?.price}</h2>
                        </div>
                        <Link href={`/courses/payment/${course?.data._id}`} passHref><button className="bg-rose-500 px-5 py-3 text-white uppercase rounded-md font-medium">Enroll Now</button></Link>
                        <p className="text-sm text-stone-300 mt-4 mx-4">* <span className='text-orange-500'>1025</span> Already Enrolled!</p>
                    </div>
                </div>
            </div>

            <div className="mx-auto w-5/6 text-slate-800 dark:text-slate-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-3 py-8 bg-slate-100 dark:bg-slate-600">
                    <a href="#about-the-course" className="text-center text-xl font-medium text-purple-900 dark:text-violet-300">About This Course</a>
                    <a href="#syllabus" className="text-center text-xl font-medium text-stone-500 dark:text-violet-400">Syllabus</a>
                    <a href="#reviews" className="text-center text-xl font-medium text-stone-500 dark:text-violet-400">Reviews</a>
                    <a href="#related-course" className="text-center text-xl font-medium text-stone-500 dark:text-violet-400">Related Course</a>
                </div>

                <div className="mt-8 py-8">
                    <section id="#about-the-course">
                        <div className='flex justify-center pb-14'>
                            <Image
                                src={course?.data?.image}
                                alt="Course Cover"
                                height="330px"
                                width="600px"
                                draggable="false"
                            />
                        </div>
                        <div className="flex items-center">
                            <div>
                                <a href="#about-the-course">
                                    <FaLink className="hover:text-purple-900 mr-3 text-xl" />
                                </a>
                            </div>
                            <div>
                                <h3 className="text-2xl font-medium text-rose-500">About this Course</h3>
                                <p className="text-sm text-stone-400 mt-1">Recently Viewed By: 1025</p>
                            </div>
                        </div>
                        <hr className="my-3" />
                        <div>
                            <p>{course?.data?.description}</p>
                        </div>
                    </section>
                </div>
                <div className="mt-1 py-8">
                    <section id="syllabus">
                        <div className="flex items-center">
                            <div>
                                <a href="#syllabus"><FaLink className="hover:text-purple-900 mr-3 text-xl" /></a>
                            </div>
                            <div>
                                <h3 className="text-2xl font-medium text-rose-500">Syllabus</h3>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-col-2 md:grid-col-3 lg:grid-cols-3 mt-6">
                            <div className="py-8 px-16 bg-violet-200 dark:bg-slate-600 text-slate-800 dark:text-slate-200 rounded-xl">
                                <h4 className="text-lg  mb-2 font-medium">What you will learn?</h4>
                                <p className="flex items-center text-lg font-medium ">
                                    <BsCheck2All className="mr-2" /> HTML
                                </p>
                                <p className="flex items-center text-lg font-medium my-1">
                                    <BsCheck2All className="mr-2" /> CSS
                                </p>
                                <p className="flex items-center text-lg font-medium">
                                    <BsCheck2All className="mr-2" /> Flexbox Concepts
                                </p>
                            </div>
                            <div className="py-8 px-12 ">
                                <p className="flex items-center text-lg font-medium">
                                    <BsCheck2Circle className="mr-3" /> 3 Articles
                                </p>
                                <p className="flex items-center text-lg font-medium my-1">
                                    <BsCheck2Circle className="mr-3" /> 10 Quizzes
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
                    <section id="reviews">
                        <div>
                            <h3 className="text-2xl font-medium text-rose-500">Reviews</h3>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="mt-1 pb-20 py-8">
                </div>
            </div>
        </div>
    );
};

export default CourseDetailsSection;