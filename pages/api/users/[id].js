import dbConnect from "../../../utilities/mongoose";
import User from '../../../models/UserModel'

export default async function handler(req, res) {
    const { method, query: { id } } = req;

    await dbConnect()

    if (method === "GET") {
        try {
            const singleUser = await User.findById(id);
            res.status(200).json({ success: true, data: singleUser });

        } catch (error) {
            res.status(500).json({ success: false });
        }
    }

    if (method === "DELETE") {
        const filter = {_id: id};

        try {
            const singleUser = await User.findOneAndDelete(filter);
            res.status(201).json(singleUser);

        } catch (error) {
            res.status(500).json({ success: false });
        }
    }
}