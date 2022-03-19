import mongoose from 'mongoose';
const ForumSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    author: {
        type: String,
    },
    authorImg: {
        type: String,
        required: true,
    },
    authorEmail: {
        type: String,
    },
    featured: {
        type: Boolean,
        required: true,
    },
    status: {
        type: Boolean,
        required: true,
    },
    loves: {
        type: Number,
        required: true,
        default: 0,
    },
    views: {
        type: Number,
        required: true,
        default: 0,
    },
},

    { timestamps: true }
);

export default mongoose.models.Forum || mongoose.model("Forum", ForumSchema);