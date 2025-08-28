---
outline: deep
---

# 检查value是不是有效的JSON字符串

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.jsonString('{"name": "John", "age": 30}') // => true
  
  is.jsonString('[1, 2, 3]') // => true
  
  is.jsonString('{"name": "John", "age":}') // => false
  
  is.jsonString('Invalid JSON') // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isJSONString } from 'is-check'
  
  isJSONString('{"name": "John", "age": 30}') // => true
  
  isJSONString('[1, 2, 3]') // => true
  
  isJSONString('{"name": "John", "age":}') // => false
  
  isJSONString('Invalid JSON') // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isJSONString } from 'is-check/regexp'
  
  isJSONString('{"name": "John", "age": 30}') // => true
  
  isJSONString('[1, 2, 3]') // => true
  
  isJSONString('{"name": "John", "age":}') // => false
  
  isJSONString('Invalid JSON') // => false
</script>
````