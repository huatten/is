---
outline: deep
---

# 检查value是不是整数

> 用于检查给定的值是否为整数。整数是指不带小数部分的数字，包括`正整数`、`负整数`和`零`。

### 全量引入
```javascript
<script>
  import is from 'is-check'

  is.integer(110010) // => true

  is.integer(-1900)  // => true

  is.integer(010) // => false

  is.integer(-99.99) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isInteger } from 'is-check'

  isInteger(110010) // => true

  isInteger(-1900)  // => true

  isInteger(010) // => false

  isInteger(-99.99) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isInteger } from 'is-check/number'

  isInteger(110010) // => true

  isInteger(-1900)  // => true

  isInteger(010) // => false

  isInteger(-99.99) // => false
</script>
````
