import express from "express";
import { postNewTopics, getAllTopics, getTopicsByIdC } from "../controller/TopicsController.js";
import validate from "../validate/validate.js";
import validateTopicsTitle from "../validate/validateNewTopics.js";

const topicRoutes = express.Router();

//using routes

topicRoutes.route("/").post(validateTopicsTitle, validate, postNewTopics).get(getAllTopics);
topicRoutes.route("/:id").get(getTopicsByIdC);

export default topicRoutes;