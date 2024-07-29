---
outline: deep
---

# 检查是不是linux环境

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.linux() // => true | false
</script>
````
### 按需引入
```javascript
<script>
  import { isLinux } from 'is-check'

  isLinux() // => true | false
</script>
````
### 按模块引入
```javascript
<script>
  import { isLinux } from 'is-check/env'

  isLinux() // => true | false
</script>
````
