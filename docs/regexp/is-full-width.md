---
outline: deep
---

# 检查value是不是包含全角字符

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.fullWidth('Hello World') // => false
  
  is.fullWidth('ＡＢＣ１２３') // => true
  
  is.fullWidth('你好世界') // => true
</script>
````
### 按需引入
```javascript
<script>
  import { isFullWidth } from 'is-check'
  
  isFullWidth('Hello World') // => false
  
  isFullWidth('ＡＢＣ１２３') // => true
  
  isFullWidth('你好世界') // => true
</script>
````
### 按模块引入
```javascript
<script>
  import { isFullWidth } from 'is-check/regexp'
  
  isFullWidth('Hello World') // => false
  
  isFullWidth('ＡＢＣ１２３') // => true
  
  isFullWidth('你好世界') // => true
</script>
````