import dbConnect from "../../../utilities/mongoose";
import Forum from '../../../models/ForumModel';

export default async function handler(req, res) {
    const { method, query: { id } } = req;

    await dbConnect()

    if (method === "GET") {
        try {
            const singleForum = await Forum.findById(id);
            res.status(200).json(singleForum);

        } catch (error) {
            res.status(500).json({ success: false });
        }
    }

    if (method === "DELETE") {
        const filter = {_id: id};

        try {
            const singleForum = await Forum.findOneAndDelete(filter);
            res.status(201).json(singleForum);

        } catch (error) {
            res.status(500).json({ success: false });
        }
    }
}