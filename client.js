import { createClient } from "@sanity/client";
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: "ayuk6mt4",
  dataset: "ecommerce-sanity",
  useCdn: false, // set to `true` to fetch from edge cache
  apiVersion: "2023-03-19", // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});
