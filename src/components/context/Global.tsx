"use client";

import type { FC } from "react";
import { createContext } from "react";

interface Store {}

export const GlobalContext = createContext<Store | null>(null);

interface Props {
  children: React.ReactNode;
}

const GlobalContextProvider: FC<Readonly<Props>> = ({ children }) => {
  const store: Store = {};

  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
