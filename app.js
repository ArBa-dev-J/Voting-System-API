import express from "express";
import topicRoutes from "./router/topicsRouter.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

// middleware for cors

app.use(
  cors({
    origin: `http://localhost:5173`,
    // credentials: true,
  }),
);

// create application/json parser
const jsonParser = bodyParser.json();

app.use("/api/v1/topics", jsonParser, topicRoutes);

export default app;
