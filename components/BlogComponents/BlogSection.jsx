import React, { useEffect, useState } from 'react';
import TopicSearch from '../ForumComponents/TopicSearch';
import BlogCard from './BlogCard';

const BlogSection = ({blogs}) => {
    // console.log('blogs',blogs)
    return (
        <div>
            <div>
                <div className="text-center pt-[4rem]">
                    <h1 className="text-5xl text-purple-800 font-semibold">Blogs</h1>
                </div>
                <div className="pt-5">
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
                </div>
            </div>
        </div>
    );
};

export default BlogSection;