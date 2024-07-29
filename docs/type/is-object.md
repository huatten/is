---
outline: deep
---

# 检查value是不是Object

### 全量引入
```javascript
<script>
  import is from 'is-check'

  is.object({}) // => true

  is.object([]) // => true

  is.object(Function) // => true

  is.object(null) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isObject } from 'is-check'

  isObject({}) // => true

  isObject([]) // => true

  isObject(Function) // => true

  isObject(null) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isObject } from 'is-check/type'

  isObject({}) // => true

  isObject([]) // => true

  isObject(Function) // => true

  isObject(null) // => false
</script>
````
