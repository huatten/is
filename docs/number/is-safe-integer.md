---
outline: deep
---

# 检查value是不是安全整数

> 用于检查给定的值是否为安全整数。安全整数是指在 JavaScript 中可以精确表示的整数范围内的数字。

### 全量引入
```javascript
<script>
  import is from 'is-check'

  is.safeInteger(42) // => true

  is.safeInteger(Number.MAX_SAFE_INTEGER) // => true

  is.safeInteger(Number.MAX_SAFE_INTEGER + 1) // => false

  is.safeInteger(3.14) // => false
</script>
```

### 按需引入
```javascript
<script>
  import { isSafeInteger } from 'is-check'

  isSafeInteger(42) // => true

  isSafeInteger(Number.MAX_SAFE_INTEGER) // => true

  isSafeInteger(Number.MAX_SAFE_INTEGER + 1) // => false

  isSafeInteger(3.14) // => false
</script>
```

### 按模块引入
```javascript
<script>
  import isSafeInteger from 'is-check/number/is-safe-integer'

  isSafeInteger(42) // => true

  isSafeInteger(Number.MAX_SAFE_INTEGER) // => true

  isSafeInteger(Number.MAX_SAFE_INTEGER + 1) // => false

  isSafeInteger(3.14) // => false
</script>
```