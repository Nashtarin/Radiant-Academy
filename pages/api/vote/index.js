import Vote from '../../../models/VoteModel';
import dbConnect from '../../../utilities/mongoose';

export default async function handler(req, res) {
    const { method } = req;

    await dbConnect()

    if (method === "GET") {
        try {
            const votingCourses = await Vote.find({});
            res.status(200).json({ success: true, data: votingCourses });

        } catch (error) {
            res.status(500).json({ success: false });
        }
    }

    if (method === "POST") {
        try {
            const newVotingCourse = await Vote.create(req.body);
            res.status(201).json({ success: true, data: newVotingCourse });

        } catch (error) {
            res.status(500).json({ success: false });
        }
    }



}