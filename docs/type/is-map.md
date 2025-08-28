---
outline: deep
---

# 检查value是不是Map对象

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.map(new Map()) // => true
  
  is.map(new Set()) // => false
  
  is.map({}) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isMap } from 'is-check'
  
  isMap(new Map()) // => true
  
  isMap(new Set()) // => false
  
  isMap({}) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isMap } from 'is-check/type'
  
  isMap(new Map()) // => true
  
  isMap(new Set()) // => false
  
  isMap({}) // => false
</script>
````