---
outline: deep
---

# 检查value是不是有效的MAC地址

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.macAddress('00:11:22:33:44:55') // => true
  
  is.macAddress('00-11-22-33-44-55') // => true
  
  is.macAddress('0011.2233.4455') // => true
  
  is.macAddress('00:11:22:33:44') // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isMACAddress } from 'is-check'
  
  isMACAddress('00:11:22:33:44:55') // => true
  
  isMACAddress('00-11-22-33-44-55') // => true
  
  isMACAddress('0011.2233.4455') // => true
  
  isMACAddress('00:11:22:33:44') // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isMACAddress } from 'is-check/regexp'
  
  isMACAddress('00:11:22:33:44:55') // => true
  
  isMACAddress('00-11-22-33-44-55') // => true
  
  isMACAddress('0011.2233.4455') // => true
  
  isMACAddress('00:11:22:33:44') // => false
</script>
````