import { useRouter } from 'next/router';
import React from 'react';
import { FaDollarSign, FaEye, FaFlag, FaHashtag, FaHeart, FaTrash, FaUserFriends } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useCrud from '../../utilities/Hooks/useCrud';
import { setWhichCourse } from '../../utilities/redux/slices/quizSlice';

const ProfileDetailsSection = ({ account }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { handleRemove } = useCrud();

    const allCourses = useSelector((state) => state.courses.coursesList);

    const allTopics = useSelector((state) => state.forums.forumsList);
    const userTopics = allTopics.filter(topic => topic.authorEmail === account.data[0].email);

    const enrolled = account?.data[0]?.enrolledCourses;
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
                        <Tab className="bg-transparent border-0 shadow-none text-lg px-2 py-1.5 mx-1 font-medium cursor-pointer">Courses</Tab>
                        <Tab className="bg-transparent border-0 shadow-none text-lg px-2 py-1.5 mx-1 font-medium cursor-pointer">Topics</Tab>
                        <Tab className="bg-transparent border-0 shadow-none text-lg px-2 py-1.5 mx-1 font-medium cursor-pointer">Progress</Tab>
                        <Tab className="bg-transparent border-0 shadow-none text-lg px-2 py-1.5 mx-1 font-medium cursor-pointer">Settings</Tab>
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
                                                    <h2 className="font-semibold col-span-2">{course.title}</h2>
                                                    <h2>
                                                        <span className="flex items-center">
                                                            <FaDollarSign className="text-lg" />{course.price}
                                                        </span>
                                                    </h2>
                                                    <h2 className="text-center text-green-600 font-semibold uppercase">Premium</h2>
                                                    <h2>
                                                        <span className="flex items-center">
                                                            <FaUserFriends className="text-2xl mr-1.5 text-purple-800" /> {course.enrolled}
                                                        </span>
                                                    </h2>
                                                    <h2>
                                                        <span className="flex items-center">
                                                            <FaHeart className="mr-1.5 text-red-500" /> 304
                                                        </span>
                                                    </h2>
                                                    <h2 className="text-center text-orange-500 font-semibold">Pending</h2>
                                                    <h2>
                                                        <button className="btn btn-ghost py-0  uppercase" onClick={() => handleQuiz(course)}>
                                                            START
                                                        </button>
                                                    </h2>
                                                </div>
                                            )):<h2 className='text-4xl text-center bg-white dark:text-white dark:bg-slate-700 overflow-hidden'>You have not enrolled any courses</h2>
                                        }
                                    </div>
                                </div>
                            </section>
                        </TabPanel>
                        <TabPanel className="px-5 pt-0">
                            <section className="overflow-x-auto">
                                <div className=" w-full bg-slate-200 dark:bg-slate-700 overflow-none">
                                    <div>
                                        {
                                            userTopics.length!==0 ?
                                                userTopics.map(topic => (
                                                    <div className="grid grid-cols-8 bg-slate-700 dark:bg-white text-slate-200 dark:text-slate-700 p-5 rounded-md mb-2" key={topic._id}>
                                                        <h2 className="font-semibold col-span-3">{topic.desc.split(' ').slice(0, 7).toString().replace(/,/g, ' ')}</h2>
                                                        <h2>
                                                            <span className="flex items-center">
                                                                <FaHashtag className="mr-1.5" /> {topic.category}
                                                            </span>
                                                        </h2>
                                                        <h2>
                                                            <span className="flex items-center">
                                                                <FaEye className="mr-1.5 text-purple-800" /> {topic.views}
                                                            </span>
                                                        </h2>
                                                        <h2>
                                                            <span className="flex items-center">
                                                                <FaHeart className="mr-1.5 text-red-500" /> {topic.loves}
                                                            </span>
                                                        </h2>

                                                        {topic.status === false ? <h2 className="text-center text-orange-500">Pending</h2> : <h2 className="text-center text-green-500">Approved</h2>}
                                                        
                                                        <h2 className='text-right'>
                                                            <button onClick={handleDelete}>
                                                                <FaTrash className="hover:text-red-500" onClick={() => handleRemove(topic._id, 'topic')}/>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                ))
                                            :<h2 className='text-4xl text-center dark:text-white overflow-hidden'>You have no submission on forum</h2>
                                        }
                                        
                                    </div>
                                </div>
                            </section>
                        </TabPanel>
                        <TabPanel className="px-5 pt-0">
                            <section className="overflow-x-auto">
                                <div className=" w-full bg-slate-200 dark:bg-slate-700 overflow-none">
                                    <div>
                                        <div className="bg-slate-700 dark:bg-slate-200 text-slate-200 dark:text-slate-700 grid grid-cols-6 p-3 rounded-md mb-2">
                                            <h2 className="text-lg font-semibold col-span-2">Quiz Name</h2>
                                            <h2 className="text-green-600 font-semibold uppercase">Premium</h2>
                                            <h2>
                                                <span className="flex items-center">
                                                    <FaUserFriends className="text-2xl mr-1.5 text-purple-800" /> 1213
                                                </span>
                                            </h2>
                                            <h2>
                                                <span className="flex items-center">
                                                    <FaFlag className="mr-1.5 text-lg" /> 100%
                                                </span>
                                            </h2>
                                            <h2 className="text-green-600 font-semibold">Completed</h2>
                                        </div>
                                        <div className="bg-slate-700 dark:bg-slate-200 text-slate-200 dark:text-slate-700 grid grid-cols-6 p-3 rounded-md mb-2">
                                            <h2 className="text-lg font-semibold col-span-2">Quiz Name</h2>
                                            <h2 className="text-green-600 font-semibold uppercase">Premium</h2>
                                            <h2>
                                                <span className="flex items-center">
                                                    <FaUserFriends className="text-2xl mr-1.5 text-purple-800" /> 1213
                                                </span>
                                            </h2>
                                            <h2>
                                                <span className="flex items-center">
                                                    <FaFlag className="mr-1.5 text-lg" /> 100%
                                                </span>
                                            </h2>
                                            <h2 className="text-green-600 font-semibold">Completed</h2>
                                        </div>
                                        <div className="bg-slate-700 dark:bg-slate-200 text-slate-200 dark:text-slate-700 grid grid-cols-6 p-3 rounded-md mb-2">
                                            <h2 className="text-lg font-semibold col-span-2">Quiz Name</h2>
                                            <h2 className="text-green-600 font-semibold uppercase">Premium</h2>
                                            <h2>
                                                <span className="flex items-center">
                                                    <FaUserFriends className="text-2xl mr-1.5 text-purple-800" /> 1213
                                                </span>
                                            </h2>
                                            <h2>
                                                <span className="flex items-center">
                                                    <FaFlag className="mr-1.5 text-lg" /> 100%
                                                </span>
                                            </h2>
                                            <h2 className="text-green-600 font-semibold">Completed</h2>
                                        </div>
                                        
                                    </div>
                                </div>
                            </section>
                        </TabPanel>
                        <TabPanel className="px-5 pt-0">
                            <div className="flex justify-center items-center">
                                <h2 className="text-4xl font-semibold text-purple-800 dark:text-purple-400">Coming Soon!</h2>
                            </div>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </div>
    );
};

export default ProfileDetailsSection;