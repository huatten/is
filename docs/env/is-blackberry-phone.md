---
outline: deep
---

# 检查是否是BlackBerry手机操作系统

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.blackberryPhone() // => true | false
</script>
````
### 按需引入
```javascript
<script>
  import { isBlackberryPhone } from 'is-check'

  isBlackberryPhone() // => true | false
</script>
````
### 按模块引入
```javascript
<script>
  import { isBlackberryPhone } from 'is-check/env'

  isBlackberryPhone() // => true | false
</script>
````
