---
outline: deep
---

# 检查value是不是JSON

### 全量引入
```javascript
<script>
  import is from 'is-check'

  is.json({}) // => true

  is.json({name:'KD'}) // => true

  is.json([1,2,3])  // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isJSON } from 'is-check'

  isJSON({}) // => true

  isJSON({name:'KD'}) // => true
  
  isJSON([1,2,3]) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isJSON } from 'is-check/type'
  
  isJSON({}) // => true

  isJSON({name:'KD'}) // => true

  isJSON([1,2,3]) // => false
</script>
````
