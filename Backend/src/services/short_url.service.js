import { generateNanoid } from "../utils/helper.js";
import urlSchema from "../models/short_url.model.js";
import { saveShortUrl } from "../dao/short_url.js";
export const createShortUrlWithoutUser = async (url) => {
  // Add https:// if missing
  if (!/^https?:\/\//i.test(url)) {
    url = "https://" + url;
  }

  const shortUrl = generateNanoid(7);
  await saveShortUrl(shortUrl, url);

  return shortUrl;
};

export const createShortUrlWithUser = async (url, userId) => {
  // Add https:// if missing
  if (!/^https?:\/\//i.test(url)) {
    url = "https://" + url;
  }

  const shortUrl = generateNanoid(7);
  await saveShortUrl(shortUrl, url);

  return shortUrl;
};
