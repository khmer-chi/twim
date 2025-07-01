<script setup lang="ts">
import { useData } from "vitepress";
const { theme } = useData();
</script>
<template>
  <div class="flex flex-wrap">
    <a v-for="item in theme.postList" class="post-content" :href="item.path">
      <div class="font-bold text-lg">{{ item.title }}</div>
      <div class="text-xs">
        {{ item.createtime }}
      </div>
      <div class="text-sm">
        {{ item.description }}
      </div>
    </a>
  </div>
</template>
<style lang="scss" scoped>
.post-content {
  @apply w-full flex-none relative;
  @apply mb-5 mr-2;
  @apply rounded border-1 border-style-solid;
  @apply p-3;
  @apply flex flex-col justify-center;
  > div {
    @apply my-2;
  }
}
</style>
