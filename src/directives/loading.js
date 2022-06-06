import styles from "./loading.module.less";

import src from "@/assets/loading.svg";

function getLoading(el) {
  return el.querySelector("img[data-role=loading]");
}
function createLoading(el) {
  const img = document.createElement("img");
  img.dataset.role = "loading";
  img.src = src;
  img.className = styles.loading;
  el.appendChild(img);
}

function removeLoading(el) {
  el.querySelector("img[data-role=loading]").remove();
}

export function loading(el, binding) {
  const curImg = getLoading(el);
  if (binding.value) {
    if (!curImg) {
      createLoading(el);
    }
  } else {
    if (curImg) {
      removeLoading(el);
    }
  }
}
