import type { AppointmentContent, GetContentFc } from "./types";

export const getAppointmentContent: GetContentFc<AppointmentContent> = (
  internFc
) => ({
  title: internFc("title"),
  steps: [
    {
      id: "service",
      label: internFc("steps.service"),
    },
    {
      id: "style",
      label: internFc("steps.style"),
    },
    {
      id: "artist",
      label: internFc("steps.artist"),
    },
    {
      id: "date",
      label: internFc("steps.date"),
    },
    {
      id: "hour",
      label: internFc("steps.hour"),
    },
    {
      id: "reserve",
      label: internFc("steps.reserve"),
    },
  ],
  form: {
    fields: {
      service: {
        content: [
          { id: "design", label: internFc("form.fields.service.design") },
          { id: "session", label: internFc("form.fields.service.session") },
        ],
        moreInfo: internFc("form.fields.service.moreInfo"),
      },
    },
    submit: internFc("form.fields.submit"),
  },
});
