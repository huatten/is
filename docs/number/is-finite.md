---
outline: deep
---

# 检查value是不是有限的数

> 用于检查给定的值是否为有限的数。有限的数是指既`不是无穷大`，也不是 `NaN` 的数值。

### 全量引入
```javascript
<script>
  import is from 'is-check'

  is.finite(12) // => true

  is.finite(12/0)  // => false

  is.finite(Infinity) // => false

  is.finite(-Infinity) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isFinite } from 'is-check'

  isFinite(12) // => true

  isFinite(12/0)  // => false

  isFinite(Infinity) // => false

  isFinite(-Infinity) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isFinite } from 'is-check/number'

  isFinite(12) // => true

  isFinite(12/0)  // => false

  isFinite(Infinity) // => false

  isFinite(-Infinity) // => false
</script>
````
