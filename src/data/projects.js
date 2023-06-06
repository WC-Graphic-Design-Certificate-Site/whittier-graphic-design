import { getSanityData } from "../utils/sanity";

export const projectsGallery =
  await getSanityData(`*[_type == "gallery" && name == "Student Project Gallery"][0] {
  "entries": project[]->{
    name,
    "image": image.asset->
  }
}`);

export const homeProjects = await getSanityData(`*[_type == "studentProject"] {
  _id,
  name,
  description,
  "image": image.asset->,
}`);
