---
outline: deep
---

# 检查是否是chrome浏览器环境

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.chrome() // => true | false
</script>
````
### 按需引入
```javascript
<script>
  import { isChrome } from 'is-check'

  isChrome() // => true | false
</script>
````
### 按模块引入
```javascript
<script>
  import { isChrome } from 'is-check/env'

  isChrome() // => true | false
</script>
````
