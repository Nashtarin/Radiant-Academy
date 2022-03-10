import dbConnect from "../../../utilities/mongoose";
import Course from '../../../models/CourseModel'

export default async function handler(req, res) {
    const { method, query: { id } } = req;

    await dbConnect()

    if (method === "GET") {
        try {
            const singleCourse = await Course.findById(id);
            res.status(200).json({ success: true, data: singleCourse });

        } catch (error) {
            res.status(500).json({ success: false });
        }
    }

    if (method === "DELETE") {
        const filter = {_id: id};

        try {
            const singleCourse = await Course.findOneAndDelete(filter);
            res.status(201).json(singleCourse);

        } catch (error) {
            res.status(500).json({ success: false });
        }
    }
}