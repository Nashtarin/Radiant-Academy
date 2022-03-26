/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import Script from 'next/script';
import EditTopic from "../../../../components/DashboardComponents/EditTopic";

const EditTopicPage = ({ forum }) => {
    return (
        <div className="bg-white dark:bg-slate-800">
            <Head>
                <title>Radiant Academy | Latest Topic</title>
                <meta name="Your learning partner" content="Best learning app for the curious learners" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Script src="https://kit.fontawesome.com/9dbb72da13.js" />

            <EditTopic forum={forum} />

        </div>
    );
};

export async function getServerSideProps({ params }) {
    const res = await fetch(`http://localhost:3000/api/forums/${params.forumId}`)
    const forum = await res.json()

    return { props: { forum } }
}

export default EditTopicPage;