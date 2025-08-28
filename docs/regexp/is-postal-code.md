---
outline: deep
---

# 检查value是不是有效的邮政编码

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.postalCode('12345', 'US') // => true
  
  is.postalCode('12345-6789', 'US') // => true
  
  is.postalCode('M5V 3L9', 'CA') // => true
  
  is.postalCode('SW1A 1AA', 'UK') // => true
  
  is.postalCode('12345') // => true (通用邮政编码格式)
</script>
````
### 按需引入
```javascript
<script>
  import { isPostalCode } from 'is-check'
  
  isPostalCode('12345', 'US') // => true
  
  isPostalCode('12345-6789', 'US') // => true
  
  isPostalCode('M5V 3L9', 'CA') // => true
  
  isPostalCode('SW1A 1AA', 'UK') // => true
  
  isPostalCode('12345') // => true (通用邮政编码格式)
</script>
````
### 按模块引入
```javascript
<script>
  import { isPostalCode } from 'is-check/regexp'
  
  isPostalCode('12345', 'US') // => true
  
  isPostalCode('12345-6789', 'US') // => true
  
  isPostalCode('M5V 3L9', 'CA') // => true
  
  isPostalCode('SW1A 1AA', 'UK') // => true
  
  isPostalCode('12345') // => true (通用邮政编码格式)
</script>
````