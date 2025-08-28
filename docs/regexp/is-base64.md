---
outline: deep
---

# 检查value是不是有效的Base64字符串

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.base64('SGVsbG8gV29ybGQ=') // => true
  
  is.base64('SGVsbG8gV29ybGQ') // => true
  
  is.base64('Invalid_Base64!') // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isBase64 } from 'is-check'
  
  isBase64('SGVsbG8gV29ybGQ=') // => true
  
  isBase64('SGVsbG8gV29ybGQ') // => true
  
  isBase64('Invalid_Base64!') // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isBase64 } from 'is-check/regexp'
  
  isBase64('SGVsbG8gV29ybGQ=') // => true
  
  isBase64('SGVsbG8gV29ybGQ') // => true
  
  isBase64('Invalid_Base64!') // => false
</script>
````