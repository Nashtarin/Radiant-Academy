import Head from "next/head";
import React from 'react';
import EditorSection from "../../components/EditorComponents/EditorSection";

const index = () => {
  return (
    <div>
      <Head>
        <title>Radiant Academy | Coding Playground</title>
        <meta name="Your learning partner" content="Best learning app for the curious learners" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* FORUM CONTENTS GOES HERE (WITHOUT NAVBAR & FOOTER) */}
      <EditorSection/>

    </div>
  );
};

export default index;