---
outline: deep
---

# 检查是否是Android手机操作系统

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.androidPhone() // => true | false
</script>
````
### 按需引入
```javascript
<script>
  import { isAndroidPhone } from 'is-check'

  isAndroidPhone() // => true | false
</script>
````
### 按模块引入
```javascript
<script>
  import { isAndroidPhone } from 'is-check/env'

  isAndroidPhone() // => true | false
</script>
````
