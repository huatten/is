---
outline: deep
---

# 检查value是不是Null

### 全量引入
```javascript
<script>
  import is from 'is-check'

  is.null(null) // => true

  is.null('null') // => false
  
  is.null(void) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isNull } from 'is-check'

  isNull(null) // => true

  isNull('null') // => false

  isNull(void) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isNull } from 'is-check/type'

  isNull(null) // => true

  isNull('null') // => false

  isNull(void) // => false
</script>
````
