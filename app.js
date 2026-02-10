import express from "express";
import topicRoutes from "./router/topicsRouter.js";
import bodyParser from "body-parser";

const app = express();

// create application/json parser
const jsonParser = bodyParser.json()
 

app.use("/api/v1/topics", jsonParser, topicRoutes);

export default app;