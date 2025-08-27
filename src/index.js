import * as type from './type'
import * as number from './number'
import * as regexp from './regexp'
import * as env from './env'
import * as date from './date'

export * from './type'
export * from './regexp'
export * from './number'
export * from './env'
export * from './date'

export default {
  /**
   * type 类型模块
   */
  arguments: (value) => type.isArguments(value),
  array: (value) => type.isArray(value),
  arrayLike: (value) => type.isArrayLike(value),
  arraybuffer: (value) => type.isArraybuffer(value),
  boolean: (value) => type.isBoolean(value),
  bigint: (value) => type.isBigint(value),
  date: (value) => type.isDate(value),
  element: (value) => type.isElement(value),
  empty: (value) => type.isEmpty(value),
  function: (value) => type.isFunction(value),
  json: (value) => type.isJSON(value),
  NaN: (value) => type.isNaN(value),
  null: (value) => type.isNull(value),
  number: (value) => type.isNumber(value),
  object: (value) => type.isObject(value),
  regexp: (value) => type.isRegexp(value),
  string: (value) => type.isString(value),
  symbol: (value) => type.isSymbol(value),
  undefined: (value) => type.isUndefined(value),
  map: (value) => type.isMap(value),
  set: (value) => type.isSet(value),
  promise: (value) => type.isPromise(value),
  generator: (value) => type.isGenerator(value),
  asyncFunction: (value) => type.isAsyncFunction(value),
  typedArray: (value) => type.isTypedArray(value),
  error: (value) => type.isError(value),
  file: (value) => type.isFile(value),
  blob: (value) => type.isBlob(value),
  formData: (value) => type.isFormData(value),

  /**
   * env 环境模块
   */
  android: () => env.isAndroid(),
  androidPhone: () => env.isAndroidPhone(),
  androidTablet: () => env.isAndroidTablet(),
  blackberry: () => env.isBlackberry(),
  blackberryPhone: () => env.isBlackberryPhone(),
  blackberryTablet: () => env.isBlackberryTablet(),
  browser: () => env.isBrowser(),
  chrome: () => env.isChrome(),
  desktop: () => env.isDesktop,
  edge: () => env.isEdge(),
  firefox: () => env.isFirefox(),
  ie: () => env.isIE(),
  ios: () => env.isIos(),
  ipad: () => env.isIpad(),
  iphone: () => env.isIphone(),
  ipod: () => env.isIpod(),
  linux: () => env.isLinux(),
  mac: () => env.isMac(),
  meego: () => env.isMeego(),
  mobile: () => env.isMobile(),
  node: () => env.isNode(),
  offline: () => env.isOffline(),
  online: () => env.isOnline(),
  opera: () => env.isOpera(),
  safari: () => env.isSafari(),
  tablet: () => env.isTablet(),
  wechat: () => env.isWechat(),
  windows: () => env.isWindows(),
  windowsPhone: () => env.isWindowsPhone(),
  windowsTablet: () => env.isWindowsTablet(),

  /**
   * number 数字模块
   */
  decimal: (value) => number.isDecimal(value),
  even: (value) => number.isEven(value),
  finite: (value) => number.isFinite(value),
  infinite: (value) => number.isInfinite(value),
  integer: (value) => number.isInteger(value),
  natural: (value) => number.isNatural(value),
  negativeDecimal: (value) => number.isNegativeDecimal(value),
  negativeInteger: (value) => number.isNegativeInteger(value),
  negative: (value) => number.isNegative(value),
  odd: (value) => number.isOdd(value),
  positiveDecimal: (value) => number.isPositiveDecimal(value),
  positiveInteger: (value) => number.isPositiveInteger(value),
  positive: (value) => number.isPositive(value),
  prime: (value) => number.isPrime(value),

  /**
   * regexp 正则模块
   */
  camelCase: (value) => regexp.isCamelCase(value),
  chinese: (value) => regexp.isChinese(value),
  english: (value) => regexp.isEnglish(value),
  hexColor: (value) => regexp.isHexColor(value),
  html: (value) => regexp.isHtml(value),
  jwt: (value) => regexp.isJWT(value),
  lowercase: (value) => regexp.isLowercase(value),
  md5: (value) => regexp.isMD5(value),
  pascalCase: (value) => regexp.isPascalCase(value),
  phoneNumber: (value) => regexp.isPhoneNumber(value),
  province: (value) => regexp.isProvince(value),
  sha256: (value) => regexp.isSHA256(value),
  snakeCase: (value) => regexp.isSnakeCase(value),
  uppercase: (value) => regexp.isUppercase(value),
  url: (value) => regexp.isURL(value),
  uuid: (value) => regexp.isUUID(value),
  email: (value) => regexp.isEmail(value),
  ip: (value) => regexp.isIP(value),
  ipv4: (value) => regexp.isIPv4(value),
  ipv6: (value) => regexp.isIPv6(value),
  creditCard: (value) => regexp.isCreditCard(value),
  postalCode: (value) => regexp.isPostalCode(value),
  macAddress: (value) => regexp.isMACAddress(value),
  magnetURI: (value) => regexp.isMagnetURI(value),
  mimeType: (value) => regexp.isMimeType(value),
  base64: (value) => regexp.isBase64(value),
  jsonString: (value) => regexp.isJSONString(value),
  ascii: (value) => regexp.isAscii(value),
  multibyte: (value) => regexp.isMultibyte(value),
  halfWidth: (value) => regexp.isHalfWidth(value),
  fullWidth: (value) => regexp.isFullWidth(value),
  surrogatePair: (value) => regexp.isSurrogatePair(value),

  /**
   * date 日期模块
   */
  feature: (value) => date.isFeature(value),
  lastMonth: (value) => date.isLastMonth(value),
  lastWeek: (value) => date.isLastWeek(value),
  lastYear: (value) => date.isLastYear(value),
  leapYear: (value) => date.isLeapYear(value),
  nextMonth: (value) => date.isNextMonth(value),
  nextWeek: (value) => date.isNextWeek(value),
  nextYear: (value) => date.isNextYear(value),
  past: (value) => date.isPast(value),
  thisMonth: (value) => date.isThisMonth(value),
  thisWeek: (value) => date.isThisWeek(value),
  thisYear: (value) => date.isThisYear(value),
  time: (value) => date.isTime(value),
  time12: (value) => date.isTime12(value),
  time24: (value) => date.isTime24(value),
  timestamp: (value) => date.isTimestamp(value),
  today: (value) => date.isToday(value),
  tomorrow: (value) => date.isTomorrow(value),
  weekend: (value) => date.isWeekend(value),
  weekday: (value) => date.isWeekday(value),
  yesterday: (value) => date.isYesterday(value),
}
