import React from 'react';
import Head from 'next/head';
import ProfileSection from '../../components/ProfileComponent/ProfileSection';
import Script from 'next/script';

const Profile = () => {
    return (
        <div>
            <Head>
                <title>Radiant Academy | Profile</title>
                <meta name="Your learning partner" content="Best learning app for the curious learners" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Script src="https://kit.fontawesome.com/9dbb72da13.js" />

            <ProfileSection />
        </div>
    );
};

export default Profile;