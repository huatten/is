---
outline: deep
---

# 快速开始

## 安装

使用 npm 安装：

```bash
npm install is-check
```

使用 yarn 安装：

```bash
yarn add is-check
```

使用 pnpm 安装：

```bash
pnpm add is-check
```

## 使用

### 全量引入

```javascript
import is from 'is-check'

// 检查数组
is.array([]) // => true

// 检查质数
is.prime(7) // => true

// 检查URL
is.url('https://example.com') // => true

// 检查是否为今天
is.today(new Date()) // => true
```

### 按需引入

```javascript
import { isArray, isPrime, isURL, isToday } from 'is-check'

isArray([]) // => true
isPrime(7) // => true
isURL('https://example.com') // => true
isToday(new Date()) // => true
```

### 按模块引入

```javascript
import { isArray } from 'is-check/type'
import { isPrime } from 'is-check/number'
import { isURL } from 'is-check/regexp'
import { isToday } from 'is-check/date'

isArray([]) // => true
isPrime(7) // => true
isURL('https://example.com') // => true
isToday(new Date()) // => true
```