---
outline: deep
---

# 检查是不是safari浏览器

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.safari() // => true | false
</script>
````
### 按需引入
```javascript
<script>
  import { isSafari } from 'is-check'

  isSafari() // => true | false
</script>
````
### 按模块引入
```javascript
<script>
  import { isSafari } from 'is-check/env'

  isSafari() // => true | false
</script>
````
