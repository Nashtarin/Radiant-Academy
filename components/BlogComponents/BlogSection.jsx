import React from 'react';
import TopicSearch from '../ForumComponents/TopicSearch';
import BlogCard from './BlogCard';
import { BsArrowRight } from "react-icons/bs";
import Link from 'next/link';

const BlogSection = ({ blogs }) => {
    return (
        <div>
            <div>
                <div className="text-center pt-[4rem]">
                    <h1 className="text-5xl text-purple-800 font-semibold">Blogs</h1>
                </div>
                <div className="py-5">
                    <TopicSearch />
                </div>
                <div className="grid grid-rows-1 px-1 sm:px-10 md:px-20 pt-5 p-20">
                    <div>
                        {
                            blogs.articles.map(blog => <BlogCard
                                key={blog.publishedAt}
                                blog={blog}
                            />)
                        }
                    </div>
                    <div className="flex justify-center my-2 p-5">
                        <Link href="/blogs" passHref>
                            <button className="btn bg-purple-800 text-[1em] px-8 rounded-full">
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