---
outline: deep
---

# 检查value是不是JWT (JSON Web Token)

> 检查是否为 JWT (JSON Web Token) 的函数 isJWT，我们需要遵循 `JWT` 的基本格式，即它由三个以点 (.) 分隔的部分组成：`Header`、`Payload`、`Signature`。每个部分都是 `Base64URL` 编码的字符串。

### 全量引入
```javascript
<script>
  import is from 'is-check'

  is.jwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c') // => true

  is.jwt('invalid.jwt.token') // => false

  is.jwt('eyJhbGciOiJIUzI.uiuiu87878.8989899jiuihji') // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isJWT } from 'is-check'

  isJWT('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c') // => true

  isJWT('invalid.jwt.token') // => false
  
  isJWT('eyJhbGciOiJIUzI.uiuiu87878.8989899jiuihji') // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isJWT } from 'is-check/regexp'
  
  isJWT('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c') // => true

  isJWT('invalid.jwt.token') // => false

  isJWT('eyJhbGciOiJIUzI.uiuiu87878.8989899jiuihji') // => false
</script>
````

