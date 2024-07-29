---
outline: deep
---

# 检查value是不是中文

### 全量引入
```javascript
<script>
  import is from 'is-check'

  is.chinese('你好') // => true

  is.chinese('你好123') // => false

  is.chinese('你2好') // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isEnglish } from 'is-check'

  isChinese('你好') // => true

  isChinese('你好123') // => false

  isChinese('你2好') // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isChinese } from 'is-check/regexp'

  isChinese('你好') // => true

  isChinese('你好123') // => false

  isChinese('你2好') // => false
</script>
````
