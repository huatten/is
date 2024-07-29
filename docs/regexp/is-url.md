---
outline: deep
---

# 检查是否是URL

> 用于检查给定的字符串是否是有效的 URL。该函数设计用于验证常见的 URL 格式，包括带或不带协议（如 `http`、`https`、`ftp`）以及带或不带子域名的域名。

### 全量引入
```javascript
<script>
  import is from 'is-check'

  is.url('https://www.example.com') // => true

  is.url('https://example.com/page') // => true

  is.url('https://beta.theb.ai') // => true

  is.url('http://www.example.com') // => true

  is.url('www.example.com') // => true

  is.url('example.com/page') // => true

  is.url('not-a-url')  // => false

  is.url('http:/invalid-url.com') // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isURL } from 'is-check'

  isURL('https://www.example.com') // => true

  isURL('https://example.com/page') // => true

  isURL('https://beta.theb.ai') // => true

  isURL('http://www.example.com') // => true

  isURL('www.example.com') // => true

  isURL('example.com/page') // => true

  isURL('not-a-url')  // => false

  isURL('http:/invalid-url.com') // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isURL } from 'is-check/regexp'

  isURL('https://www.example.com') // => true

  isURL('https://example.com/page') // => true

  isURL('https://beta.theb.ai') // => true

  isURL('http://www.example.com') // => true

  isURL('www.example.com') // => true

  isURL('example.com/page') // => true

  isURL('not-a-url')  // => false

  isURL('http:/invalid-url.com') // => false
</script>
````
