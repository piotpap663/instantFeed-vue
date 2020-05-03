<template src="./PostHeader.html"></template>

<script>
import { mapState } from "vuex";
import { unsubscribeUser, subscribeUser } from "../../../services/api/index";
import PostHeaderRemove from "./PostHeaderRemove/PostHeaderRemove";
export default {
  components: {
    PostHeaderRemove
  },
  props: ["postId", "postUser", "postCreatedAt", "postAuthorId"],
  computed: mapState({
    userId: state => state.auth._id,
    subscribers: state => state.auth.subscribers
  }),
  methods: {
    handleUnsubscribe(e) {
      unsubscribeUser(this.postAuthorId, this.userId)
        .then(response => {
          if (response.data.info) {
            console.error(response);
            alert(response.data.info);
          }
          const subscribers = this.subscribers.filter(
            subId => subId !== this.postAuthorId
          );
          this.$store.dispatch("setSubscribers", subscribers);
        })
        .catch(error => {
          console.error(error);
        });
    },
    handleSubscribe(e) {
      subscribeUser(this.postAuthorId, this.userId)
        .then(response => {
          if (response.data.info) {
            console.error(response);
            alert(response.data.info);
          }
          const subscribers = [...this.subscribers, this.postAuthorId];
          this.$store.dispatch("setSubscribers", subscribers);
        })
        .catch(error => {
          console.error(error);
        });
    }
  },
  filters: {
    localDate: function(value) {
      if (!value) return "";
      value = new Date(value).toLocaleString();
      return value;
    }
  }
};
</script>
<style lang="scss" src="./PostHeader.scss" scoped>
</style>
