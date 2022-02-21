import mongoose from 'mongoose';
const CourseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 60,
    },
    subtitle: {
        type: String,
        required: true,
        maxlength: 1000,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        default: 0,
    },
    rating: {
        type: Number,
        required: true,
    },
},
    { timestamps: true }
);

export default mongoose.models.Course || mongoose.model("Course", CourseSchema);