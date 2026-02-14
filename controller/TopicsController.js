import { postNewTopic, topicGet } from "../models/topicsModel.js";

// UPLOAD TOPIC DATA TO SQL
export const postNewTopics = async (req, res) => {
  try {
    const newTopic = req.body;

    if (!newTopic.title || !newTopic.options) {
      res.status(400).json({
        status: "fail",
        message: `Error, missing info`,
      });
      return;
    }

    const topic = await postNewTopic(newTopic);
    res.status(201).json({
      status: "success",
      data: topic,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: `Error writing data to db, ${error} `,
    });
  }
};

// get topics from db

export const getAllTopics = async (req, res) => {
  try {
    const { title } = req.query;
    const { description } = req.query;

    const topics = await topicGet({ title, description });

    if (topics.length === 0) {
      return res.status(404).json({
        status: "fail",
        message: "No topics found",
      });
    }

    res.status(200).json({
      status: "success",
      data: topics,
    });
  } catch (error) {
    res.status(500).jso({
      status: "fail",
      message: error.message,
    });
  }
};
