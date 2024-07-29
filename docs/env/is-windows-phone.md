---
outline: deep
---

# 检查是不是windows phone手机

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.windowsPhone() // => true | false
</script>
````
### 按需引入
```javascript
<script>
  import { isWindowsPhone } from 'is-check'

  isWindowsPhone() // => true | false
</script>
````
### 按模块引入
```javascript
<script>
  import { isWindowsPhone } from 'is-check/env'

  isWindowsPhone() // => true | false
</script>
````
