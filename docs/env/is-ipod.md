---
outline: deep
---

# 检查是不是ipod环境

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.ipod() // => true | false
</script>
````
### 按需引入
```javascript
<script>
  import { isIpod } from 'is-check'

  isIpod() // => true | false
</script>
````
### 按模块引入
```javascript
<script>
  import { isIpod } from 'is-check/env'

  isIpod() // => true | false
</script>
````
