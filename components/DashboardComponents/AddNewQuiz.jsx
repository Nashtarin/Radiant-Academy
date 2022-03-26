import React, { useCallback, useReducer, useRef, useState } from 'react';
import { FaClone } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import useAuth from '../../utilities/Hooks/useAuth';
import DashboardSidebar from './DashboardSidebar';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from "next/router";
import { quizCreate } from '../../utilities/redux/slices/quizSlice';

const AddNewQuiz = () => {
    const { user } = useAuth();
    const router = useRouter();
    const allCourses = useSelector((state) => state.courses.coursesList);

    const [postData, setPostData] = useState({ questionText: '', courseId: '', totalSurveySteps: 0, surveyStep: 0, answer: 0, isFinalQuestion: false, options: [] });

    const dispatch = useDispatch();

    const clear = () => {
        setPostData({ questionText: '', courseId: '', totalSurveySteps: 0, surveyStep: 0, answer: 0, isFinalQuestion: false, options: [] });
    };

    const initialState = [];
    function reducer(state, action) {
        switch (action.type) {
          case "ADD":
            return [...state, {answerNo: state.length+1, answerText: action.answerText, isCorrect: false}];
          case "TRUTH":
            setPostData({ ...postData, answer: action.answerNo });
            return state.map(answer => answer.answerNo == action.answerNo ? { ...answer, isCorrect: true } : answer);
        }
    }

    const [newOption, dispatching] = useReducer(reducer, initialState);
    const inputRef = useRef(null);
    const handleToADD = useCallback(() => {
        if (inputRef.current) {
            dispatching({
                type: "ADD",
                answerText: inputRef.current.value,
            });
            inputRef.current.value = "";
        }
    }, []);

    const postQuiz = e => {
        postData.options = newOption;
        const loading = toast.loading('Please wait ...');
        if (dispatch(quizCreate(postData))) {
            toast.dismiss(loading);
            toast.success("Successfully added a new quiz!", {
                position: "top-center"
            });
            clear();
            router.replace('/dashboard/quizzes');
        } else {
            toast.dismiss(loading);
            toast.error('Something went wrong!');
        }
        e.preventDefault();
    }

    return (
        <div className='px-0 sm:px-6 lg:px-12 bg-white dark:bg-slate-800 text-slate-700'>
            <div className='grid grid-rows-1 md:grid-cols-[250px_minmax(300px,_1fr)] lg:grid-cols-[250px_minmax(600px,_1fr)] p-8 gap-5'>
                <section>
                    <DashboardSidebar />
                </section>
                <section className='bg-white dark:bg-slate-700 shadow-md rounded-md py-8 px-5 h-auto'>
                    <div className="flex justify-between items-center px-3 mb-4">
                        <h3 className="text-2xl flex items-center dark:text-slate-200"><FaClone className="mr-3" /> Add Quiz</h3>
                    </div>
                    <section className="pt-10">
                        <form onSubmit={postQuiz} className="grid grid-rows-2 sm:grid-rows-none sm:gid-cols-2 lg:grid-cols-[350px_minmax(600px,_1fr)] gap-2 pb-20 px-8 sm:px-12 md:px-20">
                            <div className="p-2">
                                <div className="flex justify-center flex-col">
                                    <select
                                        name="category"
                                        className="block appearance-none w-full bg-slate-200 py-3 px-4 pr-8 rounded-lg leading-tight outline-none mb-5 text-lg"
                                        required
                                        value={postData.courseId}
                                        onChange={(e) => setPostData({ ...postData, courseId: e.target.value })}
                                    >
                                        <option>Select the course:</option>
                                        {
                                            allCourses.map(course =>
                                                <option key={course._id} value={course._id}>{course.title}</option>
                                            )
                                        }
                                    </select> 
                                    <input
                                        type="number"
                                        name="totalSurveySteps"
                                        placeholder="Total Quiz Steps?"
                                        className="bg-slate-200 w-full py-2 px-3 outline-none mb-5 text-lg rounded-lg font-semibold"
                                        required
                                        value={postData.totalSurveySteps}
                                        onChange={(e) => setPostData({ ...postData, totalSurveySteps: e.target.value })}
                                    />
                                    <input
                                        type="number"
                                        name="surveyStep"
                                        placeholder="Quiz Step right now?"
                                        className="bg-slate-200 w-full py-2 px-3 outline-none mb-5 text-lg rounded-lg font-semibold"
                                        required
                                        value={postData.surveyStep}
                                        onChange={(e) => setPostData({ ...postData, surveyStep: e.target.value })}
                                    />
                                    <div className="border-2 rounded p-3 mb-5">
                                        <p className="text-slate-400 dark:text-white text-md">Is this the final question?</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 mx-auto" id="questionBody">
                                            <div className="flex items-center bg-slate-50 px-4 sm:px-8 py-4 rounded-xl">
                                                <input type="radio" name="isFinalQuestion" className="radio radio-sm mr-2 checked:bg-blue-900" value="true" onChange={(e) => setPostData({ ...postData, isFinalQuestion: e.target.value })}/>
                                                <p className="text-sm font-medium">1. True</p>
                                            </div>
                                            <div className="flex items-center bg-slate-50 px-4 sm:px-8 py-4 rounded-xl">
                                                <input type="radio" name="isFinalQuestion" className="radio radio-sm mr-2 checked:bg-blue-900" value="false" onChange={(e) => setPostData({ ...postData, isFinalQuestion: e.target.value })}/>
                                                <p className="text-sm font-medium">2. False</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[300px] md:h-[300px] py-2 px-2">
                                    <input
                                        type="text"
                                        name="questionText"
                                        placeholder="Enter Quiz Question"
                                        className="bg-slate-200 w-full py-2 px-3 outline-none mb-5 text-lg rounded-lg font-semibold"
                                        required
                                        value={postData.questionText}
                                        onChange={(e) => setPostData({ ...postData, questionText: e.target.value })}
                                    />
                                    {
                                        newOption.length > 3 ? 
                                        <div className="border-2 rounded mb-5 p-3">
                                            <p className="text-slate-400 dark:text-white text-xl px-3 py-5">Now select an answer from below!</p>
                                            <select
                                                name="answer"
                                                className="block appearance-none w-full bg-slate-200 py-3 px-4 pr-8 rounded-lg leading-tight outline-none mb-5 text-lg"
                                                required
                                                value={postData.answer}
                                                onChange={(e) => dispatching({ type: "TRUTH", answerNo: e.target.value })}
                                            >
                                                <option>Select Answer:</option>
                                                {
                                                    newOption.map(option =>
                                                        <option key={option.answerNo} value={option.answerNo}>{option.answerText}</option>
                                                    )
                                                }
                                            </select>
                                        </div>
                                        :
                                        <div className="border-2 rounded p-3 mt-5">
                                            <p className="text-slate-400 dark:text-white text-xl pb-3">Add Quiz Options:</p>
                                            <div className="flex justify-center">
                                                <input className="w-4/6 dark:text-slate-900 bg-slate-200 dark:bg-slate-100 focus:outline-none mx-2 px-2 rounded-lg py-3" type="text" ref={inputRef} />
                                                <div className="w-2/6 bg-violet-600 hover:bg-orange-600 text-white rounded-lg text-white-500 font-bold px-5 text-lg py-3 cursor-pointer" onClick={handleToADD}>ADD</div>
                                            </div>

                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 mx-auto">
                                                {newOption.map((option) => (
                                                    <li className="flex items-center bg-slate-50 px-4 sm:px-8 py-4 rounded-xl" key={option.answerNo}>
                                                        <p className="text-md font-medium">{option.answerNo}. {option.answerText}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    }
                                    <button type="submit" className="bg-rose-500 text-white font-bold px-12 py-2 text-lg rounded-lg tracking-wider w-2/4 lg:w-full mx-auto mt-5"
                                    >POST</button>
                            </div>
                        </form>
                    </section>
                </section>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default AddNewQuiz;