---
outline: deep
---

# 检查是不是opera浏览器

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.opera() // => true | false
</script>
````
### 按需引入
```javascript
<script>
  import { isOpera } from 'is-check'

  isOpera() // => true | false
</script>
````
### 按模块引入
```javascript
<script>
  import { isOpera } from 'is-check/env'

  isOpera() // => true | false
</script>
````
