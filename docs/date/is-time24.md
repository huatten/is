---
outline: deep
---

# 检查value是不是24h时间 HH:mm:ss

> 用于检查给定的值是否为有效的24小时制时间格式 (HH:mm:ss)，支持可选的毫秒部分。

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.time24('09:30:45') // => true
  
  is.time24('14:15:00') // => true
  
  is.time24('23:59:59.999') // => true
  
  is.time24('24:00:00') // => false
  
  is.time24('00:00:00.123') // => true
</script>
````
### 按需引入
```javascript
<script>
  import { isTime24 } from 'is-check'
  
  isTime24('09:30:45') // => true
  
  isTime24('14:15:00') // => true
  
  isTime24('23:59:59.999') // => true
  
  isTime24('24:00:00') // => false
  
  isTime24('00:00:00.123') // => true
</script>
````
### 按模块引入
```javascript
<script>
  import { isTime24 } from 'is-check/date'
  
  isTime24('09:30:45') // => true
  
  isTime24('14:15:00') // => true
  
  isTime24('23:59:59.999') // => true
  
  isTime24('24:00:00') // => false
  
  isTime24('00:00:00.123') // => true
</script>
````