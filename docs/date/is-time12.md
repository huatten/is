---
outline: deep
---

# 检查value是不是12h时间 hh:mm:ss | hh:mm:ss.SSS

> 用于检查给定的值是否为有效的12小时制时间格式，支持可选的AM/PM标识和毫秒部分。

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  // hh:mm:ss
  is.time12('12:34:56') // => true
  
  // hh:mm:ss (无效小时)
  is.time12('13:00:00') // => false
  
  // hh:mm:ss.SSS
  is.time12('12:34:56.789') // => true
  
  // hh:mm:ss.SSS AM
  is.time12('12:34:56.789 AM') // => true
  
  // hh:mm:ss AM
  is.time12('09:34:56 AM') // => true
  
  // hh:mm:ss am
  is.time12('09:34:56 am') // => true
  
  // hh:mm:ss PM
  is.time12('09:34:56 PM') // => true
  
  // hh:mm:ss pm
  is.time12('09:34:56 pm') // => true
  
  // 无效格式
  is.time12('09:34:56pm') // => false
  
  // 无效格式
  is.time12('09:34:56Pm') // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isTime12 } from 'is-check'
  
  // hh:mm:ss
  isTime12('12:34:56') // => true
  
  // hh:mm:ss (无效小时)
  isTime12('13:00:00') // => false
  
  // hh:mm:ss.SSS
  isTime12('12:34:56.789') // => true
  
  // hh:mm:ss.SSS AM
  isTime12('12:34:56.789 AM') // => true
  
  // hh:mm:ss AM
  isTime12('09:34:56 AM') // => true
  
  // hh:mm:ss am
  isTime12('09:34:56 am') // => true
  
  // hh:mm:ss PM
  isTime12('09:34:56 PM') // => true
  
  // hh:mm:ss pm
  isTime12('09:34:56 pm') // => true
  
  // 无效格式
  isTime12('09:34:56pm') // => false
  
  // 无效格式
  isTime12('09:34:56Pm') // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isTime12 } from 'is-check/date'
  
  // hh:mm:ss
  isTime12('12:34:56') // => true
  
  // hh:mm:ss (无效小时)
  isTime12('13:00:00') // => false
  
  // hh:mm:ss.SSS
  isTime12('12:34:56.789') // => true
  
  // hh:mm:ss.SSS AM
  isTime12('12:34:56.789 AM') // => true
  
  // hh:mm:ss AM
  isTime12('09:34:56 AM') // => true
  
  // hh:mm:ss am
  isTime12('09:34:56 am') // => true
  
  // hh:mm:ss PM
  isTime12('09:34:56 PM') // => true
  
  // hh:mm:ss pm
  isTime12('09:34:56 pm') // => true
  
  // 无效格式
  isTime12('09:34:56pm') // => false
  
  // 无效格式
  isTime12('09:34:56Pm') // => false
</script>
````
