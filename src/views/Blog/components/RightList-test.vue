<template>
  <RightList :list="list" />
</template>

<script>
import RightList from "./RightList.vue";
export default {
  components: {
    RightList,
  },
  data() {
    return {
      list: [
        { name: "a", isSelect: false },
        { name: "b", isSelect: false },
        {
          name: "c",
          isSelect: true,
          children: [
            { name: "c-1", isSelect: false },
            {
              name: "c-2",
              isSelect: false,
              children: [
                { name: "c-2-1", isSelect: false },
                { name: "c-2-2", isSelect: false },
              ],
            },
          ],
        },
        { name: "d", isSelect: false },
        { name: "e", isSelect: false },
      ],
    };
  },
};
</script>

<style></style>
