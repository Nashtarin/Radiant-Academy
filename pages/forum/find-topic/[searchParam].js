import Head from "next/head";
import Script from 'next/script';
import 'react-quill/dist/quill.snow.css'
import FindTopicSection from "../../../components/ForumComponents/FindTopicSection";

const FindTopic = ({ forums }) => {
    return (
        <div>
            <Head>
                <title>Radiant Academy | Search Topic</title>
                <meta name="Your learning partner" content="Best learning app for the curious learners" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Script src="https://kit.fontawesome.com/9dbb72da13.js" />

            {/* SEARCHED CONTENT GOES HERE (WITHOUT NAVBAR & FOOTER) */}
            <FindTopicSection forums={forums} />

        </div>
    );
};

export const getServerSideProps = async () => {
    const url = 'http://localhost:3000/api/forums';
    const res = await fetch(url);
    const data = await res.json();

    return {
        props: {
            forums: data
        }
    }
}

export default FindTopic;