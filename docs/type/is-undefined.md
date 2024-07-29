---
outline: deep
---

# 检查value是不是undefined

### 全量引入
```javascript
<script>
  import is from 'is-check'

  is.undefined(void 0) // => true
  
  is.undefined(undefined) // => true
  
  is.undefined(null) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isUndefined } from 'is-check'

  isUndefined(void 0) // => true

  isUndefined(undefined) // => true

  isUndefined(null) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isUndefined } from 'is-check/type'

  isUndefined(void 0) // => true

  isUndefined(undefined) // => true

  isUndefined(null) // => false
</script>
````
