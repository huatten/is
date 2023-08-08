import * as type from './type'
import * as regexp from './regexp'
import * as env from './env'
import * as date from './date'

export const is = {
  // type
  string: (value: string): boolean => type.isString(value),
  number: (value: number): boolean => type.isNumber(value),
  function: (value: any): boolean => type.isFunction(value),
  array: (value: []): boolean => type.isArray(value),
  boolean: (value: boolean): boolean => type.isBoolean(value),
  nan: (value: number): boolean => type.isNan(value),
  // regexp
  hexColor: (value: string): boolean => regexp.isHexColor(value),
  // env
  browser: (): boolean => env.isBrowser(),
  node: (): boolean => env.isNode(),
  windows: (): boolean => env.isWindows(),
  mac: (): boolean => env.isMac(),
  linux: (): boolean => env.isLinux(),
  // date
  today: (value: Date): boolean => date.isToday(value),
}

// TODO
export * from './type'
export * from './regexp'
export * from './env'
export * from './date'

export default is
