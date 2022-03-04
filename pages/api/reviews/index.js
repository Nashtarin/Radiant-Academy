import Review from '../../../models/ReviewModel';
import dbConnect from '../../../utilities/mongoose';

export default async function handler(req, res) {
    const { method, query: { id } } = req;

    await dbConnect()

    if (method === "GET") {
        try {
            const reviews = await Review.find({});
            res.status(200).json({ success: true, data: reviews });

        } catch (error) {
            res.status(500).json({ success: false });
        }
    }

    if (method === "POST") {
        try {
            const review = await Review.create(req.body);
            res.status(201).json({ success: true, data: review });

        } catch (error) {
            res.status(500).json({ success: false });
        }
    }

    //This deletes the very first item in the array
    if (method === "DELETE") {
        try {
            const deletedReview = await Review.deleteOne(id);
            res.status(201).json(deletedReview);

        } catch (error) {
            res.status(500).json({ success: false });
        }
    }

    // if (method === "DELETE") {
    //     try {
    //         const review = await Review.deleteOne({ _id: entry._id });
    //         res.status(201).json({ success: true, data: review });

    //     } catch (error) {
    //         res.status(500).json({ success: false });
    //     }
    // }

}