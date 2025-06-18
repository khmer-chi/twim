<script setup lang="ts">
import { useData } from "vitepress";
import DefaultTheme from "vitepress/theme";
const { Layout } = DefaultTheme;

const { frontmatter } = useData();
</script>

<template>
  <Layout>
    <template #doc-before>
      <div class="vp-doc">
        <h1>
          {{ frontmatter.title }}
          <a
            class="header-anchor"
            href="#frontmatter-title"
            :aria-label="`Permalink to ${frontmatter.title}`"
          />
        </h1>
      </div>
    </template>

    <!-- <template #not-found> -->
    <!-- <meta name="robots" content="noindex" />
      <div>Sorry, the page you are looking for does not exist.</div> -->
    <!-- </template> -->
  </Layout>
</template>
