---
outline: deep
---

# 检查是不是mobile手机环境

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.mobile() // => true | false
</script>
````
### 按需引入
```javascript
<script>
  import { isMobile } from 'is-check'

  isMobile() // => true | false
</script>
````
### 按模块引入
```javascript
<script>
  import { isMobile } from 'is-check/env'

  isMobile() // => true | false
</script>
````
