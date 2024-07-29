---
outline: deep
---

# 检查是不是node环境

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.node() // => true | false
</script>
````
### 按需引入
```javascript
<script>
  import { isNode } from 'is-check'

  isNode() // => true | false
</script>
````
### 按模块引入
```javascript
<script>
  import { isNode } from 'is-check/env'

  isNode() // => true | false
</script>
````
