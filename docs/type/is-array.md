---
outline: deep
---

# 检查value是不是Array对象

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.array([]) // => true
  
  is.array(new Array(10)) // => false
  
  is.array(document.body.children)  // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isArray } from 'is-check'
  
  isArray([]) // => true
  
  isArray(new Array(10)) // => false
  
  isArray(document.body.children)  // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isArray } from 'is-check/type'
  
  isArray([]) // => true
  
  isArray(new Array(10)) // => false
  
  isArray(document.body.children)  // => false
</script>
````
