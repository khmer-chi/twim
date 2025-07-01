<script setup lang="ts">
import { useData } from "vitepress";
const { theme } = useData();
</script>
<template>
  <div class="flex flex-wrap">
    <a
      v-for="item in theme.postList"
      class="post-content"
      :href="item.path.replace(/docs\/([\d\D]+)\.md/, '$1.html')"
    >
      <div class="font-bold text-lg">{{ item.title }}</div>
      <div class="text-xs">
        {{
          (item.createtime.toString() ?? "").replace(
            /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})/,
            "$1年$2月$3日$4點$5分"
          )
        }}
      </div>
      <div class="text-sm">
        {{ (item.description || item.content.trim()).substring(0, 50) + "..." }}
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
