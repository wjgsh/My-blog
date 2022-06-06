export default function(refValue) {
  return {
    mounted() {
      this.$bus.$on("setMainScroll", this.handleSetMainScroll);
      this.$refs[refValue].addEventListener("scroll", this.handleMainScroll);
    },
    methods: {
      handleSetMainScroll(scrollTop) {
        this.$refs[refValue].scrollTop = scrollTop;
      },
      handleMainScroll() {
        this.$bus.$emit("mainScroll", this.$refs[refValue]);
      },
    },
    beforeDestroy() {
      this.$bus.$emit("mainScroll");
      this.$refs.mainContainer.removeEventListener(
        "scroll",
        this.handleMainScroll
      );
      this.$bus.$off("setMainScroll", this.handleSetMainScroll);
    },
  };
}
