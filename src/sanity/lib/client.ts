const isDevelopment = process.env.NODE_ENV === "development";
import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const revalidate = isDevelopment ? 30 : 3600; // 30 seconds in dev, 1 hour in prod

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token: process.env.SANITY_API_TOKEN,
  useCdn: isDevelopment, // false in dev, true in prod
});
