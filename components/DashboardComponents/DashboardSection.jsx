import { ArcElement, Chart } from 'chart.js';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { BsArrowRight, BsCheck2Circle } from 'react-icons/bs';
import { CgArrowRightO } from 'react-icons/cg';
import { FaBookmark, FaClock, FaClone, FaCopy, FaEdit, FaEnvelope, FaEye, FaHashtag, FaHeart, FaIdCardAlt, FaInfoCircle, FaNewspaper, FaPhoneSquareAlt, FaPlus } from 'react-icons/fa';
import { MdPending } from 'react-icons/md';
import { useSelector } from 'react-redux';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import useAuth from '../../utilities/Hooks/useAuth';
import useCrud from '../../utilities/Hooks/useCrud';
import DashboardSidebar from './DashboardSidebar';

Chart.register(ArcElement);

const DashboardSection = () => {
    const router = useRouter();
    const { user } = useAuth();
    const { handleApprove } = useCrud();

    const allCourses = useSelector((state) => state.courses.coursesList);
    const allTopics = useSelector((state) => state.forums.forumsList);
    const allReviews = useSelector((state) => state.reviews.reviewsList);
    const allQuizzes = useSelector((state) => state.quizzes.quizzesList);
    const allUsers = useSelector((state) => state.users.usersList);

    const thisUser = allUsers.find(userData => userData.email === user.email);

    const pendingList = allTopics.filter(forum => {
        if(forum.status === false){
            return forum
        }
    })

    const config = {
        type: 'doughnut',
        data: data,
    };

    const data = {
        labels: [
            'Enrolled',
            'Available'
        ],
        datasets: [{
            label: 'Enrollment Chart',
            data: [250, 50],
            backgroundColor: [
                'rgb(50, 0, 126)',
                'rgb(255, 202, 48)'
            ],
            hoverOffset: 2
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

    if (thisUser?.role !== 'admin' || thisUser?.role === undefined) {
        router.push('./')
    }

    return (
        <>
         {(user.isSignedIn && thisUser.role === 'admin') &&
            <div className="px-0 ">
                <div className="grid xs:grid-cols-1 md:grid-cols-4 p-8 gap-5">
                    <div className=''>
                        <DashboardSidebar />
                    </div>

                    <div className="bg-slate-100 dark:bg-slate-700 shadow-md rounded-md py-8 px-5 h-auto col-span-3">
                        <div className="rounded-md p-5 text-white bg-violet-900 dark:bg-violet-800 dark:text-slate-200" >
                            <h5 className="text-lg">Site Overview</h5>

                            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 pb-1 px-4">
                                <div className="flex flex-col items-start pl-4 border-l-2 mb-2 border-l-zinc-200 dark:border-l-slate-400">
                                    <h3 className="text-2xl">{pendingList.length}</h3>
                                    <p>Pending Submissions</p>
                                </div>
                                <div className="flex flex-col items-start pl-4 border-l-2 mb-2 border-l-zinc-200 dark:border-l-slate-400">
                                    <h3 className="text-2xl">{allTopics.length}</h3>
                                    <p>Submissions</p>
                                </div>
                                <div className="flex flex-col items-start pl-4 border-l-2 mb-2 border-l-zinc-200 dark:border-l-slate-400">
                                    <h3 className="text-2xl">{allUsers.length}</h3>
                                    <p>Total Accounts</p>
                                </div>
                                <div className="flex flex-col items-start pl-4 border-l-2 mb-2 border-l-zinc-200 dark:border-l-slate-400">
                                    <h3 className="text-2xl">2</h3>
                                    <p>Subscribers</p>
                                </div>
                                <div className="flex flex-col items-start pl-4 border-l-2 mb-2 border-l-zinc-200 dark:border-l-slate-400">
                                    <h3 className="text-2xl">{allCourses.length}</h3>
                                    <p>Total Courses</p>
                                </div>
                                <div className="flex flex-col items-start pl-4 border-l-2 mb-2 border-l-zinc-200 dark:border-l-slate-400">
                                    <h3 className="text-2xl">{allQuizzes.length}</h3>
                                    <p>Total Quizzes</p>
                                </div>
                                <div className="flex flex-col items-start pl-4 border-l-2 mb-2 border-l-zinc-200 dark:border-l-slate-400">
                                    <h3 className="text-2xl">{allTopics.length}</h3>
                                    <p>Forum Posts</p>
                                </div>
                                <div className="flex flex-col items-start pl-4 border-l-2 mb-2 border-l-zinc-200 dark:border-l-slate-400">
                                    <h3 className="text-2xl">{allReviews.length}</h3>
                                    <p>Total Reviews</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
                            <div>
                                <div className="bg-slate-200 shadow-md rounded-md p-5 h-auto mb-5 course-card dark:bg-slate-600">
                                    <div className="flex items-center justify-between text-violet-900 dark:text-violet-100">
                                        <div className="flex items-center">
                                            <FaClone className="mr-2 text-lg" />
                                            <h5 className="text-lg font-semibold">{allCourses.length} Courses</h5>
                                        </div>
                                        <Link href="/dashboard/courses/add-new-course" passHref>
                                            <button className="px-4 py-1.5 hover:bg-stone-100 hover:text-slate-800 rounded-lg flex items-center uppercase">
                                                <FaPlus className="mr-2 text-sm" /> New Course
                                            </button>
                                        </Link>
                                    </div>
                                    <Slider {...settings}>
                                        {
                                            allCourses.map(course => (
                                                <div className="course-items" key={course}>
                                                    <div className="my-5 flex justify-center items-center text-white py-1.5 px-2 bg-violet-900 dark:bg-violet-800">
                                                        <h5>{course.title}</h5>
                                                    </div>
                                                    <div className="my-4 flex justify-between items-center py-1.5 px-2 border-b-2 border-purple-800">
                                                        <p className="text-black">Enrollment</p>
                                                        <p className="text-red-600 dark:text-white text-sm font-medium">Price ${course.price}</p>
                                                    </div>
                                                    <div className="mt-2 py-3 grid grid-rows-1">
                                                        <div className="flex flex-col sm:flex-row justify-center items-center">
                                                            <div className="w-1/4 sm:mr-3">
                                                                <Doughnut data={data} options={config} />
                                                            </div>
                                                            <div>
                                                                <div className="flex items-center">
                                                                    <div className=" mr-2 rounded-md" style={{ backgroundColor: '#32007E', width: '15px', height: '15px' }}></div>
                                                                    <p className="text-sm text-gray-500">Enrolled - <span className="text-black">250</span></p>
                                                                </div>
                                                                <div className="flex items-center">
                                                                    <div className="mr-2 rounded-md" style={{
                                                                        backgroundColor: '#FFCA30', width: '15px', height: '15px'
                                                                    }}></div>
                                                                    <p className="text-sm text-gray-500">Available - <span className="text-black">50</span></p>
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
                                    <div className="flex items-center justify-between text-violet-900 dark:text-violet-100">
                                        <div className="flex items-center">
                                            <FaInfoCircle className="mr-2 text-lg" />
                                            <h5 className="text-lg font-semibold">Account Info</h5>
                                        </div>
                                        <button className="px-4 py-1.5 hover:bg-stone-100 rounded-lg flex items-center uppercase hover:text-slate-800"><FaEdit className="mr-2" /> Edit</button>
                                    </div>
                                    <div className="border-[1px] border-stone-300 dark:border-stone-400 my-2"></div>
                                    <div className=" text-slate-700 dark:text-slate-200">
                                        <div>
                                            <div className='flex'>
                                                <h1 className="flex items-center">
                                                    <FaIdCardAlt /> &nbsp; Name
                                                </h1>
                                                <h1>:&nbsp; {user.name}</h1>
                                            </div>
                                            <div className='flex'>
                                                <h1 className="flex items-center">
                                                    <FaBookmark /> &nbsp; Role
                                                </h1>
                                                <h1>:&nbsp; {user.role}</h1>
                                            </div>
                                            <div className='flex'>
                                                <h1 className="flex items-center">
                                                    <FaPhoneSquareAlt /> &nbsp; Phone
                                                </h1>
                                                <h1>:&nbsp; +880 123456</h1>
                                            </div>
                                            <div className='flex break-all'>
                                                <h1 className="flex items-center pr-2">
                                                    <FaEnvelope /> &nbsp; Email
                                                </h1>
                                                <h1>{user.email}</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-end mt-3">
                                        <button className="text-sm flex items-center px-4 py-1 font-semibold rounded-full hover:bg-stone-100 text-violet-900 dark:text-violet-300 dark:hover:bg-slate-700">See More Info <BsArrowRight className="ml-2 text-[15px] text-red-600 dark:text-red-400" /></button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="bg-slate-200 shadow-md rounded-md p-5 h-auto mb-5 dark:bg-slate-600">
                                    <div className="flex items-center text-xl font-semibold pt-1 pb-4 border-b-2 text-violet-900 dark:text-violet-100 border-stone-300 dark:border-stone-400">
                                        <MdPending className="mr-2" />
                                        <h3>Pending Submissions: {pendingList.length}</h3>
                                    </div>
                                    <Slider {...settings}>
                                        {
                                            pendingList.map(forum => (
                                                    <div className="p-5 dark:border-2 rounded-xl border-slate-500 shadow-md" key={forum._id}>
                                                        <h4 className="text-lg font-semibold mb-1 dark:text-slate-200">
                                                            {forum.title}
                                                        </h4>
                                                        <p className="text-[0.9em] text-gray-600 dark:text-slate-200 mb-1">
                                                            {forum.desc.split(' ').slice(0, 40).toString().replace(/,/g, ' ')}...
                                                        </p>
                                                        <div className="flex items-center justify-between mt-3">
                                                            <span className="flex items-center">
                                                                <FaClock className="mr-2 text-sm" />
                                                                <p className="text-[0.9em] dark:text-slate-200">January 12</p>
                                                            </span>
                                                            <span className="flex items-center">
                                                                <FaHashtag className="mr-2 text-sm" />
                                                                <p className="text-[0.9em] dark:text-slate-200">{forum.category}</p>
                                                            </span>
                                                            <span className="flex items-center">
                                                                <FaEye className="mr-2 text-sm text-purple-800" />
                                                                <p className="text-[0.9em] dark:text-slate-200">{forum.views}</p>
                                                            </span>
                                                            <span className="flex items-center">
                                                                <FaHeart className="mr-2 text-sm text-red-500" />
                                                                <p className="text-[0.9em] dark:text-slate-200">{forum.reacts}</p>
                                                            </span>
                                                            <span className="flex items-center">
                                                                <button onClick={() => handleApprove(forum._id, 'topic')}>
                                                                    <BsCheck2Circle className="mr-2 text-lg dark:text-slate-200" />
                                                                </button>
                                                            </span>
                                                            <Link href={`/forum/${forum._id}`} passHref>
                                                                <button>
                                                                    <CgArrowRightO className="dark:text-slate-200 text-lg" />
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                ))
                                        }
                                    </Slider>
                                    <style jsx global>
                                        {`
                                            .slick-list{
                                                padding: 2rem 0;
                                            }
                                        `}
                                    </style>

                                    <div className="flex justify-center mt-3">
                                        <button className="text-sm flex items-center px-4 py-1 font-semibold rounded-full hover:bg-stone-100 text-violet-900 dark:text-violet-300 dark:hover:bg-slate-700">See More Submissions <BsArrowRight className="ml-2 text-[15px] text-red-600" /></button>
                                    </div>
                                </div>
                                <div className="bg-slate-200 dark:bg-slate-600 shadow-md rounded-md p-5 h-auto mb-5 ">
                                    <div className="flex items-center text-xl font-semibold pt-1 pb-4 border-b-2 border-stone-300 text-violet-900 dark:text-violet-100 dark:border-stone-400">
                                        <FaNewspaper className="mr-2" />
                                        <h3>Newsletters</h3>
                                    </div>
                                    <Slider {...settings}>
                                        <div className="p-5 text-violet-900 dark:text-violet-200">
                                            <h4 className="text-lg font-semibold mb-1">Email Subject</h4>
                                            <p className="text-[0.9em] text-slate-700 dark:text-slate-200 mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae rerum pariatur debitis omnis consequatur perferendis nisi cumque corrupti iure repudiandae.</p>
                                            <div className="flex items-center justify-end text-slate-700 dark:text-slate-200">
                                                <FaClock className="mr-2 text-right text-sm" />
                                                <p className="text-[0.9em]">January 12</p>
                                            </div>
                                        </div>
                                        <div className="p-5 text-slate-700 dark:text-slate-200">
                                            <h4 className="text-lg font-semibold mb-1 text-violet-900 dark:text-violet-200">Email Subject</h4>
                                            <p className="text-[0.9em] mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae rerum pariatur debitis omnis consequatur perferendis nisi cumque corrupti iure repudiandae.</p>
                                            <div className="flex items-center justify-end">
                                                <FaClock className="mr-2 text-right text-sm" />
                                                <p className="text-[0.9em]">January 12</p>
                                            </div>
                                        </div>
                                    </Slider>
                                    <div className="flex justify-center mt-3 text-violet-900 dark:text-violet-300">
                                        <button className="text-sm flex items-center px-4 py-1 font-semibold rounded-full hover:bg-stone-100 dark:hover:bg-slate-700">See More Newsletters <BsArrowRight className="ml-2 text-[15px] text-red-600 dark:text-red-400" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         }
        </>
        
    );
};

export default DashboardSection;