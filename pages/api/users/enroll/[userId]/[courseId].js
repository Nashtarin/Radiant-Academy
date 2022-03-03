import dbConnect from "../../../../../utilities/mongoose";
import User from '../../../../../models/UserModel'

export default async function handler(req, res) {
    const { method, query: { userId, courseId } } = req;
    // const data = req.body;

    await dbConnect()

    if (method === "PUT") {
        const filter = {_id: userId};
        const update =  { $push : { "enrolledCourses": 
                                            {"courseId" : courseId}} 
                                  };

        try {
            const updatedUser = await User.findOneAndUpdate(filter, update);
            res.status(201).json(updatedUser);
        } catch (error) {
            res.status(500).json({ success: false });
        }
    }
}