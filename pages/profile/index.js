import React from 'react';
import Head from 'next/head';
import ProfileSection from '../../components/ProfileComponent/ProfileSection';

const Profile = () => {
    return (
        <div>
            <Head>
                <title>Radiant Academy | Profile</title>
                <meta name="Your learning partner" content="Best learning app for the curious learners" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ProfileSection />
        </div>
    );
};

export default Profile;