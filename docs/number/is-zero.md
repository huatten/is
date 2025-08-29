---
outline: deep
---

# 检查value是不是零

> 用于检查给定的值是否为零，包括正零和负零。

### 全量引入
```javascript
<script>
  import is from 'is-check'

  is.zero(0) // => true

  is.zero(-0) // => true

  is.zero(1) // => false

  is.zero('0') // => false
</script>
```

### 按需引入
```javascript
<script>
  import { isZero } from 'is-check'

  isZero(0) // => true

  isZero(-0) // => true

  isZero(1) // => false

  isZero('0') // => false
</script>
```

### 按模块引入
```javascript
<script>
  import isZero from 'is-check/number/is-zero'

  isZero(0) // => true

  isZero(-0) // => true

  isZero(1) // => false

  isZero('0') // => false
</script>
```