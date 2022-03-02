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
    forumId: {
        type: String,
        required: true,
    },
    enrolled_course: [{
        type: String,
        required: true,
    }],

},
    { timestamps: true }
);

export default mongoose.models.Users || mongoose.model("Users", UsersSchema);