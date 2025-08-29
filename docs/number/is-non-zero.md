---
outline: deep
---

# 检查value是不是非零数字

> 用于检查给定的值是否为非零数字。

### 全量引入
```javascript
<script>
  import is from 'is-check'

  is.nonZero(1) // => true

  is.nonZero(-1) // => true

  is.nonZero(0) // => false

  is.nonZero('1') // => false
</script>
```

### 按需引入
```javascript
<script>
  import { isNonZero } from 'is-check'

  isNonZero(1) // => true

  isNonZero(-1) // => true

  isNonZero(0) // => false

  isNonZero('1') // => false
</script>
```

### 按模块引入
```javascript
<script>
  import isNonZero from 'is-check/number/is-non-zero'

  isNonZero(1) // => true

  isNonZero(-1) // => true

  isNonZero(0) // => false

  isNonZero('1') // => false
</script>
```