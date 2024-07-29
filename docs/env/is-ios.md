---
outline: deep
---

# 检查是不是ios环境

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
  import { isIos } from 'is-check'

  isIos() // => true | false
</script>
````
### 按模块引入
```javascript
<script>
  import { isIos } from 'is-check/env'

  isIos() // => true | false
</script>
````
