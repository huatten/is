---
outline: deep
---

# 检查value是不是包含半角字符

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.halfWidth('Hello World') // => true
  
  is.halfWidth('ABC123') // => true
  
  is.halfWidth('ＡＢＣ１２３') // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isHalfWidth } from 'is-check'
  
  isHalfWidth('Hello World') // => true
  
  isHalfWidth('ABC123') // => true
  
  isHalfWidth('ＡＢＣ１２３') // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isHalfWidth } from 'is-check/regexp'
  
  isHalfWidth('Hello World') // => true
  
  isHalfWidth('ABC123') // => true
  
  isHalfWidth('ＡＢＣ１２３') // => false
</script>
````