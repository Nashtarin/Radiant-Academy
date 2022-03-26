import Head from "next/head";
import React from 'react';
import BlogSection from "../../components/BlogComponents/BlogSection";

const Blog = () => {
    return (
        <div>
            <Head>
                <title>Radiant Academy | Blogs</title>
                <meta name="Your learning partner" content="Best learning app for the curious learners" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* BLOGS CONTENTS GOES HERE (WITHOUT NAVBAR & FOOTER) */}
            <BlogSection/>
        </div>
    );
};

export default Blog;