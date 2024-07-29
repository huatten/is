---
outline: deep
---

# 检查是否是BlackBerry操作系统

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.blackberry() // => true | false
</script>
````
### 按需引入
```javascript
<script>
  import { isBlackberry } from 'is-check'

  isBlackberry() // => true | false
</script>
````
### 按模块引入
```javascript
<script>
  import { isBlackberry } from 'is-check/env'

  isBlackberry() // => true | false
</script>
````
