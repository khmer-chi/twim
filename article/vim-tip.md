---
title: vim小提示
---

# {{ $frontmatter.title }}

想要學習 vim 很久了，但是偷懶了許久

vim 我覺得最麻煩的就是配置和安裝了，每次安裝都會卡住

能用鍵盤就不用滑鼠

這邊留下我的學習紀錄

## 如何安裝 neo vim

1. https://martinlwx.github.io/zh-cn/config-neovim-from-scratch/#%E8%87%AA%E5%8A%A8%E8%A1%A5%E5%85%A8%E6%8F%92%E4%BB%B6
2. 配置的 git 參考

## 常用套件

1. telescope 快速搜尋檔案

## 三種模式

1. normal
2. visual
3. insert

## 常用組合鍵 normal

1. gg 到開頭
2. G 到結尾
3. ESC or ctrl+[ 回到 normal 模式
4. u 回到上一步
5. hjkl 左下上右
6. { 上一段
7. } 下一段
8. " a y y = 跟 y y 有點像，但是是把複製的東西放到 a 暫存器裡，這個 a 可以用其它 25 個英文字母代替，可以用:reg 指令把目前的暫存器叫出來看
9. " a p = 在游標之後貼上 a 暫存器裡的內容
10. di' 刪除單引號內東西
11. ci' 刪除單引號內東西並插入

## 參考資料

1. https://kaochenlong.com/2011/12/28/vim-tips.html
2. https://hackmd.io/@lunzaizai/BJX4hlPKY
