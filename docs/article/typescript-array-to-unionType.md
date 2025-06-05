---
title: 陣列（array）如何變成聯合類型(union type)
createtime: 202505291924
---

通常相同的做陣列（array）和聯合類型(union type)，會做兩遍
舉例像 small、medium、large
array 一遍
type 一遍
如下

```typescript
const sizeArray = ['small', 'medium', 'large'];
type Size = 'small' | 'medium' | 'large';
```

複製的代碼在維護上不太方便而且容易產生 bug

改進如下

```typescript
const sizeArray = ['small', 'medium', 'large'] as const;
type Size = (typeof sizeArray)[number];
```

變成只要維護 sizeArray 就好了，方便吧
