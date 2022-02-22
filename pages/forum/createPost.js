import Head from "next/head";
import CreatePostSection from "../../components/ForumComponents/CreatePostSection/CreatePostSection";
import 'react-quill/dist/quill.snow.css'

const CreatePost = () => {
    return (
        <div>
            <Head>
                <title>Radiant Academy | Create New Post</title>
                <meta name="Your learning partner" content="Best learning app for the curious learners" />
                <link rel="icon" href="/favicon.ico" />                
            </Head>

            {/* CREATE POST CONTENT GOES HERE (WITHOUT NAVBAR & FOOTER) */}
            <CreatePostSection />

        </div>
    );
};

export default CreatePost;