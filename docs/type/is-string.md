---
outline: deep
---

# 检查value是不是String

### 全量引入
```javascript
<script>
  import is from 'is-check'

  is.string('1') // => true

  is.string(new String(1)) // => true

  is.string(1) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isString } from 'is-check'

  isString('1') // => true

  isString(new String(1)) // => true
  
  isString(1) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isString } from 'is-check/type'

  isString('1') // => true

  isString(new String(1)) // => true

  isString(1) // => false
</script>
````
