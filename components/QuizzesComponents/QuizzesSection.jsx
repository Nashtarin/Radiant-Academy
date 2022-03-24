import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { MdTimer } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import QuizOptions from './QuizOptions';
import { addToAnsweredList, addToScore } from '../../utilities/redux/slices/quizSlice';
import { InfinitySpin } from 'react-loader-spinner';

const QuizzesSection = () => {
    //this is to store answers inside redux with onChange
    // const [answered, setAnswered] = useState([]);

    const [score, setScore] = useState(0);
    const dispatch = useDispatch();

    const router = useRouter();
    const [nextId, setNextId] = useState(0);
    const [progressValue, setProgressValue] = useState(0);
    const [validated, isValidated] = useState(false);
    const [optionsList, setOptionsList] = useState([]);
    const allQuizzes = useSelector((state) => state.quizzes.quizzesList);

    //filtering out all quizzes to find quizzes related to thisCourseId
    const thisCourseId = useSelector((state) => state.quizzes.thisCourse);
    const enrolledQuizzes = allQuizzes.filter(quizData => quizData.courseId === thisCourseId);

    const startQuizzes = () => {
        const display = document.getElementById('timer');
        const fiveMinutes = 30 * 10;
        startExpire(fiveMinutes, display);

        const question = enrolledQuizzes[0];
        const next = question.surveyStep + 1;

        const answered = question.surveyStep - 1;
        const stepsTotal = question.totalSurveySteps;

        //get current progress bar
        const progress = (answered / stepsTotal) * 100;
        setProgressValue(progress);
        const speed = progress * 20;

        if (question.isFinalQuestion != true) {
            document.getElementById('start').style.display = 'none';
            document.getElementById('quiz').style.display = 'block';
            document.getElementById('questionText').innerText = question.questionText;

            setOptionsList(question.options);
            setNextId(next);
        } else {
            validateScreen();
        }
    }

    const nextQuestion = (questionId) => {
        // dispatch(addToAnsweredList(answered));
        setOptionsList([]);
        const question = enrolledQuizzes.find((val) => val.surveyStep === questionId);
        const next = '';
        if (question && !question.isFinalQuestion) {
            next = question.surveyStep + 1;
        }

        if (question && question.options != null) {
            document.getElementById('questionText').innerText = question.questionText;

            setOptionsList(question.options);
            setNextId(next);

            //progress here
            const answered = question.surveyStep - 1;
            const stepsTotal = question.totalSurveySteps;
            let progress = (answered / stepsTotal) * 100;
            const speed = progress * 20;
            setProgressValue(progress);

        } else {
            let progress = 100;
            setProgressValue(progress);
            validateScreen();
        }
    }

    const startExpire = (duration, display) => {
        var timer = duration, minutes, seconds;
        var timeInterval = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? '' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            display.textContent = minutes + ':' + seconds;

            if (--timer < 0) {
                clearInterval(timeInterval);
                startExpire(duration, display);  //timer loops again
            }
        }, 1000);
    }

    const validateScreen = () => {
        isValidated(true);
        document.getElementById('questionText').style.display = 'none';
        setTimeout(() => {
            document.getElementById('timer').style.display = 'none';
        }, 1500);
        setTimeout(() => {
            router.push('/quiz/quiz-result');
        }, 3000);
    }


    const handleOnScore = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
            dispatch(addToScore(score + 1));
        }
        nextQuestion(nextId);
    };

    return (
        <div>
            <div className="container mx-auto py-20 mb-6" id="start">
                <div className="mb-3">
                    <h1 className="text-[2.5em] text-purple-900 font-semibold text-center">Start the Quiz!</h1>
                </div>
                <div className="bg-slate-200 w-5/6 mx-auto rounded-xl py-10 text-lg text-center">
                    <p>
                        Complete this short Flexbox quiz and you will
                        <span className="text-rose-500 font-medium px-2">unlock access</span>
                        your rank up to
                        <span className="text-rose-500 font-medium px-2">Collaborator</span>!
                    </p>
                    <p className="mt-4">
                        Act Fast! The timer will start running once you click the Start!
                    </p>
                    <div className="flex justify-center items-center py-4 mt-4">
                        <MdTimer style={{ fontSize: 30 }} className="mr-2" />
                        <p className="text-xl font-medium">5 Minutes</p>
                    </div>
                    <div className="flex justify-center">
                        {
                            enrolledQuizzes.length === 0 ? <p className="text-xl font-medium text-rose-500">No quizzes avaiable in this course!</p> :
                                <button
                                    onClick={startQuizzes}
                                    className="bg-rose-500 animate-[pulse_1s_ease-in-out_infinite] rounded-md text-white px-7 py-3 flex justify-center items-center uppercase"
                                >
                                    Start Quiz Now
                                    <FaArrowRight className="ml-3" />
                                </button>
                        }
                    </div>
                </div>
            </div>

            <div className="container mx-auto my-20 w-5/6 md:w-4/6 rounded-tr-xl rounded-tl-xl relative" id="quiz" style={{ display: "none" }}>
                <div className="mx-auto w-3/4 sm:2-4 md:w-1/4">
                    <div className="flex justify-center items-center py-3 mt-8 mb-4 rounded-full bg-violet-500 text-white">
                        <MdTimer style={{ fontSize: 30 }} className="mr-2" />
                        <p className="text-xl font-medium" id="timer">Countdown</p>
                    </div>
                </div>


                <progress className="progress w-full absolute progress-accent transition ease-in-out delay-150" value={progressValue} max="100" id="percentCount"></progress>
                <div className="py-10 flex flex-col justify-center bg-slate-200 px-5 ">
                    <div className="mb-2">
                        <h3 className="text-xl text-center text-blue-900 font-semibold" id="questionText">Title</h3>
                    </div>
                    <form className="w-5/6 mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 mx-auto" id="questionBody">
                            {/* questions will be appended here! */}
                            {
                                optionsList.map((quiz, index) => (
                                    <QuizOptions quiz={quiz} index={index} handleOnScore={handleOnScore} key={quiz._id} />
                                ))
                            }
                        </div>
                        {validated &&
                            <div className="loading flex justify-center items-center m-auto">
                                <InfinitySpin color="grey" />
                            </div>
                        }
                    </form>
                </div>

                {/* <div className="mx-auto w-3/4 sm:2/4 md:w-1/4">
                    {
                        answered.length === 0 ? <button className="flex justify-center items-center py-3 px-8 mt-8 mb-4 rounded-full bg-slate-300 text-white mx-auto cursor-not-allowed" disabled>
                                                    <p className="text-xl font-medium">Next </p>
                                                    <FaArrowRight style={{ fontSize: 15 }} className="ml-2" />
                                                </button> :
                                                <button className="flex justify-center items-center py-3 px-8 mt-8 mb-4 rounded-full bg-rose-500 text-white mx-auto" onClick={() => nextQuestion(nextId)}>
                                                    <p className="text-xl font-medium">Next </p>
                                                    <FaArrowRight style={{ fontSize: 15 }} className="ml-2" />
                                                </button>
                    }
                </div> */}
            </div>
        </div>
    );
};

export default QuizzesSection;