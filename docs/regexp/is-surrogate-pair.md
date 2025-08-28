---
outline: deep
---

# 检查value是不是包含代理对字符

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.surrogatePair('Hello World') // => false
  
  is.surrogatePair('𠮷') // => true
</script>
````
### 按需引入
```javascript
<script>
  import { isSurrogatePair } from 'is-check'
  
  isSurrogatePair('Hello World') // => false
  
  isSurrogatePair('𠮷') // => true
</script>
````
### 按模块引入
```javascript
<script>
  import { isSurrogatePair } from 'is-check/regexp'
  
  isSurrogatePair('Hello World') // => false
  
  isSurrogatePair('𠮷') // => true
</script>
````