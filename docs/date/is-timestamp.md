---
outline: deep
---

# 检查value是不是有效时间戳

> 用于检查给定的值是否为有效的时间戳。

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.timestamp(1628342400000) // => true
  
  is.timestamp('1628342400000') // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isTimestamp } from 'is-check'
  
  isTimestamp(1628342400000) // => true
  
  isTimestamp('1628342400000') // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isTimestamp } from 'is-check/date'
  
  isTimestamp(1628342400000) // => true
  
  isTimestamp('1628342400000') // => false
</script>
````