import { getShortUrl } from "../dao/short_url.js";
import {
  createShortUrlWithoutUser,
  createShortUrlWithUser,
} from "../services/short_url.service.js";
import wrapAsync from "../utils/tryCatchWrapper.js";

export const createShortUrl = wrapAsync(async (req, res) => {
  let { url } = req.body;
  const shortUrl = await createShortUrlWithoutUser(url);
  //   console.log(process.env.APP_URL);
  res.send(process.env.APP_URL + shortUrl);
});

export const redirectFromShortUrl = wrapAsync(async (req, res) => {
  const { id } = req.params;
  //   console.log(id);
  const url = await getShortUrl(id);
  //   console.log(url);
  res.redirect(url.full_url);
});
