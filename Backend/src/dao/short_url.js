import urlSchema from "../models/short_url.model.js";
export const saveShortUrl = async (shortUrl, longUrl, userId) => {
  const newUrl = new urlSchema({
    full_url: longUrl,
    short_url: shortUrl,
  });
  if (userId) {
    newUrl.user = userId;
  }
  await newUrl.save();
};
