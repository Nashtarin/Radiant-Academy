import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

const MyCourseCard = ({ course, account }) => {

    return (
        <div>
                <div className="bg-slate-100 dark:bg-[#37465b] p-5 grid grid-rows-1 rounded-lg card-single">
                    <div>
                        <Image
                            src={course?.image}
                            alt="Course Cover"
                            width="300px"
                            height="165px"
                            draggable="false"
                        />
                        <div className="pt-3">
                            <Link href={`/my-course/course-contents/${course?._id}`} passHref>
                                <button className="bg-slate-600 dark:bg-slate-500 text-white px-5 py-1.5 rounded-full flex items-center hover:shadow-lg">
                                    Continue Course <BsArrowRight className="ml-2" />
                                </button>
                            </Link>
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg text-slate-700 dark:text-slate-200">{course?.title}</h4>
                            <h4 className="font-semibold text-lg text-slate-700 dark:text-slate-200"> <span>$</span> {course?.price}</h4>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default MyCourseCard;