---
outline: deep
---

# 检查value是不是小数

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
  import { isDecimal } from 'is'

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
  import { isDecimal } from 'is/type'

  isDecimal(19.99) // => true

  isDecimal(-19.99)  // => true

  isDecimal(.89) // => true

  isDecimal(99.00) // => false

  isDecimal(985)  // => false
</script>
````
