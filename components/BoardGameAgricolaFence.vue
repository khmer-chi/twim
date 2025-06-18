<script lang="ts" setup>
import { ref, watch } from "vue";
import { renderBoard } from "board-game-agricola-fence";
const { fenceArray = [] } = defineProps<{ fenceArray?: string[] }>();
const boardGameAgricolaFence = ref<HTMLElement>();
const fenceSet = ref<Set<string>>(new Set());
const closureSetArray = ref<Set<string>[]>([]);
watch(boardGameAgricolaFence, () => {
  if (!boardGameAgricolaFence.value) return;

  const { fenceKeySet, watch: boardWatch } = renderBoard(boardGameAgricolaFence.value);
  fenceKeySet.clear();
  fenceArray.map((key) => fenceKeySet.add(key));
  boardWatch((a, b) => {
    fenceSet.value = a;
    closureSetArray.value = b || [];
  });
});
</script>
<template>
  <div class="bg-[#1099bb] p-1 max-w-300px">
    <div ref="boardGameAgricolaFence" />
  </div>
  <div class="flex">
    <div>柵欄數量:{{ fenceSet.size }}</div>
    <div>圈地數量:{{ closureSetArray.length }}</div>
  </div>
  <div>
    <div v-for="(item, index) in closureSetArray">
      第{{ index + 1 }}圈地有{{ item.size }}格空間 = {{ item.size * 2 }} 動物
    </div>
  </div>
</template>
