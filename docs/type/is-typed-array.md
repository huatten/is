---
outline: deep
---

# 检查value是不是TypedArray对象

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.typedArray(new Int8Array()) // => true
  
  is.typedArray(new Uint8Array()) // => true
  
  is.typedArray(new Float32Array()) // => true
  
  is.typedArray([]) // => false
  
  is.typedArray({}) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isTypedArray } from 'is-check'
  
  isTypedArray(new Int8Array()) // => true
  
  isTypedArray(new Uint8Array()) // => true
  
  isTypedArray(new Float32Array()) // => true
  
  isTypedArray([]) // => false
  
  isTypedArray({}) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isTypedArray } from 'is-check/type'
  
  isTypedArray(new Int8Array()) // => true
  
  isTypedArray(new Uint8Array()) // => true
  
  isTypedArray(new Float32Array()) // => true
  
  isTypedArray([]) // => false
  
  isTypedArray({}) // => false
</script>
````