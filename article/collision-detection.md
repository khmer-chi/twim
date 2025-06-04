---
title: 碰撞檢測代碼紀錄
---

# {{ $frontmatter.title }}

在很久以前，在做碰撞的研究看了一個文章這邊做個筆記

以二維世界（x 軸和 y 軸）來說要如何檢測兩個物體發生碰撞

## 求內積 向量 A \* 向量 B

```js
vec.prototype.dot = (vec2) => {
  return this.x * vec2.x + thix.y * vec.y;
};
```

## 向量的長度

```js
vec.prototype.len = () => {
  return Math.sqrt(this.x ** 2 + this.y ** 2);
};
```

## 向量相除

```js
vec.prototype.div = (payload) => {
  return { x: this.x / payload, y: this.y / payload };
};
```

## 向量相乘

```js
vec.prototype.mul = (payload) => {
  return { x: this.x * payload, y: this.y * payload };
};
```

## 單位向量

```js
vec.prototype.oneLen = () => {
  return this.div(this.len());
};
```

## 正影長

```js
vec.prototype.projectLength = (vec2) => {
  return this.dot(vec2) / vec2.length();
};
```

## 正影長有方向性

```js
vec.prototype.projectVector = (vec2) => {
  return vec2.oneLen().mul(this.projectLengthOnto(vec));
};
```

### 改良 少了開根號 Math.sqrt

減少使用 Math.sqrt 可以增加效能

```js
vec.prototype.projectVectorImprove = (vec2) => {
  return vec2.mul(this.dot(vec2)) / (vec2.x ** 2 + vec2.y ** 2);
};
```

## 關鍵字

1. AABB 碰撞檢測（Axis-aligned Bounding Box）
2. 分離軸碰撞檢測 （Separating Axis Theorem, SAT）
3. 法向量
4. 投影
5. 向量

## 參考資料

https://davidhsu666.com/archives/gamecollisiondetection/
