---
outline: deep
---

# 判断给定日期对象或者时间戳value是否是今年时间

> 用于检查给定的日期对象或时间戳是否表示今年的日期。

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  const date = new Date('07/15/2024')
  is.thisYear(date) // => true
  
  const timestamp = 1721750400000; // new Date('07/24/2024')
  is.thisYear(timestamp) // => true
  
  const pastDate = new Date('07/15/2023');
  is.thisYear(pastDate) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isThisYear } from 'is-check'
  
  const date = new Date('07/15/2024')
  isThisYear(date) // => true
  
  const timestamp = 1721750400000; // new Date('07/24/2024')
  isThisYear(timestamp) // => true
  
  const pastDate = new Date('07/15/2023');
  isThisYear(pastDate) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isThisYear } from 'is-check/date'
  
  const date = new Date('07/15/2024')
  isThisYear(date) // => true
  
  const timestamp = 1721750400000; // new Date('07/24/2024')
  isThisYear(timestamp) // => true
  
  const pastDate = new Date('07/15/2023');
  isThisYear(pastDate) // => false
</script>
````