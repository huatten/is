---
outline: deep
---

# 检查value是不是正小数

> 用于检查给定的值是否为正小数。正小数是指大于零且带有小数部分的数字。

### 全量引入
```javascript
<script>
  import is from 'is-check'

  is.positiveDecimal(122.99) // => true

  is.positiveDecimal(0.009) // => false

  is.positiveDecimal(100.00)  // => false

  is.positiveDecimal(-99.99) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isPositiveDecimal } from 'is-check'

  isPositiveDecimal(122.99) // => true

  isPositiveDecimal(0.009) // => false

  isPositiveDecimal(100.00)  // => false

  isPositiveDecimal(-99.99) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isPositiveDecimal } from 'is-check/number'

  isPositiveDecimal(122.99) // => true

  isPositiveDecimal(0.009) // => false

  isPositiveDecimal(100.00)  // => false

  isPositiveDecimal(-99.99) // => false
</script>
````
