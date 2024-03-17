import type { GetContentFc, RegisterContent } from "./types";

export const getRegisterContent: GetContentFc<RegisterContent> = (internFC) => {
  return {
    title: internFC("title"),
    form: {
      fields: {
        firstName: internFC("form.fields.firstName"),
        lastName: internFC("form.fields.lastName"),
        birthDate: internFC("form.fields.birthDate"),
        email: internFC("form.fields.email"),
        telephone: internFC("form.fields.telephone"),
        password: internFC("form.fields.password"),
        confirmPassword: internFC("form.fields.confirmPassword"),
      },
      errors: {
        unknownError: internFC("form.errors.unknownError"),
        alreadyExists: internFC("form.errors.alreadyExists"),
        required: internFC("form.errors.required"),
        invalidEmail: internFC("form.errors.invalidEmail"),
        invalidDate: internFC("form.errors.invalidDate"),
        invalidPasswords: internFC("form.errors.invalidPasswords"),
        invalidPassword: internFC("form.errors.invalidPassword"),
        invalidTelephone: internFC("form.errors.invalidTelephone"),
        notOldEnough: internFC("form.errors.notOldEnough"),
        minLength: {
          start: internFC("form.errors.minLength.start"),
          end: internFC("form.errors.minLength.end"),
        },
        maxLength: {
          start: internFC("form.errors.maxLength.start"),
          end: internFC("form.errors.maxLength.end"),
        },
      },
      success: {
        title: internFC("form.success.title"),
        description: internFC("form.success.description"),
      },
      submit: internFC("form.submit"),
    },
    haveAccount: {
      label: internFC("haveAccount.label"),
      linkLabel: internFC("haveAccount.linkLabel"),
    },
  };
};
