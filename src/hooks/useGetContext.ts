"use client";

import { useContext, type Context } from "react";

export const useGetContext = <T>(context: Context<T>): NonNullable<T> => {
  const getContext = useContext(context);

  if (!getContext) {
    throw new Error("useGetContext has to be used within a provider");
  }

  return getContext;
};
