const prefix = "/api/mmn";

export const endpoints = Object.freeze({
  privacyPolicy: {
    get: `${prefix}/privacy-policy`,
  },
  termsAndConditions: {
    get: `${prefix}/terms-and-conditions`,
  },
  termsOfUse: {
    get: `${prefix}/terms-of-use`,
  },
  support: {
    get: `${prefix}/support-guide`,
  },
  ogData: {
    get: `${prefix}/deeplink-data`,
  },
  account: {
    delete: `${prefix}/user/delete/account`,
  },
  login: {
    google: `${prefix}/auth/google-login`,
  },
});
