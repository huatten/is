---
outline: deep
---

# 检查设备是不是断网离线状态

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.offline() // => true | false
</script>
````
### 按需引入
```javascript
<script>
  import { isOffline } from 'is-check'

  isOffline() // => true | false
</script>
````
### 按模块引入
```javascript
<script>
  import { isOffline } from 'is-check/env'

  isOffline() // => true | false
</script>
````
