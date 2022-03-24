import React from 'react';


const CounterSection = () => {

    return (
        <div className="p-20 bg-white dark:bg-slate-800">
            <div className="w-6/6 grid pb-14 pt-10 px-5 lg:grid-cols-4 gap-2 h-full mx-auto">
                <div className="flex justify-center">
                    <div className="text-center px-3 mb-8 sm:mb-3">
                        <h1 className="text-5xl text-rose-500 font-bold mb-3">
                            370
                        </h1>
                        <h3 className="text-2xl font-bold text-violet-800 dark:text-violet-400">
                            Total Quiz
                        </h3>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="text-center px-3 mb-8 sm:mb-3">
                        <h1 className="text-5xl text-rose-500 font-bold mb-3">
                            43
                        </h1>
                        <h3 className="text-2xl font-bold text-violet-800 dark:text-violet-400">
                            Total Course
                        </h3>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="text-center px-3 mb-8 sm:mb-3">
                        <h1 className="text-5xl text-rose-500 font-bold mb-3">
                            1k+
                        </h1>
                        <h3 className="text-2xl font-bold text-violet-800 dark:text-violet-400">
                            Quiz Enrolled
                        </h3>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="text-center px-3 mb-3 sm:mb-3">
                        <h1 className="text-5xl text-rose-500 font-bold mb-3">
                            2k+
                        </h1>
                        <h3 className="text-2xl font-bold text-violet-800 dark:text-violet-400">
                            Course Enrolled
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CounterSection;