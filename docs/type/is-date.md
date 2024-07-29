---
outline: deep
---

# 检查value是不是Date对象

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.date(new Date()) // => true

  is.date('2020-02-02') // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isDate } from 'is-check'

  isDate(new Date()) // => true

  isDate('2020-02-02') // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isDate } from 'is-check/type'

  isDate(new Date()) // => true

  isDate('2020-02-02') // => false
</script>
````
