import { getSanityData } from "../utils/sanity";

export const courses =
  await getSanityData(`*[_type == "course"]|order(order asc) {
  title,
  subtitle,
  description,
  week8,
  topics[]-> {
    title,
    text,
    week,
    duration
  },
  order
}`);
