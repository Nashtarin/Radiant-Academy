import React from 'react';
import DashboardSidebar from './DashboardSidebar';
import { FaInfoCircle, FaEdit, FaEnvelope, FaPhoneSquareAlt, FaBookmark, FaIdCardAlt, FaClone, FaPlus, FaCopy, FaNewspaper, FaClock, FaHashtag, FaEye, FaHeart, FaShare } from 'react-icons/fa';
import { MdPending } from 'react-icons/md';
import { BsArrowRight } from 'react-icons/bs';
import { Chart, ArcElement } from 'chart.js';
Chart.register(ArcElement);
import { Doughnut } from 'react-chartjs-2';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const DashboardSection = () => {
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
        <div className="px-0 sm:px-6 lg:px-12">
            <div className="grid grid-rows-1 md:grid-cols-[250px_minmax(300px,_1fr)] lg:grid-cols-[250px_minmax(600px,_1fr)] m-8 gap-5">
                <div>
                    <DashboardSidebar />
                </div>

                <div className="bg-slate-100 shadow-md rounded-md py-8 px-5 h-auto">
                    <div className="rounded-md p-5 text-white" style={{ backgroundColor: '#32007E' }}>
                        <h5 className="text-lg">Site Overview</h5>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 pb-1 px-4">
                            <div className="flex flex-col items-start border-r-2 mb-2 border-r-zinc-200">
                                <h3 className="text-2xl">23</h3>
                                <p>Pending Submissions</p>
                            </div>
                            <div className="flex flex-col items-start border-r-2 mb-2 border-r-zinc-200">
                                <h3 className="text-2xl">768</h3>
                                <p>Submissions</p>
                            </div>
                            <div className="flex flex-col items-start border-r-2 mb-2 border-r-zinc-200">
                                <h3 className="text-2xl">1.5k+</h3>
                                <p>Total Accounts</p>
                            </div>
                            <div className="flex flex-col items-start border-r-2 mb-2 border-r-zinc-200">
                                <h3 className="text-2xl">588</h3>
                                <p>Subscribers</p>
                            </div>
                            <div className="flex flex-col items-start border-r-2 mb-2 border-r-zinc-200">
                                <h3 className="text-2xl">20</h3>
                                <p>Total Courses</p>
                            </div>
                            <div className="flex flex-col items-start border-r-2 mb-2 border-r-zinc-200">
                                <h3 className="text-2xl">100</h3>
                                <p>Total Quizes</p>
                            </div>
                            <div className="flex flex-col items-start border-r-2 mb-2 border-r-zinc-200">
                                <h3 className="text-2xl">815</h3>
                                <p>Forum Posts</p>
                            </div>
                            <div className="flex flex-col items-start border-r-2 mb-2 border-r-zinc-200">
                                <h3 className="text-2xl">623</h3>
                                <p>Total Reviews</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-rows-1 md:grid-cols-[300px_minmax(200px,_1fr)] lg:grid-cols-[350px_minmax(400px,_1fr)] gap-5 mt-5">
                        <div>
                            <div className="bg-slate-200 shadow-md rounded-md p-5 h-auto mb-5 course-card">
                                <div className="flex items-center justify-between" style={{ color: '#32007E' }}>
                                    <div className="flex items-center">
                                        <FaClone className="mr-2 text-lg" />
                                        <h5 className="text-lg font-semibold">23 Courses</h5>
                                    </div>
                                    <button className="px-4 py-1.5 hover:bg-stone-100 rounded-lg flex items-center uppercase"><FaPlus className="mr-2 text-sm" /> New Course</button>
                                </div>
                                <Slider {...settings}>
                                    <div className="course-items">
                                        <div className="my-5 flex justify-center items-center text-white py-1.5 px-2" style={{ backgroundColor: '#32007E' }}>
                                            <h5>Course Name</h5>
                                        </div>
                                        <div className="my-4 flex justify-between items-center py-1.5 px-2 border-b-2 border-purple-800">
                                            <p className="text-black">Enrollment</p>
                                            <p className="text-red-600 text-sm">Price $ 30</p>
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
                                    <div className="course-items">
                                        <div className="my-5 flex justify-center items-center text-white py-1.5 px-2" style={{ backgroundColor: '#32007E' }}>
                                            <h5>Course Name</h5>
                                        </div>
                                        <div className="my-4 flex justify-between items-center py-1.5 px-2 border-b-2 border-purple-800">
                                            <p className="text-black">Enrollment</p>
                                            <p className="text-red-600 text-sm">Price $ 30</p>
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
                            <div className="bg-slate-200 shadow-md rounded-md p-5 h-auto mb-5">
                                <div className="flex items-center justify-between" style={{ color: '#32007E' }}>
                                    <div className="flex items-center">
                                        <FaInfoCircle className="mr-2 text-lg" />
                                        <h5 className="text-lg font-semibold">Account Info</h5>
                                    </div>
                                    <button className="px-4 py-1.5 hover:bg-stone-100 rounded-lg flex items-center uppercase"><FaEdit className="mr-2" /> Edit</button>
                                </div>
                                <div className="border-[1px] border-stone-300 my-2"></div>
                                <table className="table-compact">
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
                                    <button className="text-sm flex items-center px-4 py-1 font-semibold rounded-full hover:bg-stone-100" style={{ color: '#32007E' }}>See More Info <BsArrowRight className="ml-2 text-[15px] text-red-600" /></button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="bg-slate-200 shadow-md rounded-md p-5 h-auto mb-5">
                                <div className="flex items-center text-xl font-semibold pt-1 pb-4 border-b-2 border-purple-800" style={{ color: '#32007E' }}>
                                    <MdPending className="mr-2" />
                                    <h3>Pending Submissions</h3>
                                </div>
                                <Slider {...settings}>
                                    <div className="p-5">
                                        <h4 className="text-lg font-semibold mb-1">Forum Post Title</h4>
                                        <p className="text-[0.9em] text-gray-600 mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae rerum pariatur debitis omnis consequatur perferendis nisi cumque corrupti iure repudiandae.</p>
                                        <div className="flex items-center justify-between mt-3">
                                            <span className="flex items-center">
                                                <FaClock className="mr-2 text-sm" />
                                                <p className="text-[0.9em]">January 12</p>
                                            </span>
                                            <span className="flex items-center">
                                                <FaHashtag className="mr-2 text-sm" />
                                                <p className="text-[0.9em]">Welcome</p>
                                            </span>
                                            <span className="flex items-center">
                                                <FaEye className="mr-2 text-sm text-purple-800" />
                                                <p className="text-[0.9em]">0</p>
                                            </span>
                                            <span className="flex items-center">
                                                <FaHeart className="mr-2 text-sm text-red-500" />
                                                <p className="text-[0.9em]">0</p>
                                            </span>
                                            <button><FaShare /></button>
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <h4 className="text-lg font-semibold mb-1">Forum Post Title</h4>
                                        <p className="text-[0.9em] text-gray-600 mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae rerum pariatur debitis omnis consequatur perferendis nisi cumque corrupti iure repudiandae.</p>
                                        <div className="flex items-center justify-between mt-3">
                                            <span className="flex items-center">
                                                <FaClock className="mr-2 text-sm" />
                                                <p className="text-[0.9em]">January 12</p>
                                            </span>
                                            <span className="flex items-center">
                                                <FaHashtag className="mr-2 text-sm" />
                                                <p className="text-[0.9em]">Welcome</p>
                                            </span>
                                            <span className="flex items-center">
                                                <FaEye className="mr-2 text-sm text-purple-800" />
                                                <p className="text-[0.9em]">0</p>
                                            </span>
                                            <span className="flex items-center">
                                                <FaHeart className="mr-2 text-sm text-red-500" />
                                                <p className="text-[0.9em]">0</p>
                                            </span>
                                            <button><FaShare /></button>
                                        </div>
                                    </div>
                                </Slider>
                                <style jsx global>
                                    {`
                                        .slick-list{
                                            padding: 2rem 0;
                                        }
                                    `}
                                </style>
                                
                                <div className="flex justify-center mt-3">
                                    <button className="text-sm flex items-center px-4 py-1 font-semibold rounded-full hover:bg-stone-100" style={{ color: '#32007E' }}>See More Submissions <BsArrowRight className="ml-2 text-[15px] text-red-600" /></button>
                                </div>
                            </div>
                            <div className="bg-slate-200 shadow-md rounded-md p-5 h-auto mb-5">
                                <div className="flex items-center text-xl font-semibold pt-1 pb-4 border-b-2 border-purple-800" style={{ color: '#32007E' }}>
                                    <FaNewspaper className="mr-2" />
                                    <h3>Newsletters</h3>
                                </div>
                                <Slider {...settings}>
                                    <div className="p-5">
                                        <h4 className="text-lg font-semibold mb-1">Email Subject</h4>
                                        <p className="text-[0.9em] text-gray-600 mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae rerum pariatur debitis omnis consequatur perferendis nisi cumque corrupti iure repudiandae.</p>
                                        <div className="flex items-center justify-end">
                                            <FaClock className="mr-2 text-right text-sm text-gray-500" />
                                            <p className="text-[0.9em] text-gray-500">January 12</p>
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <h4 className="text-lg font-semibold mb-1">Email Subject</h4>
                                        <p className="text-[0.9em] text-gray-600 mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae rerum pariatur debitis omnis consequatur perferendis nisi cumque corrupti iure repudiandae.</p>
                                        <div className="flex items-center justify-end">
                                            <FaClock className="mr-2 text-right text-sm text-gray-500" />
                                            <p className="text-[0.9em] text-gray-500">January 12</p>
                                        </div>
                                    </div>
                                </Slider>
                                <div className="flex justify-center mt-3">
                                    <button className="text-sm flex items-center px-4 py-1 font-semibold rounded-full hover:bg-stone-100" style={{ color: '#32007E' }}>See More Newsletters <BsArrowRight className="ml-2 text-[15px] text-red-600" /></button>
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