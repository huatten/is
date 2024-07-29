---
outline: deep
---

# 检查是否是HTML

>用于快速检查给定的字符串是否可能是 `HTML` 内容。通过检测字符串中是否存在 HTML 标签来进行验证。
### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.html('<div>Content</div>') // => true

  is.html('<br/>') // => true

  is.html('<a href="#">Link</a> and text') // => true

  is.html('<tag></other>') // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isHtml } from 'is-check'
  
  isHtml('<div>Content</div>') // => true

  isHtml('<br/>') // => true

  isHtml('<a href="#">Link</a> and text') // => true

  isHtml('<tag></other>') // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isHtml } from 'is-check/regexp'

  isHtml('<div>Content</div>') // => true

  isHtml('<br/>') // => true

  isHtml('<a href="#">Link</a> and text') // => true

  isHtml('<tag></other>') // => false
</script>
````
