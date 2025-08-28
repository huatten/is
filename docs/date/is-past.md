---
outline: deep
---

# 判断给定日期对象或者时间戳value是否是过去日期

> 用于检查给定的日期对象或时间戳是否表示过去的日期。

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  const monday = new Date('01/26/2015')
  is.past(monday) // => true
  
  const sunday = new Date('01/25/2015');
  is.past(sunday) // => true
  
  const timestamp = 1723651200000; // new Date('08/15/2024')
  is.past(timestamp) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isPast } from 'is-check'
  
  const monday = new Date('01/26/2015')
  isPast(monday) // => true
  
  const sunday = new Date('01/25/2015');
  isPast(sunday) // => true
  
  const timestamp = 1723651200000; // new Date('08/15/2024')
  isPast(timestamp) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isPast } from 'is-check/date'
  
  const monday = new Date('01/26/2015')
  isPast(monday) // => true
  
  const sunday = new Date('01/25/2015');
  isPast(sunday) // => true
  
  const timestamp = 1723651200000; // new Date('08/15/2024')
  isPast(timestamp) // => false
</script>
````