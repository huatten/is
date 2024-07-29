---
outline: deep
---

# 检查是不是edge浏览器环境

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.edge() // => true | false
</script>
````
### 按需引入
```javascript
<script>
  import { isEdge } from 'is-check'

  isEdge() // => true | false
</script>
````
### 按模块引入
```javascript
<script>
  import { isEdge } from 'is-check/env'

  isEdge() // => true | false
</script>
````
