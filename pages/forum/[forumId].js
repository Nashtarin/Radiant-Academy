import Head from "next/head";
import ForumPostDetails from "../../components/ForumComponents/ForumPostDetails";

const SingleForumPage = () => {
    return (
        <div>
            <Head>
                <title>Radiant Academy | Single Forum Page</title>
                <meta name="Your learning partner" content="Best learning app for the curious learners" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* SINGLE FORUM CONTENT GOES HERE (WITHOUT NAVBAR & FOOTER) */}
            <ForumPostDetails />
            
        </div>
    );
};

export default SingleForumPage;