<script setup>
import { useData, useRoute } from "vitepress";
import DefaultTheme from "vitepress/theme";

const { Layout } = DefaultTheme;
// const { frontmatter } = useData();
// const route = useRoute();
</script>

<template>
  <Layout>
    <!-- <template #not-found>
      {{ route }}
      {{ frontmatter }}
    </template> -->
  </Layout>
</template>
