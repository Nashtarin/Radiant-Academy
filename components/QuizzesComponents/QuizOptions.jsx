import React from 'react';

const QuizOptions = ({quiz, setAnswered}) => {

    return (
        <>
            <div className="flex items-center bg-slate-50 px-4 sm:px-8 py-4 rounded-xl">
                <input type="radio" id={quiz._id} name="option" className="radio radio-sm mr-2 checked:bg-blue-900" value={quiz.answerNo} onChange={(e) => setAnswered(quiz)}/>
                <p className="text-lg font-medium">{quiz.answerText}</p>
            </div>
        </>
    );
};

export default QuizOptions;