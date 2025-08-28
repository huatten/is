---
outline: deep
---

# 判断给定日期对象或者时间戳value是否是明年时间

> 用于检查给定的日期对象或时间戳是否表示明年的日期。

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  const nextYear = new Date(Date.now() + 365 * 86400000)
  is.nextYear(nextYear) // => true
  
  const timestamp = 1753430400000; // 明年的某个时间戳
  is.nextYear(timestamp) // => true
  
  const thisYear = new Date();
  is.nextYear(thisYear) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isNextYear } from 'is-check'
  
  const nextYear = new Date(Date.now() + 365 * 86400000)
  isNextYear(nextYear) // => true
  
  const timestamp = 1753430400000; // 明年的某个时间戳
  isNextYear(timestamp) // => true
  
  const thisYear = new Date();
  isNextYear(thisYear) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isNextYear } from 'is-check/date'
  
  const nextYear = new Date(Date.now() + 365 * 86400000)
  isNextYear(nextYear) // => true
  
  const timestamp = 1753430400000; // 明年的某个时间戳
  isNextYear(timestamp) // => true
  
  const thisYear = new Date();
  isNextYear(thisYear) // => false
</script>
````