import Head from 'next/head';
import Script from 'next/script';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ProfileLoading from '../../components/LoadingComponents/ProfileLoaders/ProfileLoading';
import ProfileSection from '../../components/ProfileComponent/ProfileSection';
import { fetchCourses } from '../../utilities/redux/slices/courseSlice';
import { fetchForums } from '../../utilities/redux/slices/forumSlice';
import { fetchQuizzes } from '../../utilities/redux/slices/quizSlice';

const Profile = ({ account }) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(dispatch(fetchCourses()) && dispatch(fetchForums()) && dispatch(fetchQuizzes())){
            setLoading(false);
        }
    }, [dispatch]);

    return (
        <div>
            <Head>
                <title>Radiant Academy | Profile</title>
                <meta name="Your learning partner" content="Best learning app for the curious learners" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Script src="https://kit.fontawesome.com/9dbb72da13.js" />

            {
                loading ? <ProfileLoading/> : <ProfileSection account={account} />
            }
        </div>
    );
};

// // This function gets called at build time
// export async function getStaticPaths() {
//     // Call an external API endpoint to get forums
//     const res = await fetch('http://localhost:3000/api/users')
//     const accounts = await res.json()

//     // Get the paths we want to pre-render based on forums
//     const paths = accounts.data.map((account) => ({
//         params: { email: account.email.toString() },
//     }))

//     // We'll pre-render only these paths at build time.
//     // { fallback: false } means other routes should 404.
//     return { paths, fallback: false }
// }

export async function getServerSideProps({ params }) {
    // params contains the forum `id`.
    // If the route is like /forums/1, then params.id is 1
    const res = await fetch(`http://localhost:3000/api/users/emails/${params.email}`)
    const account = await res.json()

    // Pass forum data to the page via props
    return { props: { account } }
}

export default Profile;