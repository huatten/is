---
outline: deep
---

# 判断value是不是昨天

> 用于检查给定的日期对象或时间戳是否表示昨天。

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  const yesterday = new Date(Date.now() - 86400000)
  is.yesterday(yesterday) // => true
  
  is.yesterday(1692544284039) // => true
  
  is.yesterday('1692544284039') // => false
  
  is.yesterday(1691610084039) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isYesterday } from 'is-check'
  
  const yesterday = new Date(Date.now() - 86400000)
  isYesterday(yesterday) // => true
  
  isYesterday(1692544284039) // => true
  
  isYesterday('1692544284039') // => false
  
  isYesterday(1691610084039) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isYesterday } from 'is-check/date'
  
  const yesterday = new Date(Date.now() - 86400000)
  isYesterday(yesterday) // => true
  
  isYesterday(1692544284039) // => true
  
  isYesterday('1692544284039') // => false
  
  isYesterday(1691610084039) // => false
</script>
````