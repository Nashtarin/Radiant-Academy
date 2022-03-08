import dbConnect from "../../../utilities/mongoose";
import Review from '../../../models/ReviewModel';

export default async function handler(req, res) {
    const { method, query: { id } } = req;

    await dbConnect()

    if (method === "DELETE") {
        const filter = {_id: id};

        try {
            const singleReview = await Review.findOneAndDelete(filter);
            res.status(201).json(singleReview);

        } catch (error) {
            res.status(500).json({ success: false });
        }
    }
}