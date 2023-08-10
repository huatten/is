---
outline: deep
---

# 检查是否是Array对象

## 示例
### 全量引入
```javascript
<script>
import is from 'is'

is.array([]) // => true

is.array(new Array(10)) // => false

is.array(document.body.children)  // => false
</script>
````
### 按需引入
```javascript
<script>
import { isArray } from 'is'

isArray([]) // => true

isArray(new Array(10)) // => false

isArray(document.body.children)  // => false
</script>
````
### 按模块引入
```javascript
<script>
import { isArray } from 'is/type'

isArray([]) // => true

isArray(new Array(10)) // => false

isArray(document.body.children)  // => false
</script>
````
