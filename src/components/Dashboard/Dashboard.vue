<template src="./Dashboard.html"></template>

<script>
import { mapState } from "vuex";

import Post from "../Post/Post";
import { getUserPostSubscribersPostLikedBySubscribersPost } from "../../services/api/index";
export default {
  props: ["getPosts"],
  components: {
    Post
  },
  computed: mapState({
    posts: state => state.posts,
    userId: state => state.auth._id,
    subscribers: state => state.auth.subscribers
  }),
  methods: {
    fetchPosts() {
      if (this.userId && this.subscribers) {
        if (!this.getPosts) {
          console.error("getPosts function is nor provided");
        }
        this.getPosts(
          this.subscribers,
          this.userId,
          this.$route.params && this.$route.params.id
        ).then(response => {
          this.$store.dispatch("setPosts", response.data);
        });
      }
    }
  },
  mounted() {
    this.fetchPosts();
  },
  watch: {
    $route(to, from) {
      this.fetchPosts();
    }
  }
};
</script>
<style lang="scss" src="./Dashboard.scss" scoped>
</style>
