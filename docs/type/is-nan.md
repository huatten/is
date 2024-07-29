---
outline: deep
---

# 检查value是不是NaN

### 全量引入
```javascript
<script>
  import is from 'is-check'

  is.NaN(NaN) // => true

  is.NaN(1) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isNaN } from 'is-check'

  isNaN(NaN) // => true

  isNaN(1) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isNaN } from 'is-check/type'

  isNaN(NaN) // => true

  isNaN(1) // => false
</script>
````
