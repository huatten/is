---
outline: deep
---

# 检查value是不是异步函数

### 全量引入
```javascript
<script>
  import is from 'is-check'
  
  is.asyncFunction(async () => {}) // => true
  
  is.asyncFunction(async function () {}) // => true
  
  is.asyncFunction(() => {}) // => false
  
  is.asyncFunction(function () {}) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isAsyncFunction } from 'is-check'
  
  isAsyncFunction(async () => {}) // => true
  
  isAsyncFunction(async function () {}) // => true
  
  isAsyncFunction(() => {}) // => false
  
  isAsyncFunction(function () {}) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isAsyncFunction } from 'is-check/type'
  
  isAsyncFunction(async () => {}) // => true
  
  isAsyncFunction(async function () {}) // => true
  
  isAsyncFunction(() => {}) // => false
  
  isAsyncFunction(function () {}) // => false
</script>
````