import e from "express";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/mongo.config.js";
import urlSchema from "./src/models/short_url.model.js";
import short_url from "./src/routes/short_url.route.js";
import { redirectFromShortUrl } from "./src/controller/short_url.controller.js";
import { errorHandler } from "./src/utils/errorHandler.js";
dotenv.config({ path: "./.env" });
import { nanoid } from "nanoid";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/create", short_url);

app.get("/:id", redirectFromShortUrl);
app.use(errorHandler);
const startServer = async () => {
  await connectDB();
  app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
  });
};

startServer();
