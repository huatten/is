---
outline: deep
---

# 判断给定日期对象或者时间戳value是否是下周时间

> 用于检查给定的日期对象或时间戳是否表示下周的日期。

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  const nextWeek = new Date(Date.now() + 7 * 86400000)
  is.nextWeek(nextWeek) // => true
  
  const timestamp = 1722355200000; // 下周的某个时间戳
  is.nextWeek(timestamp) // => true
  
  const thisWeek = new Date();
  is.nextWeek(thisWeek) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isNextWeek } from 'is-check'
  
  const nextWeek = new Date(Date.now() + 7 * 86400000)
  isNextWeek(nextWeek) // => true
  
  const timestamp = 1722355200000; // 下周的某个时间戳
  isNextWeek(timestamp) // => true
  
  const thisWeek = new Date();
  isNextWeek(thisWeek) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isNextWeek } from 'is-check/date'
  
  const nextWeek = new Date(Date.now() + 7 * 86400000)
  isNextWeek(nextWeek) // => true
  
  const timestamp = 1722355200000; // 下周的某个时间戳
  isNextWeek(timestamp) // => true
  
  const thisWeek = new Date();
  isNextWeek(thisWeek) // => false
</script>
````