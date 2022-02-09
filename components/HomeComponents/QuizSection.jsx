import Image from 'next/image';
import React from 'react';

const QuizSection = () => {
    return (
        <div className="bg-slate-200 h-full p-20">
            <div className="container grid py-20 px-5 lg:grid-cols-4 gap-2 h-full ">
                <div style={{ color: '#3B058E' }} className="flex justify-center items-start flex-col">
                    <h2 className="text-4xl font-bold">The next Quiz is about to start</h2>
                    <p className="text-lg pt-3">Learn how it works</p>
                </div>
                <div className="flex justify-center">
                    <div className="text-center hover:-translate-y-2 hover:duration-700 ease-in-out delay-300">
                        <div className="h-[180px] flex items-center justify-center">
                            <Image src="/img/quiz1.webp" alt="quiz-feature-photo" width="123px" height="127px" />
                        </div>
                        <p className="mt-3 px-2">
                            Our Talent Cloud has tests according to your expertise and manage junior software developers remotely.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="text-center hover:-translate-y-2 hover:duration-700 ease-in-out delay-300">
                        <div className="h-[180px]">
                            <Image src="/img/quiz2.webp" alt="quiz-feature-photo" width="167px" height="167px" />
                        </div>
                        <p className="mt-3 px-2">
                            Get points for every solution you make, every H2H you play and every upvote people gives you.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="text-center hover:-translate-y-2 hover:duration-700 ease-in-out delay-300">
                        <div className="h-[180px]">
                            <Image src="/img/quiz3.webp" alt="quiz-feature-photo" width="167px" height="167px" />
                        </div>
                        <p className="mt-3 px-2">
                            Fill up your progress bar to unlock next stage and when it’s unlocked you get a badge.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizSection;
