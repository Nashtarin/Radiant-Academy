import Head from "next/head";
import CreatePostSection from "../../components/ForumComponents/CreatePostSection/CreatePostSection";

const CreatePost = () => {
    return (
        <div>
            <Head>
                <title>Radiant Academy | Login</title>
                <meta name="Your learning partner" content="Best learning app for the curious learners" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* LOGIN CONTENT GOES HERE (WITHOUT NAVBAR & FOOTER) */}
            <CreatePostSection />

        </div>
    );
};

export default CreatePost;