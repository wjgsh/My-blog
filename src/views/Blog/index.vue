<template>
  <Layout>
    <BlogList />
    <template #right>
      <BlogCategory />
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout/index.vue";
import BlogList from "@/views/Blog/components/BlogList.vue";
import BlogCategory from "@/views/Blog/components/BlogCategory.vue";
export default {
  components: {
    Layout,
    BlogList,
    BlogCategory,
  },
};
</script>

<style></style>
