import React from 'react';
import Image from 'next/image';
import { FaCalendarAlt, FaEye, FaHashtag, FaHeart } from "react-icons/fa";
import ReviewSection from './ReviewSection';

const ForumPostDetails = () => {
    return (
        <div>
            <div className="grid grid-rows-1 sm:grid-rows-none sm:gid-cols-2 lg:grid-cols-[minmax(600px,_1fr)_350px] gap-2 pt-10 pb-12 px-8 sm:px-20 md:px-20">
                <div className="px-4 pb-3 lg:pb-0 lg:px-2 bg-gray-100 shadow-md rounded-lg">
                    <div className="p-5">
                        <h1 className="text-3xl mt-2 mb-4 font-bold text-purple-900">Radiant Academy turned 1 today!</h1>
                        <article>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus sapien ultricies pretium massa arcu commodo, facilisis tellus. Placerat cras nisi, nisi, tellus ut diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus sapien ultricies pretium massa arcu commodo, facilisis tellus. Placerat cras nisi, nisi, tellus ut diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus sapien ultricies pretium massa arcu commodo, facilisis tellus. Placerat cras nisi, nisi, tellus ut diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus sapien ultricies pretium massa arcu commodo, facilisis tellus. Placerat cras nisi, nisi, tellus ut diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus sapien ultricies pretium massa arcu commodo, facilisis tellus. Placerat cras nisi, nisi, tellus ut diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus sapien ultricies pretium massa arcu commodo, facilisis tellus. Placerat cras nisi, nisi, tellus ut diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus sapien ultricies pretium massa arcu commodo, facilisis tellus. Placerat cras nisi, nisi, tellus ut diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus sapien ultricies pretium massa arcu commodo, facilisis tellus. Placerat cras nisi, nisi, tellus ut diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus sapien ultricies pretium massa arcu commodo, facilisis tellus. Placerat cras nisi, nisi, tellus ut diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus sapien ultricies pretium massa arcu commodo, facilisis tellus. Placerat cras nisi, nisi, tellus ut diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus sapien ultricies pretium massa arcu commodo, facilisis tellus. Placerat cras nisi, nisi, tellus ut diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus sapien ultricies pretium massa arcu commodo, facilisis tellus. Placerat cras nisi, nisi, tellus ut diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus sapien ultricies pretium massa arcu commodo, facilisis tellus. Placerat cras nisi, nisi, tellus ut diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus sapien ultricies pretium massa arcu commodo, facilisis tellus. Placerat cras nisi, nisi, tellus ut diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus sapien ultricies pretium massa arcu commodo, facilisis tellus. Placerat cras nisi, nisi, tellus ut diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus sapien ultricies pretium massa arcu commodo, facilisis tellus. Placerat cras nisi, nisi, tellus ut diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus sapien ultricies pretium massa arcu commodo, facilisis tellus. Placerat cras nisi, nisi, tellus ut diam.Lorem
                        </article>
                    </div>
                </div>
                <div>
                    <div className="px-5 pb-5">
                        <div className="bg-slate-100 drop-shadow-md p-10 flex justify-center items-center flex-col rounded-lg">
                            <div>
                                <Image src="/img/people-3.png" alt="User Profile Picture" width="100px" height="100px" draggable="false" />
                            </div>
                            <div className="mt-3">
                                <h3 className="text-xl text-center">Author Name</h3>
                                <div>
                                    <p className="mt-2 flex items-center"><FaCalendarAlt /> &nbsp; Publishing Date</p>
                                    <p className="flex items-center"><FaHashtag /> &nbsp; Welcome, RadiantAcademy</p>
                                    <p className="flex items-center"><FaEye style={{color: ''}} /> &nbsp; 1214</p>
                                    <p className="flex items-center"><FaHeart style={{color: 'red'}} /> &nbsp; 300</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-5 pb-5">
                        <div className="bg-slate-100 drop-shadow-md py-3 px-4 flex justify-center items-center flex-col rounded-lg">
                            <div className="border-b-2" style={{ borderColor: '#F05133' }}>
                                <h2 className="text-xl mb-3">More Post From <span style={{ color: '#F05133' }}>Author Name</span></h2>
                            </div>
                            <div className="my-2">
                                <div className="my-3">
                                    <h3 className="text-xl">Read About Facebook</h3>
                                    <p className="text-sm my-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, maiores.</p>
                                    <button className="px-4 py-1 rounded-full mt-2" style={{ backgroundColor: '#FFCA30' }}>Read More!</button>
                                </div>
                                <div>
                                    <h3 className="text-xl">Read About Facebook</h3>
                                    <p className="text-sm my-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, maiores.</p>
                                    <button className="px-4 py-1 rounded-full mt-2" style={{ backgroundColor: '#FFCA30' }}>Read More!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-12 lg:px-20">
                <ReviewSection />
            </div>
        </div>
    );
};

export default ForumPostDetails;