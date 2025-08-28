---
outline: deep
---

# 检查value是不是有效的信用卡号码

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.creditCard('4532015112830366') // => true
  
  is.creditCard('4532-0151-1283-0366') // => true
  
  is.creditCard('1234567890123456') // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isCreditCard } from 'is-check'
  
  isCreditCard('4532015112830366') // => true
  
  isCreditCard('4532-0151-1283-0366') // => true
  
  isCreditCard('1234567890123456') // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isCreditCard } from 'is-check/regexp'
  
  isCreditCard('4532015112830366') // => true
  
  isCreditCard('4532-0151-1283-0366') // => true
  
  isCreditCard('1234567890123456') // => false
</script>
````