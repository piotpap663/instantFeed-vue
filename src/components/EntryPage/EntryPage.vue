<template src="./EntryPage.html"></template>

<script>
import { loginUser, registerUser } from "../../services/api/index";
export default {
  data() {
    return {
      userName: "",
      userPassword: "",
      showLoginPage: true
    };
  },
  methods: {
    handleRegister(e) {
      if (this.userName && this.userPassword) {
        registerUser(this.userName, this.userPassword)
          .then(response => {
            if (response.data.info) {
              alert(response.data.info);
            } else {
              alert(`Registered user: ${this.userName}`);
            }
          })
          .catch(function(error) {
            console.error(error);
          });
      } else {
        alert("Fill in fields");
      }
    },
    handleLogin(e) {
      if (this.userName && this.userPassword) {
        loginUser(this.userName, this.userPassword)
          .then(response => {
            if (response.status !== 200 || response.data.info) {
              alert(response.data.info);
            } else {
              this.$store.dispatch("loginUser", response.data);
              this.$router.push({ path: "/" });
            }
          })
          .catch(function(error) {
            console.error(error);
            alert("Something went wrong");
          });
      } else {
        alert("Fill in fields");
      }
    }
  }
};
</script>
<style lang="scss" src="./EntryPage.scss" scoped>
</style>
