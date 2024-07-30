---
outline: deep
---

# 检查value是不是正数

> 用于检查给定的值是否为正数。负数是指大于零的数字。

### 全量引入
```javascript
<script>
  import is from 'is-check'

  is.positive(10) // => true

  is.positive(0.99) // => true

  is.positive(-99)  // => false

  is.positive(-99.99) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isPositive } from 'is-check'

  isPositive(10) // => true

  isPositive(0.99) // => true

  isPositive(-99)  // => false

  isPositive(-99.99) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isPositive } from 'is-check/number'

  isPositive(10) // => true

  isPositive(0.99) // => true

  isPositive(-99)  // => false

  isPositive(-99.99) // => false
</script>
````
