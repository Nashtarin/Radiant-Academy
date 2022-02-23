import Users from '../../../models/UserModel'
import dbConnect from '../../../utilities/mongoose';

export default async function handler(req, res) {
    const { method } = req;

    await dbConnect()

    if (method === "GET") {
        try {
            const users = await Users.find({});
            res.status(200).json({ success: true, data: users });

        } catch (error) {
            res.status(500).json({ success: false });
        }
    }

    if (method === "POST") {
        try {
            const user = await Users.create(req.body);
            res.status(201).json({ success: true, data: user });

        } catch (error) {
            res.status(500).json({ success: false });
        }
    }

}