import mongoose from 'mongoose';
const VoteSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    votesTotal: {
        type: Number,
        default: 0,
    }


},

    { timestamps: true }
);

export default mongoose.models.Vote || mongoose.model("Vote", VoteSchema);