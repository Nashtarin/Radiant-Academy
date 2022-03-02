import Quiz from '../../../models/QuizModel'
import dbConnect from '../../../utilities/mongoose';

export default async function handler(req, res) {
    const { method } = req;

    await dbConnect()

    if (method === "GET") {
        try {
            const quizzes = await Quiz.find({});
            res.status(200).json({ success: true, data: quizzes });

        } catch (error) {
            res.status(500).json({ success: false });
        }
    }

    if (method === "POST") {
        try {
            const quiz = await Quiz.create(req.body);
            res.status(201).json({ success: true, data: quiz });

        } catch (error) {
            res.status(500).json({ success: false });
        }
    }

}