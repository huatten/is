---
outline: deep
---

# 判断给定日期对象或者时间戳value是否是未来日期

> 用于检查给定的日期对象或时间戳是否表示未来的日期。

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  const monday = new Date('01/26/2015')
  is.feature(monday) // => false
  
  const sunday = new Date('01/25/2015');
  is.feature(sunday) // => false
  
  const timestamp = 1723651200000; // new Date('08/15/2024')
  is.feature(timestamp) // => true
</script>
````
### 按需引入
```javascript
<script>
  import { isFeature } from 'is-check'
  
  const monday = new Date('01/26/2015')
  isFeature(monday) // => false
  
  const sunday = new Date('01/25/2015');
  isFeature(sunday) // => false
  
  const timestamp = 1723651200000; // new Date('08/15/2024')
  isFeature(timestamp) // => true
</script>
````
### 按模块引入
```javascript
<script>
  import { isFeature } from 'is-check/date'
  
  const monday = new Date('01/26/2015')
  isFeature(monday) // => false
  
  const sunday = new Date('01/25/2015');
  isFeature(sunday) // => false
  
  const timestamp = 1723651200000; // new Date('08/15/2024')
  isFeature(timestamp) // => true
</script>
````