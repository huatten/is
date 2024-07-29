---
outline: deep
---

# 检查value是不是Boolean值

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.boolean(true) // => true
  
  is.boolean(false) // => true
  
  is.boolean(12)  // => false
    
  is.boolean(null)  // => false
  
  is.boolean([])  // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isBoolean } from 'is-check'

  isBoolean(true) // => true

  isBoolean(false) // => true

  isBoolean(12)  // => false

  isBoolean(null)  // => false

  isBoolean([])  // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isBoolean } from 'is-check/type'
  
  isBoolean(true) // => true

  isBoolean(false) // => true

  isBoolean(12)  // => false

  isBoolean(null)  // => false

  isBoolean([])  // => false
</script>
````
