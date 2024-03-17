"use server";

import type { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";
import type { Cookie, SetCookieOptParams } from "./types";

export const setCookie = async (
  key: Cookie,
  data: string,
  { secure, expirationMs, httpOnly, sameSite }: SetCookieOptParams
): Promise<void> => {
  const actualDate = Date.now();
  const expirationDate = expirationMs && actualDate + expirationMs;
  cookies().set(key, data, {
    secure,
    expires: expirationDate,
    httpOnly,
    sameSite,
  });
};

export const getCookie = async (
  key: Cookie
): Promise<RequestCookie | undefined> => {
  const cookieStore = cookies();
  return cookieStore.get(key);
};

export const deleteCookie = async (key: Cookie): Promise<void> => {
  cookies().delete(key);
};
