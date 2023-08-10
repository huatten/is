import * as type from './type'
import * as regexp from './regexp'
import * as env from './env'
import * as date from './date'

export const is = {
  // type
  string: (value) => type.isString(value),
  number: (value) => type.isNumber(value),
  function: (value) => type.isFunction(value),
  array: (value) => type.isArray(value),
  boolean: (value) => type.isBoolean(value),
  nan: (value) => type.isNan(value),
  // regexp
  hexColor: (value) => regexp.isHexColor(value),
  // env
  browser: () => env.isBrowser(),
  node: () => env.isNode(),
  windows: () => env.isWindows(),
  mac: () => env.isMac(),
  linux: () => env.isLinux(),
  // date
  today: (value) => date.isToday(value),
}

// TODO
export * from './type'
export * from './regexp'
export * from './env'
export * from './date'

export default is
