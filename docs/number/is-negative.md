---
outline: deep
---

# 检查value是不是负数

> 用于检查给定的值是否为负数。负数是指小于零的数字。

### 全量引入
```javascript
<script>
  import is from 'is-check'

  is.negative(-10) // => true

  is.negative(-0.99) // => true

  is.negative(-.99)  // => true

  is.negative(99.99) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isNegative } from 'is-check'

  isNegative(-10) // => true

  isNegative(-0.99) // => true

  isNegative(-.99)  // => true

  isNegative(99.99) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isNegative } from 'is-check/number'

  isNegative(-10) // => true

  isNegative(-0.99) // => true

  isNegative(-.99)  // => true

  isNegative(99.99) // => false
</script>
````
