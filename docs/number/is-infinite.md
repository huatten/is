---
outline: deep
---

# 检查value是不是无限的数

> 用于检查给定的值是否为无限的数。无限的数是指正无穷大（`Infinity`）或负无穷大（`-Infinity`）或者`被除数为0`的数值。

### 全量引入
```javascript
<script>
  import is from 'is-check'

  is.infinite(Infinity) // => true

  is.infinite(12/0)  // => true

  is.infinite(10000) // => false

  is.infinite(-999999) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isInfinite } from 'is-check'

  isInfinite(Infinity) // => true

  isInfinite(12/0)  // => true

  isInfinite(10000) // => false

  isInfinite(-999999) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isInfinite } from 'is-check/number'

  isInfinite(Infinity) // => true

  isInfinite(12/0)  // => true

  isInfinite(10000) // => false

  isInfinite(-999999) // => false
</script>
````
