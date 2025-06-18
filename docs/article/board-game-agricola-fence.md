---
title: 桌遊農家樂圈地容量計算
createtime: 202506181554
---

寫了一個農家樂圈地計算

## 達到了練習

1. vite 打包成 lib
2. github 更新後發布 npm 包
3. 使用 pixi 及 pixi 生態
4. vite 內使用 vue

## 我用的套件

1. pixi.js
2. pixi layout
3. pixi react
<script setup>
import BoardGameAgricolaFence from '@/components/BoardGameAgricolaFence.vue';
const fenceArray=[
  "1-2-H",
  "0-0-H",
  "1-0-H",
  "0-0-V",
  "2-0-H",
  "3-0-V",
  "3-1-V",
  "2-2-H",
  "0-2-H",
  "0-1-V",
  "0-2-V",
  "0-3-H",
  "1-3-H",
  "2-3-H",
  "3-2-V"
];
</script>

## 程式展示 1.4.3 version

<BoardGameAgricolaFence :fenceArray />
