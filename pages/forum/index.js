import Head from "next/head";
import React, { useEffect, useState } from 'react';
import BrowseCategorySection from "../../components/ForumComponents/BrowseCategorySection";
import FeaturedTopicSection from '../../components/ForumComponents/FeaturedTopicSection';
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
      <TopicSearch />
      <BrowseCategorySection />
      <FeaturedTopicSection />

    </div>
  );
};

export default index;