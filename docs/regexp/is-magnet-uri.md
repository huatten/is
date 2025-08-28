---
outline: deep
---

# 检查value是不是有效的磁力链接

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.magnetURI('magnet:?xt=urn:btih:...') // => true
  
  is.magnetURI('magnet:?xt=urn:btih:c12a7...') // => true
  
  is.magnetURI('http://example.com') // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isMagnetURI } from 'is-check'
  
  isMagnetURI('magnet:?xt=urn:btih:...') // => true
  
  isMagnetURI('magnet:?xt=urn:btih:c12a7...') // => true
  
  isMagnetURI('http://example.com') // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isMagnetURI } from 'is-check/regexp'
  
  isMagnetURI('magnet:?xt=urn:btih:...') // => true
  
  isMagnetURI('magnet:?xt=urn:btih:c12a7...') // => true
  
  isMagnetURI('http://example.com') // => false
</script>
````