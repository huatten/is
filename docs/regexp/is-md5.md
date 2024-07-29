---
outline: deep
---

# 检查是否是MD5哈希值

> 验证给定的字符串是否是一个有效的 `MD5` 哈希值。MD5（Message-Digest Algorithm 5）是一种广泛使用的哈希函数，用于生成 `32` 个字符的十六进制哈希值，对大小写不敏感，支持小写和大写的十六进制字符。

### 全量引入
```javascript
<script>
  import is from 'is-check'

  is.md5('2ef7bde608ce5404e97d5f042f95f89f') // => true

  is.md5('7b77e46d3af290b741eb6b00c66575ee') // => true

  is.md5('d41d8cd98f00b204e9800998ecf8427z') // => false 包含非法字符

  is.md5('2ef7bde608ce5404e97d5f042f95f89f0') // => false 长度超出
</script>
````
### 按需引入
```javascript
<script>
  import { isMD5 } from 'is-check'

  isMD5('2ef7bde608ce5404e97d5f042f95f89f') // => true

  isMD5('7b77e46d3af290b741eb6b00c66575ee') // => true

  isMD5('d41d8cd98f00b204e9800998ecf8427z') // => false 包含非法字符

  isMD5('2ef7bde608ce5404e97d5f042f95f89f0') // => false 长度超出
</script>
````
### 按模块引入
```javascript
<script>
  import { isMD5 } from 'is-check/regexp'
  
  isMD5('2ef7bde608ce5404e97d5f042f95f89f') // => true

  isMD5('7b77e46d3af290b741eb6b00c66575ee') // => true

  isMD5('d41d8cd98f00b204e9800998ecf8427z') // => false 包含非法字符

  isMD5('2ef7bde608ce5404e97d5f042f95f89f0') // => false 长度超出
</script>
````
