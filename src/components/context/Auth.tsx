"use client";

import type { UserSchema } from "@/settings/@types";
import { createContext, useEffect, useState } from "react";

interface Store {
  token: string | null;
  user: UserSchema | null;
  logged: boolean;
  setters: {
    setToken: React.Dispatch<React.SetStateAction<string | null>>;
    setUser: React.Dispatch<React.SetStateAction<UserSchema | null>>;
  };
}

export const AuthContext = createContext<Store | null>(null);

interface Props {
  token: string | null;
  user: UserSchema | null;
  children: React.ReactNode;
}

const AuthContextProvider = ({
  children,
  token: tokenProp,
  user: userProp,
}: Readonly<Props>) => {
  const [logged, setLogged] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(tokenProp);
  const [user, setUser] = useState<UserSchema | null>(userProp);

  useEffect(() => {
    user ? setLogged(true) : setLogged(false);
  }, [user]);

  const store: Store = {
    token,
    user,
    logged,
    setters: {
      setToken,
      setUser,
    },
  };

  return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
