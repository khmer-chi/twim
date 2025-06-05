---
title: 影響半天的 @types/node bug
createtime: 202505301514
---

# {{ $frontmatter.title }}

是這樣的今天同事遇到一個奇怪的 bug 我們都是使用 macbook

是關於 typescript 的編譯時報錯

報錯是關於 setTimeout 的 return type 是 number 不是 timeout

但是其他同事使用相同代碼都沒問題

找了老半天猜是@types/node 問題

因為我安裝 @types/node 後跟他一樣會報一樣的錯

移除後就沒問題了，就鎖定是安裝這個套件造成的

然後我到他的電腦檢查竟然沒有安裝 @types/node

回到座位後想了一下，這個資料夾找不到是不是父層影響的

在自己的電腦試了下，往上一層 npm install @types/node，結果正如我想的是被上層影響的

就到他的電腦 往上 cd ../ ls -al 一一排查 做了 n 次後

終於找到在家目錄 看到了 node_modules 和 package.json 及 package-lock.json，刪除後就正常了
