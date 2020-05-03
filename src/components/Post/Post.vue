<template src="./Post.html"></template>

<script>
import PostHeader from "./PostHeader/PostHeader";
import PostContent from "./PostContent/PostContent";
import PostInfo from "./PostInfo/PostInfo";
export default {
  props: ["post"],
  components: {
    PostHeader,
    PostContent,
    PostInfo
  }
};
</script>
<style lang="scss" src="./Post.scss" scoped>
</style>
