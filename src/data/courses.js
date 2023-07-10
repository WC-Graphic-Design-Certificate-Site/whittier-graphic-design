import { getSanityData } from "../utils/sanity";

export const courses =
  await getSanityData(`*[_type == "course"]|order(order asc) {
  title,
  mobileTitle,
  subtitle,
  description,
  "image": image{
    ...,
    asset->
  },
  "imageAlt": image.alt,
  "showLastWeek": week8,
  topics[]-> {
    title,
    text,
    week,
    duration
  },
  order
}`);
