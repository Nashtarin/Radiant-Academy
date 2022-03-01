import React from 'react';
import Image from 'next/image';
import coverImg from '../../public/img/css_flexbox 1.png';

const CourseCard = () => {
    return (
        <div>
            <div className="bg-slate-100 p-5 grid grid-rows-1">
                <div className="px-2">
                    <Image
                        src={coverImg}
                        alt="Course Cover"
                        className="w-full"
                        height="160px"
                    />
                </div>
                <div>
                    <h4 className="font-semibold text-lg">Introducing to Flexbox</h4>
                    <p className="text-slate-400 text-[0.9em]">#html #css #beginners</p>
                    <p className="text-sm mt-2 px-2 text-stone-600">● 10 Quizes ● 10 Articles <br /> ● 10 Problem Solving</p>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;