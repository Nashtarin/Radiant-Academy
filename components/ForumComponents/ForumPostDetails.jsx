import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCalendarAlt, FaEye, FaHashtag, FaHeart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import Linkify from 'react-linkify';

const ForumPostDetails = ({ forum }) => {
    const { _id, title, author, authorImg, authorEmail, category, createdAt, desc, loves, views } = forum;
    const allTopics = useSelector((state) => state.forums.forumsList);
    const userTopics = allTopics.filter(topic => topic.authorEmail === authorEmail);
    const filtered = userTopics.filter(topic => (_id !== topic._id && topic.status !== false));

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
                            {
                                filtered.length > 0 ?
                                    <div className="border-b-2" style={{ borderColor: '#A78BFA' }}>
                                        <h2 className="text-xl mb-3 text-slate-700 dark:text-slate-200">More Post From <span className="text-purple-900 dark:text-violet-400">{author.split(' ').slice(-1).join(' ')}</span></h2>
                                    </div>
                                    : <div className="border-b-2" style={{ borderColor: '#A78BFA' }}>
                                        <h2 className="text-xl mb-3 text-slate-700 dark:text-slate-200"><span className="text-purple-900 dark:text-violet-400">{author.split(' ').slice(-1).join(' ')}</span> Posted only once!</h2>
                                    </div>
                            }
                            
                            <div className="my-2">
                                {
                                    filtered.slice(0, 2).map(topic => (
                                        <div className="my-3" key={topic._id}>
                                            <h3 className="text-md text-slate-700 dark:text-slate-200">{topic.title.split(' ').slice(0, 10).toString().replace(/,/g, ' ')} . .</h3>
                                            <Link href={`/forum/${topic._id}`} passHref><button className="px-4 py-1 rounded-full mt-2" style={{ backgroundColor: '#FFCA30' }}>Read More!</button></Link>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForumPostDetails;