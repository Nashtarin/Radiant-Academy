import { set } from 'mongoose';
import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { MdTimer } from 'react-icons/md';
import { useSelector } from 'react-redux';
import Lottie from 'react-lottie';
import animationData from '../../public/img/success.json';

const QuizzesSection = () => {
    const [nextId, setNextId] = useState(0);
    const [progressValue, setProgressValue] = useState(0);
    const [validated, isValidated] = useState(false);
    const allQuizzes = useSelector((state) => state.quizzes.quizzesList);
    const allCourses = useSelector((state) => state.courses.coursesList);
    
    // const userQuizzes = allQuizzes.data.filter(quizData =>  quizData.courseId === _id);

    const startQuizzes = () => {
        const display = document.getElementById('timer');
        const fiveMinutes = 30 * 10;
        startExpire(fiveMinutes, display);

        const question = allQuizzes.data[0];
        const nextQuestion = question.surveyStep + 1;

        const answered = question.surveyStep - 1;
        const stepsTotal = question.totalSurveySteps;

        //get current progress bar
        const progress = (answered / stepsTotal) * 100;
        setProgressValue(progress);
        const speed = progress*20;

        if (question.isFinalQuestion != true) {
            document.getElementById('start').style.display = 'none';
            document.getElementById('quiz').style.display = 'block';
            document.getElementById('questionText').innerText = question.questionText;
    
            for (let i = 0; i < question.options.length; i++) {
                setNextId(nextQuestion);
                document.getElementById('questionBody').insertAdjacentHTML('beforeend',
                    `<div class="flex items-center bg-slate-50 px-4 sm:px-8 py-4 rounded-xl">
                        <input type="radio" id="` + question.options[i]._id + `" name="option" class="radio radio-sm mr-2 checked:bg-blue-900" value="` + question.options[i].answerText +`"/>
                        <p class="text-lg font-medium">` + question.options[i].answerText + `</p>
                    </div>`
                );
            }
        }else {
           validateScreen();
        }
    }
    
    const nextQuestion = (questionId) => {
        const question = allQuizzes.data.find((val) => val.surveyStep === questionId);
        let nextQuestion = '';
        if (question && !question.isFinalQuestion) {
          nextQuestion = question.surveyStep + 1;
        }

        if (question && question.options != null) {
            document.getElementById('questionText').innerText = question.questionText;
            document.getElementById('questionBody').innerHTML = '';

            for (let i = 0; i < question.options.length; i++) {
                setNextId(nextQuestion);
                document.getElementById('questionBody').insertAdjacentHTML('beforeend',
                    `<div class="flex items-center bg-slate-50 px-4 sm:px-8 py-4 rounded-xl">
                        <input type="radio" id="` + question.options[i]._id + `" name="option" class="radio radio-sm mr-2 checked:bg-blue-900" value="` + question.options[i].answerText +`"/>
                        <p class="text-lg font-medium">` + question.options[i].answerText + `</p>
                    </div>`
                );
            }

            //progress here
            const answered = question.surveyStep - 1;
            const stepsTotal = question.totalSurveySteps;
            let progress = (answered / stepsTotal) * 100;
            const speed = progress*20;
            setProgressValue(progress);

        }else{
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
        setTimeout(() => {
            document.getElementById('timer').style.display = 'none';
            document.getElementById('questionText').style.display = 'none';
            document.getElementById('questionBody').style.display = 'none';
            isValidated(true);
        }, 1500);
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    // const router = useRouter();
    // console.log(thisUser._id, course.data._id);
    // const { user } = useAuth();

    return (
    <div>
            <div className="container mx-auto py-20 mb-6" id="start">
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
                            onClick={startQuizzes}
                            className="bg-rose-500 animate-[pulse_1s_ease-in-out_infinite] rounded-md text-white px-7 py-3 flex justify-center items-center uppercase"
                        >
                            Start Quiz Now
                            <FaArrowRight className="ml-3" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto my-20 w-5/6 md:w-4/6 rounded-tr-xl rounded-tl-xl relative" id="quiz" style={{display: "none"}}>
                <div className="mx-auto w-3/4 sm:2-4 md:w-1/4">
                    <div className="flex justify-center items-center py-3 mt-8 mb-4 rounded-full bg-blue-400 text-white">
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
                        </div>
                        {validated &&
                            <div className="loading flex justify-center items-center m-auto">
                                <div>
                                    <Lottie options={defaultOptions}
                                        height={300}
                                        width={300} />
                                </div>
                            </div>
                        }
                    </form>
                </div>
                
                <div className="mx-auto w-3/4 sm:2/4 md:w-1/4">
                    <button className="flex justify-center items-center py-3 px-8 mt-8 mb-4 rounded-full bg-rose-500 text-white mx-auto" onClick={() => nextQuestion(nextId)}>
                        <p className="text-xl font-medium">Next </p>
                        <FaArrowRight style={{ fontSize: 15 }} className="ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuizzesSection;