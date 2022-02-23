import Head from "next/head";
import Script from 'next/script';
import ForumPostDetails from "../../components/ForumComponents/ForumPostDetails";

const SingleForumPage = () => {
    return (
        <div>
            <Head>
                <title>Radiant Academy | Single Forum Page</title>
                <meta name="Your learning partner" content="Best learning app for the curious learners" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Script src="https://kit.fontawesome.com/9dbb72da13.js" />

            {/* SINGLE FORUM CONTENT GOES HERE (WITHOUT NAVBAR & FOOTER) */}
            <ForumPostDetails />
            
        </div>
    );
};

export default SingleForumPage;