---
outline: deep
---

# 检查value是不是负小数

> 用于检查给定的值是否为负小数。负小数是指小于零且带有小数部分的数字。

### 全量引入
```javascript
<script>
  import is from 'is-check'

  is.negativeDecimal(10.99) // => true

  is.negativeDecimal(-0.99) // => true

  is.negativeDecimal(0)  // => false

  is.negativeDecimal(99.99) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isNegativeDecimal } from 'is-check'

  isNegativeDecimal(10.99) // => true

  isNegativeDecimal(-0.99) // => true

  isNegativeDecimal(0)  // => false

  isNegativeDecimal(99.99) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isNegativeDecimal } from 'is-check/number'

  isNegativeDecimal(10.99) // => true

  isNegativeDecimal(-0.99) // => true

  isNegativeDecimal(0)  // => false

  isNegativeDecimal(99.99) // => false
</script>
````
