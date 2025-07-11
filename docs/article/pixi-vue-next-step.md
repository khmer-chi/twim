---
title: @khmer/pixi-vue 的規劃
createtime: 202507111050
---

npm: https://www.npmjs.com/package/@khmer-chi/pixi-vue

github: https://github.com/khmer-chi/pixi-vue.git

## 嘗試使用 yoga layout

用 @pixi/layout 搞了 自適應 Container 做 scale 的時候 但是發現有 BUG

想說是不是這個套件的問題，就嘗試不使用 @pixi/layout 把 yoga layout 融合 vue 和 pixi

結果我錯了寫起來不是那麼容易，搞了一個禮拜還是回來使用 @pixi/layout

其實 application 裡面有個 stage 對他做 scale 並調整寬高

但是縮放視窗時發現沒對齊

經過多方嘗試後 在 layout 加上 transformOrigin: "left top" 就可以對齊了

雖然沒有將 yoga layout、pixi、vue 融合成功，但是大概看了 yoga layout 及 @pixi/layout 的代碼，大致了解是怎麼運作的

## 未來規劃

1. 將 @pixi/ui 加入我的專案
2. 補充每個組件的每個範例文件和單元測試
