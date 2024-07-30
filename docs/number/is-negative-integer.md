---
outline: deep
---

# 检查value是不是负整数

> 用于检查给定的值是否为负整数。负整数是指小于零且不带有小数部分的数字。

### 全量引入
```javascript
<script>
  import is from 'is-check'

  is.negativeInteger(10) // => true

  is.negativeInteger(-0) // => false

  is.negativeInteger(0)  // => false

  is.negativeInteger(-99.99) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isNegativeInteger } from 'is-check'

  isNegativeInteger(-10) // => true

  isNegativeInteger(-0) // => false

  isNegativeInteger(0)  // => false

  isNegativeInteger(-99.99) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isNegativeInteger } from 'is-check/number'

  isNegativeInteger(-10) // => true

  isNegativeInteger(-0) // => false

  isNegativeInteger(0)  // => false

  isNegativeInteger(-99.99) // => false
</script>
````
