import React from 'react';
import Image from 'next/image';
import { FaCalendarAlt, FaEye, FaHashtag, FaHeart } from "react-icons/fa";
import ReviewSection from './ReviewSection';
import RelatedTopicSection from './RelatedTopicSection';
import Link from 'next/link';

const ForumPostDetails = ({forum}) => {
    const { author, authorImg, category, date, desc, loves, views } = forum;

    return (
        <div>
            <div className="grid grid-rows-1 sm:grid-rows-none sm:gid-cols-2 lg:grid-cols-[minmax(600px,_1fr)_350px] gap-2 pt-10 pb-12 px-8 sm:px-20 md:px-20">
                <div className="px-4 pb-3 lg:pb-0 lg:px-2 bg-gray-100 shadow-md rounded-lg">
                    <div className="p-5">
                        <h1 className="text-3xl mt-2 mb-4 font-bold text-purple-900">Radiant Academy turned 1 today!</h1>
                        <article>
                           {desc}
                        </article>
                    </div>
                </div>
                <div>
                    <div className="px-5 pb-5">
                        <div className="bg-slate-100 drop-shadow-md p-10 flex justify-center items-center flex-col rounded-lg">
                            <div>
                                <Image
                                    src="https://i.postimg.cc/vZHk7RPL/1645616273912.png"
                                    alt="User Profile Picture"
                                    width="100px"
                                    height="100px"
                                    draggable="false" />
                            </div>
                            <div className="mt-3">
                                <h3 className="text-xl text-center">{author}</h3>
                                <div>
                                    <p className="mt-2 flex items-center"><FaCalendarAlt /> &nbsp; {date}</p>
                                    <p className="flex items-center"><FaHashtag /> &nbsp; {category}</p>
                                    <p className="flex items-center"><FaEye style={{color: ''}} /> &nbsp; {views}</p>
                                    <p className="flex items-center"><FaHeart style={{color: 'red'}} /> &nbsp; {loves}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-5 pb-5">
                        <div className="bg-slate-100 drop-shadow-md py-3 px-4 flex justify-center items-center flex-col rounded-lg">
                            <div className="border-b-2" style={{ borderColor: '#F05133' }}>
                                <h2 className="text-xl mb-3">More Post From <span style={{ color: '#F05133' }}>{author}</span></h2>
                            </div>
                            <div className="my-2">
                                <div className="my-3">
                                    <h3 className="text-xl">Read About Facebook</h3>
                                    <p className="text-sm my-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, maiores.</p>
                                    <Link href="/forum/5064" passHref><button className="px-4 py-1 rounded-full mt-2" style={{ backgroundColor: '#FFCA30' }}>Read More!</button></Link>
                                </div>
                                <div>
                                    <h3 className="text-xl">Read About Facebook</h3>
                                    <p className="text-sm my-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, maiores.</p>
                                    <Link href="/forum/9829" passHref><button className="px-4 py-1 rounded-full mt-2" style={{ backgroundColor: '#FFCA30' }}>Read More!</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-12 lg:px-20">
                <ReviewSection />
            </div>
            <RelatedTopicSection />
        </div>
    );
};

export default ForumPostDetails;