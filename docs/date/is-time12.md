---
outline: deep
---

# 检查是否是12h制时间

> 检查一个字符串值是否是有效的 12 小时制时间格式。支持的格式包括`hh:mm:ss` 和 `hh:mm:ss.SSS`，并且可以选择性地包含 `AM`、`PM`、`am` 或 `pm` 标识符，如 `hh:mm:ss am`、`hh:mm:ss AM`、`hh:mm:ss pm` 和 `hh:mm:ss PM`。

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.time12('12:34:56') // => true

  is.time12('13:00:00') // => false

  is.time12('12:34:56.789') // => true

  is.time12('12:34:56 AM') // => true

  is.time12('12:34:56.789 AM') // => true

  is.time12('09:34:56 am') // => true

  is.time12('09:34:56.789 am') // => true

  is.time12('09:34:56am') // => false

  is.time12('09:34:56.789am') // => false

  is.time12('09:34:56Pm') // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isTime12 } from 'is-check'

  isTime12('12:34:56') // => true

  isTime12('13:00:00') // => false

  isTime12('12:34:56.789') // => true

  isTime12('12:34:56 AM') // => true
  
  isTime12('12:34:56.789 AM') // => true

  isTime12('09:34:56 am') // => true
  
  isTime12('09:34:56.789 am') // => true
  
  isTime12('09:34:56am') // => false
  
  isTime12('09:34:56.789am') // => false
  
  isTime12('09:34:56Pm') // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isTime12 } from 'is-check/date'
  
  isTime12('12:34:56') // => true

  isTime12('13:00:00') // => false

  isTime12('12:34:56.789') // => true

  isTime12('12:34:56 AM') // => true

  isTime12('12:34:56.789 AM') // => true

  isTime12('09:34:56 am') // => true

  isTime12('09:34:56.789 am') // => true

  isTime12('09:34:56am') // => false

  isTime12('09:34:56.789am') // => false

  isTime12('09:34:56Pm') // => false
</script>
````
