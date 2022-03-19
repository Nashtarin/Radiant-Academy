import dbConnect from "../../../../utilities/mongoose";
import Forum from '../../../../models/ForumModel';

export default async function handler(req, res) {
    const { method, query: { id } } = req;

    await dbConnect()

    if (method === "PUT") {
        const filter = {_id: id};
        const update =  { $set : req.body };

        try {
            const updatedForum = await Forum.findOneAndUpdate(filter, update);
            res.status(201).json(updatedForum);

        } catch (error) {
            res.status(500).json({ success: false });
        }
    }
}