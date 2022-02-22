import Head from "next/head";
import SingleForumSection from "../../components/ForumComponents/SingleForumSection/SingleForumSection";

const SingleForumPage = () => {
    return (
        <div>
            <Head>
                <title>Radiant Academy | Single Forum Page</title>
                <meta name="Your learning partner" content="Best learning app for the curious learners" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* SINGLE FORUM CONTENT GOES HERE (WITHOUT NAVBAR & FOOTER) */}

            <SingleForumSection />
            
            {/* JUST FOR DESIGNING PURPOSE I CREATE THIS PAGE @IFTAKHER_HOSSEN */}
        </div>
    );
};

export default SingleForumPage;