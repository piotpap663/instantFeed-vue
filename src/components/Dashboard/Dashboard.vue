<template src="./Dashboard.html"></template>

<script>
import { mapState } from "vuex";

import Post from "../Post/Post";
import { getUserPostSubscribersPostLikedBySubscribersPost } from "../../services/api/index";
export default {
  components: {
    Post
  },
  computed: mapState({
    posts: state => state.posts,
    userId: state => state.auth._id,
    subscribers: state => state.auth.subscribers
  }),
  mounted() {
    if (this.userId && this.subscribers) {
      return getUserPostSubscribersPostLikedBySubscribersPost(
        this.subscribers,
        this.userId
      ).then(response => {
        this.$store.dispatch("setPosts", response.data);
      });
    }
  }
};
</script>
<style lang="scss" src="./Dashboard.scss" scoped>
</style>
