---
outline: deep
---

# 检查value是不是采用帕斯卡命名法

> 用于验证给定的字符串是否采用帕斯卡命名法（`PascalCase`）。在帕斯卡命名法中，每个单词的首字母都为大写，其余字母为小写，所有单词连接在一起，不使用任何分隔符。

### 全量引入
```javascript
<script>
  import is from 'is-check'

  is.pascalCase('PascalCase')  // => true

  is.pascalCase('IsPascalCase')  // => true

  is.pascalCase('Singleword') // => true

  is.pascalCase('camelCase') // => false

  is.pascalCase('Pascal_Case') // => false

  is.pascalCase('PascalCase123') // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isPascalCase } from 'is-check'

  isPascalCase('PascalCase')  // => true

  isPascalCase('IsPascalCase')  // => true

  isPascalCase('Singleword') // => true

  isPascalCase('camelCase') // => false

  isPascalCase('Pascal_Case') // => false

  isPascalCase('PascalCase123') // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isPascalCase } from 'is-check/regexp'

  isPascalCase('PascalCase')  // => true

  isPascalCase('IsPascalCase')  // => true

  isPascalCase('Singleword') // => true

  isPascalCase('camelCase') // => false

  isPascalCase('Pascal_Case') // => false

  isPascalCase('PascalCase123') // => false
</script>
````
