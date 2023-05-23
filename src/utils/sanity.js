import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: "msfqnlph",
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-04-01",
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => {
  if (source) {
    return builder.image(source);
  } else {
    return;
  }
};

export const getSanityData = async (GROQquery) => {
  const data = await sanityClient.fetch(GROQquery);
  return data;
};

export async function getCourses() {
  const query = `*[_type == "course"] | order(order asc) {
    title,
    subtitle,
    description,
    topics[]->{
        title,
        "tools": description.tools,
        "projects": description.projects,
        "in-class": description.inClass[]->name,
        "resources": description.resources[]->name
    }
    }`;
  const courses = await sanityClient.fetch(query);
  return courses;
}
