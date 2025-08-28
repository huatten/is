---
outline: deep
---

# 检查value是不是有效的IPv6地址

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.ipv6('2001:0db8:85a3:0000:0000:8a2e:0370:7334') // => true
  
  is.ipv6('::1') // => true
  
  is.ipv6('192.168.1.1') // => false
  
  is.ipv6('invalid.ipv6') // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isIPv6 } from 'is-check'
  
  isIPv6('2001:0db8:85a3:0000:0000:8a2e:0370:7334') // => true
  
  isIPv6('::1') // => true
  
  isIPv6('192.168.1.1') // => false
  
  isIPv6('invalid.ipv6') // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isIPv6 } from 'is-check/regexp'
  
  isIPv6('2001:0db8:85a3:0000:0000:8a2e:0370:7334') // => true
  
  isIPv6('::1') // => true
  
  isIPv6('192.168.1.1') // => false
  
  isIPv6('invalid.ipv6') // => false
</script>
````