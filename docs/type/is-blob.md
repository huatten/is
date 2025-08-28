---
outline: deep
---

# 检查value是不是Blob对象

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.blob(new Blob()) // => true
  
  is.blob(new File([], 'test.txt')) // => true
  
  is.blob({}) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isBlob } from 'is-check'
  
  isBlob(new Blob()) // => true
  
  isBlob(new File([], 'test.txt')) // => true
  
  isBlob({}) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isBlob } from 'is-check/type'
  
  isBlob(new Blob()) // => true
  
  isBlob(new File([], 'test.txt')) // => true
  
  isBlob({}) // => false
</script>
````