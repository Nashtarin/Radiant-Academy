import mongoose from 'mongoose';
const QuizSchema = new mongoose.Schema({
    courseId: {
        type: String,
        required: true,
    },
    questionText: {
        type: String,
        required: true,
    },
    totalSurveySteps: {
        type: Number,
        default: 0,
        required: true,
    },
    surveyStep: {
        type: Number,
        default: 0,
        required: true,
    },
    isFinalQuestion: {
        type: Boolean,
        required: true,
    },
    answers: [{
        answerText: { type: String, required: true },
        answerText: { type: String, required: true },
        answerText: { type: String, required: true },
        answerText: { type: String, required: true },
    }],
},
    { timestamps: true }
);

export default mongoose.models.Quiz || mongoose.model("Quiz", QuizSchema);