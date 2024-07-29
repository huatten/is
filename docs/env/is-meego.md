---
outline: deep
---

# 检查是不是meego环境

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.meego() // => true | false
</script>
````
### 按需引入
```javascript
<script>
  import { isMeego } from 'is-check'

  isMeego() // => true | false
</script>
````
### 按模块引入
```javascript
<script>
  import { isMeego } from 'is-check/env'

  isMeego() // => true | false
</script>
````
