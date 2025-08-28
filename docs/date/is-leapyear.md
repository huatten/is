---
outline: deep
---

# 检查value是不是闰年

年份能被4整除且不能被100整除或者年份能被400整除

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.leapYear(2020) // => true
  
  is.leapYear('2020') // => true
  
  is.leapYear('2020年') // => false
  
  is.leapYear(2021) // => false
  
  is.leapYear(1900) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isLeapYear } from 'is-check'
  
  isLeapYear(2020) // => true
  
  isLeapYear('2020') // => true
  
  isLeapYear('2020年') // => false
  
  isLeapYear(2021) // => false
  
  isLeapYear(1900) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isLeapYear } from 'is-check/date'
  
  isLeapYear(2020) // => true
  
  isLeapYear('2020') // => true
  
  isLeapYear('2020年') // => false
  
  isLeapYear(2021) // => false
  
  isLeapYear(1900) // => false
</script>
````