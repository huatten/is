---
outline: deep
---

# 判断给定日期对象或者时间戳value是否是下月时间

> 用于检查给定的日期对象或时间戳是否表示下月的日期。

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  const nextMonth = new Date(Date.now() + 30 * 86400000)
  is.nextMonth(nextMonth) // => true
  
  const timestamp = 1724342400000; // 下月的某个时间戳
  is.nextMonth(timestamp) // => true
  
  const thisMonth = new Date();
  is.nextMonth(thisMonth) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isNextMonth } from 'is-check'
  
  const nextMonth = new Date(Date.now() + 30 * 86400000)
  isNextMonth(nextMonth) // => true
  
  const timestamp = 1724342400000; // 下月的某个时间戳
  isNextMonth(timestamp) // => true
  
  const thisMonth = new Date();
  isNextMonth(thisMonth) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isNextMonth } from 'is-check/date'
  
  const nextMonth = new Date(Date.now() + 30 * 86400000)
  isNextMonth(nextMonth) // => true
  
  const timestamp = 1724342400000; // 下月的某个时间戳
  isNextMonth(timestamp) // => true
  
  const thisMonth = new Date();
  isNextMonth(thisMonth) // => false
</script>
````