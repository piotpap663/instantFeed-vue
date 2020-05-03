<template src="./AddPost.html"></template>

<script>
import { addPost } from "../../services/api/index";
import { mapState } from "vuex";
export default {
  data() {
    return {
      file: null,
      errors: [],
      text: "",
      file64: "",
      uploaded: false,
      uploadedText: "Thank you"
    };
  },
  computed: mapState({
    userId: state => state.auth._id
  }),
  methods: {
    handleErrors(errors) {
      this.errors = errors;
    },
    fileUpload(file) {
      const formData = new FormData();
      formData.append("file", file);
      const data = {
        authorId: this.userId,
        image: this.file64,
        text: this.text
      };
      addPost(data)
        .then(response => {
          if (response.data.info) {
            alert(response.data.info);
          } else {
            this.$set(this, "uploaded", true);
            this.$set(this, "file", null);
            this.$set(this, "errors", []);
            this.$set(this, "text", "");
            this.$set(this, "file64", "");
          }
        })
        .catch(errors => {
          this.errors = errors;
        });
    },
    onChange(e) {
      this.$set(this, "file", e.target.files[0]);

      const reader = new FileReader();
      reader.addEventListener(
        "load",
        () => {
          this.$set(this, "file64", reader.result);
        },
        false
      );
      reader.readAsDataURL(e.target.files[0]);
    },
    onFormSubmit(e) {
      e.preventDefault();
      this.fileUpload(this.file);
    }
  }
};
</script>
<style lang="scss" src="./AddPost.scss" scoped>
</style>
