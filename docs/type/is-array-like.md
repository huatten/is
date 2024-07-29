---
outline: deep
---

# 检查value是不是类数组对象

> 用来检查一个值是否类似数组，这通常意味着检查该值是否具有 `length` 属性，并且 `length` 属性的值是一个非负整数。类数组对象的例子包括 `arguments` 对象、`DOM NodeList`、`HTMLCollection`，以及通过设置 `length` 属性构造的自定义对象。

### 全量引入
```javascript
<script>
  import is from 'is-check'

  is.arrayLike([]) // => true

  is.arrayLike('hello') // => true  (字符串具有 length 属性)

  is.arrayLike({ length: 5 }) // => true

  is.arrayLike({ 0: 'a', 1: 'b', length: 2 }) // => true

  is.arrayLike({}) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isArrayLike } from 'is-check'

  isArrayLike([]) // => true

  isArrayLike('hello') // => true  (字符串具有 length 属性)

  isArrayLike({ length: 5 }) // => true

  isArrayLike({ 0: 'a', 1: 'b', length: 2 }) // => true

  isArrayLike({}) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isArrayLike } from 'is-check/type'

  isArrayLike([]) // => true

  isArrayLike('hello') // => true  (字符串具有 length 属性)

  isArrayLike({ length: 5 }) // => true

  isArrayLike({ 0: 'a', 1: 'b', length: 2 }) // => true

  isArrayLike({}) // => false
</script>
````
