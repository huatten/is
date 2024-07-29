---
outline: deep
---

# 检查是不是ie浏览器环境

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.ie() // => true | false
</script>
````
### 按需引入
```javascript
<script>
  import { isIE } from 'is-check'

  isIE() // => true | false
</script>
````
### 按模块引入
```javascript
<script>
  import { isIE } from 'is-check/env'

  isIE() // => true | false
</script>
````
