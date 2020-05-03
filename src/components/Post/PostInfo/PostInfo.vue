<template src="./PostInfo.html"></template>

<script>
import { mapState } from "vuex";
import { likePost } from "../../../services/api/index";
import { getLikedPosts } from "../../../services/helpers";
export default {
  props: ["postLikes", "postId", "postAuthorId", "postLiked", "postComments"],
  computed: mapState({
    userId: state => state.auth._id,
    posts: state => state.posts
  }),
  methods: {
    isLikedByMe() {
      return this.postLikes && this.postLikes.includes(this.userId);
    },
    clickLike() {
      likePost(this.userId, this.postId)
        .then(response => {
          if (response.data.info) {
            console.error(response.info);
            alert(response.data.info);
          } else {
            const oldPosts = [...this.posts];
            const newPosts = getLikedPosts(oldPosts, this.postId, this.userId);
            this.$store.dispatch("setPosts", newPosts);
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>
<style lang="scss" src="./PostInfo.scss" scoped>
</style>