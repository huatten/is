---
outline: deep
---

# 检查是否是web浏览器环境

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.browser() // => true | false
</script>
````
### 按需引入
```javascript
<script>
  import { isBrowser } from 'is-check'

  isBrowser() // => true | false
</script>
````
### 按模块引入
```javascript
<script>
  import { isBrowser } from 'is-check/env'

  isBrowser() // => true | false
</script>
````
