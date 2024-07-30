---
outline: deep
---

# 检查value是不是正整数

> 用于检查给定的值是否为正整数。正整数是指大于零且不带有小数部分的数字。

### 全量引入
```javascript
<script>
  import is from 'is-check'

  is.positiveInteger(11111) // => true

  is.positiveInteger(-10) // => false

  is.positiveInteger(0)  // => false

  is.positiveInteger(99.99) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isPositiveInteger } from 'is-check'

  isPositiveInteger(11111) // => true

  isPositiveInteger(-10) // => false

  isPositiveInteger(0)  // => false

  isPositiveInteger(99.99) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isPositiveInteger } from 'is-check/number'

  isPositiveInteger(11111) // => true

  isPositiveInteger(-10) // => false

  isPositiveInteger(0)  // => false

  isPositiveInteger(99.99) // => false
</script>
````
