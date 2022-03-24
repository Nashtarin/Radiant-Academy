import dbConnect from "../../../../utilities/mongoose";
import Course from '../../../../models/CourseModel';

export default async function handler(req, res) {
    const { method, query: { id } } = req;

    await dbConnect()

    if (method === "PUT") {
        const filter = {_id: id};
        const update =  { $set : req.body };

        try {
            const updatedCourse = await Course.findOneAndUpdate(filter, update);
            res.status(201).json(updatedCourse);

        } catch (error) {
            res.status(500).json({ success: false });
        }
    }
}