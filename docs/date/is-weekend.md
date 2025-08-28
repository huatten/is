---
outline: deep
---

# 判断给定日期对象或者时间戳value是否是周末

> 用于检查给定的日期对象或时间戳是否表示周末（星期六或星期日）。

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  const monday = new Date('01/26/2015')
  is.weekend(monday) // => false
  
  const sunday = new Date('01/25/2015');
  is.weekend(sunday) // => true
  
  const timestamp = 1721750400000; // new Date('07/24/2024')
  is.weekend(timestamp) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isWeekend } from 'is-check'
  
  const monday = new Date('01/26/2015')
  isWeekend(monday) // => false
  
  const sunday = new Date('01/25/2015');
  isWeekend(sunday) // => true
  
  const timestamp = 1721750400000; // new Date('07/24/2024')
  isWeekend(timestamp) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isWeekend } from 'is-check/date'
  
  const monday = new Date('01/26/2015')
  isWeekend(monday) // => false
  
  const sunday = new Date('01/25/2015');
  isWeekend(sunday) // => true
  
  const timestamp = 1721750400000; // new Date('07/24/2024')
  isWeekend(timestamp) // => false
</script>
````