---
outline: deep
---

# 判断给定日期对象或者时间戳value是否是本月时间

> 用于检查给定的日期对象或时间戳是否表示本月的日期。

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  const date = new Date('07/15/2024')
  is.thisMonth(date) // => true
  
  const timestamp = 1721750400000; // new Date('07/24/2024')
  is.thisMonth(timestamp) // => true
  
  const pastDate = new Date('06/15/2024');
  is.thisMonth(pastDate) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isThisMonth } from 'is-check'
  
  const date = new Date('07/15/2024')
  isThisMonth(date) // => true
  
  const timestamp = 1721750400000; // new Date('07/24/2024')
  isThisMonth(timestamp) // => true
  
  const pastDate = new Date('06/15/2024');
  isThisMonth(pastDate) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isThisMonth } from 'is-check/date'
  
  const date = new Date('07/15/2024')
  isThisMonth(date) // => true
  
  const timestamp = 1721750400000; // new Date('07/24/2024')
  isThisMonth(timestamp) // => true
  
  const pastDate = new Date('06/15/2024');
  isThisMonth(pastDate) // => false
</script>
````