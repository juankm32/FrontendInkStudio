import type { GetContentFc, HeaderContent } from "./types";

export const getHeaderContent: GetContentFc<HeaderContent> = (
  internFc,
  locale
) => {
  return {
    buttons: [
      {
        id: "login",
        href: `/${locale}/login`,
        label: internFc("buttons.login"),
      },
      {
        id: "register",
        href: `/${locale}/register`,
        label: internFc("buttons.register"),
      },
      {
        id: "myAccount",
        href: `/${locale}/studio/myAccount`,
        label: internFc("buttons.myAccount"),
      },
      {
        id: "myStudio",
        href: `/${locale}/studio/myStudio`,
        label: internFc("buttons.myStudio"),
      },
      {
        id: "artists",
        href: `/${locale}/studio/artists`,
        label: internFc("buttons.artists"),
      },
      {
        id: "clients",
        href: `/${locale}/studio/clients`,
        label: internFc("buttons.clients"),
      },
      {
        id: "categories",
        href: `/${locale}/studio/categories`,
        label: internFc("buttons.categories"),
      },
      {
        id: "studioAgende",
        href: `/${locale}/studio/agende`,
        label: internFc("buttons.studioAgende"),
      },
      {
        id: "studioReports",
        href: `/${locale}/studio/reports`,
        label: internFc("buttons.studioReports"),
      },
      {
        id: "closeSession",
        href: null,
        label: internFc("buttons.closeSession"),
      },
    ],
    navigation: [
      {
        id: "home",
        href: "/",
        label: internFc("navigation.home"),
      },
      {
        id: "artists",
        href: `/${locale}/artists`,
        label: internFc("navigation.artists"),
      },
      {
        id: "gallery",
        href: `/${locale}/gallery`,
        label: internFc("navigation.gallery"),
      },
      {
        id: "caring",
        href: `/${locale}/caring`,
        label: internFc("navigation.caring"),
      },
      {
        id: "contact",
        href: `/${locale}/contact`,
        label: internFc("navigation.contact"),
      },
    ],
  };
};
