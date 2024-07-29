---
outline: deep
---

# 检查是不是tablet平板环境

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.tablet() // => true | false
</script>
````
### 按需引入
```javascript
<script>
  import { isTablet } from 'is-check'

  isTablet() // => true | false
</script>
````
### 按模块引入
```javascript
<script>
  import { isTablet } from 'is-check/env'

  isTablet() // => true | false
</script>
````
