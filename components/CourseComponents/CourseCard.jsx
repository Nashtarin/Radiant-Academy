import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import coverImg from '../../public/img/css_flexbox 1.png';
import { BsArrowRight } from 'react-icons/bs';
import Styles from '../../styles/Home.module.css';

const CourseCard = ({course}) => {

    return (
        <div>
            <div className="bg-slate-100 p-5 grid grid-rows-1 rounded-lg card-single">
                <div className={Styles.imgContainer}>
                    <Image
                        src={coverImg}
                        alt="Course Cover"
                        className={Styles.courseCoverImage}
                        height="165px"
                        draggable="false"
                    />
                    <div className={Styles.middleBtn}>
                        <Link href={`/courses/${course?._id}`} passHref>
                            <button className="bg-slate-600 text-white px-5 py-1.5 rounded-full flex items-center hover:shadow-lg">
                                Details <BsArrowRight className="ml-2" />
                            </button>
                        </Link>
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold text-lg">{course?.title}</h4>
                    <p className="text-slate-400 text-[0.9em]">#html #css #beginners</p>
                    <p className="text-sm mt-2 px-2 text-stone-600">● 10 Quizes ● 10 Articles <br /> ● 10 Problem Solving</p>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;