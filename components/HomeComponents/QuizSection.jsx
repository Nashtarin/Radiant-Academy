import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const QuizSection = () => {
    return (
        <div className="bg-slate-200 dark:bg-slate-700 p-2 sm:p-20">
            <div className="w-5/6 mx-auto grid py-20 px-5 lg:grid-cols-4 gap-x-2 gap-y-8 sm:gap-2 h-full">
                <div className="flex justify-center items-start flex-col text-violet-800 dark:text-violet-400">
                    <h2 className="text-4xl font-bold">The next Quiz is about to start</h2>
                    <p className="text-lg pt-3 flex items-center text-violet-800 dark:text-violet-400">Learn how it works &nbsp; <FaArrowRight style={{ fontSize: '14px', marginTop: '3px' }} /></p>
                </div>
                <div className="flex justify-center">
                    <div className="text-center">
                        <div className="h-[180px] flex items-center justify-center">
                            <Image src="https://i.postimg.cc/8P9qJZCn/quiz1.webp" alt="quiz-feature-photo" width="123px" height="127px" draggable="false" />
                        </div>
                        <p className="mt-3 px-2 text-slate-800 dark:text-slate-400">
                            Our Talent Cloud has tests according to your expertise and manage junior software developers remotely.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="text-center">
                        <div className="h-[180px]">
                            <Image src="https://i.postimg.cc/wBcPrHQS/quiz2.webp" alt="quiz-feature-photo" width="167px" height="167px" draggable="false" />
                        </div>
                        <p className="mt-3 px-2 text-slate-800 dark:text-slate-400">
                            Get points for every solution you make, every H2H you play and every upvote people gives you.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="text-center">
                        <div className="h-[180px]">
                            <Image src="https://i.postimg.cc/XY5tw9GN/quiz3.webp" alt="quiz-feature-photo" width="167px" height="167px" draggable="false" />
                        </div>
                        <p className="mt-3 px-2 text-slate-800 dark:text-slate-400">
                            Fill up your progress bar to unlock next stage and when it’s unlocked you get a badge.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizSection;
