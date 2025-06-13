---
title: 語意判斷git commit 增加版本號
---

最近在嘗試將專案用 vite 打包成 library

遇到了一個有趣的東西 semantic-release

它會按照你提交的 git commit 內容去做版本的發布

對自動化部署是個好東西

這邊簡易做個紀錄

版本號遵循 SemVer（語意話版本控制）規則，及 MAJOR.MINOR.PATCH（主版本.次版本.修订版本）

## 對應表

| 變動位置   | commit 包含     | 範例              | 意思                             |
| ---------- | --------------- | ----------------- | -------------------------------- |
| MAJOR      | BREAKING CHANGE | 1.0.0 -> 2.0.0    | 重大更新                         |
| MINOR      | feat            | 1.2.1 -> 1.3.1    | 新功能                           |
| MPATCHAJOR | fix             | ex:3.2.1 -> 3.2.2 | 修復                             |
|            | chore           |                   | 不影響功能用戶體驗               |
|            | docs            |                   | 文件更新                         |
|            | style           |                   | 程式碼風格修改，不影響邏輯及功能 |
|            | refactor        |                   | 重構                             |
|            | test            |                   | 測試相關                         |

## git commit 格式

```txt
<type>(<scope>): <description>
```

1. <type> feat fix 之類的
2. <scope> 可選表示範圍 如:api、ui
3. <description> 簡短描述

## 參考資料

1. https://www.youtube.com/watch?v=H3iO8sbvUQg
2. https://grok.com/share/bGVnYWN5_14765f42-e39e-40a1-8e31-5133ec1d58ee
