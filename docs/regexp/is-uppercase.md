---
outline: deep
---

# 检查value是不是大写字母

> 用于检查给定的字符串是否只包含大写字母

### 全量引入
```javascript
<script>
  import is from 'is-check'

  is.uppercase('Java') // => true

  is.uppercase('ABS12') // => false

  is.uppercase('hello') // => false

  is.uppercase('JavaScript') // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isUppercase } from 'is-check'

  isUppercase('Java') // => true

  isUppercase('ABS12') // => false

  isUppercase('hello') // => false

  isUppercase('JavaScript') // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isUppercase } from 'is-check/regexp'

  isUppercase('Java') // => true

  isUppercase('ABS12') // => false

  isUppercase('hello') // => false

  isUppercase('JavaScript') // => false
</script>
````

