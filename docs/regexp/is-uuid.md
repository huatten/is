---
outline: deep
---

# 检查value是不是uuid

> 用于验证给定的字符串是否是有效的 `UUID`。UUID（Universally Unique Identifier）是一种用于标识信息的 `128` 位数字标识符，其格式为 `8-4-4-4-12` 的十六进制字符。

### 全量引入
```javascript
<script>
  import is from 'is-check'

  is.uuid('123e4567-e89b-12d3-a456-426614174000') // => true

  is.uuid('550e8400-e29b-41d4-a716-446655440000') // => true

  is.uuid('123e4567e89b12d3a456426614174000') // => false 缺少连字符

  is.uuid('550e8400-e29b-41d4-a716-44665544000Z') // => false  包含非法字符

  is.uuid('550e8400-e29b-41d4-a716')  // => false 长度不足
</script>
````
### 按需引入
```javascript
<script>
  import { isUUID } from 'is-check'

  isUUID('123e4567-e89b-12d3-a456-426614174000') // => true

  isUUID('550e8400-e29b-41d4-a716-446655440000') // => true

  isUUID('123e4567e89b12d3a456426614174000') // => false 缺少连字符

  isUUID('550e8400-e29b-41d4-a716-44665544000Z') // => false  包含非法字符

  isUUID('550e8400-e29b-41d4-a716')  // => false 长度不足
</script>
````
### 按模块引入
```javascript
<script>
  import { isUUID } from 'is-check/regexp'

  isUUID('123e4567-e89b-12d3-a456-426614174000') // => true

  isUUID('550e8400-e29b-41d4-a716-446655440000') // => true

  isUUID('123e4567e89b12d3a456426614174000') // => false 缺少连字符

  isUUID('550e8400-e29b-41d4-a716-44665544000Z') // => false  包含非法字符

  isUUID('550e8400-e29b-41d4-a716')  // => false 长度不足
</script>
````

