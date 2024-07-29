---
outline: deep
---

# 检查value是不是采用蛇形命名法

> 用于验证给定的字符串是否采用了蛇形命名法（`snake_case`）。蛇形命名法是常见的变量命名规则之一，其中单词之间使用下划线连接，并且所有字母都应为小写。

### 全量引入
```javascript
<script>
  import is from 'is-check'

  is.snakeCase('snake_case')  // => true

  is.snakeCase('is_snake_case')  // => true

  is.snakeCase('snake_case_123') // => true

  is.snakeCase('snakeCase') // => false

  is.snakeCase('singleword') // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isSnakeCase } from 'is-check'

  isSnakeCase('snake_case')  // => true

  isSnakeCase('is_snake_case')  // => true

  isSnakeCase('snake_case_123') // => true

  isSnakeCase('snakeCase') // => false

  isSnakeCase('singleword') // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isSnakeCase } from 'is-check/regexp'
  
  isSnakeCase('snake_case')  // => true

  isSnakeCase('is_snake_case')  // => true

  isSnakeCase('snake_case_123') // => true

  isSnakeCase('snakeCase') // => false

  isSnakeCase('singleword') // => false
</script>
````
