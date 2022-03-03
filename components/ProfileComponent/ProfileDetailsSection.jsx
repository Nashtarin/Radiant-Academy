import Link from 'next/link';
import React from 'react';
import { FaDollarSign, FaEye, FaFlag, FaHashtag, FaHeart, FaTrash, FaUserFriends } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ProfileDetailsSection = ({account}) => {
    const allCourses = useSelector((state) => state.courses.coursesList);
    const allUsers = useSelector((state) => state.users.usersList);
    const enrolled = account.data[0].enrolledCourses;

    const enrolledChecker = enrolled.map(enroll => {
        let index = allCourses.data.findIndex(course => enroll.courseId === course._id);
        if(index > -1) {
            return allCourses.data[index];
        }
        return 0;
    })

    // enrolledCourses = allUsers.data.filter(course => course.enrolledUsers.includes(account.userId));
    // console.log(enrolledCourses);
    // const thisUser = allCourses.data.find(courseData =>  courseData.email === user.email);

    // const allQuizzes = useSelector((state) => state.quizzes.quizzesList);
    // const userQuizzes = allQuizzes.data.filter(quizData =>  quizData.courseId === _id);
    // console.log(userQuizzes.data);

    const handleDelete = () => {
        console.log('clicked')
    }
    const handleView = () => {
        console.log('clicked')
    }

    return (
        <div className='bg-white dark:bg-slate-700'>
            <div className="p-5 bg-white dark:bg-slate-700">
                <Tabs>
                    <TabList className="grid grid-cols-4 mb-5 text-center gap-2 border-b-2 border-black">
                        <Tab className="bg-transparent border-0 shadow-none text-lg px-2 py-1.5 mx-1 font-medium">Topics</Tab>
                        <Tab className="bg-transparent border-0 shadow-none text-lg px-2 py-1.5 mx-1 font-medium">Courses</Tab>
                        <Tab className="bg-transparent border-0 shadow-none text-lg px-2 py-1.5 mx-1 font-medium">Progress</Tab>
                        <Tab className="bg-transparent border-0 shadow-none text-lg px-2 py-1.5 mx-1 font-medium">Settings</Tab>
                    </TabList>

                    <div className="tab-panes bg-white">
                        <TabPanel className="p-5">
                            <div className="overflow-x-auto">
                                <table className="table w-full bg-slate-200 overflow-scroll">
                                    <tbody>
                                        <tr className="bg-slate-200">
                                            <td colSpan={2} className="font-semibold">Radiant Academy turned 2 today!</td>
                                            <td>
                                                <span className="flex items-center">
                                                    <FaHashtag className="mr-1.5" /> Welcome
                                                </span>
                                            </td>
                                            <td>
                                                <span className="flex items-center">
                                                    <FaEye className="mr-1.5 text-purple-800" /> 1213
                                                </span>
                                            </td>
                                            <td>
                                                <span className="flex items-center">
                                                    <FaHeart className="mr-1.5 text-red-500" /> 304
                                                </span>
                                            </td>
                                            <td className="text-center text-orange-500">Pending</td>
                                            <td>
                                                <button onClick={handleDelete}>
                                                    <FaTrash className="hover:text-red-500" />
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="bg-slate-200">
                                            <td colSpan={2} className="font-semibold">Radiant Academy turned 1 today!</td>
                                            <td>
                                                <span className="flex items-center">
                                                    <FaHashtag className="mr-1.5" /> Welcome
                                                </span>
                                            </td>
                                            <td>
                                                <span className="flex items-center">
                                                    <FaEye className="mr-1.5 text-purple-800" /> 1213
                                                </span>
                                            </td>
                                            <td>
                                                <span className="flex items-center">
                                                    <FaHeart className="mr-1.5 text-red-500" /> 304
                                                </span>
                                            </td>
                                            <td className="text-center text-green-600">Approved</td>
                                            <td>
                                                <button onClick={handleDelete}>
                                                    <FaTrash className="hover:text-red-500" />
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </TabPanel>
                        <TabPanel className="px-5 pt-0">
                            <div className="overflow-x-auto">
                                <table className="table w-full bg-slate-200 overflow-scroll">
                                    <tbody>
                                        {
                                            enrolledChecker.map(course => (
                                                <tr className="bg-slate-200" key={course._id}>
                                                    <td colSpan={2} className="font-semibold">{course.title}</td>
                                                    <td>
                                                        <span className="flex items-center">
                                                            <FaDollarSign className="text-lg" />{course.price}
                                                        </span>
                                                    </td>
                                                    <td className="text-center text-green-600 font-semibold uppercase">Premium</td>
                                                    <td>
                                                        <span className="flex items-center">
                                                            <FaUserFriends className="text-2xl mr-1.5 text-purple-800" /> {course.enrolled}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <span className="flex items-center">
                                                            <FaHeart className="mr-1.5 text-red-500" /> 304
                                                        </span>
                                                    </td>
                                                    <td className="text-center text-orange-500 font-semibold">Pending</td>
                                                    <td>
                                                        <Link href={`/quiz/${course?._id}`} passHref>
                                                            <button className="btn btn-ghost py-0  uppercase" onClick={handleView}>
                                                                START
                                                            </button>
                                                        </Link> 
                                                    </td>
                                                </tr>
                                                )
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </TabPanel>
                        <TabPanel className="px-5 pt-0">
                            <div className="overflow-x-auto">
                                <table className="table w-full bg-slate-200 overflow-scroll">
                                    <tbody>
                                        <tr className="bg-slate-200">
                                            <td colSpan={2} className="text-lg font-semibold">Quiz Name</td>
                                            <td className="text-green-600 font-semibold uppercase">Premium</td>
                                            <td>
                                                <span className="flex items-center">
                                                    <FaUserFriends className="text-2xl mr-1.5 text-purple-800" /> 1213
                                                </span>
                                            </td>
                                            <td>
                                                <span className="flex items-center">
                                                    <FaFlag className="mr-1.5 text-lg" /> 100%
                                                </span>
                                            </td>
                                            <td className="text-green-600 font-semibold">Completed</td>
                                        </tr>
                                        <tr className="bg-slate-200">
                                            <td colSpan={2} className="text-lg font-semibold">Quiz Name</td>
                                            <td className="text-green-600 font-semibold uppercase">Premium</td>
                                            <td>
                                                <span className="flex items-center">
                                                    <FaUserFriends className="text-2xl mr-1.5 text-purple-800" /> 1213
                                                </span>
                                            </td>
                                            <td>
                                                <span className="flex items-center">
                                                    <FaFlag className="mr-1.5 text-lg" /> 100%
                                                </span>
                                            </td>
                                            <td className="text-green-600 font-semibold">Completed</td>
                                        </tr>
                                        <tr className="bg-slate-200">
                                            <td colSpan={2} className="text-lg font-semibold">Course Name</td>
                                            <td className="text-green-600 font-semibold uppercase">Premium</td>
                                            <td>
                                                <span className="flex items-center">
                                                    <FaUserFriends className="text-2xl mr-1.5 text-purple-800" /> 1213
                                                </span>
                                            </td>
                                            <td>
                                                <span className="flex items-center">
                                                    <FaFlag className="mr-1.5 text-lg" /> 50%
                                                </span>
                                            </td>
                                            <td className="text-green-600 font-semibold">Completed</td>
                                        </tr>
                                        <tr className="bg-slate-200">
                                            <td colSpan={2} className="text-lg font-semibold">Course Name</td>
                                            <td className="text-green-600 font-semibold uppercase">Premium</td>
                                            <td>
                                                <span className="flex items-center">
                                                    <FaUserFriends className="text-2xl mr-1.5 text-purple-800" /> 1213
                                                </span>
                                            </td>
                                            <td>
                                                <span className="flex items-center">
                                                    <FaFlag className="mr-1.5 text-lg" /> 100%
                                                </span>
                                            </td>
                                            <td className="text-green-600 font-semibold">Completed</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </TabPanel>
                        <TabPanel className="px-5 pt-0">
                            <div className="flex justify-center items-center">
                                <h1 className="text-4xl font-semibold text-purple-800">Coming Soon!</h1>
                            </div>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </div>
    );
};

export default ProfileDetailsSection;