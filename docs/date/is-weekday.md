---
outline: deep
---

# 判断给定日期对象或者时间戳value是否是工作日

> 用于检查给定的日期对象或时间戳是否表示工作日（星期一至星期五）。

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  const monday = new Date('01/26/2015')
  is.weekday(monday) // => true
  
  const sunday = new Date('01/25/2015');
  is.weekday(sunday) // => false
  
  const timestamp = 1721750400000; // new Date('07/24/2024')
  is.weekday(timestamp) // => true
</script>
````
### 按需引入
```javascript
<script>
  import { isWeekday } from 'is-check'
  
  const monday = new Date('01/26/2015')
  isWeekday(monday) // => true
  
  const sunday = new Date('01/25/2015');
  isWeekday(sunday) // => false
  
  const timestamp = 1721750400000; // new Date('07/24/2024')
  isWeekday(timestamp) // => true
</script>
````
### 按模块引入
```javascript
<script>
  import { isWeekday } from 'is-check/date'
  
  const monday = new Date('01/26/2015')
  isWeekday(monday) // => true
  
  const sunday = new Date('01/25/2015');
  isWeekday(sunday) // => false
  
  const timestamp = 1721750400000; // new Date('07/24/2024')
  isWeekday(timestamp) // => true
</script>
````