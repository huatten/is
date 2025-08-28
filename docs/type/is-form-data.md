---
outline: deep
---

# 检查value是不是FormData对象

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.formData(new FormData()) // => true
  
  is.formData({}) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isFormData } from 'is-check'
  
  isFormData(new FormData()) // => true
  
  isFormData({}) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isFormData } from 'is-check/type'
  
  isFormData(new FormData()) // => true
  
  isFormData({}) // => false
</script>
````