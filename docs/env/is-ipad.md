---
outline: deep
---

# 检查是不是ipad环境

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.ios() // => true | false
</script>
````
### 按需引入
```javascript
<script>
  import { isIpad } from 'is-check'

  isIpad() // => true | false
</script>
````
### 按模块引入
```javascript
<script>
  import { isIpad } from 'is-check/env'

  isIpad() // => true | false
</script>
````
