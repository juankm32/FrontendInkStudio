import type { ArtistsContent, GetContentFc } from "./types";

export const getArtistsContent: GetContentFc<ArtistsContent> = (internFc) => ({
  title: internFc("title"),
});
