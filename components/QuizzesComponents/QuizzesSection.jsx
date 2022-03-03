import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { MdTimer } from 'react-icons/md';
import { useSelector } from 'react-redux';

const QuizzesSection = () => {
    const [start, setStart] = useState(false);
    // const allQuizzes = useSelector((state) => state.quizzes.quizzesList);
    // const userQuizzes = allQuizzes.data.filter(quizData =>  quizData.courseId === _id);
    // console.log(userQuizzes.data);

    // const router = useRouter();
    // console.log(thisUser._id, course.data._id);
    // const { user } = useAuth();

    return (
        <div>
            {
                !start && <div className="container mx-auto py-20 mb-6">
                    <div className="mb-3">
                        <h1 className="text-[2.5em] text-purple-900 font-semibold text-center">Start the Quiz!</h1>
                    </div>
                    <div className="bg-slate-200 w-5/6 mx-auto rounded-xl py-10 text-lg text-center">
                        <p>
                            Complete this short Flexbox quiz and you will
                            <span className="text-rose-500 font-medium">unlock access</span>
                            your rank up to
                            <span className="text-rose-500 font-medium">Collaborator</span>!
                        </p>
                        <p className="mt-4">
                            Act Fast! The timer will start running once you click the
                            <span className="text-rose-500 font-medium uppercase">Start</span>
                        </p>
                        <div className="flex justify-center items-center py-4 mt-4">
                            <MdTimer style={{ fontSize: 30 }} className="mr-2" />
                            <p className="text-xl font-medium">5 Minutes</p>
                        </div>
                        <div className="flex justify-center">
                            <button
                                onClick={() => setStart(true)}
                                className="bg-rose-500 animate-[pulse_1s_ease-in-out_infinite] rounded-md text-white px-7 py-3 flex justify-center items-center uppercase"
                            >
                                Start Quiz Now
                                <FaArrowRight className="ml-3" />
                            </button>
                        </div>
                    </div>
                </div>
            }

            {
                start && <div className="container mx-auto my-20 w-5/6 md:w-4/6 rounded-tr-xl rounded-tl-xl relative">
                    <div className="mx-auto w-3/4 sm:2-4 md:w-1/4">
                        <div className="flex justify-center items-center py-3 mt-8 mb-4 rounded-full bg-blue-400 text-white">
                            <MdTimer style={{ fontSize: 30 }} className="mr-2" />
                            <p className="text-xl font-medium">5 Minutes</p>
                        </div>
                    </div>
                    <div className="py-10 flex flex-col justify-center bg-slate-200 px-5 ">
                        <div className="mb-2">
                            <h3 className="text-xl text-center text-blue-900 font-semibold">
                                1. To use flexbox we define a container as a flexbox. What is the CSS to do this?
                            </h3>
                        </div>
                        <form className="w-5/6 mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 mx-auto">
                                <div className="flex items-center bg-slate-50 px-4 sm:px-8 py-4 rounded-xl">
                                    <input type="radio" name="option" id="option-a" className="radio radio-sm mr-2 checked:bg-blue-900" value="position: absolute;" />
                                    <p className="text-lg font-medium">position: absolute;</p>
                                </div>
                                <div className="flex items-center bg-slate-50 px-4 sm:px-8 py-4 rounded-xl">
                                    <input type="radio" name="option" id="option-b" className="radio radio-sm mr-2 checked:bg-blue-900" value="display: flex;" />
                                    <p className="text-lg font-medium">display: flex;</p>
                                </div>
                                <div className="flex items-center bg-slate-50 px-4 sm:px-8 py-4 rounded-xl">
                                    <input type="radio" name="option" id="option-c" className="radio radio-sm mr-2 checked:bg-blue-900" value="display: block;" />
                                    <p className="text-lg font-medium">display: block;</p>
                                </div>
                                <div className="flex items-center bg-slate-50 px-4 sm:px-8 py-4 rounded-xl">
                                    <input type="radio" name="option" id="option-d" className="radio radio-sm mr-2 checked:bg-blue-900" value="float: left;" />
                                    <p className="text-lg font-medium">float: left;</p>
                                </div>
                            </div>
                        </form>
                    </div>
                    <progress className="progress w-full absolute progress-accent" value="100" max="100"></progress>
                    <div className="mx-auto w-3/4 sm:2/4 md:w-1/4">
                        <button className="flex justify-center items-center py-3 px-8 mt-8 mb-4 rounded-full bg-rose-500 text-white mx-auto" disabled>
                            <p className="text-xl font-medium">Next </p>
                            <FaArrowRight style={{ fontSize: 15 }} className="ml-2" />
                        </button>
                    </div>
                </div>
            }
        </div>
    );
};

export default QuizzesSection;