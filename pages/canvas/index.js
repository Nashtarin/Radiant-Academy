import Head from "next/head";
import React from 'react';
import CanvasBoard from "../../components/CanvasComponents/CanvasBoard";

const index = () => {
    return (
        <div>
            <Head>
                <title>Radiant Academy | Canvas</title>
                <meta name="Your learning partner" content="Best learning app for the curious learners" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* CANVAS CONTENTS GOES HERE (WITHOUT NAVBAR & FOOTER) */}
            <CanvasBoard />
        </div>
    );
};

export default index;