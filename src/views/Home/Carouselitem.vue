<template>
  <div
    class="carousel-item-container"
    ref="container"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div class="carousel-img" ref="image" :style="imagePosition">
      <ImageLoader
        @load="this.showWords"
        :src="carousel.bigImg"
        :placeholder="carousel.midImg"
      />
    </div>
    <div class="text" ref="text">
      <div class="title" ref="title">{{ carousel.title }}</div>
      <div class="desc" ref="desc">{{ carousel.description }}</div>
    </div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  props: ["carousel"],
  components: {
    ImageLoader,
  },
  data() {
    return {
      containerSize: null,
      innerSize: null,
      mouseX: 0,
      mouseY: 0,
      left: 0,
      top: 0,
    };
  },
  computed: {
    imagePosition() {
      return {
        left: this.left + "px",
        top: this.top + "px",
      };
    },
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;
    this.setSize();
    window.addEventListener("resize", this.setSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.setsize);
  },
  methods: {
    showWords() {
      this.$refs.text.style.opacity = 1;
      this.$refs.title.style.width = 0;
      this.$refs.title.clientWidth;
      this.$refs.title.style.transition = "1s";
      this.$refs.title.style.width = this.titleWidth + "px";

      this.$refs.desc.style.width = 0;
      this.$refs.desc.clientWidth;
      this.$refs.desc.style.transition = "1s";
      this.$refs.desc.style.width = this.titleWidth + "px";
    },
    setSize() {
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight,
        rect: this.$refs.container.getBoundingClientRect(),
      };

      this.innerSize = {
        width: this.$refs.image.clientWidth,
        height: this.$refs.image.clientHeight,
      };

      this.left = (this.containerSize.width - this.innerSize.width) / 2;
      this.top = (this.containerSize.height - this.innerSize.height) / 2;
    },
    handleMouseMove(e) {
      this.setSize();

      // 鼠标相对容器的坐标
      this.mouseX = e.clientX - this.containerSize.rect.left;
      this.mouseY = e.clientY - this.containerSize.rect.top;

      // 图片根据鼠标移动的横向偏移
      this.left = this.left + this.containerSize.width / 2 - this.mouseX;
      // 图片横向偏移最大范围与最小范围的设置
      this.left > 0 ? (this.left = 0) : this.left;
      this.left < this.containerSize.width - this.innerSize.width
        ? (this.left = this.containerSize.width - this.innerSize.width)
        : this.left;

      // 图片根据鼠标移动的竖向偏移
      this.top = this.top + this.containerSize.height / 2 - this.mouseY;
      // 图片竖向偏移最大范围与最小范围的设置
      this.top > 0 ? (this.top = 0) : this.top;
      this.top < this.containerSize.height - this.innerSize.height
        ? (this.top = this.containerSize.height - this.innerSize.height)
        : this.top;
    },
    handleMouseLeave() {
      this.setSize();
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.carousel-item-container {
  // background: @dark;
  width: 100%;
  height: 100%;
  color: #fff;
  position: relative;
  overflow: hidden;

  .carousel-img {
    width: 110%;
    height: 110%;
    transition: 1s ease;
    position: absolute;
  }
  .text {
    position: absolute;
    top: 70%;
    left: 8%;
    overflow: hidden;
    white-space: nowrap;
    opacity: 0;
    // width: 300px;
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
      0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
    .title {
      font-size: 28px;
      margin-bottom: 12%;
    }
  }
}
</style>
