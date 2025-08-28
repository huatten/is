---
outline: deep
---

# 检查value是不是只包含ASCII字符

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.ascii('Hello World') // => true
  
  is.ascii('Hello World!') // => true
  
  is.ascii('Héllo Wörld') // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isAscii } from 'is-check'
  
  isAscii('Hello World') // => true
  
  isAscii('Hello World!') // => true
  
  isAscii('Héllo Wörld') // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isAscii } from 'is-check/regexp'
  
  isAscii('Hello World') // => true
  
  isAscii('Hello World!') // => true
  
  isAscii('Héllo Wörld') // => false
</script>
````