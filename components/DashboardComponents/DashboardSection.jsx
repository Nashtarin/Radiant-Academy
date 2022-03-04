import { ArcElement, Chart } from 'chart.js';
import Link from 'next/link';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { BsArrowRight } from 'react-icons/bs';
import { FaBookmark, FaClock, FaClone, FaCopy, FaEdit, FaEnvelope, FaEye, FaHashtag, FaHeart, FaIdCardAlt, FaInfoCircle, FaNewspaper, FaPhoneSquareAlt, FaPlus, FaShare } from 'react-icons/fa';
import { MdPending } from 'react-icons/md';
import { useSelector } from 'react-redux';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import DashboardSidebar from './DashboardSidebar';
Chart.register(ArcElement);

const DashboardSection = () => {
    const allCourses = useSelector((state) => state.courses.coursesList);
    const allTopics = useSelector((state) => state.forums.forumsList);
    const allReviews = useSelector((state) => state.reviews.reviewsList);
    const allUsers = useSelector((state) => state.users.usersList);

    const config = {
        type: 'doughnut',
        data: data,
    };

    const data = {
        datasets: [{
            label: 'Enrollment Chart',
            data: [250, 50],
            backgroundColor: [
                'rgb(50, 0, 126)',
                'rgb(255, 202, 48)'
            ],
            labels: [
                'Enrolled',
                'Available'
            ]
        }]
    };

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
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
        <div className="px-0 sm:px-6 lg:px-12">
            <div className="grid grid-rows-1 md:grid-cols-[250px_minmax(300px,_1fr)] lg:grid-cols-[250px_minmax(600px,_1fr)] p-8 gap-5">
                <div>
                    <DashboardSidebar />
                </div>

                <div className="bg-slate-100 dark:bg-slate-700 shadow-md rounded-md py-8 px-5 h-auto">
                    <div className="rounded-md p-5 text-white bg-violet-900 dark:bg-slate-600 dark:text-slate-200" >
                        <h5 className="text-lg">Site Overview</h5>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 pb-1 px-4">
                            <div className="flex flex-col items-start border-r-2 mb-2 border-r-zinc-200 dark:border-r-slate-400">
                                <h3 className="text-2xl">23</h3>
                                <p>Pending Submissions</p>
                            </div>
                            <div className="flex flex-col items-start border-r-2 mb-2 border-r-zinc-200 dark:border-r-slate-400">
                                <h3 className="text-2xl">768</h3>
                                <p>Submissions</p>
                            </div>
                            <div className="flex flex-col items-start border-r-2 mb-2 border-r-zinc-200 dark:border-r-slate-400">
                                <h3 className="text-2xl">1.5k+</h3>
                                <p>Total Accounts</p>
                            </div>
                            <div className="flex flex-col items-start border-r-2 mb-2 border-r-zinc-200 dark:border-r-slate-400">
                                <h3 className="text-2xl">0</h3>
                                <p>Subscribers</p>
                            </div>
                            <div className="flex flex-col items-start border-r-2 mb-2 border-r-zinc-200 dark:border-r-slate-400">
                                <h3 className="text-2xl">{allCourses?.data?.length}</h3>
                                <p>Total Courses</p>
                            </div>
                            <div className="flex flex-col items-start border-r-2 mb-2 border-r-zinc-200 dark:border-r-slate-400">
                                <h3 className="text-2xl">100</h3>
                                <p>Total Quizzes</p>
                            </div>
                            <div className="flex flex-col items-start border-r-2 mb-2 border-r-zinc-200 dark:border-r-slate-400">
                                <h3 className="text-2xl">{allTopics?.data?.length}</h3>
                                <p>Forum Posts</p>
                            </div>
                            <div className="flex flex-col items-start border-r-2 mb-2 border-r-zinc-200 dark:border-r-slate-400">
                                <h3 className="text-2xl">{allReviews?.data?.length}</h3>
                                <p>Total Reviews</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-rows-1 md:grid-cols-[300px_minmax(200px,_1fr)] lg:grid-cols-[350px_minmax(400px,_1fr)] gap-5 mt-5">
                        <div>
                            <div className="bg-slate-200 shadow-md rounded-md p-5 h-auto mb-5 course-card dark:bg-slate-600">
                                <div className="flex items-center justify-between text-violet-900 dark:text-violet-400">
                                    <div className="flex items-center">
                                        <FaClone className="mr-2 text-lg" />
                                        <h5 className="text-lg font-semibold">23 Courses</h5>
                                    </div>
                                    <Link href="/dashboard/courses/add-course" passHref>
                                        <button className="px-4 py-1.5 hover:bg-stone-100 rounded-lg flex items-center uppercase">
                                            <FaPlus className="mr-2 text-sm" /> New Course
                                        </button>
                                    </Link>
                                </div>
                                <Slider {...settings}>
                                    {
                                        allCourses?.data?.map(course => (
                                            <div className="course-items" key={course}>
                                                <div className="my-5 flex justify-center items-center text-white py-1.5 px-2" style={{ backgroundColor: '#32007E' }}>
                                                    <h5>{course.title}</h5>
                                                </div>
                                                <div className="my-4 flex justify-between items-center py-1.5 px-2 border-b-2 border-purple-800">
                                                    <p className="text-black">Enrollment</p>
                                                    <p className="text-red-600 text-sm">Price ${course.price}</p>
                                                </div>
                                                <div className="mt-2 py-3 grid grid-rows-1">
                                                    <div className="flex flex-col sm:flex-row justify-center items-center">
                                                        <div className="w-1/4 sm:mr-3">
                                                            <Doughnut data={data} options={config} />
                                                        </div>
                                                        <div>
                                                            <div className="flex items-center">
                                                                <div className=" mr-2 rounded-md" style={{ backgroundColor: '#32007E', width: '15px', height: '15px' }}></div>
                                                                <p className="text-sm text-gray-500">Enrolled - <span className="text-black">2500</span></p>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <div className="mr-2 rounded-md" style={{
                                                                    backgroundColor: '#FFCA30', width: '15px', height: '15px'
                                                                }}></div>
                                                                <p className="text-sm text-gray-500">Available - <span className="text-black">500</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-5">
                                                        <div className="flex items-center justify-center text-sm">
                                                            <FaCopy className="mr-2" />
                                                            <h5>New Order Placed: <span className="font-semibold">25</span></h5>
                                                        </div>
                                                        <div className="flex items-center justify-center text-sm">
                                                            <FaCopy className="mr-2" />
                                                            <h5>Today&apos;s Total Sales: <span className="font-semibold">52</span></h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
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
                            <div className="bg-slate-200 dark:bg-slate-600 shadow-md rounded-md p-5 h-auto mb-5">
                                <div className="flex items-center justify-between text-violet-900 dark:text-violet-400" style={{ color: '' }}>
                                    <div className="flex items-center">
                                        <FaInfoCircle className="mr-2 text-lg" />
                                        <h5 className="text-lg font-semibold">Account Info</h5>
                                    </div>
                                    <button className="px-4 py-1.5 hover:bg-stone-100 rounded-lg flex items-center uppercase"><FaEdit className="mr-2" /> Edit</button>
                                </div>
                                <div className="border-[1px] border-stone-300 dark:border-stone-400 my-2"></div>
                                <table className="table-compact text-slate-700 dark:text-slate-200">
                                    <tbody>
                                        <tr>
                                            <td className="flex items-center">
                                                <FaIdCardAlt /> &nbsp; Name
                                            </td>
                                            <td>:&nbsp; Radiant Admin</td>
                                        </tr>
                                        <tr>
                                            <td className="flex items-center">
                                                <FaBookmark /> &nbsp; Role
                                            </td>
                                            <td>:&nbsp; Admin</td>
                                        </tr>
                                        <tr>
                                            <td className="flex items-center">
                                                <FaPhoneSquareAlt /> &nbsp; Phone
                                            </td>
                                            <td>:&nbsp; +880 123456</td>
                                        </tr>
                                        <tr>
                                            <td className="flex items-center">
                                                <FaEnvelope /> &nbsp; Email
                                            </td>
                                            <td>:&nbsp; info@radiantacademy.com</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="flex justify-end mt-3">
                                    <button className="text-sm flex items-center px-4 py-1 font-semibold rounded-full hover:bg-stone-100 text-violet-900 dark:text-violet-400 dark:hover:bg-slate-700">See More Info <BsArrowRight className="ml-2 text-[15px] text-red-600 dark:text-red-400" /></button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="bg-slate-200 shadow-md rounded-md p-5 h-auto mb-5 dark:bg-slate-600">
                                <div className="flex items-center text-xl font-semibold pt-1 pb-4 border-b-2 text-violet-900 dark:text-violet-400 border-stone-300 dark:border-stone-400">
                                    <MdPending className="mr-2" />
                                    <h3>Pending Submissions</h3>
                                </div>
                                <Slider {...settings}>
                                    {
                                        allTopics?.data?.map(forum => (
                                            <div className="p-5" key={forum._id}>
                                                <h4 className="text-lg font-semibold mb-1">{forum.title}</h4>
                                                <p className="text-[0.9em] text-gray-600 mb-1">{forum.desc.split(' ').slice(0, 40).toString().replace(/,/g, ' ')}...</p>
                                                <div className="flex items-center justify-between mt-3">
                                                    <span className="flex items-center">
                                                        <FaClock className="mr-2 text-sm" />
                                                        <p className="text-[0.9em]">January 12</p>
                                                    </span>
                                                    <span className="flex items-center">
                                                        <FaHashtag className="mr-2 text-sm" />
                                                        <p className="text-[0.9em]">{forum.category}</p>
                                                    </span>
                                                    <span className="flex items-center">
                                                        <FaEye className="mr-2 text-sm text-purple-800" />
                                                        <p className="text-[0.9em]">{forum.views}</p>
                                                    </span>
                                                    <span className="flex items-center">
                                                        <FaHeart className="mr-2 text-sm text-red-500" />
                                                        <p className="text-[0.9em]">{forum.reacts}</p>
                                                    </span>
                                                    <Link href={`/forum/${forum._id}`} passHref><button><FaShare /></button></Link>
                                                </div>
                                            </div>
                                        ))}
                                </Slider>
                                <style jsx global>
                                    {`
                                        .slick-list{
                                            padding: 2rem 0;
                                        }
                                    `}
                                </style>

                                <div className="flex justify-center mt-3">
                                    <button className="text-sm flex items-center px-4 py-1 font-semibold rounded-full hover:bg-stone-100 text-violet-900 dark:text-violet-400 dark:hover:bg-slate-700">See More Submissions <BsArrowRight className="ml-2 text-[15px] text-red-600" /></button>
                                </div>
                            </div>
                            <div className="bg-slate-200 dark:bg-slate-600 shadow-md rounded-md p-5 h-auto mb-5 ">
                                <div className="flex items-center text-xl font-semibold pt-1 pb-4 border-b-2 border-stone-300 text-violet-900 dark:text-violet-400 dark:border-stone-400">
                                    <FaNewspaper className="mr-2" />
                                    <h3>Newsletters</h3>
                                </div>
                                <Slider {...settings}>
                                    <div className="p-5 text-violet-900 dark:text-violet-400">
                                        <h4 className="text-lg font-semibold mb-1">Email Subject</h4>
                                        <p className="text-[0.9em] text-slate-700 dark:text-slate-200 mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae rerum pariatur debitis omnis consequatur perferendis nisi cumque corrupti iure repudiandae.</p>
                                        <div className="flex items-center justify-end text-slate-700 dark:text-slate-200">
                                            <FaClock className="mr-2 text-right text-sm" />
                                            <p className="text-[0.9em]">January 12</p>
                                        </div>
                                    </div>
                                    <div className="p-5 text-slate-700 dark:text-slate-200">
                                        <h4 className="text-lg font-semibold mb-1 text-violet-900 dark:text-violet-400">Email Subject</h4>
                                        <p className="text-[0.9em] mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae rerum pariatur debitis omnis consequatur perferendis nisi cumque corrupti iure repudiandae.</p>
                                        <div className="flex items-center justify-end">
                                            <FaClock className="mr-2 text-right text-sm" />
                                            <p className="text-[0.9em]">January 12</p>
                                        </div>
                                    </div>
                                </Slider>
                                <div className="flex justify-center mt-3 text-violet-900 dark:text-violet-400">
                                    <button className="text-sm flex items-center px-4 py-1 font-semibold rounded-full hover:bg-stone-100 dark:hover:bg-slate-700">See More Newsletters <BsArrowRight className="ml-2 text-[15px] text-red-600 dark:text-red-400" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardSection;