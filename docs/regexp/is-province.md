---
outline: deep
---

# 检查value是不是中国省级行政区

> 用于检查给定的字符串是否是中国的省级行政区。该函数验证输入的字符串是否为中国大陆和港澳台的省、自治区、直辖市或特别行政区的名称。

### 全量引入
```javascript
<script>
  import is from 'is-check'

  is.province('甘肃') // => true

  is.province('张掖') // => false

  is.province('东京') // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isProvince } from 'is-check'

  is.province('甘肃') // => true

  is.province('张掖') // => false

  is.province('东京') // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isProvince } from 'is-check/regexp'

  isProvince('甘肃') // => true

  isProvince('张掖') // => false

  isProvince('东京') // => false
</script>
````

