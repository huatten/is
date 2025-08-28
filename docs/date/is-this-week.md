---
outline: deep
---

# 判断给定日期对象或者时间戳value是否是本周时间

> 用于检查给定的日期对象或时间戳是否表示本周的日期。

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  const monday = new Date('01/26/2015')
  is.thisWeek(monday) // => false
  
  const sunday = new Date('01/25/2015');
  is.thisWeek(sunday) // => false
  
  const timestamp = 1721750400000; // new Date('07/24/2024')
  is.thisWeek(timestamp) // => true
</script>
````
### 按需引入
```javascript
<script>
  import { isThisWeek } from 'is-check'
  
  const monday = new Date('01/26/2015')
  isThisWeek(monday) // => false
  
  const sunday = new Date('01/25/2015');
  isThisWeek(sunday) // => false
  
  const timestamp = 1721750400000; // new Date('07/24/2024')
  isThisWeek(timestamp) // => true
</script>
````
### 按模块引入
```javascript
<script>
  import { isThisWeek } from 'is-check/date'
  
  const monday = new Date('01/26/2015')
  isThisWeek(monday) // => false
  
  const sunday = new Date('01/25/2015');
  isThisWeek(sunday) // => false
  
  const timestamp = 1721750400000; // new Date('07/24/2024')
  isThisWeek(timestamp) // => true
</script>
````