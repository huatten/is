---
outline: deep
---

# 检查value是不是SHA-256哈希值

> 用于验证给定的字符串是否是一个有效的 `SHA-256` 哈希值。SHA-256（Secure Hash Algorithm 256-bit）是一种加密哈希函数，常用于生成数据的唯一指纹，结果为 `64` 个字符的十六进制字符串。

### 全量引入
```javascript
<script>
  import is from 'is-check'

  is.sha256('9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08')  // => true

  is.sha256('9F86D081884C7D659A2FEAA0C55AD015A3BF4F1B2B0B822CD15D6C15B0F00A08')  // => true

  is.sha256('9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a0z') // => false 包含非法字符

  is.sha256('9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a')  // => false 长度不足
</script>
````
### 按需引入
```javascript
<script>
  import { isSHA256 } from 'is-check'
  
  isSHA256('9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08')  // => true
  
  isSHA256('9F86D081884C7D659A2FEAA0C55AD015A3BF4F1B2B0B822CD15D6C15B0F00A08')  // => true
  
  isSHA256('9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a0z') // => false 包含非法字符
  
  isSHA256('9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a')  // => false 长度不足
</script>
````
### 按模块引入
```javascript
<script>
  import { isSHA256 } from 'is-check/regexp'

  isSHA256('9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08')  // => true

  isSHA256('9F86D081884C7D659A2FEAA0C55AD015A3BF4F1B2B0B822CD15D6C15B0F00A08')  // => true

  isSHA256('9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a0z') // => false 包含非法字符

  isSHA256('9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a')  // => false 长度不足

  isSHA256('2ef7bde608ce5404e97d5f042f95f89f0') // => false 长度超出
</script>
````

