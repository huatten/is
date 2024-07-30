---
outline: deep
---

# 检查value是不是奇数

> 用于检查给定的值是否为奇数。奇数是指`不能被2整除`的`整数`。

### 全量引入
```javascript
<script>
  import is from 'is-check'

  is.odd(11) // => true

  is.odd(-9) // => true

  is.odd(10)  // => false

  is.odd(99.99) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isOdd } from 'is-check'

  isOdd(11) // => true

  isOdd(-9) // => true

  isOdd(10)  // => false

  isOdd(99.99) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isOdd } from 'is-check/number'

  isOdd(11) // => true

  isOdd(-9) // => true

  isOdd(10)  // => false

  isOdd(99.99) // => false
</script>
````
