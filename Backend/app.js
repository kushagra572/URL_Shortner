import e from "express";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/mongo.config.js";
import urlSchema from "./src/models/short_url.model.js";
dotenv.config({ path: "./.env" });
const app = express();
import { nanoid } from "nanoid";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/create", async (req, res) => {
  let { url } = req.body;

  // Add https:// if missing
  if (!/^https?:\/\//i.test(url)) {
    url = "https://" + url;
  }

  const shortUrl = nanoid(7);
  const newUrl = new urlSchema({
    full_url: url,
    short_url: shortUrl,
  });
  await newUrl.save();
  res.send({ shortUrl: `http://localhost:3000/${shortUrl}` });
});

app.get("/:id", async (req, res) => {
  const { id } = req.params;
  const url = await urlSchema.findOne({ short_url: id });
  if (url) {
    // url.clicks++;
    // url.save();
    console.log(url.full_url);
    return res.redirect(url.full_url);
  } else {
    return res.status(404).json("No URL Found");
  }
});

const startServer = async () => {
  await connectDB();
  app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
  });
};

startServer();
