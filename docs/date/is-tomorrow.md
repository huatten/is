---
outline: deep
---

# 判断value是不是明天

> 用于检查给定的日期对象或时间戳是否表示明天。

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  const tomorrow = new Date(Date.now() + 86400000)
  is.tomorrow(tomorrow) // => true
  
  is.tomorrow(1692717084039) // => true
  
  is.tomorrow('1692717084039') // => false
  
  is.tomorrow(1691610084039) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isTomorrow } from 'is-check'
  
  const tomorrow = new Date(Date.now() + 86400000)
  isTomorrow(tomorrow) // => true
  
  isTomorrow(1692717084039) // => true
  
  isTomorrow('1692717084039') // => false
  
  isTomorrow(1691610084039) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isTomorrow } from 'is-check/date'
  
  const tomorrow = new Date(Date.now() + 86400000)
  isTomorrow(tomorrow) // => true
  
  isTomorrow(1692717084039) // => true
  
  isTomorrow('1692717084039') // => false
  
  isTomorrow(1691610084039) // => false
</script>
````