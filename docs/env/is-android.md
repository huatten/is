---
outline: deep
---

# 检查是否是Android操作系统

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.android() // => true | false
</script>
````
### 按需引入
```javascript
<script>
  import { isAndriod } from 'is-check'

  isAndriod() // => true | false
</script>
````
### 按模块引入
```javascript
<script>
  import { isAndriod } from 'is-check/env'

  isAndriod() // => true | false
</script>
````
