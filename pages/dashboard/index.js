import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import DashboardSection from '../../components/DashboardComponents/DashboardSection';
import DashboardLoading from '../../components/LoadingComponents/DashboardLoaders/DashboardLoading';
import { fetchCategories } from '../../utilities/redux/slices/categorySlice';
import { fetchCourses } from '../../utilities/redux/slices/courseSlice';
import { fetchForums } from '../../utilities/redux/slices/forumSlice';
import { fetchReviews } from '../../utilities/redux/slices/reviewSlice';
import { fetchUsers } from '../../utilities/redux/slices/userSlice';

const Dashboard = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(dispatch(fetchCourses()) && dispatch(fetchForums()) && dispatch(fetchCategories()) && dispatch(fetchReviews()) && dispatch(fetchUsers())){
            setLoading(false);
        }
    }, [dispatch]);

    return (
        <div className='bg-white dark:bg-slate-800'>
            <Head>
                <title>Radiant Academy | Dashboard</title>
                <meta name="Your learning partner" content="Best learning app for the curious learners" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* DASHBOARD CONTENT GOES HERE (WITHOUT NAVBAR & FOOTER) */}
            {
                loading ? <DashboardLoading/> : <DashboardSection />
            }
            
        </div>
    );
};

export default Dashboard;