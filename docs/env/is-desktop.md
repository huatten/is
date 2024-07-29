---
outline: deep
---

# 检查是不是desktop桌面操作系统

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.desktop() // => true | false
</script>
````
### 按需引入
```javascript
<script>
  import { isDesktop } from 'is-check'

  isDesktop() // => true | false
</script>
````
### 按模块引入
```javascript
<script>
  import { isDesktop } from 'is-check/env'

  isDesktop() // => true | false
</script>
````
