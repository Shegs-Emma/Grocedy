import cookie from "js-cookie";

export const setCookie = (key: string, value: string) => {
  if (process.browser) {
    cookie.set(key, value, {
      expires: 1,
      path: "/",
      secure: process.env.NODE_ENV === "production",
    });
  }
};

export const removeCookie = (key: string) => {
  if (process.browser) {
    cookie.remove(key, {
      expires: 1,
    });
  }
};

export const getCookie = (key: string, req: any) =>
  process.browser ? getCookieFromBrowser(key) : getCookieFromServer(key, req);

export const getCookieFromBrowser = (key: string) => cookie.get(key);

const getCookieFromServer = (key: string, req: any) => {
  if (!req) {
    return undefined;
  }

  const rawCookie = req?.headers?.cookie?.split(";").find((c: string) => c.trim().startsWith(`${key}=`));

  if (!rawCookie) {
    return undefined;
  }
  return rawCookie.split("=")[1];
};
