---
outline: deep
---

# 判断给定日期对象或者时间戳value是否是去年时间

> 用于检查给定的日期对象或时间戳是否表示去年的日期。

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  const lastYear = new Date(Date.now() - 365 * 86400000)
  is.lastYear(lastYear) // => true
  
  const timestamp = 1689724800000; // 去年的某个时间戳
  is.lastYear(timestamp) // => true
  
  const thisYear = new Date();
  is.lastYear(thisYear) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isLastYear } from 'is-check'
  
  const lastYear = new Date(Date.now() - 365 * 86400000)
  isLastYear(lastYear) // => true
  
  const timestamp = 1689724800000; // 去年的某个时间戳
  isLastYear(timestamp) // => true
  
  const thisYear = new Date();
  isLastYear(thisYear) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isLastYear } from 'is-check/date'
  
  const lastYear = new Date(Date.now() - 365 * 86400000)
  isLastYear(lastYear) // => true
  
  const timestamp = 1689724800000; // 去年的某个时间戳
  isLastYear(timestamp) // => true
  
  const thisYear = new Date();
  isLastYear(thisYear) // => false
</script>
````