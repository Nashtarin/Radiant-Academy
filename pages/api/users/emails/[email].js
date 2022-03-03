import dbConnect from "../../../../utilities/mongoose";
import User from '../../../../models/UserModel'

export default async function handler(req, res) {
    const { method, query: { email } } = req;

    await dbConnect()

    if (method === "GET") {
        try {
            const singleUser = await User.find({ email: email});
            res.status(200).json({ success: true, data: singleUser });

        } catch (error) {
            res.status(500).json({ success: false });
        }
    }
}