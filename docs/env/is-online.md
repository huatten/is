---
outline: deep
---

# 检查设备是不是联网在线状态

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.online() // => true | false
</script>
````
### 按需引入
```javascript
<script>
  import { isOnline } from 'is-check'

  isOnline() // => true | false
</script>
````
### 按模块引入
```javascript
<script>
  import { isOnline } from 'is-check/env'

  isOnline() // => true | false
</script>
````
