---
outline: deep
---

# 检查value是不是ArrayBuffer对象

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.arrayBuffer(new ArrayBuffer(10)) // => true
  
  is.arrayBuffer(new Uint8Array(10)) // => false
  
  is.arrayBuffer({}) // => false
  
  is.arrayBuffer(null) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isArrayBuffer } from 'is-check'
  
  isArrayBuffer(new ArrayBuffer(10)) // => true
  
  isArrayBuffer(new Uint8Array(10)) // => false
  
  isArrayBuffer({}) // => false
  
  isArrayBuffer(null) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isArrayBuffer } from 'is-check/type'
  
  isArrayBuffer(new ArrayBuffer(10)) // => true
  
  isArrayBuffer(new Uint8Array(10)) // => false
  
  isArrayBuffer({}) // => false
  
  isArrayBuffer(null) // => false
</script>
````