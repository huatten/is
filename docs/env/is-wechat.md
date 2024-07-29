---
outline: deep
---

# 检查是不是wechat微信环境

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.wechat() // => true | false
</script>
````
### 按需引入
```javascript
<script>
  import { isWechat } from 'is-check'

  isWechat() // => true | false
</script>
````
### 按模块引入
```javascript
<script>
  import { isWechat } from 'is-check/env'

  isWechat() // => true | false
</script>
````
