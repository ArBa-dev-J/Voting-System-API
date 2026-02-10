import { postNewTopic } from "../models/topicsModel.js";


// UPLOAD TOPIC DATA TO SQL
export const postNewTopics = async (req, res) => {
    try {
        const newTopic = req.body;
        const topic = await postNewTopic(newTopic);
        res.status(201).json({
            status: "success",
            data: topic,
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: `Error writing data to db, ${error.message} `
        });
    }
}