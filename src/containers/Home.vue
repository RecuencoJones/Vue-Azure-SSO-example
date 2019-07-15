<template>
  <div>
    <div v-if="account">
      Welcome {{ account.userName }}!
      <button @click="logout">Log out</button>
    </div>
    <button v-else @click="sso">Log in with SSO</button>
  </div>
</template>

<script>
import { UserAgentApplication } from "msal";
import { config } from "../config/auth";

const auth = new UserAgentApplication(config);

auth.handleRedirectCallback((error, resolve) => {
  if (error) {
    console.error(error);
  }
});

export default {
  data() {
    return {
      account: null
    };
  },
  methods: {
    sso() {
      auth.loginRedirect();
    },
    logout() {
      auth.logout();
    }
  },
  mounted() {
    this.account = auth.getAccount();
  }
};
</script>

