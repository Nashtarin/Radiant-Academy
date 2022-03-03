import mongoose from 'mongoose';
const CourseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 100,
    },
    subtitle: {
        type: String,
        required: true,
        maxlength: 1000,
    },
    category: {
        type: String,
        required: true,
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
    enrolled: {
        type: Number,
        required: true,
        default: 0,
    },
    contents: [{
        type: String, 
        // required: true,
    }],
},
    { timestamps: true }
);

export default mongoose.models.Course || mongoose.model("Course", CourseSchema);