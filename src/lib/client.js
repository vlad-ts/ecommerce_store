import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "ayuk6mt4",
  dataset: "production",
  useCdn: false, // set to `true` to fetch from edge cache
  apiVersion: "2023-01-31", // use current date (YYYY-MM-DD) to target the latest API version
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
