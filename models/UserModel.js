import mongoose from 'mongoose';
const UsersSchema = new mongoose.Schema({
    displayName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    photoURL: {
        type: String,
    },
    rank: {
        type: String,
    },
    forumId: {
        type: String,
    },
    accessToken: {
        type: String,
    },
    role: {
        type: String,
        default: 'user',
    },
    enrolledCourses: [{
        courseId: { type: String, default: "620f957278b8225254db86d6"},
    }],
},
    { timestamps: true }
);

export default mongoose.models.Users || mongoose.model("Users", UsersSchema);