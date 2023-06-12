import { getSanityData } from "../utils/sanity";

// export const projectsGallery =
//   await getSanityData(`*[_type == "gallery" && name == "Student Project Gallery"][0] {
//   "entries": project[]->{
//     name,
//     "image": image.asset->,
//     "imageAlt": image.alt
//   }
// }`);

const projectGalleries = await getSanityData(`*[_type == "gallery"] {
  _id,
  name,
  set[] {
    _key,
    name,
    "entries": project[]->{
      _id,
      name,
      "image": image.asset->,
      "imageAlt": image.alt
    }
  }
}`);

// export const homeProjects = await getSanityData(`*[_type == "studentProject"] {
//   _id,
//   name,
//   description,
//   "image": image.asset->,
// }`);

export { projectGalleries };
