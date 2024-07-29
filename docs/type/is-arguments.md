---
outline: deep
---

# 检查value是不是Arguments对象

> 用于检查一个值是否为 `arguments` 对象。`arguments` 对象是 JavaScript 函数中内建的对象，表示传递给该函数的参数。

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.arguments(function() { return arguments }()) // => true 
      
  is.arguments([123]) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isArguments } from 'is-check'
  
  isArguments(function() { return arguments }()) // => true
  
  isArguments([123]) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isArguments } from 'is-check/type'
  
  isArguments(function() { return arguments }()) // => true
  
  isArguments([123]) // => false
</script>
````
