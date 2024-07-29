---
outline: deep
---

# 检查是不是mac操作系统

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.mac() // => true | false
</script>
````
### 按需引入
```javascript
<script>
  import { isMac } from 'is-check'

  isMac() // => true | false
</script>
````
### 按模块引入
```javascript
<script>
  import { isMac } from 'is-check/env'

  isMac() // => true | false
</script>
````
