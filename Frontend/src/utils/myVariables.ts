const clientUrl = import.meta.env.VITE_CLIENT_URL;
const serverUrl = import.meta.env.VITE_SERVER_URL;
const nameCookie = import.meta.env.VITE_NAME_COOKIE;
const nameCookieAdmin = import.meta.env.VITE_NAME_COOKIE_ADMIN;

export const env = {
    hostClient: clientUrl,
    hostServer: serverUrl,
    nameCookie: nameCookie,
    nameCookieAdmin: nameCookieAdmin
};


