---
outline: deep
---

# 检查value是不是采用驼峰命名法

> 用于验证给定的字符串是否采用驼峰命名法（`camelCase`）。在驼峰命名法中，第一个单词的首字母小写，后续每个单词的首字母大写，其余字母小写。

### 全量引入
```javascript
<script>
  import is from 'is-check'

  is.camelCase('camelCase') // => true

  is.camelCase('isCamelCase') // => true

  is.camelCase('singleword') // => true

  is.camelCase('CamelCase') // => false

  is.camelCase('camel_case') // => false

  is.camelCase('camelCase123') // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isCamelCase } from 'is-check'

  isCamelCase('camelCase') // => true

  isCamelCase('isCamelCase') // => true

  isCamelCase('singleword') // => true

  isCamelCase('CamelCase') // => false

  isCamelCase('camel_case') // => false

  isCamelCase('camelCase123') // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isCamelCase } from 'is-check/regexp'

  isCamelCase('camelCase') // => true

  isCamelCase('isCamelCase') // => true

  isCamelCase('singleword') // => true

  isCamelCase('CamelCase') // => false

  isCamelCase('camel_case') // => false

  isCamelCase('camelCase123') // => false
</script>
````
