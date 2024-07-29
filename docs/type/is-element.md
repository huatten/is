---
outline: deep
---

# 检查value是不是DOM元素

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.element(document.body) // => true

  is.element('<body></body>') // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isElement } from 'is-check'

  isElement(document.body) // => true

  isElement('<body></body>') // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isElement } from 'is-check/type'

  isElement(document.body) // => true

  isElement('<body></body>') // => false
</script>
````
