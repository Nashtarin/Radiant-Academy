import Users from '../../../models/UserModel'
import dbConnect from '../../../utilities/mongoose';

export default async function handler(req, res) {
    const { method } = req;

    dbConnect();

    if (method === "GET") {
        try {
            const users = await Users.find();
            res.status(200).json(users);

        } catch (err) {
            res.status(500).json(err);
        }
    }

    if (method === "POST") {
        try {
            const user = await Users.create(req.body);
            res.status(201).json(user);

        } catch (err) {
            res.status(500).json(err);
        }
    }

}