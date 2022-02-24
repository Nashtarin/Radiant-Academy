import Head from "next/head";
import React from 'react';
import BlogSection from "../../components/BlogComponents/BlogSection";

const index = () => {
    return (
        <div>
            <Head>
                <title>Radiant Academy | Blog</title>
                <meta name="Your learning partner" content="Best learning app for the curious learners" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* FORUM CONTENTS GOES HERE (WITHOUT NAVBAR & FOOTER) */}
            <BlogSection />
        </div>
    );
};

export default index;