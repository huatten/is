---
outline: deep
---

# 检查value是不是十六进制的颜色值

> 用于检查给定的字符串是否是有效的十六进制颜色值。它可以验证三位或六位的十六进制颜色格式。

### 全量引入
```javascript
<script>
  import is from 'is-check'

  is.hexColor('#333') // => true

  is.hexColor('#333333') // => true

  is.hexColor('#f90fff23') // => true
  
  is.hexColor('#ff') // => false

  is.hexColor('#12345g')  // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isHexColor  } from 'is-check'

  isHexColor ('#333') // => true

  isHexColor ('#333333') // => true

  isHexColor ('#f90fff23') // => true

  isHexColor ('#ff') // => false

  isHexColor ('#12345g')  // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isHexColor  } from 'is-check/regexp'

  isHexColor('#333') // => true

  isHexColor('#333333') // => true

  isHexColor('#f90fff23') // => true

  isHexColor('#ff') // => false

  isHexColor('#12345g')  // => false
</script>
````

