type InternFC = (content: string) => string;

export type GetContentFc<T> = (internFC: InternFC, locale?: string) => T;

export interface HeaderContent {
  buttons: { id: string; href: string | null; label: string }[];
  navigation: { id: string; href: string; label: string }[];
}

export interface FooterContent {
  location: {
    title: string;
    description: string;
  };
  openingHours: {
    title: string;
    description: string;
  };
  faq: {
    title: string;
    faqs: string;
  };
  navigation: { id: string; href: string; label: string }[];
  copyright: string;
  love: string;
}

// types.ts

export interface ContactContent {
  location: {
    title: string;
    description: string;
  };
  openingHours: {
    title: string;
    description: string;
  };
  phone: {
    title: string;
    description: string;
  };
  email: {
    title: string;
    description: string;
  };
  form: {
    lastNamePlaceHolder: string | undefined;
    namePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    messagePlaceholder: string;
    sendButton: string;
    cancelButton: string;
  };
}


export interface HomeContent {
  carrousel: {
    description: {
      viewMore: string;
    };
  };
  gallery: {
    title: string;
    viewMore: string;
  };
}

export interface LoginContent {
  title: string;
  form: {
    fields: {
      email: string;
      password: string;
    };
    errors: {
      unknownError: string;
      required: string;
      invalidPassword: string;
      invalidEmail: string;
      minLength: {
        start: string;
        end: string;
      };
      maxLength: {
        start: string;
        end: string;
      };
    };
    submit: string;
  };
  forgotPassword: string;
  noAccount: {
    label: string;
    linkLabel: string;
  };
}

export interface RegisterContent {
  title: string;
  form: {
    fields: {
      firstName: string;
      lastName: string;
      birthDate: string;
      email: string;
      telephone: string;
      password: string;
      confirmPassword: string;
    };
    errors: {
      unknownError: string;
      alreadyExists: string;
      required: string;
      invalidEmail: string;
      invalidDate: string;
      invalidTelephone: string;
      notOldEnough: string;
      invalidPassword: string;
      invalidPasswords: string;
      minLength: {
        start: string;
        end: string;
      };
      maxLength: {
        start: string;
        end: string;
      };
    };
    success: {
      title: string;
      description: string;
    };
    submit: string;
  };
  haveAccount: {
    label: string;
    linkLabel: string;
  };
}

export interface ArtistsContent {
  title: string;
}

export interface ArtistContent {
  nav: { id: string; href: { start: string; end?: string }; label: string }[];
}


export interface GalleryContent {
  title: string;
  filters: {
    clearAll: string;
    styles: {
      title: string;
    };
    artists: {
      title: string;
    };
    bodyParts: {
      title: string;
      content: { name: string; label: string }[];
    };
  };
}
