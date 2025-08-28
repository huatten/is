---
outline: deep
---

# 检查value是不是12h(hh:mm:ss)或者24h(HH:mm:ss)时间

> 用于检查给定的值是否为有效的时间格式，支持12小时制和24小时制时间格式。

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.time('12:34:56') // => true
  
  is.time('23:59:00.123') // => true
  
  is.time('00:00:00.000') // => true
  
  is.time('00:00:00.12') // => false
  
  is.time('25:00:00.999') // => false
  
  is.time('00:00:00.') // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isTime } from 'is-check'
  
  isTime('12:34:56') // => true
  
  isTime('23:59:00.123') // => true
  
  isTime('00:00:00.000') // => true
  
  isTime('00:00:00.12') // => false
  
  isTime('25:00:00.999') // => false
  
  isTime('00:00:00.') // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isTime } from 'is-check/date'
  
  isTime('12:34:56') // => true
  
  isTime('23:59:00.123') // => true
  
  isTime('00:00:00.000') // => true
  
  isTime('00:00:00.12') // => false
  
  isTime('25:00:00.999') // => false
  
  isTime('00:00:00.') // => false
</script>
````