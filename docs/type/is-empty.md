---
outline: deep
---

# 检查value是不是空值

### 全量引入
```javascript
<script>
  import is from 'is-check'

  is.empty(null) // => true

  is.empty(undefined) // => true

  is.empty('   ') // => true

  is.empty([]) // => true

  is.empty({}) // => true

  is.empty(0) // => false

  is.empty(false) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isEmpty } from 'is-check'
  
  isEmpty(null) // => true

  isEmpty(undefined) // => true

  isEmpty('   ') // => true

  isEmpty([]) // => true

  isEmpty({}) // => true

  isEmpty(0) // => false

  isEmpty(false) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isEmpty } from 'is-check/type'
  
  isEmpty(null) // => true

  isEmpty(undefined) // => true

  isEmpty('   ') // => true

  isEmpty([]) // => true

  isEmpty({}) // => true

  isEmpty(0) // => false

  isEmpty(false) // => false
</script>
````
