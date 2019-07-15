const clientId = "05f6a96b-3f57-4dc6-aa21-66d82a44b1de";
const redirectUri = window.location.origin;

export const config = {
  auth: {
    clientId,
    redirectUri,
    postLogoutRedirectUri: redirectUri
  }
};
