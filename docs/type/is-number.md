---
outline: deep
---

# 检查value是不是Number

### 全量引入
```javascript
<script>
  import is from 'is-check'

  is.number(0) // => true

  is.number(Number.MIN_VALUE) // => true
  
  is.number(Infinity) // => true
  
  is.number(NaN) // => false
  
  is.number('1') // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isNumber } from 'is-check'

  isNumber(0) // => true

  isNumber(Number.MIN_VALUE) // => true

  isNumber(Infinity) // => true

  isNumber(NaN) // => false

  isNumber('1') // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isNumber } from 'is-check/type'

  isNumber(0) // => true

  isNumber(Number.MIN_VALUE) // => true

  isNumber(Infinity) // => true

  isNumber(NaN) // => false

  isNumber('1') // => false
</script>
````
