export type Cookie = "session";

export interface SetCookieOptParams {
  secure?: boolean;
  httpOnly?: boolean;
  sameSite?: "lax" | "none" | "strict";
  expirationMs?: number;
}
