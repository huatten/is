---
outline: deep
---

# 检查value是不是File对象

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.file(new File([], 'test.txt')) // => true
  
  is.file(new Blob()) // => false
  
  is.file({}) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isFile } from 'is-check'
  
  isFile(new File([], 'test.txt')) // => true
  
  isFile(new Blob()) // => false
  
  isFile({}) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isFile } from 'is-check/type'
  
  isFile(new File([], 'test.txt')) // => true
  
  isFile(new Blob()) // => false
  
  isFile({}) // => false
</script>
````