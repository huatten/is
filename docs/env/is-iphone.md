---
outline: deep
---

# 检查是不是iphone环境

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.iphone() // => true | false
</script>
````
### 按需引入
```javascript
<script>
  import { isIphone } from 'is-check'

  isIphone() // => true | false
</script>
````
### 按模块引入
```javascript
<script>
  import { isIphone } from 'is-check/env'

  isIphone() // => true | false
</script>
````
