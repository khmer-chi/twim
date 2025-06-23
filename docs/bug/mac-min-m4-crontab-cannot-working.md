---
title: crontab 一直執行失敗
createtime: 202506231719
---

在 mac mini m4 環境下執行 node js 腳本沒問題

但是改到 crontab 執行時一直沒辦法成功

在 crontab 內加入以下確保環境一致，然後就成功了

```bash
SHELL=/bin/zsh
PATH=/usr/local/bin:/opt/homebrew/bin:/usr/bin:/bin

```
