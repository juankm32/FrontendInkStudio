import type { GetContentFc, LoginContent } from "./types";

export const getLoginContent: GetContentFc<LoginContent> = (internFC) => {
  return {
    title: internFC("title"),
    form: {
      fields: {
        email: internFC("form.fields.email"),
        password: internFC("form.fields.password"),
      },
      errors: {
        unknownError: internFC("form.errors.unknownError"),
        required: internFC("form.errors.required"),
        invalidPassword: internFC("form.errors.invalidPassword"),
        invalidEmail: internFC("form.errors.invalidEmail"),
        minLength: {
          start: internFC("form.errors.minLength.start"),
          end: internFC("form.errors.minLength.end"),
        },
        maxLength: {
          start: internFC("form.errors.maxLength.start"),
          end: internFC("form.errors.maxLength.end"),
        },
      },
      submit: internFC("form.submit"),
    },
    forgotPassword: internFC("forgotPassword"),
    noAccount: {
      label: internFC("noAccount.label"),
      linkLabel: internFC("noAccount.linkLabel"),
    },
  };
};
