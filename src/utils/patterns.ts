export const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export const extraSpacesPattern = /\s+/g;

export const numbersPattern = /^\d+$/;

export const passwordPattern =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!])(?!.*\s).{8,64}$/;
