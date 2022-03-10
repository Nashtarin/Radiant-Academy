import dbConnect from "../../../utilities/mongoose";
import Vote from '../../../models/VoteModel';

export default async function handler(req, res) {
    const { method, query: { id } } = req;

    await dbConnect()

    if (method === "PUT") {
        const filter = { _id: id };
        const update = { $inc: { 'votesTotal': 1 } };

        try {
            const updatedVote = await Vote.findOneAndUpdate(filter, update);
            res.status(201).json(updatedVote);

        } catch (error) {
            res.status(500).json({ success: false });
        }
    }
}