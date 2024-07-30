---
outline: deep
---

# 检查value是不是小数

> 用于检查给定的值是否为小数。小数是指带有小数部分的数字，包括`正小数`和`负小数`。

### 全量引入
```javascript
<script>
  import is from 'is-check'

  is.decimal(19.99) // => true

  is.decimal(-19.99)  // => true

  is.decimal(.89) // => true

  is.decimal(99.00) // => false

  is.decimal(985)  // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isDecimal } from 'is-check'

  isDecimal(19.99) // => true

  isDecimal(-19.99)  // => true

  isDecimal(.89) // => true

  isDecimal(99.00) // => false

  isDecimal(985)  // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isDecimal } from 'is-check/number'

  isDecimal(19.99) // => true

  isDecimal(-19.99)  // => true

  isDecimal(.89) // => true

  isDecimal(99.00) // => false

  isDecimal(985)  // => false
</script>
````
