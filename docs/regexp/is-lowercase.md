---
outline: deep
---

# 检查value是不是小写字母

> 用于检查给定的字符串是否只包含小写字母

### 全量引入
```javascript
<script>
  import is from 'is-check'

  isLowercase('hello') // => true

  isLowercase('hello999') // => false
  
  isLowercase('Java') // => false

  isLowercase('ABS12')// => false

  isLowercase('JavaScript') // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isLowercase } from 'is-check'

  is.lowercase('hello') // => true

  is.lowercase('hello999') // => false

  is.lowercase('Java') // => false

  is.lowercase('ABS12')// => false

  is.lowercase('JavaScript') // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isLowercase } from 'is-check/regexp'

  isLowercase('hello') // => true

  isLowercase('hello999') // => false

  isLowercase('Java') // => false

  isLowercase('ABS12')// => false

  isLowercase('JavaScript') // => false
</script>
````

