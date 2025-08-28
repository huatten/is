---
outline: deep
---

# 检查value是不是有效的IPv4地址

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.ipv4('192.168.1.1') // => true
  
  is.ipv4('255.255.255.255') // => true
  
  is.ipv4('256.1.1.1') // => false
  
  is.ipv4('2001:0db8:85a3:0000:0000:8a2e:0370:7334') // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isIPv4 } from 'is-check'
  
  isIPv4('192.168.1.1') // => true
  
  isIPv4('255.255.255.255') // => true
  
  isIPv4('256.1.1.1') // => false
  
  isIPv4('2001:0db8:85a3:0000:0000:8a2e:0370:7334') // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isIPv4 } from 'is-check/regexp'
  
  isIPv4('192.168.1.1') // => true
  
  isIPv4('255.255.255.255') // => true
  
  isIPv4('256.1.1.1') // => false
  
  isIPv4('2001:0db8:85a3:0000:0000:8a2e:0370:7334') // => false
</script>
````