import Course from '../../../models/CourseModel'
import dbConnect from '../../../utilities/mongoose';

export default async function handler(req, res) {
    const { method } = req;

    await dbConnect()

    if (method === "GET") {
        try {
            const courses = await Course.find({});
            res.status(200).json({ success: true, data: courses });

        } catch (error) {
            res.status(500).json({ success: false });
        }
    }

    if (method === "POST") {
        try {
            const course = await Course.create(req.body);
            res.status(201).json({ success: true, data: course });

        } catch (error) {
            res.status(500).json({ success: false });
        }
    }

}