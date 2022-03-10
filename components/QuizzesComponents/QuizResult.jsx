import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { clearQuizList } from '../../utilities/redux/slices/quizSlice';

const QuizResult = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    // const { answeredList } = useSelector((state) => state.quizzes);
    const quizScore = useSelector((state) => state.quizzes.quizScore);
    
    //filtering out all quizzes to find quizzes related to thisCourseId
    const thisCourseId = useSelector((state) => state.quizzes.thisCourse);
    const allQuizzes = useSelector((state) => state.quizzes.quizzesList);
    const enrolledQuizzes = allQuizzes.filter(quizData =>  quizData.courseId === thisCourseId);

    const handleClear = () => {
        dispatch(clearQuizList());
        router.push(`/my-course/course-contents/${thisCourseId}`);
    }

    return (
        <>
        <div className="container mx-auto my-20">
            <h3 className='text-4xl font-bold text-center mt-[5rem] mb-8 text-rose-900 dark:text-rose-400'>Your Score: {quizScore}/{enrolledQuizzes.length}</h3>
            <h1 className='text-2xl font-bold mt-[5rem] mb-8 text-violet-900 dark:text-violet-400'>Quiz Answer sheet:</h1>
            {
                enrolledQuizzes.map(quiz =>  (
                    <div className="py-10 flex flex-col justify-center bg-slate-200 px-5" key={quiz._id}>
                        <div className="mb-2">
                            <h3 className="text-xl text-center text-blue-900 font-semibold">
                                {quiz.questionText}
                            </h3>
                        </div>
                        <form className="w-5/6 mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 mx-auto">
                                {
                                    quiz.options.map((option, index) => {
                                        if(quiz.answer === index+1){
                                            return (
                                                <div className="flex items-center bg-green-100 px-4 sm:px-8 py-4 rounded-xl w-full" key={option._id}>
                                                    <p>{index+1}. {option.answerText}</p>
                                                </div>
                                            )
                                        }else{
                                            return (
                                                <div className="flex items-center bg-slate-50 px-4 sm:px-8 py-4 rounded-xl w-full" key={option._id}>
                                                    <p>{index+1}. {option.answerText}</p>
                                                </div>
                                            )
                                        } 
                                    })
                                }
                            </div>
                        </form>
                    </div>
                    ))
                }
                
                <div className="mx-auto w-3/4 sm:2/4 md:w-1/4">
                    <button className="flex justify-center items-center py-3 px-8 mt-8 mb-4 rounded-full bg-rose-500 text-white mx-auto" onClick={() => handleClear()}>
                        <p className="text-xl font-medium">DONE </p>
                    </button>
                </div>
        </div>
        
        </>
    );
};

export default QuizResult;