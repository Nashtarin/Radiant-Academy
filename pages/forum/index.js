import Head from "next/head";
import React, { useEffect, useState } from 'react';
import BrowseCategory from "../../components/ForumComponents/BrowseCategory";
import FeaturedSection from '../../components/ForumComponents/FeaturedSection';
import TopicSearch from "../../components/ForumComponents/TopicSearch";

const index = () => {
  return (
    <div>
      <Head>
        <title>Radiant Academy | Forum</title>
        <meta name="Your learning partner" content="Best learning app for the curious learners" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* FORUM CONTENTS GOES HERE (WITHOUT NAVBAR & FOOTER) */}
      <TopicSearch/>
      <BrowseCategory/>
      <FeaturedSection/>
      
    </div>
  );
};

export default index;
