---
outline: deep
---

# 检查value是不是Regexp

### 全量引入
```javascript
<script>
  import is from 'is-check'

  is.regexp(/\d/) // => true

  is.regexp(new RegExp(/\d/)) // => true

  is.regexp(1) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isRegexp } from 'is-check'

  isRegexp(/\d/) // => true

  isRegexp(new RegExp(/\d/)) // => true

  isRegexp(1) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isRegexp } from 'is-check/type'

  isRegexp(/\d/) // => true

  isRegexp(new RegExp(/\d/)) // => true

  isRegexp(1) // => false
</script>
````
