import express from "express";
import { postNewTopics } from "../controller/TopicsController.js";
import validate from "../validate/validate.js";
import validateTopicsTitle from "../validate/validateNewTopics.js";

const topicRoutes = express.Router();

//using routes

topicRoutes.route("/").get(validateTopicsTitle, validate, postNewTopics);

export default topicRoutes;