---
outline: deep
---

# 检查value是不是英文

### 全量引入
```javascript
<script>
  import is from 'is-check'

  is.english('helle world') // => true

  is.english('j12k34') // => false

  is.english('HH1122GG89I') // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isEnglish } from 'is-check'

  isEnglish('helle world') // => true

  isEnglish('j12k34') // => false

  isEnglish('HH1122GG89I') // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isEnglish } from 'is-check/regexp'

  isEnglish('helle world') // => true

  isEnglish('j12k34') // => false

  isEnglish('HH1122GG89I') // => false
</script>
````
