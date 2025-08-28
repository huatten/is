---
outline: deep
---

# 检查value是不是Set对象

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.set(new Set()) // => true
  
  is.set(new Map()) // => false
  
  is.set([]) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isSet } from 'is-check'
  
  isSet(new Set()) // => true
  
  isSet(new Map()) // => false
  
  isSet([]) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isSet } from 'is-check/type'
  
  isSet(new Set()) // => true
  
  isSet(new Map()) // => false
  
  isSet([]) // => false
</script>
````