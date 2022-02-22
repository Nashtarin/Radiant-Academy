import React from 'react';
// import { useSelector } from 'react-redux';


const CounterSection = () => {
    // const data = useSelector((state) => state.courses.coursesList);

    return (
        <div className="h-full p-20">
            <div className="container grid pb-10 px-5 lg:grid-cols-4 gap-2 h-full ">
                <div className="flex justify-center">
                    <div className="text-center px-3 sm:mb-5">
                        <h1 className="text-6xl font-bold mb-3">
                            20
                        </h1>
                        <h3 className="text-2xl font-bold">
                            Total Quiz
                        </h3>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="text-center px-3 sm:mb-5">
                        <h1 className="text-6xl font-bold mb-3">
                            5
                        </h1>
                        <h3 className="text-2xl font-bold">
                            Total Course
                        </h3>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="text-center px-3 sm:mb-5">
                        <h1 className="text-6xl font-bold mb-3">
                            5k+
                        </h1>
                        <h3 className="text-2xl font-bold">
                            Quiz Enrolled
                        </h3>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="text-center px-3 sm:mb-5">
                        <h1 className="text-6xl font-bold mb-3">
                            2k+
                        </h1>
                        <h3 className="text-2xl font-bold">
                            Course Enrolled
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CounterSection;