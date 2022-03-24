/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import Script from 'next/script';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ForumPostDetails from "../../components/ForumComponents/ForumPostDetails";
import RelatedTopicSection from "../../components/ForumComponents/RelatedTopicSection";
import ReviewSection from "../../components/ForumComponents/ReviewSection";
import { topicView } from "../../utilities/redux/slices/forumSlice";

const SingleForumPage = ({ forum }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(topicView(forum))
    }, [forum, dispatch]);

    return (
        <div className="bg-white dark:bg-slate-800">
            <Head>
                <title>Radiant Academy | Latest Topic</title>
                <meta name="Your learning partner" content="Best learning app for the curious learners" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Script src="https://kit.fontawesome.com/9dbb72da13.js" />

            {/* SINGLE FORUM CONTENT GOES HERE (WITHOUT NAVBAR & FOOTER) */}
            <ForumPostDetails forum={forum} />
            <ReviewSection forum={forum} />
            <RelatedTopicSection forum={forum} />

        </div>
    );
};

// // This function gets called at build time
// export async function getStaticPaths() {
//     // Call an external API endpoint to get forums
//     const res = await fetch('http://localhost:3000/api/forums')
//     const forums = await res.json()

//     // Get the paths we want to pre-render based on forums
//     const paths = forums.data.map((forum) => ({
//         params: { forumId: forum._id.toString() },
//     }))

//     // We'll pre-render only these paths at build time.
//     // { fallback: false } means other routes should 404.
//     return { paths, fallback: false }
// }

export async function getServerSideProps({ params }) {
    // params contains the forum `id`.
    // If the route is like /forums/1, then params.id is 1
    const res = await fetch(`http://localhost:3000/api/forums/${params.forumId}`)
    const forum = await res.json()

    // Pass forum data to the page via props
    return { props: { forum } }
}

export default SingleForumPage;