"use client";

import { AuthContext } from "@/components/context/Auth";
import type { HeaderContent } from "@/content/functions/types";
import { useGetContext } from "@/hooks";
import { urls } from "@/settings";
import { ROLES, getData } from "@/utils";
import { deleteCookie } from "@/utils/server";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Fragment, type FC } from "react";

const { api } = urls;

interface Props {
  buttons: HeaderContent["buttons"];
  className?: string;
}

const UserNav: FC<Readonly<Props>> = ({ buttons, className }) => {
  const {
    token,
    logged,
    user,
    setters: { setToken, setUser },
  } = useGetContext(AuthContext);
  const pathName = usePathname();
  const router = useRouter();

  const logout = async () => {
    const res = await getData<{ status: string }>(
      `${api.base}${api.auth.base}`,
      { headers: { Authorization: `Bearer ${token}` } }
    ).catch(console.error);

    if (res) {
      setToken(null);
      setUser(null);
      await deleteCookie("session");
      router.replace("/");
    }
  };

  return (
    <>
      {buttons.map(({ id, href, label }) => (
        <Fragment key={id}>
          {href ? (
            !logged && (id === "register" || id === "login") ? (
              pathName !== href && (
                <Link href={href} className={`${className || ""}`}>
                  {label}
                </Link>
              )
            ) : (
              user?.role.name === ROLES.ADMIN &&
              id !== "register" &&
              id !== "login" && (
                <Link href={href} className={`${className || ""}`}>
                  {label}
                </Link>
              )
            )
          ) : id === "closeSession" ? (
            logged && (
              <button onClick={logout} className={`${className || ""}`}>
                {label}
              </button>
            )
          ) : (
            <button className={`${className || ""}`}>{label}</button>
          )}
        </Fragment>
      ))}
    </>
  );
};

export default UserNav;
