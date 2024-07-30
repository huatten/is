---
outline: deep
---

# 检查value是不是质数

> 用于检查给定的值是否为质数。质数是指`大于1且只能被1和其自身整除`的正整数。

### 全量引入
```javascript
<script>
  import is from 'is-check'

  is.prime(2) // => true

  is.prime(3) // => true

  is.prime(7) // => true

  is.prime(0) // => false

  is.prime(1) // => false
</script>
````
### 按需引入
```javascript
<script>
  import { isPrime } from 'is-check'

  isPrime(2) // => true

  isPrime(3) // => true

  isPrime(7) // => true

  isPrime(0) // => false
  
  isPrime(1) // => false
</script>
````
### 按模块引入
```javascript
<script>
  import { isPrime } from 'is-check/number'

  isPrime(2) // => true

  isPrime(3) // => true

  isPrime(7) // => true

  isPrime(0) // => false

  isPrime(1) // => false
</script>
````
