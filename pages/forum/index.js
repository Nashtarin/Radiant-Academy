import Head from "next/head";
import React from 'react';
import BrowseCategorySection from "../../components/ForumComponents/BrowseCategorySection";
import FeaturedTopicSection from '../../components/ForumComponents/FeaturedTopicSection';
import TopicSearch from "../../components/ForumComponents/TopicSearch";

const index = ({ forums }) => {
  return (
    <div>
      <Head>
        <title>Radiant Academy | Forum</title>
        <meta name="Your learning partner" content="Best learning app for the curious learners" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* FORUM CONTENTS GOES HERE (WITHOUT NAVBAR & FOOTER) */}
      <div className='container mx-auto'>
        <h1 className='text-5xl font-bold text-center mt-12 mb-5 text-violet-800 px-4'>
          Welcome to our forum
        </h1>
      </div>
      <TopicSearch />
      <BrowseCategorySection />
      <FeaturedTopicSection forums={forums} />

    </div>
  );
};

export const getServerSideProps = async () => {
  const url = 'https://radiant-academy.vercel.app/api/forums';
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: {
      forums: data
    }
  }
}

export default index;