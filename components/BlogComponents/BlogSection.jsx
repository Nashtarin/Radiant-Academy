import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import TopicSearch from '../ForumComponents/TopicSearch';
import BlogCard from './BlogCard';

const BlogSection = ({ blogs }) => {
    return (
        <div className='bg-white dark:bg-slate-800'>
            <div>
                <div className="text-center pt-[4rem]">
                    <h1 className="text-5xl text-violet-900 dark:text-violet-400 font-semibold">Blogs</h1>
                </div>
                <div className="py-5">
                    <TopicSearch />
                </div>
                <div className="grid grid-rows-1 px-1 sm:px-10 md:px-20 pt-5 p-20">
                    <div className=''>
                        {
                            blogs.articles.map(blog => <BlogCard
                                key={blog.publishedAt}
                                blog={blog}
                            />)
                        }
                    </div>
                    <div className="flex justify-center my-2 p-5">
                        <Link href="/blogs" passHref>
                            <button className="btn bg-violet-900 dark:bg-violet-400 dark:text-black dark:hover:text-white dark:hover:bg-slate-700 text-[1em] px-8 rounded-full">
                                See More! &nbsp; <BsArrowRight />
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogSection;