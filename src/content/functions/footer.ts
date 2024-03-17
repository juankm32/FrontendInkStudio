import type { FooterContent, GetContentFc } from "./types";

export const getFooterContent: GetContentFc<FooterContent> = (
  internFc,
  locale
) => {
  return {
    location: {
      title: internFc("location.title"),
      description: internFc("location.description"),
    },
    openingHours: {
      title: internFc("openingHours.title"),
      description: internFc("openingHours.description"),
    },
    faq: {
      title: internFc("faq.title"),
      faqs: internFc("faq.faqs"),
    },
    copyright: internFc("copyright"),
    love: internFc("love"),
    navigation: [
      {
        id: "contact",
        href: `/${locale}/contact`,
        label: internFc("navigation.contact"),
      },
      {
        id: "privacyPolitics",
        href: `/${locale}/privacyPolicy`,
        label: internFc("navigation.privacyPolitics"),
      },
      {
        id: "termsAndConditions",
        href: `/${locale}/termsAndConditions`,
        label: internFc("navigation.termsAndConditions"),
      },
      {
        id: "whoWeAre",
        href: `/${locale}/faq`,
        label: internFc("navigation.whoWeAre"),
      },
    ],
  };
};
