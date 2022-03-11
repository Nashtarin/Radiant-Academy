import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCalendarAlt, FaEye, FaHashtag, FaHeart } from "react-icons/fa";
import Linkify from 'react-linkify';

const ForumPostDetails = ({ forum }) => {
    const { _id, title, author, authorImg, category, createdAt, desc, loves, views } = forum;

    return (
        <div>
            <div className="grid grid-rows-1 sm:grid-rows-none sm:gid-cols-2 lg:grid-cols-[minmax(600px,_1fr)_350px] gap-2 pt-10 pb-12 px-8 sm:px-20 md:px-20">
                <div className="px-4 pb-3 lg:pb-0 lg:px-2 bg-gray-100 shadow-md rounded-lg dark:bg-slate-700">
                    <div className="py-6 px-10 max-h-full">
                        <h1 className="text-3xl mt-2 mb-4 font-bold text-purple-900 dark:text-violet-400">
                            {title}
                        </h1>
                        <article className="text-slate-700 dark:text-slate-200 whitespace-pre-line">
                            <Linkify properties={{ style: { color: 'blue', textDecoration: 'none' } }}>{desc}</Linkify>
                        </article>
                    </div>
                </div>
                <div>
                    <div className="px-5 pb-5">
                        <div className="bg-slate-100 dark:bg-slate-700 drop-shadow-md p-10 flex justify-center items-center flex-col rounded-lg">
                            <div className='rounded-full'>
                                <Image
                                    src={authorImg}
                                    alt="User Profile Picture"
                                    width="100px"
                                    height="100px"
                                    draggable="false"
                                    className='rounded-full'
                                />
                            </div>
                            <div className="mt-3">
                                <h3 className="text-xl text-center text-slate-700 dark:text-slate-200">
                                    {author}
                                </h3>
                                <div>
                                    <p className="mt-2 flex items-center text-slate-700 dark:text-slate-200">
                                        <FaCalendarAlt />
                                        &nbsp; {moment(createdAt).fromNow()}
                                    </p>
                                    <p className="flex items-center text-slate-700 dark:text-slate-200">
                                        <FaHashtag />
                                        &nbsp; {category}
                                    </p>
                                    <p className="flex items-center text-slate-700 dark:text-slate-200">
                                        <FaEye style={{ color: '' }} />
                                        &nbsp; {views}
                                    </p>
                                    <p className="flex items-center text-slate-700 dark:text-slate-200">
                                        <FaHeart style={{ color: 'red' }} />
                                        &nbsp; {loves}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-5 pb-5">
                        <div className="bg-slate-100 dark:bg-slate-700 drop-shadow-md py-3 px-4 flex justify-center items-center flex-col rounded-lg">
                            <div className="border-b-2" style={{ borderColor: '#F05133' }}>
                                <h2 className="text-xl mb-3 text-slate-700 dark:text-slate-200">More Post From <span style={{ color: '#F05133' }}>{author.split(' ').slice(-1).join(' ')}</span></h2>
                            </div>
                            <div className="my-2">
                                <div className="my-3">
                                    <h3 className="text-xl text-slate-700 dark:text-slate-200">Read About Facebook</h3>
                                    <p className="text-sm my-1 text-slate-700 dark:text-slate-200">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, maiores.</p>
                                    <Link href="/forum/5064" passHref><button className="px-4 py-1 rounded-full mt-2" style={{ backgroundColor: '#FFCA30' }}>Read More!</button></Link>
                                </div>
                                <div>
                                    <h3 className="text-xl text-slate-700 dark:text-slate-200">Read About Twitter</h3>
                                    <p className="text-sm my-1 text-slate-700 dark:text-slate-200">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, maiores.</p>
                                    <Link href="/forum/9829" passHref><button className="px-4 py-1 rounded-full mt-2" style={{ backgroundColor: '#FFCA30' }}>Read More!</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForumPostDetails;