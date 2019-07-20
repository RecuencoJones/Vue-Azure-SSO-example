const clientId = process.env.VUE_APP_AAD_CLIENT_ID;
const tenantId = process.env.VUE_APP_AAD_TENANT_ID;
const redirectUri = window.location.origin;

export const config = {
  auth: {
    clientId,
    authority: `https://login.microsoftonline.com/${ tenantId }`,
    redirectUri,
    postLogoutRedirectUri: redirectUri
  }
};
