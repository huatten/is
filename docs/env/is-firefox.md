---
outline: deep
---

# 检查是不是firefox浏览器环境

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.firefox() // => true | false
</script>
````
### 按需引入
```javascript
<script>
  import { isFirefox } from 'is-check'

  isFirefox() // => true | false
</script>
````
### 按模块引入
```javascript
<script>
  import { isFirefox } from 'is-check/env'

  isFirefox() // => true | false
</script>
````
