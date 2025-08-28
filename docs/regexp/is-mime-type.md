---
outline: deep
---

# 检查value是不是有效的MIME类型

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.mimeType('text/html') // => true
  
  is.mimeType('application/json') // => true
  
  is.mimeType('image/png') // => true
  
  is.mimeType('invalid/mime') // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isMimeType } from 'is-check'
  
  isMimeType('text/html') // => true
  
  isMimeType('application/json') // => true
  
  isMimeType('image/png') // => true
  
  isMimeType('invalid/mime') // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isMimeType } from 'is-check/regexp'
  
  isMimeType('text/html') // => true
  
  isMimeType('application/json') // => true
  
  isMimeType('image/png') // => true
  
  isMimeType('invalid/mime') // => false
</script>
````