---
outline: deep
---

# 检查value是不是手机号码

> 用于检查给定的字符串或数字是否为有效的大陆手机号码。该函数进行宽松检测，只要号码以 `13`, `14`, `15`, `16`, `17`, `18`, `19` 开头并且长度正确，即认为是有效的手机号码。

### 全量引入
```javascript
<script>
  import is from 'is-check'

  is.phoneNumber(17888809008) // => true

  is.phoneNumber('13888888888') // => true

  is.phoneNumber('+8613888888888') // => true

  is.phoneNumber('008613888888888') // => true

  is.phoneNumber(11888809008) // => false

  is.phoneNumber('12990897657') // => false

  is.phoneNumber('109089887676') // => false

  is.phoneNumber('12345') // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isPhoneNumber } from 'is-check'

  isPhoneNumber(17888809008) // => true
  
  isPhoneNumber('13888888888') // => true
  
  isPhoneNumber('+8613888888888') // => true
  
  isPhoneNumber('008613888888888') // => true

  isPhoneNumber(11888809008) // => false
  
  isPhoneNumber('12990897657') // => false
  
  isPhoneNumber('109089887676') // => false
  
  isPhoneNumber('12345') // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isPhoneNumber } from 'is-check/regexp'

  isPhoneNumber(17888809008) // => true

  isPhoneNumber('13888888888') // => true

  isPhoneNumber('+8613888888888') // => true

  isPhoneNumber('008613888888888') // => true

  isPhoneNumber(11888809008) // => false

  isPhoneNumber('12990897657') // => false

  isPhoneNumber('109089887676') // => false

  isPhoneNumber('12345') // => false
</script>
````

