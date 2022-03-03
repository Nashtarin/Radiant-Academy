import dbConnect from "../../../../../utilities/mongoose";
import User from '../../../../../models/UserModel'

export default async function handler(req, res) {
    const { method, query: { userId, courseId } } = req;
    console.log(userId, courseId);

    await dbConnect()

    if (method === "PUT") {
        const filter = {_id: userId};
        const update =  { $set : { "enrolledCourses.$.courseId": courseId} };
        // const update =  { $inc : {'loves' : 1} };

        try {
            const updatedUser = await User.updateOne(filter, update);
            res.status(201).json(updatedUser);
        } catch (error) {
            res.status(500).json({ success: false });
        }
    }
}