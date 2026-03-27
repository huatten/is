# is-check

[![NPM version](https://img.shields.io/npm/v/is-check.svg)](https://www.npmjs.com/package/is-check)
[![NPM downloads](https://img.shields.io/npm/dm/is-check.svg)](https://www.npmjs.com/package/is-check)
[![License](https://img.shields.io/npm/l/is-check.svg)](https://github.com/huatten/is-check/blob/master/LICENSE)

> A micro JavaScript utility library for various type checking and validation functions.

`is-check` is a comprehensive JavaScript library that provides a wide range of validation and checking functions. It's designed to be lightweight, modular, and easy to use, covering common validation needs for types, numbers, regular expressions, environments, and dates.

## Features

- 🔍 **Type Checking**: Check for JavaScript types like array, object, string, number, etc.
- 🔢 **Number Validation**: Validate numbers, integers, decimals, primes, etc.
- 📅 **Date Validation**: Check dates, timestamps, weekdays, weekends, etc.
- 🌐 **Environment Detection**: Detect browsers, devices, operating systems, etc.
- 🔠 **String Patterns**: Validate URLs, emails, phone numbers, hex colors, etc.
- 📦 **Modular Design**: Import only what you need to keep bundle size small
- 🛡️ **Tree Shakable**: Full support for tree shaking to eliminate unused code
- 🔧 **Flexible Import**: Support for named imports, namespace imports, and module-specific imports
- 📖 **Well Documented**: Comprehensive documentation with examples
- 🧪 **Well Tested**: Thoroughly tested with good coverage

## Installation

```bash
# Using npm
npm install is-check

# Using yarn
yarn add is-check

# Using pnpm
pnpm add is-check
```

## Quick Start

### Method 1: Named Imports (Recommended) ⭐⭐⭐⭐⭐

```javascript
// Import specific functions
import { isArray, isString, isInteger, isPrime, isEven } from 'is-check'

// Type checking
console.log(isArray([1, 2, 3])) // true
console.log(isString('hello')) // true

// Number validation
console.log(isInteger(42)) // true
console.log(isPrime(7)) // true
console.log(isEven(4)) // true
```

### Method 2: Namespace Imports ⭐⭐⭐⭐

```javascript
// Import module namespaces
import { type, number, regexp, env, date } from 'is-check'

// Use with namespace
console.log(type.isArray([1, 2, 3])) // true
console.log(type.isString('hello')) // true
console.log(number.isInteger(42)) // true
console.log(number.isPrime(7)) // true
console.log(env.isBrowser()) // true/false
console.log(date.isToday(new Date())) // true/false
```

### Method 3: Module Path Imports ⭐⭐⭐⭐⭐

```javascript
// Import from specific modules
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

### Method 4: Full Import (Not Recommended)

```javascript
// Import everything (not recommended for tree-shaking)
import * as is from 'is-check'

// All function names are prefixed with 'is'
console.log(is.isArray([1, 2, 3])) // true
console.log(is.isString('hello')) // true
console.log(is.isInteger(42)) // true
```

## API Reference

### Type Module (`is-check/type`)

| Function | Description | Example |
|---------|-------------|---------|
| `isArguments(value)` | Check if value is an arguments object | `isArguments(arguments)` |
| `isArray(value)` | Check if value is an array | `isArray([1, 2, 3])` |
| `isArrayLike(value)` | Check if value is array-like | `isArrayLike('hello')` |
| `isArraybuffer(value)` | Check if value is an ArrayBuffer | `isArraybuffer(new ArrayBuffer(8))` |
| `isBoolean(value)` | Check if value is a boolean | `isBoolean(true)` |
| `isBigint(value)` | Check if value is a BigInt | `isBigint(BigInt(42))` |
| `isDate(value)` | Check if value is a Date object | `isDate(new Date())` |
| `isElement(value)` | Check if value is a DOM element | `isElement(document.body)` |
| `isEmpty(value)` | Check if value is empty | `isEmpty('')` |
| `isFunction(value)` | Check if value is a function | `isFunction(() => {})` |
| `isJSON(value)` | Check if string is valid JSON | `isJSON('{"a": 1}')` |
| `isNaN(value)` | Check if value is NaN | `isNaN(NaN)` |
| `isNull(value)` | Check if value is null | `isNull(null)` |
| `isNumber(value)` | Check if value is a number | `isNumber(42)` |
| `isObject(value)` | Check if value is an object | `isObject({})` |
| `isRegexp(value)` | Check if value is a RegExp | `isRegexp(/abc/)` |
| `isString(value)` | Check if value is a string | `isString('hello')` |
| `isSymbol(value)` | Check if value is a Symbol | `isSymbol(Symbol('id'))` |
| `isUndefined(value)` | Check if value is undefined | `isUndefined(undefined)` |
| `isMap(value)` | Check if value is a Map object | `isMap(new Map())` |
| `isSet(value)` | Check if value is a Set object | `isSet(new Set())` |
| `isPromise(value)` | Check if value is a Promise object | `isPromise(Promise.resolve())` |
| `isGenerator(value)` | Check if value is a Generator function | `isGenerator(function* () {})` |
| `isAsyncFunction(value)` | Check if value is an async function | `isAsyncFunction(async () => {})` |
| `isTypedArray(value)` | Check if value is a TypedArray object | `isTypedArray(new Int8Array())` |
| `isError(value)` | Check if value is an Error object | `isError(new Error())` |
| `isFile(value)` | Check if value is a File object | `isFile(new File([], 'test.txt'))` |
| `isBlob(value)` | Check if value is a Blob object | `isBlob(new Blob())` |
| `isFormData(value)` | Check if value is a FormData object | `isFormData(new FormData())` |

### Number Module (`is-check/number`)

| Function | Description | Example |
|---------|-------------|---------|
| `isInteger(value)` | Check if value is an integer | `isInteger(42)` |
| `isDecimal(value)` | Check if value is a decimal | `isDecimal(3.14)` |
| `isPositiveInteger(value)` | Check if value is a positive integer | `isPositiveInteger(5)` |
| `isNegativeInteger(value)` | Check if value is a negative integer | `isNegativeInteger(-3)` |
| `isPositiveDecimal(value)` | Check if value is a positive decimal | `isPositiveDecimal(3.14)` |
| `isNegativeDecimal(value)` | Check if value is a negative decimal | `isNegativeDecimal(-3.14)` |
| `isPositive(value)` | Check if value is positive | `isPositive(5)` |
| `isNegative(value)` | Check if value is negative | `isNegative(-3)` |
| `isOdd(value)` | Check if value is odd | `isOdd(3)` |
| `isEven(value)` | Check if value is even | `isEven(4)` |
| `isPrime(value)` | Check if value is a prime number | `isPrime(7)` |
| `isNatural(value)` | Check if value is a natural number | `isNatural(1)` |
| `isFinite(value)` | Check if value is finite | `isFinite(42)` |
| `isInfinite(value)` | Check if value is infinite | `isInfinite(Infinity)` |
| `isZero(value)` | Check if value is zero | `isZero(0)` |
| `isNonZero(value)` | Check if value is non-zero | `isNonZero(1)` |
| `isSafeInteger(value)` | Check if value is a safe integer | `isSafeInteger(42)` |
| `isMultipleOf(value, divisor)` | Check if value is a multiple of divisor | `isMultipleOf(10, 2)` |

### RegExp Module (`is-check/regexp`)

| Function | Description | Example |
|---------|-------------|---------|
| `isHexColor(value)` | Check if value is a hex color | `isHexColor('#ff0000')` |
| `isMD5(value)` | Check if value is an MD5 hash | `isMD5('5d41402abc4b2a76b9719d911017c592')` |
| `isSHA256(value)` | Check if value is a SHA256 hash | `isSHA256('ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb')` |
| `isURL(value)` | Check if value is a URL | `isURL('https://example.com')` |
| `isUUID(value)` | Check if value is a UUID | `isUUID('550e8400-e29b-41d4-a716-446655440000')` |
| `isPhoneNumber(value)` | Check if value is a phone number | `isPhoneNumber('13800138000')` |
| `isEnglish(value)` | Check if value contains only English letters | `isEnglish('Hello')` |
| `isChinese(value)` | Check if value contains Chinese characters | `isChinese('你好')` |
| `isHtml(value)` | Check if value contains HTML | `isHtml('<div>Hello</div>')` |
| `isCamelCase(value)` | Check if value is camelCase | `isCamelCase('camelCase')` |
| `isPascalCase(value)` | Check if value is PascalCase | `isPascalCase('PascalCase')` |
| `isSnakeCase(value)` | Check if value is snake_case | `isSnakeCase('snake_case')` |
| `isUppercase(value)` | Check if value is uppercase | `isUppercase('UPPERCASE')` |
| `isLowercase(value)` | Check if value is lowercase | `isLowercase('lowercase')` |
| `isProvince(value)` | Check if value is a Chinese province | `isProvince('广东省')` |
| `isJWT(value)` | Check if value is a JWT token | `isJWT('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...')` |
| `isEmail(value)` | Check if value is a valid email address | `isEmail('test@example.com')` |
| `isIP(value)` | Check if value is a valid IP address | `isIP('192.168.1.1')` |
| `isIPv4(value)` | Check if value is a valid IPv4 address | `isIPv4('192.168.1.1')` |
| `isIPv6(value)` | Check if value is a valid IPv6 address | `isIPv6('2001:0db8:85a3:0000:0000:8a2e:0370:7334')` |
| `isCreditCard(value)` | Check if value is a valid credit card number | `isCreditCard('4532015112830366')` |
| `isPostalCode(value)` | Check if value is a valid postal code | `isPostalCode('12345', 'US')` |
| `isMACAddress(value)` | Check if value is a valid MAC address | `isMACAddress('00:11:22:33:44:55')` |
| `isMagnetURI(value)` | Check if value is a valid magnet URI | `isMagnetURI('magnet:?xt=urn:btih:...')` |
| `isMimeType(value)` | Check if value is a valid MIME type | `isMimeType('text/html')` |
| `isBase64(value)` | Check if value is a valid Base64 string | `isBase64('SGVsbG8gV29ybGQ=')` |
| `isJSONString(value)` | Check if value is a valid JSON string | `isJSONString('{"name": "John"}')` |
| `isAscii(value)` | Check if value contains only ASCII characters | `isAscii('Hello World')` |
| `isMultibyte(value)` | Check if value contains multibyte characters | `isMultibyte('Héllo Wörld')` |
| `isHalfWidth(value)` | Check if value contains half-width characters | `isHalfWidth('Hello World')` |
| `isFullWidth(value)` | Check if value contains full-width characters | `isFullWidth('ＡＢＣ１２３')` |
| `isSurrogatePair(value)` | Check if value contains surrogate pair characters | `isSurrogatePair('𠮷')` |

### Environment Module (`is-check/env`)

| Function | Description | Example |
|---------|-------------|---------|
| `isAndroid()` | Check if running on Android | `isAndroid()` |
| `isAndroidPhone()` | Check if running on Android phone | `isAndroidPhone()` |
| `isAndroidTablet()` | Check if running on Android tablet | `isAndroidTablet()` |
| `isBlackberry()` | Check if running on Blackberry | `isBlackberry()` |
| `isBlackberryPhone()` | Check if running on Blackberry phone | `isBlackberryPhone()` |
| `isBlackberryTablet()` | Check if running on Blackberry tablet | `isBlackberryTablet()` |
| `isBrowser()` | Check if running in browser | `isBrowser()` |
| `isChrome()` | Check if running in Chrome | `isChrome()` |
| `isDesktop()` | Check if running on desktop | `isDesktop()` |
| `isEdge()` | Check if running in Edge | `isEdge()` |
| `isFirefox()` | Check if running in Firefox | `isFirefox()` |
| `isIE()` | Check if running in Internet Explorer | `isIE()` |
| `isIos()` | Check if running on iOS | `isIos()` |
| `isIpad()` | Check if running on iPad | `isIpad()` |
| `isIphone()` | Check if running on iPhone | `isIphone()` |
| `isIpod()` | Check if running on iPod | `isIpod()` |
| `isLinux()` | Check if running on Linux | `isLinux()` |
| `isMac()` | Check if running on Mac | `isMac()` |
| `isMeego()` | Check if running on Meego | `isMeego()` |
| `isMobile()` | Check if running on mobile device | `isMobile()` |
| `isNode()` | Check if running in Node.js | `isNode()` |
| `isOffline()` | Check if browser is offline | `isOffline()` |
| `isOnline()` | Check if browser is online | `isOnline()` |
| `isOpera()` | Check if running in Opera | `isOpera()` |
| `isSafari()` | Check if running in Safari | `isSafari()` |
| `isTablet()` | Check if running on tablet | `isTablet()` |
| `isWechat()` | Check if running in WeChat | `isWechat()` |
| `isWindows()` | Check if running on Windows | `isWindows()` |
| `isWindowsPhone()` | Check if running on Windows Phone | `isWindowsPhone()` |
| `isWindowsTablet()` | Check if running on Windows Tablet | `isWindowsTablet()` |

### Date Module (`is-check/date`)

| Function | Description | Example |
|---------|-------------|---------|
| `isTime(value)` | Check if value is a time string | `isTime('14:30:00')` |
| `isTime12(value)` | Check if value is a 12-hour time string | `isTime12('2:30:00 PM')` |
| `isTime24(value)` | Check if value is a 24-hour time string | `isTime24('14:30:00')` |
| `isLeapYear(value)` | Check if value is a leap year | `isLeapYear(2024)` |
| `isTimestamp(value)` | Check if value is a timestamp | `isTimestamp(1640995200000)` |
| `isToday(value)` | Check if date is today | `isToday(new Date())` |
| `isYesterday(value)` | Check if date is yesterday | `isYesterday(new Date(Date.now() - 86400000))` |
| `isTomorrow(value)` | Check if date is tomorrow | `isTomorrow(new Date(Date.now() + 86400000))` |
| `isWeekend(value)` | Check if date is weekend | `isWeekend(new Date('2023-01-01'))` |
| `isWeekday(value)` | Check if date is weekday | `isWeekday(new Date('2023-01-02'))` |
| `isFeature(value)` | Check if date is in the future | `isFeature(new Date('2030-01-01'))` |
| `isPast(value)` | Check if date is in the past | `isPast(new Date('2020-01-01'))` |
| `isThisWeek(value)` | Check if date is this week | `isThisWeek(new Date())` |
| `isThisMonth(value)` | Check if date is this month | `isThisMonth(new Date())` |
| `isThisYear(value)` | Check if date is this year | `isThisYear(new Date())` |
| `isNextWeek(value)` | Check if date is next week | `isNextWeek(new Date(Date.now() + 7 * 86400000))` |
| `isNextMonth(value)` | Check if date is next month | `isNextMonth(new Date(Date.now() + 30 * 86400000))` |
| `isNextYear(value)` | Check if date is next year | `isNextYear(new Date(Date.now() + 365 * 86400000))` |
| `isLastWeek(value)` | Check if date is last week | `isLastWeek(new Date(Date.now() - 7 * 86400000))` |
| `isLastMonth(value)` | Check if date is last month | `isLastMonth(new Date(Date.now() - 30 * 86400000))` |
| `isLastYear(value)` | Check if date is last year | `isLastYear(new Date(Date.now() - 365 * 86400000))` |

## Browser Support

`is-check` supports all modern browsers and Node.js environments:

- Chrome, Firefox, Safari, Edge (latest 2 versions)
- Internet Explorer 11+
- Node.js 18+

## Tree Shaking

`is-check` fully supports tree shaking. You can import only the functions you need to reduce bundle size:

```javascript
// Import specific functions
import { isArray, isString } from 'is-check'

// Import from specific modules
import { isArray } from 'is-check/type'
import { isInteger } from 'is-check/number'
import { isEmail } from 'is-check/regexp'
import { isBrowser } from 'is-check/env'
import { isToday } from 'is-check/date'

// Import individual functions for maximum tree-shaking
import isArray from 'is-check/type/is-array'
import isInteger from 'is-check/number/is-integer'
import isEmail from 'is-check/regexp/is-email'
import isBrowser from 'is-check/env/is-browser'
import isToday from 'is-check/date/is-today'
```

## Development

### Setup

```bash
# Clone the repository
git clone https://github.com/huatten/is-check.git

# Install dependencies
npm run bootstrap
# or
npm install
```

### Scripts

```bash
# Build the library
npm run build

# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests with UI
npm run test:ui

# Lint code
npm run lint

# Format code
npm run format

# Commit changes
npm run commit

# Generate documentation
npm run docs:dev    # Development server
npm run docs:build  # Build documentation
npm run docs:preview # Preview built documentation
```

### Project Structure

```
is-check/
├── src/              # Source code
│   ├── type/         # Type checking functions
│   ├── number/       # Number validation functions
│   ├── regexp/       # Regular expression validation
│   ├── env/          # Environment detection
│   ├── date/         # Date validation
│   └── index.js      # Main entry point
├── dist/             # Built files
├── docs/             # Documentation
├── test/             # Test files
├── example/          # Example usage
└── package.json      # Package configuration
```

## Contributing

Contributions are welcome! Here's how you can contribute:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `npm run commit`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Create a pull request

### Guidelines

- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting a PR
- Use `npm run commit` for commit messages to follow conventional commits

## License

This project is licensed under the [ISC License](./LICENSE).

## Author

**huatten**

- GitHub: [@huatten](https://github.com/huatten)

---

Built with ❤️ by [huatten](https://github.com/huatten)