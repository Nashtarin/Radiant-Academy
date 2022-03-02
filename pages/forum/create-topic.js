import Head from "next/head";
import CreateTopicSection from "../../components/ForumComponents/CreateTopicSection";
import 'react-quill/dist/quill.snow.css'

const CreateTopic = () => {
    return (
        <div>
            <Head>
                <title>Radiant Academy | Create New Topic</title>
                <meta name="Your learning partner" content="Best learning app for the curious learners" />
                <link rel="icon" href="/favicon.ico" />                
            </Head>

            {/* CREATE POST CONTENT GOES HERE (WITHOUT NAVBAR & FOOTER) */}
            <CreateTopicSection />

        </div>
    );
};

export default CreateTopic;