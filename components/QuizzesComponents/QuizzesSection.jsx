import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { MdTimer } from 'react-icons/md';
import { useSelector } from 'react-redux';

const QuizzesSection = () => {
    const [start, setStart] = useState(false);
    const allQuizzes = useSelector((state) => state.quizzes.quizzesList);
    const allCourses = useSelector((state) => state.courses.coursesList);
    // const userQuizzes = allQuizzes.data.filter(quizData =>  quizData.courseId === _id);

    const startQuizzes = () => {
        const question = allQuizzes.data[0];
        const nextQuestion = question.surveyStep + 1;

        //progress count
        const answered = question.surveyStep - 1;
        const stepsTotal = question.totalSurveySteps;

        //get current progress bar
        const progress = (answered / stepsTotal) * 100;
        const speed = progress*20; //speed of the progress count

        if (question.isFinalQuestion != true) {
            //animate here
            console.log('innerText', question.questionText);

            document.getElementById('start').style.display = 'none';
            document.getElementById('quiz').style.display = 'block';
            document.getElementById('questionText').innerText = question.questionText;
            // $('#questionBody').show();
    
            // for (let i = 0; i < question.options.length; i++) {
            //     document.getElementById('questionBody').append(
            //         `<div className="flex items-center bg-slate-50 px-4 sm:px-8 py-4 rounded-xl">
            //             <input type="radio" id="` + question.options[i].surveyStep + `" name="option" id="option-a" className="radio radio-sm mr-2 checked:bg-blue-900" value="position: absolute;"` + question.answers[i].value + `"onClick="nextQuestion(` + nextQuestion + `)"/>
            //             <p className="text-lg font-medium">` + question.options[i].answerText + `</p>
            //         </div>`
            //     );
            // }
        }else {
          //  validateScreen();
        }
    }

    const nextQuestion = () => {
        console.log('next');
    }

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
                        <p className="text-xl font-medium">5 Minutes</p>
                    </div>
                </div>


                <div className="py-10 flex flex-col justify-center bg-slate-200 px-5 ">
                    <div className="mb-2">
                        <h3 className="text-xl text-center text-blue-900 font-semibold" id="questionText">Title</h3>
                    </div>
                    <form className="w-5/6 mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 mx-auto" id="questionBody">
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
        </div>
    );
};

export default QuizzesSection;