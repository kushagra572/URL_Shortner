import {
  createShortUrlWithoutUser,
  createShortUrlWithUser,
} from "../services/short_url.service.js";

export const createShortUrl = async (req, res) => {
  let { url } = req.body;
  const shortUrl = await createShortUrlWithoutUser(url);
  //   console.log(process.env.APP_URL);
  res.send(process.env.APP_URL + shortUrl);
};
