---
outline: deep
---

# 检查value是不是有效的电子邮件地址

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.email('test@example.com') // => true
  
  is.email('invalid.email') // => false
  
  is.email('test@') // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isEmail } from 'is-check'
  
  isEmail('test@example.com') // => true
  
  isEmail('invalid.email') // => false
  
  isEmail('test@') // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isEmail } from 'is-check/regexp'
  
  isEmail('test@example.com') // => true
  
  isEmail('invalid.email') // => false
  
  isEmail('test@') // => false
</script>
````