import React from 'react';
import MyCourseCard from '../MyCourseComponents/MyCourseCard';
import CourseCard from '../CourseComponents/CourseCard';
import { useSelector } from 'react-redux';

const MyCourseSection = ({ account }) => {
    const allCourses = useSelector((state) => state.courses.coursesList);
    const allUsers = useSelector((state) => state.users.usersList);
    const enrolled = (account.account.data[0].enrolledCourses);

    const enrolledChecker = enrolled.map(enroll => {
        let index = allCourses.findIndex(course => enroll.courseId === course._id);
        if (index > -1) {
            return allCourses[index];
        }
        return 0;
    })
    return (
        <div className='bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200'>
            <div className='container mx-auto' style={{minHeight:'46vh'}}>
                <h1 className='text-4xl	font-bold text-violet-900 dark:text-violet-400 mb-2 pt-20 pb-10 text-center'>
                    My Course
                </h1>
                <div className="px-16 pb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">{
                    enrolledChecker.map(course => (
                        <MyCourseCard course={course} key={course._id} />
                    )
                    )
                }
                </div>
            </div>

        </div>
    )
};
export default MyCourseSection;
