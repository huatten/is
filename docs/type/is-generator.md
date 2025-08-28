---
outline: deep
---

# 检查value是不是Generator函数

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.generator(function* () {}) // => true
  
  is.generator(function* generatorFn() {}) // => true
  
  is.generator(() => {}) // => false
  
  is.generator(function () {}) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isGenerator } from 'is-check'
  
  isGenerator(function* () {}) // => true
  
  isGenerator(function* generatorFn() {}) // => true
  
  isGenerator(() => {}) // => false
  
  isGenerator(function () {}) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isGenerator } from 'is-check/type'
  
  isGenerator(function* () {}) // => true
  
  isGenerator(function* generatorFn() {}) // => true
  
  isGenerator(() => {}) // => false
  
  isGenerator(function () {}) // => false
</script>
````