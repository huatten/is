---
outline: deep
---

# 检查value是不是Function

### 全量引入
```javascript
<script>
  import is from 'is-check'

  is.function(class Any{}) // => true

  is.function(() => {}) // => true

  is.function(async () => {})  // => true

  is.function(function * Any() {})  // => true

  is.function(Math.round) // => true

  is.function(/abc/) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isFunction } from 'is-check'

  isFunction(class Any{}) // => true

  isFunction(() => {}) // => true

  isFunction(async () => {})  // => true

  isFunction(function * Any() {})  // => true

  isFunction(Math.round) // => true

  isFunction(/abc/) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isFunction } from 'is-check/type'

  isFunction(class Any{}) // => true

  isFunction(() => {}) // => true

  isFunction(async () => {})  // => true

  isFunction(function * Any() {})  // => true

  isFunction(Math.round) // => true

  isFunction(/abc/) // => false
</script>
````
