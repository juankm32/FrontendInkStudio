import type { GalleryContent, GetContentFc } from "./types";

export const getGalleryContent: GetContentFc<GalleryContent> = (internFc) => ({
  title: internFc("title"),
  filters: {
    clearAll: internFc("filters.clearAll"),
    styles: {
      title: internFc("filters.styles.title"),
    },
    artists: {
      title: internFc("filters.artists.title"),
    },
    bodyParts: {
      title: internFc("filters.bodyParts.title"),
      content: [
        {
          name: "back",
          label: internFc("filters.bodyParts.back"),
        },
        {
          name: "arms",
          label: internFc("filters.bodyParts.arms"),
        },
        {
          name: "legs",
          label: internFc("filters.bodyParts.legs"),
        },
      ],
    },
  },
});
