import mongoose from 'mongoose';
import { GiRobotLeg } from 'react-icons/gi';
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
    enrolled_course: [{
        type: String,
    }],
    accessToken: {
        type: String,
    },
    role: {
        type: String,
    }
},
    { timestamps: true }
);

export default mongoose.models.Users || mongoose.model("Users", UsersSchema);