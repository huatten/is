---
outline: deep
---

# 检查是不是windows操作系统

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.windows() // => true | false
</script>
````
### 按需引入
```javascript
<script>
  import { isWindows } from 'is-check'

  isWindows() // => true | false
</script>
````
### 按模块引入
```javascript
<script>
  import { isWindows } from 'is-check/env'

  isWindows() // => true | false
</script>
````
