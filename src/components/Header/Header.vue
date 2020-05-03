<template src="./Header.html"></template>

<script>
import { logoutUser } from "../../services/api/index";
export default {
  computed: {
    isAuthenticated() {
      return !!this.$store.state.auth.user;
    }
  },
  methods: {
    logoutUserFromApp() {
      logoutUser().then(() => {
        this.$store.dispatch("logoutUser");
      });
    }
  }
};
</script>
<style lang="scss" src="./Header.scss" scoped>
</style>
