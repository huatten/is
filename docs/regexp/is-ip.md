---
outline: deep
---

# 检查value是不是有效的IP地址 (IPv4 or IPv6)

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.ip('192.168.1.1') // => true
  
  is.ip('2001:0db8:85a3:0000:0000:8a2e:0370:7334') // => true
  
  is.ip('invalid.ip') // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isIP } from 'is-check'
  
  isIP('192.168.1.1') // => true
  
  isIP('2001:0db8:85a3:0000:0000:8a2e:0370:7334') // => true
  
  isIP('invalid.ip') // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isIP } from 'is-check/regexp'
  
  isIP('192.168.1.1') // => true
  
  isIP('2001:0db8:85a3:0000:0000:8a2e:0370:7334') // => true
  
  isIP('invalid.ip') // => false
</script>
````