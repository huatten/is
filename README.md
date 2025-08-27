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

### Import Everything

```javascript
import is from 'is-check'

// Type checking
console.log(is.array([1, 2, 3])) // true
console.log(is.string('hello')) // true
console.log(is.function(() => {})) // true

// Number validation
console.log(is.integer(42)) // true
console.log(is.prime(7)) // true
console.log(is.even(4)) // true

// Environment detection
console.log(is.browser()) // true (if in browser)
console.log(is.mobile()) // true (if on mobile device)
console.log(is.chrome()) // true (if in Chrome browser)
```

### Import Specific Modules

```javascript
// Import only what you need
import { isArray, isString } from 'is-check'
// or
import { isArray } from 'is-check/type'

console.log(isArray([1, 2, 3])) // true
console.log(isString('hello')) // true
```

### Using Default Export

```javascript
import is from 'is-check'

// Type checks
is.array([1, 2, 3]) // true
is.object({}) // true
is.string('hello') // true
is.number(42) // true
is.boolean(true) // true
is.undefined(undefined) // true
is.null(null) // true
is.function(() => {}) // true
is.date(new Date()) // true
is.regexp(/abc/) // true
is.symbol(Symbol('id')) // true
is.bigint(BigInt(42)) // true
is.NaN(NaN) // true
is.empty('') // true
is.empty([]) // true
is.empty({}) // true
is.json('{"a": 1}') // true
is.arguments(arguments) // true (in function context)
is.element(document.body) // true (in browser)
is.arraybuffer(new ArrayBuffer(8)) // true

// Number checks
is.integer(42) // true
is.decimal(3.14) // true
is.positive(5) // true
is.negative(-3) // true
is.positiveInteger(5) // true
is.negativeInteger(-3) // true
is.positiveDecimal(3.14) // true
is.negativeDecimal(-3.14) // true
is.odd(3) // true
is.even(4) // true
is.prime(7) // true
is.natural(1) // true
is.finite(42) // true
is.infinite(Infinity) // true

// Environment detection
is.browser() // true/false
is.node() // true/false
is.mobile() // true/false
is.desktop() // true/false
is.tablet() // true/false
is.ios() // true/false
is.android() // true/false
is.iphone() // true/false
is.ipad() // true/false
is.windows() // true/false
is.mac() // true/false
is.linux() // true/false
is.chrome() // true/false
is.firefox() // true/false
is.safari() // true/false
is.edge() // true/false
is.ie() // true/false
is.opera() // true/false
is.wechat() // true/false
is.online() // true/false
is.offline() // true/false

// String/RegExp patterns
is.url('https://example.com') // true
is.email('test@example.com') // true
is.phoneNumber('13800138000') // true
is.uuid('550e8400-e29b-41d4-a716-446655440000') // true
is.hexColor('#ff0000') // true
is.md5('5d41402abc4b2a76b9719d911017c592') // true
is.sha256('ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb') // true
is.jwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...') // true
is.chinese('你好世界') // true
is.english('Hello World') // true
is.html('<div>Hello</div>') // true
is.camelCase('camelCase') // true
is.pascalCase('PascalCase') // true
is.snakeCase('snake_case') // true
is.uppercase('UPPERCASE') // true
is.lowercase('lowercase') // true
is.province('广东省') // true

// Date checks
is.timestamp(1640995200000) // true
is.today(new Date()) // true/false
is.yesterday(new Date(Date.now() - 86400000)) // true
is.tomorrow(new Date(Date.now() + 86400000)) // true
is.weekend(new Date('2023-01-01')) // true (Sunday)
is.weekday(new Date('2023-01-02')) // true (Monday)
is.leapYear(2024) // true
is.time('14:30:00') // true
is.time12('2:30:00 PM') // true
is.time24('14:30:00') // true
is.past(new Date('2020-01-01')) // true
is.feature(new Date('2030-01-01')) // true
is.thisWeek(new Date()) // true/false
is.thisMonth(new Date()) // true/false
is.thisYear(new Date()) // true/false
is.nextWeek(new Date(Date.now() + 7 * 86400000)) // true
is.nextMonth(new Date(Date.now() + 30 * 86400000)) // true
is.nextYear(new Date(Date.now() + 365 * 86400000)) // true
is.lastWeek(new Date(Date.now() - 7 * 86400000)) // true
is.lastMonth(new Date(Date.now() - 30 * 86400000)) // true
is.lastYear(new Date(Date.now() - 365 * 86400000)) // true
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
import isArray from 'is-check/type/is-array'
import isInteger from 'is-check/number/is-integer'
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