---
outline: deep
---

# 检查value是不是Promise对象

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.promise(Promise.resolve()) // => true
  
  is.promise(new Promise(() => {})) // => true
  
  is.promise({}) // => false
  
  is.promise(() => {}) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isPromise } from 'is-check'
  
  isPromise(Promise.resolve()) // => true
  
  isPromise(new Promise(() => {})) // => true
  
  isPromise({}) // => false
  
  isPromise(() => {}) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isPromise } from 'is-check/type'
  
  isPromise(Promise.resolve()) // => true
  
  isPromise(new Promise(() => {})) // => true
  
  isPromise({}) // => false
  
  isPromise(() => {}) // => false
</script>
````