import Category from '../../../models/CategoryModel';
import dbConnect from '../../../utilities/mongoose';

export default async function handler(req, res) {
    const { method } = req;

    await dbConnect()

    if (method === "GET") {
        try {
            const categories = await Category.find({});
            res.status(200).json({ success: true, data: categories });

        } catch (error) {
            res.status(500).json({ success: false });
        }
    }

    if (method === "POST") {
        try {
            const category = await Category.create(req.body);
            res.status(201).json({ success: true, data: category });

        } catch (error) {
            res.status(500).json({ success: false });
        }
    }

    if (method === "DELETE") {
        try {
            const category = await Category.deleteOne({ _id: entry._id });
            res.status(201).json({ success: true, data: category });

        } catch (error) {
            res.status(500).json({ success: false });
        }
    }

}