---
outline: deep
---

# 检查value是不是某个数的倍数

> 用于检查给定的值是否为某个数的倍数。

### 全量引入
```javascript
<script>
  import is from 'is-check'

  is.multipleOf(10, 2) // => true

  is.multipleOf(10, 3) // => false

  is.multipleOf(15, 5) // => true

  is.multipleOf(7, 2) // => false
</script>
```

### 按需引入
```javascript
<script>
  import { isMultipleOf } from 'is-check'

  isMultipleOf(10, 2) // => true

  isMultipleOf(10, 3) // => false

  isMultipleOf(15, 5) // => true

  isMultipleOf(7, 2) // => false
</script>
```

### 按模块引入
```javascript
<script>
  import isMultipleOf from 'is-check/number/is-multiple-of'

  isMultipleOf(10, 2) // => true

  isMultipleOf(10, 3) // => false

  isMultipleOf(15, 5) // => true

  isMultipleOf(7, 2) // => false
</script>
```