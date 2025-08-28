---
outline: deep
---

# 判断value是不是今天

> 用于检查给定的日期对象或时间戳是否表示今天。

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  const date = new Date()
  is.today(date) // => true
  
  is.today(1692630684039) // => true
  
  is.today('1692630684039') // => false
  
  is.today(1691610084039) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isToday } from 'is-check'
  
  const date = new Date()
  isToday(date) // => true
  
  isToday(1692630684039) // => true
  
  isToday('1692630684039') // => false
  
  isToday(1691610084039) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isToday } from 'is-check/date'
  
  const date = new Date()
  isToday(date) // => true
  
  isToday(1692630684039) // => true
  
  isToday('1692630684039') // => false
  
  isToday(1691610084039) // => false
</script>
````