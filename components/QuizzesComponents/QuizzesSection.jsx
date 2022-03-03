import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const QuizzesSection = () => {
    const [start, setStart] = useState(false);

    return (
        <div className='bg-white dark:bg-slate-800'>
            {
                !start &&
                <div className="container mx-auto">
                    <h1 className='text-4xl	font-bold text-violet-900 dark:text-violet-400 pt-10 mb-2 py-8 text-center'>
                        Start the Quiz
                    </h1>
                    <div className="px-16 pb-20">
                        <div className="quiz-card py-5 rounded-xl bg-gray-300 mb-5 text-center">
                            <p>Complete this short Flexbox quiz and you will <span className="text-rose-500 font-bold">unlock access</span> your rank up to <span className="text-rose-500 font-bold">Collaborator</span>!
                                <br/><br/>
                                Act Fast! The timer will start running once you click the START
                            </p>
                            <div className="flex justify-center" id="surveyBtn">
                                <button onClick={() => setStart(true)} className="bg-rose-500 animate-[pulse_1s_ease-in-out_infinite] rounded-md text-white px-7 py-3 my-5 flex justify-center items-center">
                                    START QUIZ NOW &nbsp; <FaArrowRight style={{ fontSize: '14px', marginTop: '2px' }} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {
                start && 
                <div className="container mx-auto mt-10 py-8">
                    <div className="px-16 pb-20" id="questions">
                        <div className="py-5 rounded-xl bg-gray-300 mb-5 text-center">
                            <div className="survey--inner">
                                <div className="question" id="question">
                                    <h2 className="text-center" id="questionText">When is the last time that you purchased a product from a store or online?</h2>
                                </div>
                                <div className="choices text-center" id="choices">
                                    <div className="flex flex-wrap justify-center w-1/2 mx-auto" id="questionBody">
                                        <button id="1" className="bg-rose-500 rounded-md text-white px-7 py-3 m-5 flex justify-center items-center w-1/2" value=""><span className="letter mr-3">A</span>Within the last week</button>
                                        <button id="2" className="bg-rose-500 rounded-md text-white px-7 py-3 m-5 flex justify-center items-center w-1/2" value=""><span className="letter mr-3">B</span>Within the last month</button>
                                        <button id="3" className="bg-rose-500 rounded-md text-white px-7 py-3 m-5 flex justify-center items-center w-1/2" value=""><span className="letter mr-3">C</span>within the last year</button>
                                        <button id="4" className="bg-rose-500 rounded-md text-white px-7 py-3 m-5 flex justify-center items-center w-1/2" value=""><span className="letter mr-3">D</span>Never</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default QuizzesSection;