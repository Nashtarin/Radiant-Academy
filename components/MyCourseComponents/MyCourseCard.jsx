import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const MyCourseCard = () => {
    return (
        <div>
            <div className="bg-slate-100 dark:bg-[#37465b] p-5 grid grid-rows-1 rounded-lg card-single">
                <div>
                    <Image
                        src="https://i.ibb.co/bJxwqk6/async.jpg"
                        alt="Course Cover"
                        width="300px"
                        height="165px"
                        draggable="false"
                    />
                    <div className="pt-3">
                        <Link href="/my-course/sfg" passHref>
                            <button className="bg-slate-600 dark:bg-slate-500 text-white px-5 py-1.5 rounded-full flex items-center hover:shadow-lg">
                                Continue Course <BsArrowRight className="ml-2" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCourseCard;