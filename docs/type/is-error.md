---
outline: deep
---

# 检查value是不是Error对象

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.error(new Error()) // => true
  
  is.error(new TypeError()) // => true
  
  is.error(new EvalError()) // => true
  
  is.error({}) // => false
  
  is.error('error') // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isError } from 'is-check'
  
  isError(new Error()) // => true
  
  isError(new TypeError()) // => true
  
  isError(new EvalError()) // => true
  
  isError({}) // => false
  
  isError('error') // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isError } from 'is-check/type'
  
  isError(new Error()) // => true
  
  isError(new TypeError()) // => true
  
  isError(new EvalError()) // => true
  
  isError({}) // => false
  
  isError('error') // => false
</script>
````