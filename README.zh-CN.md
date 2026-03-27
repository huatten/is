# is-check

[![NPM version](https://img.shields.io/npm/v/is-check.svg)](https://www.npmjs.com/package/is-check)
[![NPM downloads](https://img.shields.io/npm/dm/is-check.svg)](https://www.npmjs.com/package/is-check)
[![License](https://img.shields.io/npm/l/is-check.svg)](https://github.com/huatten/is-check/blob/master/LICENSE)

> 一个用于各种类型检查和验证功能的微型 JavaScript 工具库。

`is-check` 是一个全面的 JavaScript 库，提供了广泛的验证和检查功能。它被设计为轻量级、模块化且易于使用，涵盖了类型、数字、正则表达式、环境和日期的常见验证需求。

## 特性

- 🔍 **类型检查**：检查 JavaScript 类型如数组、对象、字符串、数字等
- 🔢 **数字验证**：验证数字、整数、小数、质数等
- 📅 **日期验证**：检查日期、时间戳、工作日、周末等
- 🌐 **环境检测**：检测浏览器、设备、操作系统等
- 🔠 **字符串模式**：验证 URL、邮箱、电话号码、十六进制颜色等
- 📦 **模块化设计**：按需导入，保持包体积小巧
- 🛡️ **支持 Tree Shaking**：完全支持 tree shaking 以消除未使用的代码
- 🔧 **灵活的导入方式**：支持命名导入、命名空间导入和模块特定导入
- 📖 **文档完善**：包含示例的全面文档
- 🧪 **测试完善**：经过良好测试，覆盖率高

## 安装

```bash
# 使用 npm
npm install is-check

# 使用 yarn
yarn add is-check

# 使用 pnpm
pnpm add is-check
```

## 快速开始

### 方式 1：命名导入（推荐）⭐⭐⭐⭐⭐

```javascript
// 导入特定函数
import { isArray, isString, isInteger, isPrime, isEven } from 'is-check'

// 类型检查
console.log(isArray([1, 2, 3])) // true
console.log(isString('hello')) // true

// 数字验证
console.log(isInteger(42)) // true
console.log(isPrime(7)) // true
console.log(isEven(4)) // true
```

### 方式 2：命名空间导入 ⭐⭐⭐⭐

```javascript
// 导入模块命名空间
import { type, number, regexp, env, date } from 'is-check'

// 使用命名空间
console.log(type.isArray([1, 2, 3])) // true
console.log(type.isString('hello')) // true
console.log(number.isInteger(42)) // true
console.log(number.isPrime(7)) // true
console.log(env.isBrowser()) // true/false
console.log(date.isToday(new Date())) // true/false
```

### 方式 3：模块路径导入 ⭐⭐⭐⭐⭐

```javascript
// 从特定模块导入
import { isArray, isString } from 'is-check/type'
import { isInteger, isPrime, isEven } from 'is-check/number'
import { isEmail, isUrl } from 'is-check/regexp'
import { isBrowser, isMobile } from 'is-check/env'
import { isToday, isWeekend } from 'is-check/date'

console.log(isArray([1, 2, 3])) // true
console.log(isInteger(42)) // true
console.log(isEmail('test@example.com')) // true
console.log(isBrowser()) // true/false
```

### 方式 4：全量导出（不推荐）

```javascript
// 导入所有函数（不推荐，不利于 tree-shaking）
import * as is from 'is-check'

// 所有函数名都带有 'is' 前缀
console.log(is.isArray([1, 2, 3])) // true
console.log(is.isString('hello')) // true
console.log(is.isInteger(42)) // true
```

## API 参考

### 类型模块 (`is-check/type`)

| 函数 | 描述 | 示例 |
|---------|-------------|---------|
| `isArguments(value)` | 检查值是否为 arguments 对象 | `isArguments(arguments)` |
| `isArray(value)` | 检查值是否为数组 | `isArray([1, 2, 3])` |
| `isArrayLike(value)` | 检查值是否为类数组 | `isArrayLike('hello')` |
| `isArraybuffer(value)` | 检查值是否为 ArrayBuffer | `isArraybuffer(new ArrayBuffer(8))` |
| `isBoolean(value)` | 检查值是否为布尔值 | `isBoolean(true)` |
| `isBigint(value)` | 检查值是否为 BigInt | `isBigint(BigInt(42))` |
| `isDate(value)` | 检查值是否为 Date 对象 | `isDate(new Date())` |
| `isElement(value)` | 检查值是否为 DOM 元素 | `isElement(document.body)` |
| `isEmpty(value)` | 检查值是否为空 | `isEmpty('')` |
| `isFunction(value)` | 检查值是否为函数 | `isFunction(() => {})` |
| `isJSON(value)` | 检查字符串是否为有效 JSON | `isJSON('{"a": 1}')` |
| `isNaN(value)` | 检查值是否为 NaN | `isNaN(NaN)` |
| `isNull(value)` | 检查值是否为 null | `isNull(null)` |
| `isNumber(value)` | 检查值是否为数字 | `isNumber(42)` |
| `isObject(value)` | 检查值是否为对象 | `isObject({})` |
| `isRegexp(value)` | 检查值是否为正则表达式 | `isRegexp(/abc/)` |
| `isString(value)` | 检查值是否为字符串 | `isString('hello')` |
| `isSymbol(value)` | 检查值是否为 Symbol | `isSymbol(Symbol('id'))` |
| `isUndefined(value)` | 检查值是否为 undefined | `isUndefined(undefined)` |
| `isMap(value)` | 检查值是否为 Map 对象 | `isMap(new Map())` |
| `isSet(value)` | 检查值是否为 Set 对象 | `isSet(new Set())` |
| `isPromise(value)` | 检查值是否为 Promise 对象 | `isPromise(Promise.resolve())` |
| `isGenerator(value)` | 检查值是否为 Generator 函数 | `isGenerator(function* () {})` |
| `isAsyncFunction(value)` | 检查值是否为异步函数 | `isAsyncFunction(async () => {})` |
| `isTypedArray(value)` | 检查值是否为 TypedArray 对象 | `isTypedArray(new Int8Array())` |
| `isError(value)` | 检查值是否为 Error 对象 | `isError(new Error())` |
| `isFile(value)` | 检查值是否为 File 对象 | `isFile(new File([], 'test.txt'))` |
| `isBlob(value)` | 检查值是否为 Blob 对象 | `isBlob(new Blob())` |
| `isFormData(value)` | 检查值是否为 FormData 对象 | `isFormData(new FormData())` |

### 数字模块 (`is-check/number`)

| 函数 | 描述 | 示例 |
|---------|-------------|---------|
| `isInteger(value)` | 检查值是否为整数 | `isInteger(42)` |
| `isDecimal(value)` | 检查值是否为小数 | `isDecimal(3.14)` |
| `isPositiveInteger(value)` | 检查值是否为正整数 | `isPositiveInteger(5)` |
| `isNegativeInteger(value)` | 检查值是否为负整数 | `isNegativeInteger(-3)` |
| `isPositiveDecimal(value)` | 检查值是否为正小数 | `isPositiveDecimal(3.14)` |
| `isNegativeDecimal(value)` | 检查值是否为负小数 | `isNegativeDecimal(-3.14)` |
| `isPositive(value)` | 检查值是否为正数 | `isPositive(5)` |
| `isNegative(value)` | 检查值是否为负数 | `isNegative(-3)` |
| `isOdd(value)` | 检查值是否为奇数 | `isOdd(3)` |
| `isEven(value)` | 检查值是否为偶数 | `isEven(4)` |
| `isPrime(value)` | 检查值是否为质数 | `isPrime(7)` |
| `isNatural(value)` | 检查值是否为自然数 | `isNatural(1)` |
| `isFinite(value)` | 检查值是否为有限数 | `isFinite(42)` |
| `isInfinite(value)` | 检查值是否为无限数 | `isInfinite(Infinity)` |
| `isZero(value)` | 检查值是否为零 | `isZero(0)` |
| `isNonZero(value)` | 检查值是否为非零数 | `isNonZero(1)` |
| `isSafeInteger(value)` | 检查值是否为安全整数 | `isSafeInteger(42)` |
| `isMultipleOf(value, divisor)` | 检查值是否为除数的倍数 | `isMultipleOf(10, 2)` |

### 正则表达式模块 (`is-check/regexp`)

| 函数 | 描述 | 示例 |
|---------|-------------|---------|
| `isHexColor(value)` | 检查值是否为十六进制颜色 | `isHexColor('#ff0000')` |
| `isMD5(value)` | 检查值是否为 MD5 哈希 | `isMD5('5d41402abc4b2a76b9719d911017c592')` |
| `isSHA256(value)` | 检查值是否为 SHA256 哈希 | `isSHA256('ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb')` |
| `isURL(value)` | 检查值是否为 URL | `isURL('https://example.com')` |
| `isUUID(value)` | 检查值是否为 UUID | `isUUID('550e8400-e29b-41d4-a716-446655440000')` |
| `isPhoneNumber(value)` | 检查值是否为电话号码 | `isPhoneNumber('13800138000')` |
| `isEnglish(value)` | 检查值是否只包含英文字母 | `isEnglish('Hello')` |
| `isChinese(value)` | 检查值是否包含中文字符 | `isChinese('你好')` |
| `isHtml(value)` | 检查值是否包含 HTML | `isHtml('<div>Hello</div>')` |
| `isCamelCase(value)` | 检查值是否为驼峰命名 | `isCamelCase('camelCase')` |
| `isPascalCase(value)` | 检查值是否为帕斯卡命名 | `isPascalCase('PascalCase')` |
| `isSnakeCase(value)` | 检查值是否为蛇形命名 | `isSnakeCase('snake_case')` |
| `isUppercase(value)` | 检查值是否为大写 | `isUppercase('UPPERCASE')` |
| `isLowercase(value)` | 检查值是否为小写 | `isLowercase('lowercase')` |
| `isProvince(value)` | 检查值是否为中文省份 | `isProvince('广东省')` |
| `isJWT(value)` | 检查值是否为 JWT 令牌 | `isJWT('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...')` |
| `isEmail(value)` | 检查值是否为有效的电子邮件地址 | `isEmail('test@example.com')` |
| `isIP(value)` | 检查值是否为有效的 IP 地址 | `isIP('192.168.1.1')` |
| `isIPv4(value)` | 检查值是否为有效的 IPv4 地址 | `isIPv4('192.168.1.1')` |
| `isIPv6(value)` | 检查值是否为有效的 IPv6 地址 | `isIPv6('2001:0db8:85a3:0000:0000:8a2e:0370:7334')` |
| `isCreditCard(value)` | 检查值是否为有效的信用卡号码 | `isCreditCard('4532015112830366')` |
| `isPostalCode(value)` | 检查值是否为有效的邮政编码 | `isPostalCode('12345', 'US')` |
| `isMACAddress(value)` | 检查值是否为有效的 MAC 地址 | `isMACAddress('00:11:22:33:44:55')` |
| `isMagnetURI(value)` | 检查值是否为有效的磁力链接 | `isMagnetURI('magnet:?xt=urn:btih:...')` |
| `isMimeType(value)` | 检查值是否为有效的 MIME 类型 | `isMimeType('text/html')` |
| `isBase64(value)` | 检查值是否为有效的 Base64 字符串 | `isBase64('SGVsbG8gV29ybGQ=')` |
| `isJSONString(value)` | 检查值是否为有效的 JSON 字符串 | `isJSONString('{"name": "John"}')` |
| `isAscii(value)` | 检查值是否只包含 ASCII 字符 | `isAscii('Hello World')` |
| `isMultibyte(value)` | 检查值是否包含多字节字符 | `isMultibyte('Héllo Wörld')` |
| `isHalfWidth(value)` | 检查值是否包含半角字符 | `isHalfWidth('Hello World')` |
| `isFullWidth(value)` | 检查值是否包含全角字符 | `isFullWidth('ＡＢＣ１２３')` |
| `isSurrogatePair(value)` | 检查值是否包含代理对字符 | `isSurrogatePair('𠮷')` |

### 环境模块 (`is-check/env`)

| 函数 | 描述 | 示例 |
|---------|-------------|---------|
| `isAndroid()` | 检查是否在 Android 上运行 | `isAndroid()` |
| `isAndroidPhone()` | 检查是否在 Android 手机上运行 | `isAndroidPhone()` |
| `isAndroidTablet()` | 检查是否在 Android 平板上运行 | `isAndroidTablet()` |
| `isBlackberry()` | 检查是否在 Blackberry 上运行 | `isBlackberry()` |
| `isBlackberryPhone()` | 检查是否在 Blackberry 手机上运行 | `isBlackberryPhone()` |
| `isBlackberryTablet()` | 检查是否在 Blackberry 平板上运行 | `isBlackberryTablet()` |
| `isBrowser()` | 检查是否在浏览器中运行 | `isBrowser()` |
| `isChrome()` | 检查是否在 Chrome 中运行 | `isChrome()` |
| `isDesktop()` | 检查是否在桌面设备上运行 | `isDesktop()` |
| `isEdge()` | 检查是否在 Edge 中运行 | `isEdge()` |
| `isFirefox()` | 检查是否在 Firefox 中运行 | `isFirefox()` |
| `isIE()` | 检查是否在 Internet Explorer 中运行 | `isIE()` |
| `isIos()` | 检查是否在 iOS 上运行 | `isIos()` |
| `isIpad()` | 检查是否在 iPad 上运行 | `isIpad()` |
| `isIphone()` | 检查是否在 iPhone 上运行 | `isIphone()` |
| `isIpod()` | 检查是否在 iPod 上运行 | `isIpod()` |
| `isLinux()` | 检查是否在 Linux 上运行 | `isLinux()` |
| `isMac()` | 检查是否在 Mac 上运行 | `isMac()` |
| `isMeego()` | 检查是否在 Meego 上运行 | `isMeego()` |
| `isMobile()` | 检查是否在移动设备上运行 | `isMobile()` |
| `isNode()` | 检查是否在 Node.js 中运行 | `isNode()` |
| `isOffline()` | 检查浏览器是否离线 | `isOffline()` |
| `isOnline()` | 检查浏览器是否在线 | `isOnline()` |
| `isOpera()` | 检查是否在 Opera 中运行 | `isOpera()` |
| `isSafari()` | 检查是否在 Safari 中运行 | `isSafari()` |
| `isTablet()` | 检查是否在平板设备上运行 | `isTablet()` |
| `isWechat()` | 检查是否在微信中运行 | `isWechat()` |
| `isWindows()` | 检查是否在 Windows 上运行 | `isWindows()` |
| `isWindowsPhone()` | 检查是否在 Windows Phone 上运行 | `isWindowsPhone()` |
| `isWindowsTablet()` | 检查是否在 Windows 平板上运行 | `isWindowsTablet()` |

### 日期模块 (`is-check/date`)

| 函数 | 描述 | 示例 |
|---------|-------------|---------|
| `isTime(value)` | 检查值是否为时间字符串 | `isTime('14:30:00')` |
| `isTime12(value)` | 检查值是否为 12 小时制时间字符串 | `isTime12('2:30:00 PM')` |
| `isTime24(value)` | 检查值是否为 24 小时制时间字符串 | `isTime24('14:30:00')` |
| `isLeapYear(value)` | 检查值是否为闰年 | `isLeapYear(2024)` |
| `isTimestamp(value)` | 检查值是否为时间戳 | `isTimestamp(1640995200000)` |
| `isToday(value)` | 检查日期是否为今天 | `isToday(new Date())` |
| `isYesterday(value)` | 检查日期是否为昨天 | `isYesterday(new Date(Date.now() - 86400000))` |
| `isTomorrow(value)` | 检查日期是否为明天 | `isTomorrow(new Date(Date.now() + 86400000))` |
| `isWeekend(value)` | 检查日期是否为周末 | `isWeekend(new Date('2023-01-01'))` |
| `isWeekday(value)` | 检查日期是否为工作日 | `isWeekday(new Date('2023-01-02'))` |
| `isFeature(value)` | 检查日期是否为未来 | `isFeature(new Date('2030-01-01'))` |
| `isPast(value)` | 检查日期是否为过去 | `isPast(new Date('2020-01-01'))` |
| `isThisWeek(value)` | 检查日期是否为本周 | `isThisWeek(new Date())` |
| `isThisMonth(value)` | 检查日期是否为本月 | `isThisMonth(new Date())` |
| `isThisYear(value)` | 检查日期是否为今年 | `isThisYear(new Date())` |
| `isNextWeek(value)` | 检查日期是否为下周 | `isNextWeek(new Date(Date.now() + 7 * 86400000))` |
| `isNextMonth(value)` | 检查日期是否为下月 | `isNextMonth(new Date(Date.now() + 30 * 86400000))` |
| `isNextYear(value)` | 检查日期是否为明年 | `isNextYear(new Date(Date.now() + 365 * 86400000))` |
| `isLastWeek(value)` | 检查日期是否为上周 | `isLastWeek(new Date(Date.now() - 7 * 86400000))` |
| `isLastMonth(value)` | 检查日期是否为上月 | `isLastMonth(new Date(Date.now() - 30 * 86400000))` |
| `isLastYear(value)` | 检查日期是否为去年 | `isLastYear(new Date(Date.now() - 365 * 86400000))` |

## 浏览器支持

`is-check` 支持所有现代浏览器和 Node.js 环境：

- Chrome, Firefox, Safari, Edge (最新 2 个版本)
- Internet Explorer 11+
- Node.js 18+

## Tree Shaking

`is-check` 完全支持 tree shaking。您可以只导入需要的函数以减小包体积：

```javascript
// 导入特定函数
import { isArray, isString } from 'is-check'

// 从特定模块导入
import { isArray } from 'is-check/type'
import { isInteger } from 'is-check/number'
import { isEmail } from 'is-check/regexp'
import { isBrowser } from 'is-check/env'
import { isToday } from 'is-check/date'

// 导入单个函数以获得最大的 tree-shaking 效果
import isArray from 'is-check/type/is-array'
import isInteger from 'is-check/number/is-integer'
import isEmail from 'is-check/regexp/is-email'
import isBrowser from 'is-check/env/is-browser'
import isToday from 'is-check/date/is-today'
```

## 开发

### 设置

```bash
# 克隆仓库
git clone https://github.com/huatten/is-check.git

# 安装依赖
npm run bootstrap
# 或者
npm install
```

### 脚本

```bash
# 构建库
npm run build

# 运行测试
npm test

# 运行带覆盖率的测试
npm run test:coverage

# 运行带 UI 的测试
npm run test:ui

# 代码检查
npm run lint

# 格式化代码
npm run format

# 提交更改
npm run commit

# 生成文档
npm run docs:dev    # 开发服务器
npm run docs:build  # 构建文档
npm run docs:preview # 预览构建的文档
```

### 项目结构

```
is-check/
├── src/              # 源代码
│   ├── type/         # 类型检查函数
│   ├── number/       # 数字验证函数
│   ├── regexp/       # 正则表达式验证
│   ├── env/          # 环境检测
│   ├── date/         # 日期验证
│   └── index.js      # 主入口点
├── dist/             # 构建文件
├── docs/             # 文档
├── test/             # 测试文件
├── example/          # 使用示例
└── package.json      # 包配置
```

## 贡献

欢迎贡献！您可以这样贡献：

1. Fork 仓库
2. 创建新分支：`git checkout -b feature/your-feature-name`
3. 进行更改并提交：`npm run commit`
4. 推送到分支：`git push origin feature/your-feature-name`
5. 创建拉取请求

### 指南

- 遵循现有的代码风格
- 为新功能添加测试
- 根据需要更新文档
- 提交 PR 前确保所有测试通过
- 使用 `npm run commit` 提交消息以遵循约定式提交

## 许可证

本项目采用 [ISC 许可证](./LICENSE)。

## 作者

**huatten**

- GitHub: [@huatten](https://github.com/huatten)

---

由 [huatten](https://github.com/huatten) 用 ❤️ 构建