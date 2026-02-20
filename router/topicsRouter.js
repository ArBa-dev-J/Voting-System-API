import express from "express";
import { postNewTopics, getAllTopics, getTopicsByIdC, postNewVoteC, deleteByIdC } from "../controller/TopicsController.js";
import validate from "../validate/validate.js";
import validateTopicsTitle from "../validate/validateNewTopics.js";

const topicRoutes = express.Router();

//using routes

topicRoutes.route("/").post(validateTopicsTitle, validate, postNewTopics).get(getAllTopics);
topicRoutes.route("/:id").get(getTopicsByIdC).delete(deleteByIdC);
topicRoutes.route("/:id/vote").post(postNewVoteC);

export default topicRoutes;