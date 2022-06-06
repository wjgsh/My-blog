import eventBus from "@/eventBus";
import { debounce } from "@/utils";
import defaultGif from "@/assets/loading.svg";

let imgs = [];

function setImage(img) {
  img.dom.src = defaultGif;
  const rect = img.dom.getBoundingClientRect();
  const clientHeight = document.documentElement.clientHeight;
  const height = rect.height || 150;
  if (rect.top >= -height && rect.top <= clientHeight) {
    //   在视口范围内
    const tempImg = new Image();
    tempImg.onload = function() {
      // 当图片加载完成
      img.dom.src = img.src;
    };
    tempImg.src = img.src;
    imgs = imgs.filter((i) => i !== img);
  }
}

// 调用此函数，设置合适的图片
function setImages() {
  for (const img of imgs) {
    setImage(img);
  }
}

function handleScroll(dom) {
  setImages();
}

eventBus.$on("mainScroll", debounce(handleScroll, 50));

export default {
  inserted(el, bindings) {
    const img = {
      dom: el,
      src: bindings.value,
    };
    imgs.push(img);
    setImage(img);
  },
  unbind(el) {
    imgs = imgs.filter((img) => img.dom !== el);
  },
};
