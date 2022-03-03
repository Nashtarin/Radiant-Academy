import moment from "moment";
import Link from "next/link";
import React from "react";
import { BsArrowRight, BsFillClockFill } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";

const BlogCard = ({ blog }) => {
    const { author, description, title, source, url, publishedAt } = blog;

    return (
        <div className="grid grid-rows-1 my-5 mx-5 bg-slate-100 dark:bg-slate-700 rounded-md shadow-md">
            <div className="px-4 sm:px-8">
                <h1 className="text-2xl font-bold text-violet-900 dark:text-violet-400 mt-5 mb-1">
                    {title}
                </h1>
                <h3 className="text-md mb-2 text-stone-400">
                    Posted By <span className="text-rose-400 font-medium">{author}</span>
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-[1.1em]">
                    {description}
                </p>
                <div className="w-5/6">
                    <div className="pt-3 pb-5 flex items-center">
                        <p className="flex items-center font-semibold text-slate-700 mr-5 dark:text-slate-300">
                            <span className="my-auto mr-1.5"><BsFillClockFill /></span> {moment(publishedAt).fromNow()}
                        </p>
                        <p className="flex items-center font-semibold text-slate-700 mr-5 dark:text-slate-300">
                            <span className="my-auto mr-1"><FaHashtag /></span>{source.name}
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-span-2 sm:col-span-1 py-5 ps-12 sm:pr-8 flex justify-center sm:justify-end items-center">
                <Link href={url} passHref>
                    <button className="rounded-3xl bg-rose-500 text-black font-semibold py-2 px-6 hover:bg-slate-700 hover:text-white duration-300 inline-flex items-center justify-center dark:hover:bg-slate-800">
                        Read More <BsArrowRight className="ml-1" />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;