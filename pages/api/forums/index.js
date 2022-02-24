import Forum from '../../../models/ForumModel';
import dbConnect from '../../../utilities/mongoose';

export default async function handler(req, res) {
    const { method, query: { id } } = req;

    await dbConnect()

    if (method === "GET") {
        try {
            const forums = await Forum.find({});
            res.status(200).json({ success: true, data: forums });

        } catch (error) {
            res.status(500).json({ success: false });
        }
    }

    if (method === "POST") {
        try {
            const forum = await Forum.create(req.body);
            res.status(201).json({ success: true, data: forum });

        } catch (error) {
            res.status(500).json({ success: false });
        }
    }

    if (method === "DELETE") {
        try {
            const deletedforum = await Forum.deleteOne(id);
            res.status(201).json(deletedforum);

        } catch (error) {
            res.status(500).json({ success: false });
        }
    }

    if (method === "PUT") {
        try {
            const updatedforum = await Forum.updateOne(id, {$inc : {'views' : 1}});
            res.status(201).json(updatedforum);

        } catch (error) {
            res.status(500).json({ success: false });
        }
    }

}