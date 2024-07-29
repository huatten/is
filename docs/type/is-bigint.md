---
outline: deep
---

# 检查value是不是BigInt类型的值

### 全量引入
```javascript
<script>
  import is from 'is-check'

  is.bigint(1n) // => true

  is.bigint(BigInt(123)) // => true

  is.bigint(123) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isBigInt } from 'is-check'

  isBigInt(1n) // => true
  
  isBigInt(BigInt(123)) // => true
  
  isBigInt(123) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isBigInt } from 'is-check/type'

  isBigInt(1n) // => true

  isBigInt(BigInt(123)) // => true

  isBigInt(123) // => false
</script>
````
