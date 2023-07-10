import { getSanityData } from "../utils/sanity";

export const pageData = await getSanityData(`*[_type == 'page'] {
    _id,
    title,
    "image": image{
      ...,
      asset->
    },
    "imageAlt": image.alt,
    content,
    "slug": slug.current,
    "seo": {
        "title": seoTitle,
        "description": seoDescription,
        openGraph{
          title,
          description,
          "image": image{
            ...,
            asset->
          }
        }
    }
}`);

export const getCurrentPage = (id) => {
  // console.log(pageData.find((page) => page._id === id));
  // Return all page data from pageData Sanity query
  // Sanity API only called once
  return pageData.find((page) => page._id === id);
};
