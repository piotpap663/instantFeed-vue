<template src="./PostHeaderRemove.html"></template>

<script>
import { removePostById } from "../../../../services/api/index";
import { mapState } from "vuex";
export default {
  props: ["postId"],
  computed: mapState({
    posts: state => state.posts
  }),
  methods: {
    removePost() {
      if (this.postId) {
        removePostById(this.postId)
          .then(response => {
            if (response.data.info) {
              console.error(response.data.info);
              alert(response.info);
            } else {
              const newPosts = this.posts.filter(
                post => post._id !== this.postId
              );
              this.$store.dispatch("setPosts", newPosts);
            }
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  }
};
</script>
<style lang="scss" src="./PostHeaderRemove.scss" scoped>
</style>
