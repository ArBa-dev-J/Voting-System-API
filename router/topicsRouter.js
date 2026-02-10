import express from "express";
import { postNewTopics } from "../controller/TopicsController.js";


const topicRoutes = express.Router();

//using routes

topicRoutes.route("/").get(postNewTopics);

export default topicRoutes;