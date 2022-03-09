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
        default: false,
        required: true,
    },
    options: [{
        answerText: { type: String, required: true },
        answerNo: { type: Number, required: true, default: 0 },
        isCorrect: { type: Boolean, required: true },
    }],
    answer: {
        type: Number,
        required: true,
        default: 0,
    }
},
    { timestamps: true }
);

export default mongoose.models.Quiz || mongoose.model("Quiz", QuizSchema);