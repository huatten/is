---
outline: deep
---

# 判断给定日期对象或者时间戳value是否是上月时间

> 用于检查给定的日期对象或时间戳是否表示上月的日期。

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  const lastMonth = new Date(Date.now() - 30 * 86400000)
  is.lastMonth(lastMonth) // => true
  
  const timestamp = 1719763200000; // 上月的某个时间戳
  is.lastMonth(timestamp) // => true
  
  const thisMonth = new Date();
  is.lastMonth(thisMonth) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isLastMonth } from 'is-check'
  
  const lastMonth = new Date(Date.now() - 30 * 86400000)
  isLastMonth(lastMonth) // => true
  
  const timestamp = 1719763200000; // 上月的某个时间戳
  isLastMonth(timestamp) // => true
  
  const thisMonth = new Date();
  isLastMonth(thisMonth) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isLastMonth } from 'is-check/date'
  
  const lastMonth = new Date(Date.now() - 30 * 86400000)
  isLastMonth(lastMonth) // => true
  
  const timestamp = 1719763200000; // 上月的某个时间戳
  isLastMonth(timestamp) // => true
  
  const thisMonth = new Date();
  isLastMonth(thisMonth) // => false
</script>
````