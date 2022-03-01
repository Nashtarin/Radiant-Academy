import mongoose from 'mongoose';
const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    user_img: {
        type: String,
    },
    rank: {
        type: String,
    },
    forum_posts: [{
        post_title: { type: String, required: true },
        post_tag: { type: String },
        post_status: { type: Number },
    }],
    enrolled_course: [{
        course_name: { type: String, required: true },
        course_price: { type: String, required: true },
        course_type: { type: String, required: true },
        course_status: { type: Number, required: true },
    }],

},
    { timestamps: true }
);

export default mongoose.models.Users || mongoose.model("Users", UsersSchema);