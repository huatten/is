---
outline: deep
---

# 检查value是不是偶数

> 用于检查给定的值是否为偶数。偶数是指`可以被2整除`的`整数`。 

### 全量引入
```javascript
<script>
  import is from 'is-check'

  is.even(12) // => true

  is.even(-10)  // => true

  is.even(100.00) // => true

  is.even(99.00) // => false

  is.even(9.9)  // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isEven } from 'is-check'

  isEven(12) // => true

  isEven(-10)  // => true

  isEven(100.00) // => true

  isEven(99.00) // => false

  isEven(9.9)  // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isDecimal } from 'is-check/number'

  isEven(12) // => true

  isEven(-10)  // => true

  isEven(100.00) // => true

  isEven(99.00) // => false

  isEven(9.9)  // => false
</script>
````
