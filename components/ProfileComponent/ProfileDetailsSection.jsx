import { useRouter } from 'next/router';
import React from 'react';
import { FaDollarSign, FaEye, FaFlag, FaHashtag, FaHeart, FaTrash, FaUserFriends } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { setWhichCourse } from '../../utilities/redux/slices/quizSlice';

const ProfileDetailsSection = ({ account }) => {
    console.log('account',account)
    const router = useRouter();
    const dispatch = useDispatch();

    const allCourses = useSelector((state) => state.courses.coursesList);
    const allUsers = useSelector((state) => state.users.usersList);
    const enrolled = account?.data[0]?.enrolledCourses;
    console.log('enrolled',enrolled,'acd',account.data.length)
    const enrolledChecker = account.data.length!==0 ? enrolled.map(enroll => {
        let index = allCourses.findIndex(course => enroll.courseId === course._id);
        if (index > -1) {
            return allCourses[index];
        }
        return 0;
    }): '';

    const handleDelete = () => {
        console.log('clicked')
    }

    const handleQuiz = (course) => {
        dispatch(setWhichCourse(course._id));
        router.push(`/my-course/course-contents/${course._id}`);
    }

    return (
        <div className='bg-slate-200 dark:bg-slate-700'>
            <div className="p-5 bg-slate-200 dark:bg-slate-700">
                <Tabs>
                    <TabList className="grid grid-cols-4 mb-5 text-center gap-2 border-b-2 border-black text-slate-700 dark:text-slate-200">
                        <Tab className="bg-transparent border-0 shadow-none text-lg px-2 py-1.5 mx-1 font-medium">Courses</Tab>
                        <Tab className="bg-transparent border-0 shadow-none text-lg px-2 py-1.5 mx-1 font-medium">Topics</Tab>
                        <Tab className="bg-transparent border-0 shadow-none text-lg px-2 py-1.5 mx-1 font-medium">Progress</Tab>
                        <Tab className="bg-transparent border-0 shadow-none text-lg px-2 py-1.5 mx-1 font-medium">Settings</Tab>
                    </TabList>

                    <div className="tab-panes bg-slate-200 dark:bg-slate-700">
                        <TabPanel className="p-5">
                            <section className="overflow-x-auto">
                                <div className=" w-full overflow-none">
                                    <div>
                                        {
                                        account.data.length!==0 ?
                                            enrolledChecker.map(course => (
                                                <div className="container grid grid-cols-8 bg-slate-700 text-slate-200 dark:text-slate-800 dark:bg-slate-200 p-2 rounded-md mb-2 items-center" key={course._id}>
                                                    <h1 className="font-semibold col-span-2">{course.title}</h1>
                                                    <h1>
                                                        <span className="flex items-center">
                                                            <FaDollarSign className="text-lg" />{course.price}
                                                        </span>
                                                    </h1>
                                                    <h1 className="text-center text-green-600 font-semibold uppercase">Premium</h1>
                                                    <h1>
                                                        <span className="flex items-center">
                                                            <FaUserFriends className="text-2xl mr-1.5 text-purple-800" /> {course.enrolled}
                                                        </span>
                                                    </h1>
                                                    <h1>
                                                        <span className="flex items-center">
                                                            <FaHeart className="mr-1.5 text-red-500" /> 304
                                                        </span>
                                                    </h1>
                                                    <h1 className="text-center text-orange-500 font-semibold">Pending</h1>
                                                    <h1>
                                                        <button className="btn btn-ghost py-0  uppercase" onClick={() => handleQuiz(course)}>
                                                            START
                                                        </button>
                                                    </h1>
                                                </div>
                                            )
                                            ):<h1 className='text-4xl text-center bg-white dark:text-white dark:bg-slate-700 overflow-hidden'>You have not enrolled any courses</h1>
                                        }
                                    </div>
                                </div>
                            </section>
                        </TabPanel>
                        <TabPanel className="px-5 pt-0">
                            <section className="overflow-x-auto">
                                <div className=" w-full bg-slate-200 dark:bg-slate-700 overflow-none">
                                    <div>
                                        <div className="grid grid-cols-8 bg-slate-700 dark:bg-white text-slate-200 dark:text-slate-700 p-5 rounded-md mb-2">
                                            <h1 className="font-semibold col-span-3">Radiant Academy turned 2 today!</h1>
                                            <h1>
                                                <span className="flex items-center">
                                                    <FaHashtag className="mr-1.5" /> Welcome
                                                </span>
                                            </h1>
                                            <h1>
                                                <span className="flex items-center">
                                                    <FaEye className="mr-1.5 text-purple-800" /> 1213
                                                </span>
                                            </h1>
                                            <h1>
                                                <span className="flex items-center">
                                                    <FaHeart className="mr-1.5 text-red-500" /> 304
                                                </span>
                                            </h1>
                                            <h1 className="text-center text-orange-500">Pending</h1>
                                            <h1 className='text-right'>
                                                <button onClick={handleDelete}>
                                                    <FaTrash className="hover:text-red-500" />
                                                </button>
                                            </h1>
                                        </div>
                                        <div className="grid grid-cols-8 bg-slate-700 dark:bg-white text-slate-200 dark:text-slate-700 p-5 rounded-md mb-2">
                                            <h1 className="font-semibold col-span-3">Radiant Academy turned 2 today!</h1>
                                            <h1>
                                                <span className="flex items-center">
                                                    <FaHashtag className="mr-1.5" /> Welcome
                                                </span>
                                            </h1>
                                            <h1>
                                                <span className="flex items-center">
                                                    <FaEye className="mr-1.5 text-purple-800" /> 1213
                                                </span>
                                            </h1>
                                            <h1>
                                                <span className="flex items-center">
                                                    <FaHeart className="mr-1.5 text-red-500" /> 304
                                                </span>
                                            </h1>
                                            <h1 className="text-center text-orange-500">Pending</h1>
                                            <h1 className='text-right'>
                                                <button onClick={handleDelete}>
                                                    <FaTrash className="hover:text-red-500" />
                                                </button>
                                            </h1>
                                        </div>
                                        <div className="grid grid-cols-8 bg-slate-700 dark:bg-white text-slate-200 dark:text-slate-700 p-5 rounded-md mb-2">
                                            <h1 className="font-semibold col-span-3">Radiant Academy turned 2 today!</h1>
                                            <h1>
                                                <span className="flex items-center">
                                                    <FaHashtag className="mr-1.5" /> Welcome
                                                </span>
                                            </h1>
                                            <h1>
                                                <span className="flex items-center">
                                                    <FaEye className="mr-1.5 text-purple-800" /> 1213
                                                </span>
                                            </h1>
                                            <h1>
                                                <span className="flex items-center">
                                                    <FaHeart className="mr-1.5 text-red-500" /> 304
                                                </span>
                                            </h1>
                                            <h1 className="text-center text-orange-500">Pending</h1>
                                            <h1 className='text-right'>
                                                <button onClick={handleDelete}>
                                                    <FaTrash className="hover:text-red-500" />
                                                </button>
                                            </h1>
                                        </div>
                                        
                                    </div>
                                </div>
                            </section>
                        </TabPanel>
                        <TabPanel className="px-5 pt-0">
                            <section className="overflow-x-auto">
                                <div className=" w-full bg-slate-200 dark:bg-slate-700 overflow-none">
                                    <div>
                                        <div className="bg-slate-700 dark:bg-slate-200 text-slate-200 dark:text-slate-700 grid grid-cols-6 p-3 rounded-md mb-2">
                                            <h1 className="text-lg font-semibold col-span-2">Quiz Name</h1>
                                            <h1 className="text-green-600 font-semibold uppercase">Premium</h1>
                                            <h1>
                                                <span className="flex items-center">
                                                    <FaUserFriends className="text-2xl mr-1.5 text-purple-800" /> 1213
                                                </span>
                                            </h1>
                                            <h1>
                                                <span className="flex items-center">
                                                    <FaFlag className="mr-1.5 text-lg" /> 100%
                                                </span>
                                            </h1>
                                            <h1 className="text-green-600 font-semibold">Completed</h1>
                                        </div>
                                        <div className="bg-slate-700 dark:bg-slate-200 text-slate-200 dark:text-slate-700 grid grid-cols-6 p-3 rounded-md mb-2">
                                            <h1 className="text-lg font-semibold col-span-2">Quiz Name</h1>
                                            <h1 className="text-green-600 font-semibold uppercase">Premium</h1>
                                            <h1>
                                                <span className="flex items-center">
                                                    <FaUserFriends className="text-2xl mr-1.5 text-purple-800" /> 1213
                                                </span>
                                            </h1>
                                            <h1>
                                                <span className="flex items-center">
                                                    <FaFlag className="mr-1.5 text-lg" /> 100%
                                                </span>
                                            </h1>
                                            <h1 className="text-green-600 font-semibold">Completed</h1>
                                        </div>
                                        <div className="bg-slate-700 dark:bg-slate-200 text-slate-200 dark:text-slate-700 grid grid-cols-6 p-3 rounded-md mb-2">
                                            <h1 className="text-lg font-semibold col-span-2">Quiz Name</h1>
                                            <h1 className="text-green-600 font-semibold uppercase">Premium</h1>
                                            <h1>
                                                <span className="flex items-center">
                                                    <FaUserFriends className="text-2xl mr-1.5 text-purple-800" /> 1213
                                                </span>
                                            </h1>
                                            <h1>
                                                <span className="flex items-center">
                                                    <FaFlag className="mr-1.5 text-lg" /> 100%
                                                </span>
                                            </h1>
                                            <h1 className="text-green-600 font-semibold">Completed</h1>
                                        </div>
                                        
                                    </div>
                                </div>
                            </section>
                        </TabPanel>
                        <TabPanel className="px-5 pt-0">
                            <div className="flex justify-center items-center">
                                <h1 className="text-4xl font-semibold text-purple-800 dark:text-purple-400">Coming Soon!</h1>
                            </div>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </div>
    );
};

export default ProfileDetailsSection;