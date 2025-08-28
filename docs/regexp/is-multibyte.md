---
outline: deep
---

# 检查value是不是包含多字节字符

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.multibyte('Hello World') // => false
  
  is.multibyte('Héllo Wörld') // => true
  
  is.multibyte('你好世界') // => true
  
  is.multibyte('こんにちは') // => true
</script>
````
### 按需引入
```javascript
<script>
  import { isMultibyte } from 'is-check'
  
  isMultibyte('Hello World') // => false
  
  isMultibyte('Héllo Wörld') // => true
  
  isMultibyte('你好世界') // => true
  
  isMultibyte('こんにちは') // => true
</script>
````
### 按模块引入
```javascript
<script>
  import { isMultibyte } from 'is-check/regexp'
  
  isMultibyte('Hello World') // => false
  
  isMultibyte('Héllo Wörld') // => true
  
  isMultibyte('你好世界') // => true
  
  isMultibyte('こんにちは') // => true
</script>
````