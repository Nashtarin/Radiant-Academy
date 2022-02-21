import mongoose from 'mongoose';
const UsersSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    package: {
        type: String,
    },
    role: {
        type: String,
        required: true,
    },

},
    { timestamps: true }
);

export default mongoose.models.Users || mongoose.model("Users", UsersSchema);