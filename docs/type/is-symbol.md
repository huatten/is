---
outline: deep
---

# 检查value是不是Symbol

### 全量引入
```javascript
<script>
  import is from 'is-check'

  is.symbol(Symbol(123)) // => true

  is.symbol(123) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isSymbol } from 'is-check'

  isSymbol(Symbol(123)) // => true

  isSymbol(123) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isSymbol } from 'is-check/type'

  isSymbol(Symbol(123)) // => true

  isSymbol(123) // => false
</script>
````
