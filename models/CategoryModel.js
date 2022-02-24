import mongoose from 'mongoose';
const CategorySchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    subTitle: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
    },
    icon: {
        type: String,
        required: true,
    },

},

    { timestamps: true }
);

export default mongoose.models.Category || mongoose.model("Category", CategorySchema);