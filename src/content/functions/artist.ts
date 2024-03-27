import type { ArtistContent, GetContentFc } from "./types";

export const getArtistContent: GetContentFc<ArtistContent> = (
  internFc,
  locale
) => ({
  nav: [
    {
      id: "publications",
      href: { start: `/${locale}/artists` },
      label: internFc("nav.publications"),
    },
    {
      id: "gallery",
      href: { start: `/${locale}/artists`, end: "gallery" },
      label: internFc("nav.gallery"),
    },
    {
      id: "appointment",
      href: { start: `/${locale}/`, end: "appointment" },
      label: internFc("nav.scheduleAppointment"),
    },
  ],
  publication: {
    by: internFc("publication.by"),
  },
});
