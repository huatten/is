---
outline: deep
---

# 判断给定日期对象或者时间戳value是否是上周时间

> 用于检查给定的日期对象或时间戳是否表示上周的日期。

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  const lastWeek = new Date(Date.now() - 7 * 86400000)
  is.lastWeek(lastWeek) // => true
  
  const timestamp = 1720972800000; // 上周的某个时间戳
  is.lastWeek(timestamp) // => true
  
  const thisWeek = new Date();
  is.lastWeek(thisWeek) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isLastWeek } from 'is-check'
  
  const lastWeek = new Date(Date.now() - 7 * 86400000)
  isLastWeek(lastWeek) // => true
  
  const timestamp = 1720972800000; // 上周的某个时间戳
  isLastWeek(timestamp) // => true
  
  const thisWeek = new Date();
  isLastWeek(thisWeek) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isLastWeek } from 'is-check/date'
  
  const lastWeek = new Date(Date.now() - 7 * 86400000)
  isLastWeek(lastWeek) // => true
  
  const timestamp = 1720972800000; // 上周的某个时间戳
  isLastWeek(timestamp) // => true
  
  const thisWeek = new Date();
  isLastWeek(thisWeek) // => false
</script>
````