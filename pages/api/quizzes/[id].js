import dbConnect from "../../../utilities/mongoose";
import Quiz from '../../../models/QuizModel'

export default async function handler(req, res) {
    const { method, query: { id } } = req;

    await dbConnect()

    if (method === "GET") {
        try {
            const singleQuiz = await Quiz.findById(id);
            res.status(200).json({ success: true, data: singleQuiz });

        } catch (error) {
            res.status(500).json({ success: false });
        }
    }

    if (method === "DELETE") {
        const filter = {_id: id};

        try {
            const singleQuiz = await Quiz.findOneAndDelete(filter);
            res.status(201).json(singleQuiz);

        } catch (error) {
            res.status(500).json({ success: false });
        }
    }

}