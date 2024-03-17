import type { GetContentFc, HomeContent } from "./types";

export const getHomeContent: GetContentFc<HomeContent> = (internFC) => {
  return {
    carrousel: {
      description: {
        viewMore: internFC("carrousel.description.viewMore"),
      },
    },
    gallery: {
      title: internFC("gallery.title"),
      viewMore: internFC("gallery.viewMore"),
    },
  };
};
