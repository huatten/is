---
outline: deep
---

# 检查value是不是自然数 

> 用于检查给定的值是否为自然数。自然数是指大于或等于零的整数。

### 全量引入
```javascript
<script>
  import is from 'is-check'

  is.natural(110010) // => true

  is.natural(0)  // => true

  is.natural(-1900) // => false

  is.natural(-99.99) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isNatural } from 'is-check'

  isNatural(110010) // => true
  
  isNatural(0) // => true

  isNatural(-1900)  // => false

  isNatural(99.99) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isNatural } from 'is-check/number'

  isNatural(110010) // => true

  isNatural(0) // => true

  isNatural(-1900)  // => false

  isNatural(99.99) // => false
</script>
````
