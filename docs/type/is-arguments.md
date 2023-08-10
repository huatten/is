---
outline: deep
---

# 检查是否是Arguments对象

## 示例
### 全量引入
```javascript
<script>
import is from 'is'

is.arguments(function() { return arguments }()) // => true 
    
is.arguments([123]) // => false
</script>
````
### 按需引入
```javascript
<script>
import { isArguments } from 'is'

isArguments(function() { return arguments }()) // => true

isArguments([123]) // => false
</script>
````
### 按模块引入
```javascript
<script>
import { isArguments } from 'is/type'

isArguments(function() { return arguments }()) // => true

isArguments([123]) // => false
</script>
````
