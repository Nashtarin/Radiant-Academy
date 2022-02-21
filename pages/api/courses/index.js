import Course from '../../../models/CourseModel'
import dbConnect from '../../../utilities/mongoose';

export default async function handler(req, res) {
    const { method } = req;

    dbConnect();

    if (method === "GET") {
        try {
            const courses = await Course.find();
            res.status(200).json(courses);

        } catch (err) {
            res.status(500).json(err);
        }
    }

    if (method === "POST") {
        try {
            const course = await Course.create(req.body);
            res.status(201).json(course);

        } catch (err) {
            res.status(500).json(err);
        }
    }

}