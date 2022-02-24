import React, { useEffect, useState } from 'react';
import forum from "../../utilities/FakeData/forum.json";
import TopicSearch from '../ForumComponents/TopicSearch';
import BlogCard from './BlogCard';

const BlogSection = () => {
    const [forumData, isForumData] = useState([]);

    useEffect(() => {
        isForumData(forum);
    }, []);

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
                            forumData.map(forum => <BlogCard
                                key={forum.no}
                                forum={forum}
                            />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSection;